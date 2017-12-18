<?php
$name=rand(10000,100000);
$url="http://utf8.sms.webchinese.cn/?Uid=z52033&Key=130433199612243855&smsMob=13146211117&smsText=亲爱的欢迎您加入07Snow大家庭，您的验证码是'$name'。宋广建不会向您所要，请勿向任何人泄露";

echo Get($url);
if($url){
	echo "<script>alert('dasdsa');location.href='__APP__/Home/login/logn'</script>";
}
function Get($url)
{
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
?>