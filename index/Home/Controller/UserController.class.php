<?php
namespace Home\Controller;
use Think\Controller;
header("content-type:text/html;charset=utf-8");
class UserController extends Controller {

	public function is_login(){
		if(!session('user_name'))
		{
			$this->redirect('login/login');
			die;
		}
	}

	public function Gr_wddd_qbdd()
	{
		$this->is_login();
		$this->display();
	}

	public function Gr_zhzx(){
		$this->is_login();
        $this->display();
    }

	public function gr_yhxx()
	{
		$this->is_login();
		$id=$_GET['id'];
		$User=D('Snowuser');
		$data=$User->qq($id);
		$this->assign('list',$data);
		$this->display();
	}

	public function updata()
	{
		$this->is_login();
		// 实例化User对象
		//print_r($_POST);die;
		$User = D("Snowuser");
		$arr = $User->updata($_POST);
		//print_r($arr);die;
		if($arr){
			header("location:gr_yhxx");
		}
	}

	public function touxiang()
	{
		$this->is_login();
		$User=D('Snowuser');
		$data=$User->qq();
		$this->assign('list',$data);
		$this->display();
	}
	


	public function upload(){
     if (!empty($_FILES)) {
            //图片上传设置
            $config = array(   
                'maxSize'    =>    3145728, 
                'rootPath'   =>    'Public',
                'savePath'   =>    '/uploads/',  
                'saveName'   =>    array('uniqid',''), 
                'exts'       =>    array('jpg', 'gif', 'png', 'jpeg'),  
                'autoSub'    =>    false,   
                'subName'    =>    array('date','Ymd'),
                'multi'      =>    false,
            );
            $upload = new \Think\Upload($config);// 实例化上传类
            $images = $upload->upload();
            //判断是否有图
            if($images){
               $info=$images['Filedata']['savename'];
               $member = D('Snowuser');
               $user_id=1;
               $member->uploads($info,$uid);
               //返回文件地址和名给JS作回调用
               echo $info;
            }
            else{
               return 0;
            }
        }
    }
	
	//收货地址
	public function gr_address()
	{
		$this->is_login();
		$User  = M('address'); // 实例化User对象
		$count = $User->where("user_id = ".$_SESSION['user_id']."")->count();// 查询满足要求的总记录数
		$Page  = new \Think\Pagemumayi($count,5);// 实例化分页类 传入总记录数和每页显示的记录数(25)
		$show  = $Page->show();// 分页显示输出// 进行分页数据查询 注意limit方法的参数要使用Page类的属性
		$list  = $User->where("user_id = ".$_SESSION['user_id']."")->limit($Page->firstRow.','.$Page->listRows)->select();
		$this->assign('info',$list);
		$this->assign('fpage',$show);
		$this->display(); // 输出模板
	}

	//收货地址添加
	public function address_add()
	{
		$obj = D("address");
		$arr = $obj->address_addpro($_POST);
		//print_R($arr);die;
		if($arr){
			echo "<script>location.href='../indent/indent'</script>";
		}
	}

	//收货地址删除
	public function address_delet()
	{
		$id = $_GET['id'];
		$obj = D("address");
		$info = $obj->address_del($id);
		if(!$info){
			echo "<script>location.href='../user/gr_address'</script>";
		}
	}

	//收货地址修改页面
	public function gr_addressup()
	{
		$obj = D("address");
		$id = $_GET['id'];
		$info = $obj->select($id);
		$this->assign("info",$info);
		$this->display();
	}

	//收货地址修改处理
	public function gr_addressuppro()
	{
		//print_R($_POST);die;
		$address = D("address");
		$arr = $address->uppro($_POST);
		//var_dump($arr);die;
		if($arr){
			echo "<script>location.href='../user/gr_address'</script>";
		}
	}

	public function gr_wdsc_cp(){

		$obj=D('souceng');
		$arr=$obj->join("snow_goods on snow_souceng.goods_id=snow_goods.goods_id")->where("snow_souceng.user_id=".$_SESSION['user_id']."")->select();
		//print_r($arr);die;
		$count=$obj->where("user_id=".$_SESSION['user_id']."")->count();
		$cou=$obj->count();
		$this->assign('info',$arr);
		$this->assign('count',$count);
		$this->assign('cou',$cou);
		$this->display();

	}
	/**
	* 我的订单
	* gr_wddd_ddfk()：模板显示
	* gr_wddd_ddfk_list(): 显示订单各种状态的列表
	* gr_wddd_ddfk_cancel(): 取消订单功能
	* 订单状态：0，1 等待付款，2 已付款，3 交易完成，4 无效
	* 编写人：张喜明
	* 时间：2015-1-23
	*/
	public function gr_wddd_ddfk()
	{
		$this->gr_wddd_ddfk_list();
	}

	public function gr_wddd_ddfk_list()
	{
		$this->is_login();
		$User  =D('indent');
		if(I('get.id')==0)
		{
			 $list = $User->alias('a')->join('__INDENT_DETAIL__ b ON b.indent_id= a.id')->where('user_id='.$_SESSION['user_id'])->select();
		}
		else
		{
			$where['status'] = I('get.id');
			$where['user_id'] = $_SESSION['user_id']; ;
			$list = $User->alias('a')->join('__INDENT_DETAIL__ b ON b.indent_id= a.id')->where($where)->select();
			//echo $User->getLastSql();
		}
		
		$this->assign('list',$list);
		$this->display('gr_wddd_ddfk');
	}
	public function gr_wddd_ddfk_cancel()
	{
		$User  =D('indent');
		$list=$User-> where('indent_no='.I("get.num"))->setField('status','4');
		if(!$list)
		{
			$this->redirect('User/gr_wddd_ddfk_list');
		}
		else
		{
			 $this->redirect('User/gr_wddd_ddfk_list');
		}
	}
}

