<table class="table table-striped table-bordered table-hover" id="sample_1">
							<thead>
							<tr>
								<td>
									<input type="checkbox" >
								</td>
								<td>
									订单号
								</td>
								<td>
									下单时间
								</td>
								<td>
									商品名称
								</td>
								<td>
									订单地址
								</td>
								<td>
									状态
								</td>
							</tr>
							</thead>
							<tbody>
							<?php foreach($list as $v){?>
							<tr >
								<td>
									<input type="checkbox" name="checkboxes[]" value="<?php echo $v['ind_id']; ?>" onclick="check()"/>
								</td>
								<td>
								<a href="javascript:void(0)" style='text-decoration:none' onmouseover="xianshi(<?php echo $v['ind_id']; ?>)"  onmouseout="yincang()">
									<?php echo $v['ind_order']; ?></a>
								</td>
								<td>
									<?php echo $v['ind_time']; ?>
								</td>
								<td>
									 <?php echo $v['goods_name']; ?>
								</td>
								<td >
								<?php echo $v["ind_address"]; ?>
									
								</td>
								<td>
									<?php
										if($v['ind_status']==0){
											echo "已付款";		
										}else {
											echo "已发货";		
										}
								    ?>
								</td>
							</tr>
							<?php }?>
							</tbody>
							</table>