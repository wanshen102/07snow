<?php
/*liming@com133.com
1111aaaa
*/
	$db = new Db('127.0.0.1','root','root','myecshop','utf8',true);
		
	class Db
	{

		private static $instance;
		public $connid;
		public $dbname;
		public $querynum = 0;
		public $debug;
		public $search = array('/union(\s*(\/\*.*\*\/)?\s*)+select/i', '/load_file(\s*(\/\*.*\*\/)?\s*)+\(/i', '/into(\s*(\/\*.*\*\/)?\s*)+outfile/i');
		public $replace = array('union &nbsp; select', 'load_file &nbsp; (', 'into &nbsp; outfile');
		
		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @构造函数
		*/
		 function __construct($dbhost, $dbuser, $dbpw, $dbname = '', $charset = '',$debug)
		{
			$this -> debug  = $debug;
			
			if(!$this -> connid = @mysql_connect($dbhost, $dbuser, $dbpw))
			{

				$this -> halt('Can not connect to DataBase server');
				return false;
			}
			if($this -> version() > '4.1')
			{
				$serverset = $charset ? "character_set_connection='$charset',character_set_results='$charset',character_set_client=binary" : '';
				$serverset .= $this -> version() > '5.0.1' ? ((empty($serverset) ? '' : ',')." sql_mode='' ") : '';
				$serverset && @mysql_query("SET $serverset", $this -> connid);
			}
			$this -> select_db($dbname);
			return $this -> connid;
		}
		
		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @连接函数;database::getInstance($sDataBaseUrl);
		*/
		public static function getInstance($sDataBaseUrl)
		{
			if (!isset(self::$instance))
			{
				$aDataBaseUrl = parse_url($sDataBaseUrl);
				$_extUrl = @explode("#",$aDataBaseUrl["fragment"]);
				self::$instance = new databases($aDataBaseUrl["host"], $aDataBaseUrl["user"], $aDataBaseUrl["pass"], $aDataBaseUrl["query"], $_extUrl[0], "$_extUrl[1]",$_extUrl[2]);
			}
			return self::$instance;
		}
		
		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @选择数据库
		*/
		private function select_db($dbname)
		{
			if(!isset($this -> dbname))
			{
				@mysql_select_db($dbname , $this -> connid) or die("Can use the DataBase:".$dbname);
			}
			$this -> dbname = $dbname;
		}
		
		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @发送执行SQL语句
		*/
		function query($sql,$type = '')
		{
			
			if(FALSE === ($query = @mysql_query($sql , $this -> connid)))
			{
				$this -> halt('MySQL Query Error111111111', $sql);
				return false;
			}
			$this -> querynum++;
			return $query;
		}
		
		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @select 函数
		*/
		function select($sql, $keyfield = '')
		{
			$array = array();
			$result = $this -> query($sql);
			while($r = $this -> fetch_array($result))
			{
				if($keyfield)
				{
					$key = $r[$keyfield];
					$array[$key] = $r;
				}
				else
				{
					$array[] = $r;
				}
			}
			$this -> free_result($result);
			return $array;
		}
		
		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @只取得一行记录
		*/
		function get_one($sql,$type = '')
		{
			$query = $this -> query($sql, $type);
			$rs = $this -> fetch_array($query);
			$this -> free_result($query);
			return $rs ;
		}
		
		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @插入函数
		*/
		function insert($tablename,$array)
		{
			$array  = $this->check_fields($tablename,$array);
			$sql =  "INSERT INTO `$tablename`(`".implode('`,`', array_keys($array))."`) VALUES('".implode("','", $array)."')";
			if($this -> query($sql))
			{
				$iInsertID = $this -> insert_id();
				return $iInsertID;
				//return true;
			}
			else
			{
				return false;
			}
		}

		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @更新函数
		*/
		function update($tablename, $array, $where = '')
		{
			$array  = $this->check_fields($tablename, $array);
			if($where)
			{
				$sql = '';
				foreach($array as $k => $v)
				{
					$sql .= ", `$k`='".$v."'";
				}
				$sql = @substr($sql, 1);
				$sql = "UPDATE `$tablename` SET $sql WHERE $where";
			}
			if($this->query($sql))
			{
				return true;
			}
			else
			{
				return false;
			}
		}

		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @删除函数
		*/
		function delete($tablename,$sql_where)
		{
			if(empty($sql_where))
			{
				$this -> halt('MySQL Query Error', "Missing where !");
				return false;
			}

			$sql = "DELETE FROM  `$tablename`  WHERE $sql_where";

			if($this->query($sql))
			{
				return true;
			}
			else
			{
				return false;
			}
		}
		
		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @SQL转义
		*/
		function escape($string)
		{
			if(!is_array($string))
			{
				return str_replace(array('\n', '\r'), array(chr(10), chr(13)), mysql_escape_string(preg_replace($this -> search, $this -> replace, $string)));
			}
			else
			{
				foreach((array)$string as $key => $val)
				{
					$string[$key] = $this -> escape($val);
				}
			}
			return $string;
		}
		
		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @检查表是否存在
		*/
		private function get_fields($table)
		{
			$fields = array();
			$result = $this -> query("SHOW COLUMNS FROM $table");
			while($r = $this -> fetch_array($result))
			{
				$fields[] = $r['Field'];
			}
			$this -> free_result($result);
			return $fields;
		}

		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @检查字段是否存在
		*/
		private function check_fields($tablename,$array)
		{
			$fields = $this -> get_fields($tablename);
			if(!is_array($array))
			{
				$this -> halt('MySQL Query Error', "It's not a array");
			}
			foreach((array)$array AS $k => $v)
			{
				if(!@in_array($k,$fields))
				{
					$this -> halt('MySQL Query Error', "Unknown column '$k' in field list");
					return false;
				}
				$array[$k] = $this -> escape($v);
			}
			return $array;
		}
		
		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @取得SQL执行语句的条数
		*/
		function num_rows($query)
		{
			return @mysql_num_rows($query);
		}
		
		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @取得刚插入记录的ID
		*/
		function insert_id()
		{
			return @mysql_insert_id($this -> connid);
		}
		
		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @fetch_array函数
		*/
		function fetch_array($query, $result_type = MYSQL_ASSOC)
		{
			return @mysql_fetch_array($query, $result_type);
		}
		
		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @释放内存函数
		*/
		function free_result(&$query)
		{
			return @mysql_free_result($query);
		}
		
		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @Mysql的版本
		*/
		function version()
		{
			return @mysql_get_server_info($this -> connid);
		}

		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @Mysql关闭
		*/
		function close()
		{
			return @mysql_close($this -> connid);
		}

		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @Mysql的错误提示
		*/
		function error()
		{
			return @mysql_error($this -> connid);
		}

		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @Mysql的错误行号
		*/
		function errno()
		{
			return intval(@mysql_errno($this -> connid)) ;
		}
		
		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @显示报错信息
		*/
		function halt($message = '',$sql = '')
		{
			$msg =  "<font color=\"RED\">&nbsp;&nbsp;Hayes&Lemon - Mysql Query V.1.0</font><br />";
			$this -> errormsg = "<b>&nbsp;&nbsp;MySQL Query : </b>$sql <br /><b> &nbsp;&nbsp;MySQL Error : </b>".$this -> error()." <br /> <b>&nbsp;&nbsp;MySQL Errno : </b>".$this -> errno()." <br /><b> &nbsp;&nbsp;Message : </b> $message";
			if($this -> debug)
			{
				$msg .= $this -> errormsg;
			}
			echo '<div align="center"><div style="font-size:12px;text-align:left; border:1px solid #9cc9e0; color:#000000;font-family:Arial, Helvetica,sans-serif;width:800px;"><span>'.$msg.'</span></div></div>';
			exit;
		}

		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @析构函数
		*/
		function __destruct()
		{
			return @mysql_close($this -> connid);
		}

		/**
		* @Mysql数据库操作类
		* @PHP5版本
		* @阻止用户克隆databases类实例
		*/
		public function __clone()
		{
			trigger_error('不允许Clone.', E_USER_ERROR);
		}
	}