<?php

error_reporting(E_ALL);


date_default_timezone_set('Asia/Shanghai');
class Mailer{
	public $mail;
	function __construct(){
		include("mailer/class.phpmailer.php");
		$this->mail             = new PHPMailer();
		$this->mail->CharSet    = 'utf-8';
		$this->mail->IsSMTP();
		$this->mail->SMTPAuth   = true;                  // enable SMTP authentication
		//$this->mail->SMTPSecure = "ssl";                 // sets the prefix to the servier
		$this->mail->Host       = "smtp.ym.163.com";      // sets GMAIL as the SMTP server
		//$this->mail->Port       = 465;                   // set the SMTP port for the GMAIL server
		$this->mail->Username   = "test1@com133.com";  // smtp 用户
		$this->mail->Password   = "123456";            // smtp密码
		
		$this->mail->AddReplyTo("li1209@126.com","li");//邮件回复给谁
		
		$this->mail->From       = "test1@com133.com"; //发信人邮箱
		$this->mail->FromName   = "李";//发信人姓名
	}
	
	function Send($to,$subject,$contents,$attachment = null,$ishtml = true){

		$this->mail->Subject    = $subject; //邮件标题
		
		//$body             = $this->mail->getFile('tpl.html'); // 从文件读取
		//$body             = eregi_replace("[\]",'',$body); //替换内容
		
		$this->mail->Body       = $contents;                      //邮件体,邮件内容
		$this->mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; 
		$this->mail->WordWrap   = 500; // set word wrap
		//$this->mail->MsgHTML($body); //如果从文件读取使用此
		foreach ($to as $k => $v){
			$this->mail->AddAddress($v, $k);
		}
		if($attachment){
			//$this->$mail->AddAttachment($attachment);  // 附件 例 "./img/a.gif"
		}
		$this->mail->IsHTML(true); // 作为html代码发送
		
		if ($this->mail->Send()){
			return true;
		}else{
			return false;
		}
	}
}


$m = new Mailer();
$to = array('用户' => $email);//收件人

$str = '<h1>您已经购买成功,您的密码是12344测试.</h1>订单号:<font color=red>' .$order .'</font>' ;


if(!$m->Send($to,'支付宝支付测试,支付成功!' ,$str,'')) {
  echo "Mailer Error: " . $m->mail->ErrorInfo;
} else {
  //echo "Message sent!";
}

?>
