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
							<h4 class="modal-title">Modal title</h4>
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
					添加会员<small>  add users</small>
					</h3>
					<ul class="page-breadcrumb breadcrumb">
						
						<li>
							<i class="fa fa-home"></i>
							<a href="index.php?r=user/user_list">
								会员管理
							</a>
							<i class="fa fa-angle-right"></i>
						</li>
						<li>
							<a href="index.php?r=user/user_list">
								会员列表
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
					<!-- BEGIN VALIDATION STATES-->
					<div class="portlet box purple">
						<div class="portlet-title">
							<div class="caption">
								<i class="fa fa-reorder"></i>
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
						<div class="portlet-body form">
							<!-- BEGIN FORM-->
							<form method="post" action="index.php?r=user/useradd" class="form-horizontal" onsubmit="return check()">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										You have some form errors. Please check below.
									</div>
									<div class="alert alert-success display-hide">
										<button class="close" data-close="alert"></button>
										Your form validation is successful!
									</div>
									<div class="form-group">
										<label class="control-label col-md-3">会员名称
										<span class="required">
											 *
										</span>
										</label>
										<div class="col-md-4">
											<input type="text" name="user_name" id="user_name" data-required="1" class="form-control" onblur='checkname()'/>
											<span id="spname"></span>
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-md-3">会员密码
										<span class="required">
											 *
										</span>
										</label>
										<div class="col-md-4">
											<input name="user_pwd" id="user_pwd" type="password" class="form-control" onblur="checkpwd()"/>
											<span id="sppwd"></span>
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-md-3">会员邮箱
										<span class="required">
											 *
										</span>
										</label>
										<div class="col-md-4">
											<input name="user_email"  id='user_email' type="text" class="form-control" onblur='checkemail()'/>
											<span id="spemail"></span>
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-md-3">帐户可用资金
										<span class="required">
											 *
										</span>
										</label>
										<div class="col-md-4">
											<input name="user_money" id="user_money" type="text" class="form-control" onblur='checkmoney()'/>
											<span id="spmoney"></span>
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-md-3">会员qq
										<span class="required">
											 *
										</span>
										</label>
										<div class="col-md-4">
											<input name="user_qq" id="user_qq" type="text" class="form-control" onblur='checkqq()'/>
											<span id="spqq"></span>
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-md-3">会员电话
										<span class="required">
											 *
										</span>
										</label>
										<div class="col-md-4">
											<input name="user_iphone" id='user_iphone' type="text" class="form-control" onblur='checkiphone()'/>
											<span id="spiphone"></span>
										</div>
									
									
								</div>
								<div class="form-actions fluid">
									<div class="col-md-offset-3 col-md-9">
										<button type="submit" class="btn green">Submit</button>
										<button type="button" class="btn default">Cancel</button>
									</div>
								</div>
							</form>
							<!-- END FORM-->
						</div>
					</div>
					<!-- END VALIDATION STATES-->
				</div>
			</div>
		

		</div>
	</div>

</form>
					
			
						

<!-- END CONTAINER -->
<!-- BEGIN FOOTER -->
<div class="footer">
	<div class="footer-inner">
		 2014 &copy; Metronic by keenthemes.
	</div>
	<div class="footer-tools">
		<span class="go-top">
			<i class="fa fa-angle-up"></i>
		</span>
	</div>
</div>
<script type="text/javascript" src='./web/js/jq.js'></script>
<script type="text/javascript">
function check(){
	if(checkname()==false){
		return false;
	}else if(checkpwd()==false){
		return false;
	}else if(checkemail()==false){
		return false;
	}else if(checkmoney()==false){
		return false;
	}else if(checkqq()==false){
		return false;
	}else if(checkeiphone()==false){
		return false;
	}
	
}
function checkname(){
	
	var name=$("#user_name").val();
	if(name==""){
		$("#spname").html("<font color='#ff0000'>商品名称不能为空</font>");
		return false;
	}else{
		$("#spname").html(" ");
		return true;
	}
}
function checkpwd(){
	var pwd=$("#user_pwd").val();
	if(pwd==""){
		$("#sppwd").html("<font color='#ff0000'>密码不能为空</font>");
		return false;
	}else{
		$("#sppwd").html(" ");
		return true;
	}
}
function checkemail(){
	var user_email=$("#user_email").val();
	if(user_email==""){
		$("#spemail").html("<font color='#ff0000'>邮箱不能为空</font>");
		return false;
	}else{
		var res=/^\d+@+\w+(\.)+com$/;
		if(!res.test(user_email)){
			$("#spemail").html("<font color='#ff0000'>邮箱格式不正确</font>");
		}else{
			$("#spemail").html(" ");
		}
	}	
}
function checkmoney(){
	var user_money=$("#user_money").val();
	if(user_money==""){
		$("#spmoney").html("<font color='#ff0000'>资金不能为空</font>");
		return false;
	}else{
		var res2=/^\d{1,}$/;
		if(!res2.test(user_money)){
			$("#spmoney").html("<font color='#ff0000'>请输入数字</font>");
		}else{
			$("#spmoney").html(" ");
		}
	}
}
function checkqq(){
	var user_qq=$("#user_qq").val();
	if(user_qq==""){
		$("#spqq").html("<font color='#ff0000'>qq不能为空</font>");
		return false;
	}else{
		var res3=/^\d{6,}$/;
		if(!res3.test(user_qq)){
			$("#spqq").html("<font color='#ff0000'>请输入数字(6位以上)</font>");
		}else{
			$("#spqq").html(" ");
		}
	}
}
function checkiphone(){
	var user_iphone=$("#user_iphone").val();
	if(user_iphone==""){
		$("#spiphone").html("<font color='#ff0000'>iphone不能为空</font>");
		return false;
	}else{
		var res4=/^\d{11}$/;
		if(!res4.test(user_iphone)){
			$("#spiphone").html("<font color='#ff0000'>请输入正确iphone</font>");
		}else{
			$("#spiphone").html(" ");
		}
	}
}
</script>
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
<script type="text/javascript" src="assets/plugins/jquery-validation/dist/jquery.validate.min.js"></script>
<script type="text/javascript" src="assets/plugins/jquery-validation/dist/additional-methods.min.js"></script>
<script type="text/javascript" src="assets/plugins/select2/select2.min.js"></script>
<script type="text/javascript" src="assets/plugins/bootstrap-wysihtml5/wysihtml5-0.3.0.js"></script>
<script type="text/javascript" src="assets/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.js"></script>
<script type="text/javascript" src="assets/plugins/ckeditor/ckeditor.js"></script>
<script type="text/javascript" src="assets/plugins/bootstrap-markdown/js/bootstrap-markdown.js"></script>
<script type="text/javascript" src="assets/plugins/bootstrap-markdown/lib/markdown.js"></script>
<!-- END PAGE LEVEL PLUGINS -->
<!-- BEGIN PAGE LEVEL STYLES -->
<script src="assets/scripts/core/app.js"></script>
<script src="assets/scripts/custom/form-validation.js"></script>
<!-- END PAGE LEVEL STYLES -->
<script>
jQuery(document).ready(function() {   
   // initiate layout and plugins
   App.init();
   FormValidation.init();
});
</script>
<!-- END JAVASCRIPTS -->
</body>
<!-- END BODY -->
</html>