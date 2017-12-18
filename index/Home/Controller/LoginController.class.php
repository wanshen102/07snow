<?php
namespace Home\Controller;
use Think\Controller;
header("content-type:text/html;charset=utf-8");
class LoginController extends Controller {
	//验证码
	

	//显示登陆页面
	public function login(){
		if(!session('user_name')){
			 $this->display();
		}else{
			redirect(U('Home/index/index'), 0, "");
		}
       
		
    }
	//显示注册页面
	public function register(){
        $this->display('register');	
    }
	//显示注册绑定邮箱页面
	public function registersoftswxxwqqwe(){
		if(!session('go_name')){
			echo "<scritp>(孩子你唬吧！)</scritp>";
		}else{
			$this->display('register_soft');
		}
	}
	//显示注册成功页面
	public function registersof(){
		if(!session('go_name')){
			echo "<scritp>(孩子你唬吧！)</scritp>";
		}else{
			$this->display('register_sof');
		}
	}
	//登陆
	public function logn(){
		//print_r($_GET);
		$user=D("user");
		$data=$user->logn($_GET['username'],$_GET['password']);
		echo $data;
		echo $data1;
	}

	//退出
	public function out_login(){
		session(null); 
		redirect(U('Home/login/login'), 1, "<style>
body{
	background: #fff; 
	height:100%; 
	width:100%; 
	position: absolute;
}
.logout_wrap 
{
	position: absolute;
	color: #7d7d7d; 
	border: 0px; 
	top:45%;
	left:50%;

}
.logout_wrap_cont 
{ 
	background:url(https://secure5.jmstatic.com/static_passport/dist/20150106_2/images/logout_sandclock.jpg) no-repeat; 
	height: 30px;
	width: 180px;
	margin-left: -90px;
	margin-top: -15px;
	position:relative;
	zoom: 1;
}
.logout_wrap_cont p 
{ 
	font-size: 15px; 
	line-height: 30px; 
	padding-left: 30px;
}
#footer_container {
    overflow: hidden;
    border-top: 1px solid #fff;
    background: #fff
}
</style>
<div class='logout_wrap'>
	<div class='logout_wrap_cont'>
		<p>正在退出，请稍候...</p>
	</div>
</div>");
	}


	//短信
	public function dx(){
		$iphone=$_GET['iphone'];
		$cmy=D("user");
		$sql=$cmy->where(" user_iphone = '$iphone'")->select();
		if($sql){
			echo "1";
		}else{
		
		//echo $iphone;die;
		//添加
		$name=rand(10000,100000);
		session('yzm',$name);
		$url="http://utf8.sms.webchinese.cn/?Uid=z52033&Key=68bf4daeb3e3d273648e&smsMob='$iphone'&smsText=亲爱的欢迎您加入07Snow大家庭，您的验证码是'$name'。";
		if(function_exists('file_get_contents'))
			{
			$file_contents = file_get_contents($url);
			}
			else
			{
			$ch = curl_init();
			$timeout = 5;
			curl_setopt ($ch, CURLOPT_URL, $url);
			curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
			$file_contents = curl_exec($ch);
			curl_close($ch);
			}
			return $file_contents;
	  }
	}
	//验证码判断
	public function f(){
		if(session('yzm')==$_GET['byx']){
			echo 1;
		}else{
			echo 0;
		}
		
	}
	//注册
	public function zhuce(){
		//print_r($_GET);
		$fy=D("user");
		$fy->zhuce($_GET);
		
	}
	//注册后添加邮箱
	public function zhuccc(){
		$wq=D("user");
		$wq->wqe($_GET);
	}
		
}
?>
