<?php
namespace Home\Model;
use Think\Model;
class ForumMedalModel extends Model{
	public function forum_medal($uid){
		$model = D("forum_medal");
		return $this->res = $model->field('name,image,description')->join("pre_common_member_medal ON pre_common_member_medal.medalid = pre_forum_medal.medalid")->where("pre_common_member_medal.uid=$uid")->select();
	}
}
?>