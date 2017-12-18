<?php
header("content-type:text/html;charset=utf-8");
error_reporting(0);
$out_trade_no = $_POST['oid'];	 //根据时间创建一个订单号(测试)
$subject = $_POST['goods']; //商品名
$body = "测试支付宝支付接口信息";
$total_fee = $_POST['price'];//总价


include '../mysql_config.php';
$data = array(	
				'oid' => $out_trade_no,
				'goods' => $subject,
				'stat' => 0,
				'email'=> $_POST['email'],
);
$info= $db->insert('orders',$data); //简单记录订单信息
if ($info) echo '下单成功!';
echo '订单号' . $out_trade_no;


//创建支付请求


////////////////////////////////////////////////////////////

require_once("alipay_service.php");
require_once("alipay_config.php");

$parameter = array(
	"service"         => "create_direct_pay_by_user",  //交易类型
	"partner"         => $partner,          //合作商户号
	"return_url"      => $return_url,       //同步返回
	"notify_url"      => $notify_url,       //异步返回
	"_input_charset"  => $_input_charset,   //字符集，默认为GBK
	"subject"         => $subject,  	    //商品名称，必填
	"body"            => $body,     	    //商品描述，必填
	"out_trade_no"    => $out_trade_no,     //商品外部交易号，必填（保证唯一性）
	"total_fee"       => $total_fee,        //商品单价，必填（价格不能为0）
	"payment_type"    => "1",               //默认为1,不需要修改
	"paymethod"		  => "directPay",
	"show_url"        => $show_url,         //商品相关网站
	"seller_email"    => $seller_email      //卖家邮箱，必填
);
$alipay = new alipay_service($parameter,$security_code,$sign_type);

//POST方式传递，得到加密结果字符串
$sign = $alipay->Get_Sign();


//若改成GET方式传递，请取消下面的两行注释
 $link=$alipay->create_url();
/*
echo "<script>window.location =\"$link\";</script>"; 
*/
?>
<html>
<head>
<title>支付宝即时支付</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head>
<body>
			<form name="alipaysubmit" method="post" action="https://www.alipay.com/cooperate/gateway.do?_input_charset=<?php echo $_input_charset;?>">
				<input type=hidden name="service" value="create_direct_pay_by_user">
				<input type=hidden name="partner" value="<?php echo $partner;?>">
				<input type=hidden name="return_url" value="<?php echo $return_url;?>"> 
				<input type=hidden name="notify_url" value="<?php echo $notify_url;?>">  
				<input type=hidden name="subject" value="<?php echo $subject;?>"> 
				<input type=hidden name="body" value="<?php echo $body;?>">
				<input type=hidden name="out_trade_no" value="<?php echo $out_trade_no;?>">
				<input type=hidden name="total_fee" value="<?php echo $total_fee;?>">
				<input type=hidden name="payment_type" value="1">
				<input type=hidden name="paymethod" value="directPay">
				<input type=hidden name="show_url" value="<?php echo $show_url;?>">
				<input type=hidden name="seller_email" value="<?php echo $seller_email;?>">
				<input type=hidden name="sign" value="<?php echo $sign;?>">
				<input type=hidden name="sign_type" value="MD5">
			</form>
	<table>
		<tr><td>
			<input type="button" name="v_action" value="确认支付" onClick="alipaysubmit.submit()">
		</td></tr>
	</table>
	<!--<a href="<?php echo $link; ?>" target="_blank">确认支付</a>!-->
</body>
</html>