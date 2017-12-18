<?php
namespace Home\Controller;
use Think\Controller;
class GoodsController extends Controller {
	public function is_login(){
		if(!session('user_name'))
		{
			$this->error('想收藏，请先登录',U('login/login'));
			die;
		}
	}
	public function goods(){
        $this->display();
    }
	public function goods_list(){
		if($search=$_POST['search']){
		
		$moll=D('Goods');
		$where="goods_name like '%".$search."%'";
		$res=$moll->where($where)->select();
		$this->assign("info",$res);
        $this->display();
		}else{
			$model=D('goods');
			$res=$model->select();
			$this->assign('info',$res);
			$this->display();
		}
    }
	//商品详情页
	public function goods_desc(){
		$model=D('goods');
		$com=D('comment');
		$id=$_GET['id'];
    
     // $data=$com->join("snow_user on snow_comment.user_id=snow_user.user_id " )->where('g_id=25')->select();
          //  print_r($data);
        //die;		
		$data=$com->where("g_id='$id'")->select();
		//print_r($data);
		//die;
		$res=$model->where("goods_id='$id'")->select();
     	$arr=$model->limit('0,6')->select();
	
 
		$this->assign('com',$data);
		$this->assign('info',$res);
		$this->assign('arr',$arr);
        $this->display('goods_desc');
    }
	//收藏
	public function shouceng(){

		if($_SESSION['user_name']==''){
			echo 2;die;
		$data['goods_id']=$_POST['id'];
		$data['user_id']=$_SESSION['user_id'];
		if(D('souceng')->add($data)){
			echo 1;//收藏成功
		}else{
			$data['goods_id']=$_POST['id'];
			$data['user_id']=$_SESSION['user_id'];
			if(D('souceng')->add($data)){
				echo 1;//收藏成功
			}else{
				echo 0;//收藏失败
			}
		}
		
		}
	}

/*
	public function quxiao(){
		$obj=D('souceng');
		//print_r($_POST);die;
		if($obj->where("c_id=".$_POST['id']."")->delete()){
			echo "1";
		}else{
			echo "0";
		}
	}

*/

}
}