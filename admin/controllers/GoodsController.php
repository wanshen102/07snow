<?php

namespace app\controllers;

use Yii;
use \app\models\SnowGoods;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\data\Pagination;

use yii\db\Query;



class GoodsController extends Controller
{
    public $enableCsrfValidation = false;
	public function actionGoodsadd(){
		return $this->renderPartial('goodsadd');

	}
	public function actionGoodsaddpro(){
      //  print_r($_POST['goods_name']);die;
         // var_dump($_POST);die;
			$ling=".00";
			$kg='g';
            $model= new SnowGoods;
            $goods_name=$_POST['goods_name'];
            $market_price=$_POST['market_price'];
            $goods_number=$_POST['goods_number'];
            $goods_weight=$_POST['goods_weight'];
            $goods_desc=$_POST['goods_desc'];

			$file = $_FILES['goods_imgs'];
			$path="../../public/goods_image/".$file['name'];
			//print_r($file);die;
			$res = move_uploaded_file($file['tmp_name'],$path);
			$model->goods_imgs=$file['name'];
            $model->goods_name= $goods_name;
            $model->market_price = $market_price.$ling;
            $model->goods_number = $goods_number;
            $model->goods_weight= $goods_weight.$kg;
            $model->goods_desc=$goods_desc;
            if($model->save()){
			 echo "添加成功";
		$this->redirect("./index.php?r=goods/goodslist");
		}else{
			echo "添加失败";
                 $this->redirect("./index.php?r=goods/goodsadd");
		}
             }
             // public $enableCsrfValidation = false;
		public  function actionGoodslist(){
			//$data = SnowGoods::findBySql('SELECT * FROM snow_goods')->all();
			$model=new SnowGoods();
			$res =  SnowGoods::find();
			$pages = new Pagination(['totalCount' =>$res->count(), 'pageSize' => '5']);
			$data = $res->offset($pages->offset)->where('state=1')->limit($pages->limit)->all();
			//print_r($data);die;
			return $this->renderPartial('goodslist',[
				'info' => $data,
				'pages' => $pages,
			]);
				  // var_dump($data);die;
			return $this->renderPartial('goodslist');
		}
		public function actionGoodsdel(){
			$id=$_GET['goods_id'];
			$model = new SnowGoods();
			$row = $model::findOne($id)->delete(); 
			if($row){
				$this->redirect(["goodslist"]);
			}
		}
	public function actionRecycle_show(){
	   $id=$_GET['goods_id'];
	   $model=new SnowGoods();
	   $row = $model->updateall(["state" =>0],["goods_id" => $id]);
	   if($row){
			$this->redirect(array('goods/goodslist','goods_id'=>$id));
		}
	}
	public function actionGoodslisth(){
		$model=new SnowGoods();
			$res =  SnowGoods::find();
			$pages = new Pagination(['totalCount' =>$res->count(), 'pageSize' => '5']);
			$data = $res->offset($pages->offset)->where('state=0')->limit($pages->limit)->all();
			//print_r($data);die;
			 return $this->renderPartial('goodslisth',[
				 'info' => $data,
				 'pages' => $pages,
		   ]);
					  // var_dump($data);die;
		return $this->renderPartial('goodslist');
	}

////////回收站//////////
	//回收站
	public function actionEdit_article_showpro(){
		echo 123;die;
		$model=new SnowGoods();
		$rows=$model::find()->where(['state' =>0])->all();
		$data=array('info'=>$rows);
		return $this->renderpartial('goodslisth',$data);
		//return $this->renderpartial('recycle_show');
	}
	//回收站恢复
	public function actionRecycle_showhui(){
		$id=$_GET['goods_id'];
		$model=new SnowGoods();
		$row = $model->updateall(["state" => 1],["goods_id" => $id]);
		if($row){
			return $this->redirect("./index.php?r=goods/goodslist");
		}
	}
}
