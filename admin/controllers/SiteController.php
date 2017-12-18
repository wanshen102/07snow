<?php

namespace app\controllers;

use Yii;
use yii\db\Query;
use yii\web\Controller;
use app\models\SnowLogin;
use app\models\SnowUserRank;


header("content-type:text/html;charset=utf-8");
class SiteController extends \yii\web\Controller
{
   public $enableCsrfValidation = false;
    public function actionIndex()
    {
		session_start();
		if(@$_SESSION['name']==""){
			echo "<script>alert('请先登录');location.href='?r=site/login'</script>";
		}
        return $this->renderPartial('index');
    }
    public function actionLogin(){
        return $this->renderPartial('login');
    }
	public function actionLopro(){
		$model= new SnowLogin();
		$name=$_POST['replaceun'];
		$pwd=$_POST['password'];
		$data=$model::find()->where(['login_name' => ''.$name.''])->one();
		//	print_r($data);die;
		//用户名密码是否存在
		if(!empty($data)){
			  //用户名、email是否存在
			if($name==$data->login_name){
			//密码是否存在
				if($pwd==$data->login_pwd){
					//echo $name;
					session_start();
					$_SESSION['name']=$name;
					$this->redirect("?r=site/index");
					//echo "<script>alert('成功');location.href='./index.php?r=site/index'</script>";
				}else{
					echo "<script>alert('密码错误');location.href='./index.php?r=site/login'</script>";
				}
			}else{

				echo "<script>alert('用户名不存在');location.href='./index.php?r=site/login'</script>";
			}
		}else{
			$data=$model::find()->where(['login_email' => ''.$name.''])->one();
			if(!empty($data)){
				if($name==$data->login_email){
					if($pwd==$data->login_pwd){
						session_start();
						$_SESSION['name']=$name;
						$this->redirect("?r=site/index");
					}else{
						echo "<script>alert('密码错误');location.href='./index.php?r=site/login'</script>";
					}
				}else{
					echo "<script>alert('用户名、Email不存在');location.href='./index.php?r=site/login'</script>";
				}
			}else{
				echo"<script>alert('用户名，密码不存在');location.href='./index.php?r=site/login'</script>";
			}
		}
	}
		public function actionLogout(){
			session_start();
			unset($_SESSION['name']);
			$this->redirect("index.php?r=site/login");
		}
 	//会员积分
	public function actionList(){
		$model=new Query();
		$list=$model->from(["snow_user","snow_integral"])->where("snow_user.user_id=snow_integral.u_id")->all();
		//ar_dump($list);die;
		return $this->renderPartial('list',array('list'=>$list));
	}
}