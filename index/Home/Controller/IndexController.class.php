<?php
namespace Home\Controller;
use think\Controller;
header("content-type:text/html;charset=utf-8");
class IndexController extends Controller {

	  //订餐首页的商品的列表显示，加图片
		public function index(){
		$moll=D('goods');

		$res=$moll->group(' goods_id desc limit 4')->select();
		$this->assign("info",$res);
        $this->display();

    }
}