<?php
namespace Home\Controller;
use Think\Controller;
class CommonController extends Controller {
	public function __contruct(){
		function _initialize()
		{
			if(!session('name'))
			{
				$this->error('请登录后在进行操作！','index.php?m=User&a=login');
				die;
			}
		}
	}
}