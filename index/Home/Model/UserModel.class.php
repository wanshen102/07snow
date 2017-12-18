<?php
namespace Home\Model;
use Think\Model;
class UserModel extends Model{
	//登陆
	public function logn($name,$password){
		//echo $name;
		//echo $password;
		$user=D("user");
		$data=$user->where(" user_name = '$name' or user_iphone='$name' or user_email='$name'")->select();
		//echo $user->getLastSql();die;
		if(!$data){
			return 1;
		}else{
			$data1=$user->where(" user_pwd = '$password' ")->select();
			if(!$data1){
				return 2;
			}else{
				session('user_id',$data[0]['user_id']);
				session('user_name',$data[0]['user_name']);
				return 0;
			}
		}
			
	}
	//注册
	public function zhuce(){
		$info=D("user");
		$vo=$info->where("user_iphone='".$_GET['aa']."'")->select();
		if($vo){
			echo 1;die;
		}else{
			$it['user_iphone']=$_GET['aa'];
			$it['user_pwd']=$_GET['mima'];
			$it['image']='../../../public/image/avatar_nonesign.jpg';
			$it['user_name']="Snow".time();
			if($info->add($it)){
				session('go_name',$_GET['aa']);
				echo 0;
			}else{
				echo 2;
			}
	  }
	}
	public function wqe(){
		//print_r($_GET);
		$wq=D("user");
		$sq=$wq->where("user_email = '".$_GET['email']."'")->select();
		if($sq){
			echo 1;die;
		}else{
			$data['user_email'] =$_GET['email'];
			$arr=$wq->where(" user_iphone = '".session('go_name')."' ")->data($data)->save();
			if($arr){
				echo 0;
			}else{
				echo 2;
			}
		}
	}
}
?>