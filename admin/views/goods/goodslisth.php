<?php include("../menu/menu.php")?>
	<!-- END SIDEBAR -->
	<!-- BEGIN CONTENT -->
	<div class="page-content-wrapper">
		<div class="page-content">
			<!-- BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM-->
			<div class="modal fade" id="portlet-config" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
							<h4 class="modal-title">Modal ccccccctitle</h4>
						</div>
						<div class="modal-body">
							 Widget settings form goes here
						</div>
						<div class="modal-footer">
							<button type="button" class="btn blue">Save changes</button>
							<button type="button" class="btn default" data-dismiss="modal">Close</button>
						</div>
					</div>
					<!-- /.modal-content -->
				</div>
				<!-- /.modal-dialog -->
			</div>
			<!-- /.modal -->
			<!-- END SAMPLE PORTLET CONFIGURATION MODAL FORM-->
			<!-- BEGIN STYLE CUSTOMIZER -->
			<div class="theme-panel hidden-xs hidden-sm">
				<div class="toggler">
				</div>
				<div class="toggler-close">
				</div>
				<div class="theme-options">
					<div class="theme-option theme-colors clearfix">
						<span>
							 THEME COLOR
						</span>
						<ul>
							<li class="color-black current color-default" data-style="default">
							</li>
							<li class="color-blue" data-style="blue">
							</li>
							<li class="color-brown" data-style="brown">
							</li>
							<li class="color-purple" data-style="purple">
							</li>
							<li class="color-grey" data-style="grey">
							</li>
							<li class="color-white color-light" data-style="light">
							</li>
						</ul>
					</div>
					<div class="theme-option">
						<span>
							 Layout
						</span>
						<select class="layout-option form-control input-small">
							<option value="fluid" selected="selected">Fluid</option>
							<option value="boxed">Boxed</option>
						</select>
					</div>
					<div class="theme-option">
						<span>
							 Header
						</span>
						<select class="header-option form-control input-small">
							<option value="fixed" selected="selected">Fixed</option>
							<option value="default">Default</option>
						</select>
					</div>
					<div class="theme-option">
						<span>
							 Sidebar
						</span>
						<select class="sidebar-option form-control input-small">
							<option value="fixed">Fixed</option>
							<option value="default" selected="selected">Default</option>
						</select>
					</div>
					<div class="theme-option">
						<span>
							 Sidebar Position
						</span>
						<select class="sidebar-pos-option form-control input-small">
							<option value="left" selected="selected">Left</option>
							<option value="right">Right</option>
						</select>
					</div>
					<div class="theme-option">
						<span>
							 Footer
						</span>
						<select class="footer-option form-control input-small">
							<option value="fixed">Fixed</option>
							<option value="default" selected="selected">Default</option>
						</select>
					</div>
				</div>
			</div>
			<!-- END STYLE CUSTOMIZER -->
			<!-- BEGIN PAGE HEADER-->
			<div class="row">
				<div class="col-md-12">
					<!-- BEGIN PAGE TITLE & BREADCRUMB-->
					<h3 class="page-title">
						商品回收站 <small>Commodity recycling bin</small>
					</h3>
					<ul class="page-breadcrumb breadcrumb">
						<li class="btn-group">
							
							
						</li>
						<li>
							<i class="fa fa-home"></i>
							<a href="index.php?r=goods/goodslist">
								商品管理
							</a>
							<i class="fa fa-angle-right"></i>
						</li>
						<li>
							
							<a href="index.php?r=goods/goodsadd">
								商品添加
							</a>
							<i class="fa fa-angle-right"></i>
						</li>
						<li>
							
							<a href="index.php?r=goods/goodslist">
								商品列表
							</a>
							<i class="fa fa-angle-right"></i>
						</li>
						
					</ul>
					<!-- END PAGE TITLE & BREADCRUMB-->
				</div>
			</div>
			
			<!-- END PAGE HEADER-->
			<!-- BEGIN PAGE CONTENT-->
			<div class="row">
				<div class="col-md-12">
					<!-- BEGIN EXAMPLE TABLE PORTLET-->
					<div class="portlet box yellow">
						<div class="portlet-title">
							<div class="caption">
								
							</div>
							<div class="tools">
								<a href="javascript:;" class="collapse">
								</a>
								<a href="#portlet-config" data-toggle="modal" class="config">
								</a>
								<a href="javascript:;" class="reload">
								</a>
								<a href="javascript:;" class="remove">
								</a>
							</div>
						</div>
						<div class="portlet-body" >
							<div class="list-div" id="listDiv">
							<div id="aa" style="position:absolute;background:#ffffff;top:140px;left:160px;z-index:1;display:none"></div>


							 <table class="table table-striped table-bordered table-hover" id="sample_1">
							<thead>
							<tr>
								<th class="table-checkbox">
									<input type="checkbox" class="group-checkable" data-set="#sample_1 .checkboxes"/>
								</th>
								<th>
									 商品编号
								</th>
								<th>
									 商品名称
								</th>
								<th>
									 商品库存
								</th>
								<th>
									 商品定价
								</th>
								<th>
									 商品图片
								</th>
								<th>
									 操作
								</th>
							</tr>
							</thead>
							<tbody>
							<?php foreach($info as $k=>$v){ ?>
							<tr class="odd gradeX">
							
								<td>
									<input type="checkbox" class="checkboxes" value="1"/>
								</td>
								<td>
									<?php echo $v['goods_id'] ?>
								</td>
								<td>
									<?php echo $v['goods_name'] ?>
								</td>
								<td>
									<?php echo $v['goods_number'] ?>
								</td>
								<td>
									<?php echo $v['market_price'] ?>
								</td>
							<td width="70" height="70">
									
							<input type="image" src="../../public/goods_image/<?php echo $v['goods_imgs'] ?>"width="70" height="70">
								</td>
								<td>
									<a href="index.php?r=goods/goodsdel&goods_id=<?php echo $v['goods_id'] ?>"">删除</a>
									<a href="./index.php?r=goods/recycle_showhui&goods_id=<?php echo $v['goods_id']?>">[恢复]</a>
			
								</td>
							</tr>
							<?php } ?>
							</tbody>
							</table>
					 
						</div>
					</div>
					<!-- END EXAMPLE TABLE PORTLET-->
				</div>
	
			</div>
			

	<!-- END CONTENT -->
