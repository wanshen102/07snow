<?php
namespace Home\Controller;
use Think\Controller;
header("content-type:text/html;charset=utf-8");
class CartController extends Controller {
	public function is_login(){
		if(!session('user_name'))
		{
			$this->redirect('login/login');
			die;
		}
	}
	//添加商品到购物车
	public function cart_add(){
		$this->is_login();
		$db=D("cart");
		$moll=D('goods');
		$id=$_GET["id"];
		$res=$moll->where("goods_id=".$id."")->find();
		if($db->where("goods_id=".$_GET['id']." and user_id=".$_SESSION['user_id'])->find()){
			echo "<script>alert('饭已经在碗里了，快去加量吧~');location.href='cart'</script>";die;
		}
		if($_POST['goods_number']=""){
			echo "<script>alert('请添加份量');location.href='cart'</script>";die;
		}
		if($_POST['goods_number']>3){
			echo "<script>alert('本店限量，只可以选三分哦');location.href='cart'</script>";die;
		}
		//dump("number");
		
		//echo $id;
		
		$data["goods_name"]=$res["goods_name"];
		$data["goods_num"]=1;
		$data["goods_id"]=$id;
		$data["user_id"]=$_SESSION["user_id"];
		$data["goods_price"]=$res["market_price"];
		$data["goods_img"]=$res["goods_imgs"];
		if($db->add($data)){
			//$this->success("加饭已成功，下单就能吃到美味的饭饭咯","cart");
			echo "<script>alert('加饭已成功，下单就能吃到美味的饭饭咯');location.href='cart'</script>";
		}
	}

	//显示购物车页面,算总钱数
	public function cart(){
		$this->is_login();
		$id=$_SESSION['user_id'];
		//echo $id;die;
		$moll=D('goods');
		$model=D('cart');
		$num=0;
		$res=$moll->group(' goods_id desc limit 4')->select();
		//echo $moll->getlastsql();die;
		$info=$model->where('user_id="'.$id.'"')->select();
		foreach($info as $k=>$v){
			$num=$num+$v['goods_num']*$v['goods_price'];
		}
		$this->assign("num",$num);
		$this->assign('info',$info);
		$this->assign("res",$res);
                $this->display();
    }
	//修改数量
	public function upload(){
		$this->is_login();
		$id=$_POST['id'];
		$moll=D('cart');
		if($_POST['name']<=3){
			$data['goods_num']=$_POST['name'];
			if($moll->where('id="'.$id.'"')->save($data)){
				echo '1';
			}else{
				echo '2';
			}
		}else{
			echo '3';
		}
	}
	public function del(){
		$this->is_login();
		$id=$_GET['id'];
		$model=D('Cart');
		//$model->delete($id);
		//echo $model->getlastsql();die;
		if($model->delete($id)){
			echo '<script>alert("删除成功");location.href="cart";</script>';
		}else{
			echo '<script>alert("删除失败");location.href="cart";</script>';
		}
	}
}