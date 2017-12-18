<!DOCTYPE html>
<!-- saved from url=(0019)http://vip.163.com/ -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<title>07snow后台！翻滚吧，蛋炒饭！！</title>
<!--标题头前的图标-->
<link rel="shortcut icon" href="img/header.jpg">
<!--样式-->
<link rel="stylesheet" href="css/style.css">
<!--调用jquery-->
<script type="text/javascript" src="js/jquery-1.8.1.min.js"></script>
<script type="text/javascript">
function aaa(){
	var name=$("#replaceun").val();
	var pwd=$("#replacepw").val();
	$.ajax({
		url:'index.php?r=site/lopro',
		type:'get',
		data:{'name':name,'pwd':pwd},
		success:function(e){
			alert(e);
		}
	});
}
</script>
</head>
<body class="p-login p-login-vip163" id="pagebody">
	<div class="g-hd">
		<div class="m-hd">
			<img src='img/login.jpg'></span>
			<p class="nav">
				<a href="http://www.07snow.com">07snow</a>
				<a href="#" >开发人员</a>
				<a href="#" >投诉建议</a>
				<a href="http://www.07blog.com">联系我们</a>
				<a id="service" href="javascript:void(0);" class="serviceIcon">7x24客户服务<i class="serviceIcon"></i></a>
			</p>
		</div>
		<div class="m-popup m-popup-card m-popup-arrowtop" style="display: none;">
				<div class="inner">
					<div class="tt">关注VIP邮箱帐号</div>
					<div class="ct">
						<ul>
							<li>
								<a href="http://www.07blog.com" class="u-card u-card-weibo"></a>
								<p>网易VIP邮箱官博</p>
							</li>
							<li>
								<span class="u-card u-card-weixin"></span>
								<p>微信公众号</p>
							</li>
							<li>
								<span class="u-card u-card-yixin"></span>
								<p>易信公众号</p>
							</li>
						</ul>
					</div>
				</div>
				<a href="javascript:void(0);" class="u-ico u-ico-close"></a>
				<div class="arrow"></div>
			</div>
		</div>
	
	<div class="g-scroll">
		<div class="g-loginbox">
			<div class="g-bd">
				<div class="m-loginbg">
					<img id="bg" draggable="false" src="img/big.jpg" style="width: 1366px; margin-left: 0px; margin-top: -87.5234375px; display: inline;">
				</div>
				<div class="m-bgwrap"></div>
				<div class="m-loginboxbg"></div>
				<div class="m-loginbox">
					<div id="pervent" class="m-photoframe" title="更换防伪图片"  style="display: none;">
		                    <img class="perImg" src="about:blank" alt="">
		            </div>
					<div class="lbinner" id="mailbox">
						<form action="index.php?r=site/lopro" method="post" name="loginForm" >
							<div class="line1 f-cb">
								<input type="text" class="ipt ipt-pwd ipt-replace" id="replaceun" value="" name="replaceun" placeholder="邮箱帐号/用户名">
							</div>
							<div class="line2 f-cb">
								<input type="password" class="ipt ipt-pwd ipt-replace" id="replacepw" value="" name="password" autocomplete="off" placeholder="输入密码">
							</div>
							<div class="line3 f-cb">
								<p class="ssl" id="ssl" title="您正在使用银行级加密登录，全面保障邮箱安全"><span class="u-ico u-ico-tick u-ico-ticked" id="icossl"></span>&nbsp;加密登录</p>
								<a class="forgotpw" href="#">忘记密码？</a>
							</div>
							<div class="line4">
								<!--<a class="u-loginbtn" id="loginbtn" href="javascript:void(0);" onclick="aaa()">登 录</a>
								-->
                                <button type="submit" class="u-loginbtn" id="loginbtn">
								登陆 
								</button>
							</div>
							<div class="line5">
								<label class="checkbox"><input type="checkbox" name="remember"/> 记住密码 </label>								
							</div>	
							<div class="line6 f-cb">
								
							</div>
							
							<input id="realusername" name="login_id" value="" type="hidden">
							<input id="secure" name="secure" value="1" type="hidden">
							<input id="logintype" name="logintype" value="-1" type="hidden">
							<input id="language" name="language" value="-1" type="hidden">
							<input name="noRedirect" value="1" type="hidden">
						</form>
						<ul class="m-topiclist"><li><a href="#" target="_blank">·&nbsp;人生的成功不过是在紧要处多一份坚持， </a></li><li><a href="#" target="_blank">·&nbsp;人生的失败往往是在关键时刻少了坚持。</a></li></ul>
					</div>
				</div>
				
			</div>
		</div>	
		