</div>

<script type="text/javascript" src='/admin/web/js/jq.js'></script>
<script type="text/javascript">
function xianshi(id){
	$.ajax({
		url:"index.php?r=indent/xianshi",
		type:"get",
		data:{"id":id},
		success:function(e){
			$("#aa").html(e).show();
		}
	})
}
	function yincang(){
		$("#aa").hide();
	}
function check(id){
	//alert(id);
	var flag=0;
	var o=$(":checkbox[name]");
	//alert(o);
	for(var i=0;i<o.length;i++){
			if(o[i].checked){
				
				$("#btnSubmit1").removeAttr("disabled");
				$("#btnSubmit2").removeAttr("disabled");
				
				return false;
			}
			if(o[i].checked==false){
				flag++;
			}
		}
		if(flag==o.length){
		
			$("#btnSubmit1").attr("disabled",true);
			$("#btnSubmit2").attr("disabled",true);	
		}
}
function change(status){
	var str="";
	var o=$(":checkbox[name]");
		for(var i=0;i<o.length;i++){
			if(o[i].checked==true){
				str=str+o[i].value+",";
			}
		}

	$.ajax({
		url:"index.php?r=indent/change",
		type:"get",
		data:{"status":status,"str":str},
		success:function(e){
			alert(e);
			$("#listDiv").html(e);
		}
	})
}

</script>
<!-- END CONTAINER -->
<!-- BEGIN FOOTER -->
<div class="footer">
	<div class="footer-inner">
		 2015 &copy; Metronic by keenthemes.
	</div>
	<div class="footer-tools">
		<span class="go-top">
			<i class="fa fa-angle-up"></i>
		</span>
	</div>
</div>
<!-- END FOOTER -->
<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
<!-- BEGIN CORE PLUGINS -->
<!--[if lt IE 9]>
<script src="assets/plugins/respond.min.js"></script>
<script src="assets/plugins/excanvas.min.js"></script> 
<![endif]-->
<script src="assets/plugins/jquery-1.10.2.min.js" type="text/javascript"></script>
<script src="assets/plugins/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
<script src="assets/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="assets/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js" type="text/javascript"></script>
<script src="assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
<script src="assets/plugins/jquery.blockui.min.js" type="text/javascript"></script>
<script src="assets/plugins/jquery.cokie.min.js" type="text/javascript"></script>
<script src="assets/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
<!-- END CORE PLUGINS -->
<!-- BEGIN PAGE LEVEL PLUGINS -->
<script type="text/javascript" src="assets/plugins/select2/select2.min.js"></script>
<script type="text/javascript" src="assets/plugins/data-tables/jquery.dataTables.js"></script>
<script type="text/javascript" src="assets/plugins/data-tables/DT_bootstrap.js"></script>
<!-- END PAGE LEVEL PLUGINS -->
<!-- BEGIN PAGE LEVEL SCRIPTS -->
<script src="assets/scripts/core/app.js"></script>
<script src="assets/scripts/custom/table-managed.js"></script>
<script>
jQuery(document).ready(function() {       
   App.init();
   TableManaged.init();
});
</script>
</body>
<!-- END BODY -->
</html>