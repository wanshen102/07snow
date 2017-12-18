<?php


class alipay_notify {
	var $gateway;           //支付接口
	var $security_code;  	//安全校验码
	var $partner;           //合作伙伴ID
	var $sign_type;         //加密方式 系统默认
	var $mysign;            //签名     
	var $_input_charset;    //字符编码格式
	var $transport;         //访问模式
	function __construct($partner,$security_code,$sign_type = "MD5",$_input_charset = "GBK",$transport= "https") {
		$this->partner        = $partner;
		$this->security_code  = $security_code;
		$this->sign_type      = $sign_type;
		$this->mysign         = "";
		$this->_input_charset = $_input_charset ;
		$this->transport      = $transport;
		if($this->transport == "https") {
			$this->gateway = "https://www.alipay.com/cooperate/gateway.do?service=notify_verify";
		}else $this->gateway = "http://notify.alipay.com/trade/notify_query.do?";
	}
/****************************************对notify_url的认证*********************************/
	function notify_verify() {   
		
		$veryfy_url = $this->gateway. "partner=".$this->partner."&notify_id=".$_POST["notify_id"];
		
		$veryfy_result = $this->get_verify($veryfy_url);
		$post          = $this->para_filter($_POST);
		$sort_post     = $this->arg_sort($post);
		while (list ($key, $val) = each ($sort_post)) {
			$arg.=$key."=".$val."&";
		}
		$prestr = substr($arg,0,-1);  //去掉最后一个&号
		$this->mysign = md5($prestr.$this->security_code);

		if (eregi("true$",$veryfy_result) && $this->mysign == $_POST["sign"])  {
			return true;
		} else return false;
	}
/*******************************************************************************************/

/**********************************对return_url的认证***************************************/	
	function return_verify() {  
		if($this->transport == "https") {
			$veryfy_url = $this->gateway. "service=notify_verify" ."&partner=" .$this->partner. "&notify_id=".$_GET["notify_id"];
		} else {
			$veryfy_url = $this->gateway. "partner=".$this->partner."&notify_id=".$_GET["notify_id"];
		}
		$veryfy_result = $this->get_verify($veryfy_url);
		$sort_get= $this->arg_sort($_GET);
		foreach($sort_get as $k => $v) {
			if($k != "sign" && $k != "sign_type")
			$arg.= $k ."=". $v ."&";
		}
		$prestr = substr($arg,0,-1);  //去掉最后一个&号
		$this->mysign = md5($prestr.$this->security_code);
	
		if (preg_match("/true$/",$veryfy_result) && $this->mysign == $_GET["sign"])  return true;
		else return false;
	}
/*******************************************************************************************/

	function get_verify($url,$time_out = "60") {
		$urlarr     = parse_url($url);
		$errno      = "";
		$errstr     = "";
		$transports = "";
		if($urlarr["scheme"] == "https") {
			$transports = "ssl://";
			$urlarr["port"] = "443";
		} else {
			$transports = "tcp://";
			$urlarr["port"] = "80";
		}
		$fp=@fsockopen($transports . $urlarr['host'],$urlarr['port'],$errno,$errstr,$time_out);
		if(!$fp) {
			die("ERROR: $errno - $errstr<br />\n");
		} else {
			fputs($fp, "POST ".$urlarr["path"]." HTTP/1.1\r\n");
			fputs($fp, "Host: ".$urlarr["host"]."\r\n");
			fputs($fp, "Content-type: application/x-www-form-urlencoded\r\n");
			fputs($fp, "Content-length: ".strlen($urlarr["query"])."\r\n");
			fputs($fp, "Connection: close\r\n\r\n");
			fputs($fp, $urlarr["query"] . "\r\n\r\n");
			while(!feof($fp)) {
				$info[]=@fgets($fp, 1024);
			}
			fclose($fp);
			$info = implode(",",$info);
			while (list ($key, $val) = each ($_POST)) {
				$arg.=$key."=".$val."&";
			}
			
			return $info;
		}
	}

	function arg_sort($array) {
		ksort($array);
		reset($array);
		return $array;
	}


/***********************除去数组中的空值和签名模式*****************************/
	function para_filter($parameter) { 
		foreach($parameter as $k => $v){
			if($k == "sign" || $k == "sign_type" || $v == ""){
				unset($parameter[$k]);
			}
		}
		return $parameter;
	}
/********************************************************************************/


}
?>
