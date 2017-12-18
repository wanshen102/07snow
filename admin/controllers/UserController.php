<?php

namespace app\controllers;
use Yii;
use \app\models\SnowUser;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\data\Pagination;

/**
 * UsersController implements the CRUD actions for Users model.
 */
class UserController extends Controller{
    public $enableCsrfValidation = false;
    public function actionUser()
    {
       return $this->renderPartial('user');
    }

	public function actionUseradd(){
        ///print_r($_POST['user_name']);die;
         // var_dump($_POST);die;
            $model= new SnowUser;
            $user_name=$_POST['user_name'];
            $user_pwd=$_POST['user_pwd'];
            $user_email=$_POST['user_email'];
            $user_money=$_POST['user_money'];
            $user_qq=$_POST['user_qq'];
            $user_iphone=$_POST['user_iphone'];
            
            $model->user_name= $user_name;
            $model->user_pwd = $user_pwd;
            $model->user_email = $user_email;
            $model->user_money= $user_money;
            $model->user_qq=$user_qq;
            $model->user_iphone=$user_iphone;
            if($model->save()){
			//echo "11111111";
		$this->redirect("./index.php?r=user/user_list");
		}else{
                 $this->redirect("./index.php?r=user/user");
			//echo "22222222222222";
		}
             }
             // public $enableCsrfValidation = false;
        public  function actionUser_list(){
                    $data = SnowUser::findBySql('SELECT * FROM snow_user')->all();
                    $model=new SnowUser();
		$res =  SnowUser::find();
		$pages = new Pagination(['totalCount' =>$res->count(), 'pageSize' => '3']);
        $data = $res->offset($pages->offset)->limit($pages->limit)->all();
		 return $this->renderPartial('user_list',[
             'info' => $data,
             'pages' => $pages,
       ]);
                  // var_dump($data);die;
         //  return $this->renderPartial('user_list');
                
         }

		public function actionUser_del(){
		$id=$_GET['user_id'];
	//	print_r($_GET);DIE;
		$model = new SnowUser();
		$row = $model::findOne($id)->delete(); 
		//ECHO $row;DIE;
		if($row){
			$this->redirect(["user_list"]);
		}
		///return $this->renderpartial('edit_category_show');
	}


}
