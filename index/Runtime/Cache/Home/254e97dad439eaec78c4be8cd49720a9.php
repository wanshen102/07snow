<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta property="qc:admins" content="56207406376255516375" />
    <title>注册 - Snow账户</title>

<link rel="stylesheet" href="https://secure4.jmstatic.com/static_passport/dist/20150106_2/css/common.css" type="text/css" media="screen" charset="utf-8" />
<link rel="stylesheet" href="/Public/css/jumei_sign.css" type="text/css" media="screen" charset="utf-8" />
<script src="https://secure3.jmstatic.com/static_passport/dist/20150106_2/js/library/es5-shim.js"></script>
<script src="https://secure5.jmstatic.com/static_passport/dist/20150106_2/js/library/es5-sham.js"></script>


<script src="https://secure0.jmstatic.com/static_lib/dist/20141110/website.min.js"></script>
<script src="https://secure0.jmstatic.com/static_passport/dist/20150106_2/js/boot.js"></script>
<script src="https://secure3.jmstatic.com/static_passport/dist/20150106_2/js/library/jquery.cookie.js"></script>
</head>

</head>
<!-- KEEP THIS!
<body>
-->
<body>

<style>
    .top_nav_hot{ position: absolute;left:81px;top:-4px;}

</style>
<div id="header_container">
    <!--新版的login页面没有头部 -->
    <div id="logo">
         <a href="/index.php/Home/index/index" id="home" title="Snow" style="background:url(  /Public/image/snow1.jpg) no-repeat top left;"> </a>
        
    </div>
</div>



<link href="/Public/css/signup.css" rel="stylesheet"/>

<div class="sign">
    <div class="loginWrap">
        <div class="loginPic">
            <a href="http://hd.jumei.com/act/10-478-2257-newuserswelfare.html?status=zs&site=bj" target="_blank" class="signup_link"></a>
            <div class="loginBord">
                <div class="loginTit">
                    <div class="tosignup">已有账号<a href="/index.php/Home/login/login">在此登录</a></div>
                    <h1><strong>用户注册</strong></h1>
                </div>







                <form id="phone" method="post">
                    <div class="line">
                        <div class="textbox_ui">
                            <input type="text" id="mobile" placeholder="手机号" autofocus autocomplete="off" onblur="return f()">
                            <div class="focus_text"></div><span id="a"></span>
                            <div class="invalid">
                                <i></i>
                                <div class="msg"></div>
                            </div>
                            <i class="valid"></i>
                            <i class="loading"></i>
                        </div>
                    </div>
                    <div class="line verityWrap">
                        <div class="textbox_ui sms_verify_wrapper">
                            <input type="text" id="mobile_verify" placeholder="短信校验码" autocomplete="off" onblur="return m()">
                            <div class="focus_text"></div>
                            <div class="hint"></div>
                            <div class="invalid">
                                <i></i>
                                <div class="msg"></div>
                            </div>
                        </div>
						 <input type="button" value="获取短信校验码" id="an" onclick="return dxyzm()" class="phonecode"><span id='by'></span>
						 <script type="text/javascript" src="/Public/js/jq.js"></script>
						 <script type="text/javascript">
							function dxyzm(){
								
								iphone=$("#mobile").val();
								 var r_tel=/^1[3,5,8]\d{9}$/;
								if(iphone==""){
									$("#a").html("<font color='red'>请输入 11 位手机号码!</font>");	
									return false;
								}else{
									if(r_tel.test(iphone)){
										an=$("#an").val('正在发送...');
										$.ajax({
											   url:"/index.php/Home/login/dx",
											   data:{"iphone":iphone},
											   type:"get",
											   success:function(e){
												//alert(e);
												if(e==1){
													$("#a").html("<font color='#999'>该手机号已存在，如果您是该用户，请立刻 <a href='/index.php/Home/login/login'>登录</a></font>");
													an=$("#an").val('获取短信校验码');
												}else{
													an=$("#an").val('获取短信校验码');
													$("#by").html("<font color='red'>校验码已发送，请查收短信</font>");
												}
											//$("#div").html(e);
										   }
										  });
									}else{
										$("#a").html("<font color='red'	>你输入的手机号码格式有误，需为 11 位数字格式</font>");
										return false;
									}
								}
							}

						 </script>
                    </div>
                    <div class="line">
                        <div class="textbox_ui">
                            <input type="password"  placeholder="密码" id="password" autocomplete="off" onblur="return zxx()">
                            <div class="focus_text">
                                <p class="default"></p><span id='pass'></span>
                                <div class="safe">
                                    <div class="pw_isstrong clearfix">
                                        <div class="pw_level pw_success" data-class="pw_weak" data-strength="weak">弱</div>
                                        <div class="pw_level pw_success" data-class="pw_normal" data-strength="normal">中</div>
                                        <div class="pw_level pw_success" data-class="pw_strong" data-strength="strong" style="border-right:0">强</div>
                                    </div>
                                </div>
                            </div>
                            <i class="valid"></i>
                            <div class="invalid">
                                <i></i>
                                <div class="msg"></div>
                            </div>
                        </div>
                    </div>
                    <div class="line">
                        <div class="textbox_ui">
                            <input type="password" id="password2" placeholder="重复密码" autocomplete="off" onblur="return sgj()">
                            <div class="focus_text"></div><span id="passs"></span>
                            <i class="valid"></i>
                            <div class="invalid">
                                <i></i>
                                <div class="msg"></div>
                            </div>
                        </div>
                    </div>
                   <!--<div class="line verityWrap">
                        <div class="textbox_ui">
                            <input type="text" placeholder="验证码" id="verify_code" autocomplete="off">
                            <div class="focus_text">按右图填写，不区分大小写</div>
                            <div class="invalid">
                                <i></i>
                                <div class="msg"></div>
                            </div>
                        </div>
                        <span id="change_verify_code">
                            <img src="/Public/image/2.jpg">
                            换一张
                        </span>
                    </div>  --> 
                    <div class="act" style="margin-left: 0px;">
                        <p>
                             <input  type="button" value="同意协议并注册" onclick="return c()" style="background-color:#e5406e;border:1px #ff0000 solid;color:white;font-weight:bold;height:37px;cursor:pointer;display: block;width: 100%;">
                        </p>
                        <p>
                            <a href="" rel="nofollow"  style="color:#ed145b;">《Snow_订餐网》</a>
                        </p>
                    </div>
                    <br />
                </form>
