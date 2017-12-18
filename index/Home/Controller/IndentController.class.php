<?php
namespace Home\Controller;
use Think\Controller;
header("content-type:text/html;charset=utf-8");
class IndentController extends Controller {
	function indent(){
			$id=session('user_id');
			$obj=D("cart");
			$arr=$obj->where("user_id=$id")->select();
			$num='';
			foreach($arr as $k=>$v){
				$v['prices']=$v['goods_price']*$v['goods_num'];
				$arr[$k]['prices']=$v['prices'];
				$num+=$v['prices'];
			}
			$this->assign("num",$num);
			//print_r($arr);
			$address=D("address");
			$uid=$_SESSION['user_id'];
			$data=$address->where("user_id=".$uid."")->select();
			//print_r($data);
			$this->assign('arr',$arr);
			$this->assign('ress',$data);
			$this->display('indent1');
			//print_r($arr);die;
			
		}
		public function  indentadd(){
			//print_r($_POST);
			$goods_id=$_POST['goods_id'];
			$cart_id=rtrim($goods_id,",");
			$address=D("address");
			 $data=$address->where("address_id=".$_POST['address_id']."")->find();
			 //print_r($data);die;
			$obj=D("indent");
			$info['user_id']=session('user_id');
			$info['indent_no'] = date("YmdHis").rand(100,999);
			$info['add_time']=date("Y-m-d H:i:s");
			$info['total_price']=$_POST['total_price'];
			$info['pay_type']=$_POST['gateway'];
			$info['express']=$data['address_name'];
			$info['best_time']=$_POST['express'];
			$info['address']=$data['address_info'];
			$info['phone']=$data['mobile'];
			$info['status']=0;
			$cartobj = D("cart");
			$res=$cartobj->where(" id in (".$cart_id.")")->select();
			if($obj->opreation($info,$cart_id,$res)){
				header("location:../../../index.php/Home/Indent/indent3?indent_no=".$info['indent_no']."");
			}else{
				echo -1;
			}
		}
		public function indent3(){
			$indent_no=$_GET['indent_no'];
			$obj=D("indent");
			$model=D("indent_detail");
			$data=$obj->where("indent_no=".$indent_no."")->find();
			$res=$model->where("indent_id = ".$data['id']."")->select();
			$str="";
			foreach($res as $v){
				$str.=$v['goods_name'].",";
			}
			$str=rtrim($str,",");
			$data['goods_name']=$str;
			$this->assign("data",$data);
			$this->display("indent3");
			if($data['pay_type']=="货到付款"){
				$this->display("indent3");
			}else{
				$this->display("s");
			}
			
		}
}