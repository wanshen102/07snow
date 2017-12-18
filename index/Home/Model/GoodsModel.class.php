<?php
namespace Home\Model;
use Think\Model;
class GoodsModel extends Model{

	protected $tableName = 'goods';

	public function index()
	{
		$User=D("goods");
		$data=$User->order('goods_id desc')->limit('0,6')->select();
		return	$data;
	}

}