<script type="text/javascript">
	function f(){
		sjh=$("#mobile").val();
		//alert(sjh);
		var r_tel=/^1[3,5,8]\d{9}$/;
		if(sjh==""){
			$("#a").html("<font color='#999'>请输入 11 位手机号码</font> ");	
			return false;
		}else{
			if(r_tel.test(sjh)){
				$("#a").html(" ");
				return true
			}else{
				$("#a").html("<font color='red'	>你输入的手机号码格式有误，需为 11 位数字格式</font>");
				return false;
			}
		  }
		}
	function zxx(){
		mi=$("#password").val();
		//alert(mima);
		var r_pwd=/^\w{6,}$/;
		if(mi==""){
			$("#pass").html("<font color='#999'>6-16个字符，建议使用字母加数字或符号组合</font>");
			return false;
		}else{
			if(r_pwd.test(mi)){
				$("#pass").html(" ");
				return true
			}else{
				$("#pass").html("<font color='red'>为了您的账号安全，密码长度只能在 6-16 个字符之间</font>");
				return false;
			}
		}
		
	}
	function c(){
		byx=$("#mobile_verify").val();
		//alert(sjh);
		if(byx==""){
			$("#by").html("<font color='#999'>请输入5位短信校验码</font> ");	
			return false;
		}else{
			$.ajax({
				url:"/index.php/Home/login/f",
				data:{"byx":byx},
				type:"get",
				success:function(e){
					//alert(e);
					if(e==1){
						aa=$("#mobile").val();
		bb=$("#mobile_verify").val();
		mima=$("#password").val();
		mim=$("#password2").val();
		var r_pw=/^\w{6,}$/;
		if(!r_pw.test(mima)){
			$("#passs").html("<font color='#999'>为了您的账号安全，密码长度只能在 6-16 个字符之间</font>");
			return false;
		}else{

			if(mim==mima){
					 $.ajax({
					   url:"/index.php/Home/login/zhuce",
					   data:{"mima":mima,"mim":mim,"aa":aa,"bb":bb},
					   type:"get",
					   success:function(e){
						   //alert(e);
							if(e==1){
								$("#a").html("<font color='#999'>该手机号已存在，如果您是该用户，请立刻 <a href='/index.php/Home/login/login'>登录</a></font>");
							}else{
								location.href='/index.php/Home/login/registersoftswxxwqqwe';
							}
					   }
					  });

				$("#passs").html(" ");
				return true
			}else{
				$("#passs").html("<font color='red'>两次密码输入不一致，请重新输入</font>");
				return false;
			}
		}
						$("#by").html(" ");
						return true;
					}else{
						$("#by").html("<font color='#999'>验证码不一致，请从新输入</font>");
						return false;
					}
				}
			});

			$("#by").html(" ");	
			return true
		}
		
	}
</script>


<!-- 以下没有 -->
               
            </div>
        </div>
    </div>
</div>
<div class="clear"></div>


<div id="footer_container" style="padding-top:5px;background: none;border-top: none;">
    <div class="footer_con" id="footer_copyright">
       <p class="footer_copy_con">
            Copyright &copy; 2015-2015 北京07Snow有限公司 07snow.com 保留一切权利。客服地址：Bw丶38305 <br/>
            京公网安备 11010102001226 号 | <a href="" target="_blank" rel="nofollow">京ICP证111033号</a> | 食品流通许可证 SP1101051110165515（1-1）
            | <a href=""  rel="nofollow">营业执照</a>
        </p>
        <p>
            <a href=""  class="footer_copy_logo logo02" rel="nofollow"></a>
            <a href="" class="footer_copy_logo logo03" rel="nofollow"></a>
            <a href="" class="footer_copy_logo logo04" rel="nofollow"></a>
            <a href=""  class="footer_copy_logo logo05" rel="nofollow"></a>
        </p>

    </div>
</div>

</body>
</html>