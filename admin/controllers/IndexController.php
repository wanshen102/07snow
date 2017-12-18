<?php

namespace app\controllers;

use Yii;

use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;


class IndexController extends Controller
{

	public function actionindex(){
		return $this->render('index');
	}
}