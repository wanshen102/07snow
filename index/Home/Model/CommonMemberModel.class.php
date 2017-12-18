<?php
namespace Home\Model;
use Think\Model;
class CommonMemberModel extends Model {
	public function common_member($uid){
		$model = D("common_member");
		$data =$model->join("pre_common_member_count on pre_common_member.uid=pre_common_member_count.uid")->join(" pre_common_usergroup on  pre_common_member.groupid=pre_common_usergroup.groupid")->join("pre_common_member_status on pre_common_member.uid=pre_common_member_status.uid")->where("pre_common_member.uid=$uid")->find();
		$data['regdate']=date('Y-m-d H:i:s',$data['regdate']);
		$data['zuiip']=GetHostByName($_SERVER['SERVER_NAME']);
		return $data;
	}
        public function upemail($uid){
            $model = D("common_member");
            $model->emailstatus=1;
           if($model->where("uid=$uid")->save()){
              return 1;
           }else{
              return 0;
           }
        }
        public function uploads($path,$uid){
            $model = D("common_member");
            $model->img=$path;
           if($model->where("uid=$uid")->save()){
              return 1;
           }else{
              return 0;
           }
        }
		 
}
?>