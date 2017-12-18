<?php


require_once("alipay_notify.php");
require_once("alipay_config.php");
$alipay = new alipay_notify($partner,$security_code,$sign_type,$_input_charset,$transport);
$verify_result = $alipay->notify_verify();
if($verify_result) {   //认证合格
 //获取支付宝的反馈参数
    $order  = $_POST['out_trade_no'];    //获取支付宝传递过来的订单号
    $total    = $_POST['total_fee'];       //获取支付宝传递过来的总价格
	include '../mysql_config.php';
	$data = $db->select("select * from orders where oid = '$order'");
	$email = $data[0]['email'];
	
/*
	获取支付宝反馈过来的状态,根据不同的状态来更新数据库 
	WAIT_BUYER_PAY(表示等待买家付款);
	TRADE_FINISHED(表示交易已经成功结束);
*/

//如果您申请了支付宝的购物卷功能，请在返回的信息里面不要做金额的判断，否则会出现校验通不过，出现订单无法更新。如果您需要获取买家所使用购物卷的金额,
//请获取返回信息的这个字段discount的值，取绝对值，就是买家付款优惠的金额。即 原订单的总金额=买家付款返回的金额total_fee +|discount|.
	if($_POST['trade_status'] == 'WAIT_BUYER_PAY') {         //等待买家付款
		//放入交易状态是订单交易创建还未付款的数据库更新程序代码，也可不放入任何代码。
	file_put_contents('./WAIT.txt',print_r($_POST,true));	
	echo "success";
		
	}
	else if($_POST['trade_status'] == 'TRADE_FINISHED' ||$_POST['trade_status'] == 'TRADE_SUCCESS') {    //交易成功结束
        //放入订单交易完成后的数据库更新程序代码，请务必保证echo出来的信息只有success
		file_put_contents('./success.txt',print_r($_POST,true));
		//这里做数据库操作,比如更改订单状态,标记虚拟物品发送给用户等
		$aa = $db->update('orders',array('stat' => 1),"oid='{$order}'");
		//var_dump($aa);die;
		//include '../mail/esend.php';给用户发送邮件
		echo "success";
	}	
	else {
			file_put_contents('./payerror.txt',print_r($_POST,true));		
		echo "fail";
		
	}
}
else {    //认证不合格
	file_put_contents('./not.txt',print_r($_POST,true));
	echo "fail";
	//log_result ("verify_failed");
}
?>