<?php
namespace Home\Model;
use Think\Model;
class IndentModel extends Model{

	protected $tableName = 'indent';

//总控制
		public function opreation($data,$goods_id,$res){
			//开启事务
			mysql_query("begin");
			//添加订单
			$status1=$this->indent_add($data);
			$indent_id=mysql_insert_id();
			//订单详细添加
			$status2=$this->indent_detail_add($res,$indent_id);
			//$status2=1;
			//删除购物车
			$status3=$this->upstatus($indent_id,1);
			$status4=$this->del_cart($goods_id);
			if($status1&&$status2&&$status2&&$status4){
				mysql_query("commit");
				return true;
			}else{
				mysql_query("rollback");
				return false;
			}
		}
		//添加订单
		public function indent_add($data){
			return $this->add($data);		
		}
		//添加订单详细
		public function indent_detail_add($info,$indent_id){
			//print_r($info);echo $indent_id; die;
			$indent_detailobj=D("indent_detail");
			foreach($info as $key=>$val){
				$data['indent_id']=$indent_id;
				$data['goods_id']=$val['goods_id'];
				$data['price']=$val['goods_price'];
				$data['goods_name']=$val['goods_name'];
				$data['goods_num']=$val['goods_num'];
				$data['goods_photo']=$val['goods_img'];
				if($indent_detailobj->add($data)){
					$i=1;
				}else{
					$i=0;
				}
			}
			return $i;
		}
		//购物车删除
		public function del_cart($id){
			$obj=D("cart");
			return $obj->where("user_id=".session('user_id')."")->delete();
		}
/*----------------------------------------------------------*/
		//取消订单
		function oprestion1($id){
			//开启事务
			mysql_query("begin");
			//修改状态
			$status=$this->upstatus($id);
			//修改库存量
			$status1=$this->upgoods_num($id);
			if($status1&&!in_array('false',$status2)){
				mysql_query("commit");
				return true;
			}else{
				mysql_query("rollback");
				return false;
			}
		}
		//修改状态
		function upstatus($id,$status){
			$data['status']=$status;
			return $this->where(" id = $id ")->save($data);
		}
}