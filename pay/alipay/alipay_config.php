<?php


$partner         = "2088002075883504";        //合作伙伴ID
$security_code   = "yscobjj8aq2c5jnzx56n4z87lt60ov65";        //安全检验码
$seller_email    = "li1209@126.com";        //卖家支付宝帐户
$_input_charset  = "UTF-8";   //字符编码格式 目前支持 GBK 或 utf-8
$sign_type       = "MD5";     //加密方式 系统默认(不要修改)
$transport       = "http";   //访问模式,你可以根据自己的服务器是否支持ssl访问而选择http以及https访问模式(系统默认,不要修改)
$notify_url      = "http://www.com133.com/pay/alipay/notify_url.php"; //交易过程中服务器通知的页面 要用 http://格式的完整路径
$return_url      = "http://127.0.0.1/php6/pay/return.php"; //付完款后跳转的页面 要用 http://格式的完整路径
$show_url        = "http://www.com133.com/"         //你网站商品的展示地址


?>