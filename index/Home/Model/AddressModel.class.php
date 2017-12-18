<?php
namespace Home\Model;

use Think\Model;

class AddressModel extends Model {

	protected $tableName = 'address';
	
	public function address_addpro()
	{
		$address = M("address"); 
		// 实例化User对象
		$str = $_POST['address_school']."、".$_POST['address_college']."、".$_POST['address_dong'];
		$data['address_name'] = $_POST['address_name'];
		$data['address'] = $_POST['address'];
		$data['mobile'] = $_POST['mobile'];
		$data['address_info'] = $str;
		$data['user_id'] = session("user_id");
		$arr = $address->add($data);
		return $arr;
	}

	public function address_del($id)
	{
		$address = M("address");
		// 删除
		$arr = $address->delete($id); 
		return $arr;
	}

	//修改
	public function uppro($arr)
	{
		$id=$arr['h_id'];
		$address = M("address"); 
		// 实例化User对象
		$str = $arr['address_school']."、".$arr['address_college']."、".$arr['address_dong'];
		$data['address_name'] = $arr['address_name'];
		$data['address'] = $arr['address'];
		$data['mobile'] = $arr['mobile'];
		$data['address_info'] = $str;
		$arr = $address->where("address_id=$id")->save($data);
		return $arr;
	}
	
	
	
	
}