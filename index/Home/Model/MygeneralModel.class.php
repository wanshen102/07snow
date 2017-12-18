<?php
namespace Home\Model;
use Think\Model;
class MygeneralModel extends Model{
	public function mygeneral($uid){
		$model = D("mygeneral");
		return $this->res = $model->where("uid=$uid")->select();
	}
}
?>