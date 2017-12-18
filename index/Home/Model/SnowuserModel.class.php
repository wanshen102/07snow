<?php
namespace Home\Model;
use Think\Model;
header("content-type:text/html;charset=utf-8");
class SnowuserModel extends Model{

	protected $tableName = 'user';
//循环
	public function qq($id)
	{
		$User=D("user");
		$data=$User->find($id);
		return	$data;
	}
//修改
	public function index()
	{
		$User=D("goods");
		$data=$User->select();
		return	$data;
	}
	public function updata($data)
	{
		//print_r($data);die;
		$id=$data['h_id'];
		$User=D('user');
		$str=$data['birthday_year']."年".$data['birthday_month']."月".$data['birthday_day']."日";
		$aa['birthday']=$str;
		$aa['user_name'] = $data['user_name'];
		$aa['user_radio'] = $data['user_radio'];
		$aa['message'] = $data['comment'];
		return $User->where("user_id=$id")->save($aa);		
		
	}
	public function uploads($path,$uid){
            $model = D("user");
            $model->image=$path;
           if($model->where("user_id=$uid")->save()){
              return 1;
           }else{
              return 0;
           }
        }

	}



?>