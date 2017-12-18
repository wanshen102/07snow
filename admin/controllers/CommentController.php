<?php

namespace app\controllers;

use Yii;
use yii\db\Query;
use app\models\SnowComment;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;



class CommentController extends Controller
{
	 public $enableCsrfValidation = false;
    public function actionIndex()
    {
		session_start();
         $model=new Query();
        $list=$model->from(["snow_comment","snow_goods"])->where("snow_comment.g_id=snow_goods.goods_id")->all();
       return $this->renderPartial('index',array('data'=>$list));
    }
	
	public function actionDel(){
		$id=$_GET['com_id'];
		$model = new SnowComment();
		$row = $model::findOne($id)->delete(); 
		if($row){
			echo "<script>location.href='index.php?r=comment/index'</script>";
		}
	}
}
