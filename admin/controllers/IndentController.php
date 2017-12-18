<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use yii\db\Query;
use app\models\SnowIndent;
use app\models\SnowIndentDetail;
class IndentController extends Controller
{
  
    public function actionList()
    {
	   $list=SnowIndent::findBySql('select * from snow_indent')->all();
       return $this->renderPartial('list',array('list'=>$list));
		
    }
	public function actionXianshi(){
			$id=$_GET['id'];
			$model=new Query();
			$arr=$model->from(["snow_indent","snow_indent_detail"])->where("snow_indent.id=snow_indent_detail.indent_id and snow_indent.id=$id")->all(); 
			//print_r($arr);die;
			return $this->renderPartial('xianshi',array('list'=>$arr));
			
	}

	

}