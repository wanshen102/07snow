<table class="table table-striped table-bordered table-hover " >
		<thead>
			<tr>
				<td>
					 <font color='#cc66ff'>商品名称</font>
				</td>
				<td>
					<font color='#ff66ff'> 商品图片</font>
				</td>
				<td>
					 <font color='#ff6699'>数量</font>
				</td>
				
				<td>
					<font color='#ff6633'> 总价</font>
				</td>
				<td>
					<font color='#ff6600'> 联系人</font>
				</td>
				<td>
					<font color='#ffcc00'> 地址 </font>
				</td>
			</tr>
		</thead>
				<tbody>		
				<?php foreach ($list as $v){?>
				<tr class="odd gradeX">
					<td >
						<?php echo $v['goods_name']; ?>
					</td>
					<td>
						<img src='./img/goods/<?php echo $v["goods_photo"]; ?>' width='100' height='80'>
					</td>
					<td >
						<?php echo $v['goods_num']; ?>件
					</td>
					<td >
						 <?php echo $v['total_price']; ?>
					</td>
					<td>
						 <?php echo $v['express']; ?>
						手机： <?php echo $v['phone']; ?>
					</td>
					<td>
						 <?php echo $v['address']; ?>
					</td>
				</tr>
				<?php } ?>
				</tbody>
				</table>