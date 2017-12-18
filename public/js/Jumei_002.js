if (!window.Jumei) {
    window.Jumei = new Object();
};
Jumei.MobileBind = {

    is_ajax_request: false,
    can_confirm_button:false,
    is_force_rebind:false,
    is_force_bind:false,
    is_bind: false,
    url: '/i/account/ajax_mobile_bind',
    token: $('#JS_token_data').val(),
    from: 'from_cart_confirmation', //手机绑定来源 商品订单confirmation
    operationtype_balance: 'operationtype_user_balance', //余额手机验证支付
    operationType_bind: 'operationtype_user_bind_mobile', //手机绑定
    is_cart: 0,
    init: function (){
        Jumei.MobileBind._init_phone_form_data();
        
        //Jumei.MobileBind.enterBind();
        Jumei.MobileBind.inputCheckValue();
        Jumei.MobileBind.getConfirmCode();
        $('.mobile_subscribe #bind').unbind('click');
        $('.mobile_subscribe #rebindcheck').unbind('click');
        $('.mobile_subscribe #rebind').unbind('click');
        $('.mobile_subscribe #bind').click(Jumei.MobileBind.bindMobile);
        $('.mobile_subscribe #rebindcheck').click(Jumei.MobileBind.reBindMobileCheck);
        $('.mobile_subscribe #rebind').click(Jumei.MobileBind.reBindMobile);
        // 检查是否为购物车
        Jumei.MobileBind.check_is_cart();
        Jumei.MobileBind.bindEnterKey();
        
    },

    //初始化手机绑定来源 from参数
    _init_phone_form_data: function () {
        var is_phone_confirm = $('#use_balance_checkbox').attr('is_phone_confirm'),
            is_payment_again = $('#use_balance_checkbox').attr('is_payment_again');

        if (is_payment_again) {
            Jumei.MobileBind.from = 'from_cart_confirmation_again_payment'; //手机绑定来源 商品订单再次支付
        }
        if (is_phone_confirm) {
            Jumei.MobileBind.from = 'from_mobile_recharge'; //手机绑定来源 手机充值
        }
        if (is_phone_confirm && is_payment_again) {
            Jumei.MobileBind.from = 'from_mobile_recharge_again_payment'; //手机绑定来源 手机充值再次支付
        }
    },

    check_is_cart:function(){
        (RM_CONTROL == "Cart") ? Jumei.MobileBind.is_cart = 1 : Jumei.MobileBind.is_cart = 0;
    },
    bindEnterKey:function(){
        $("#subscribe_form").submit(function(e){
            e.preventDefault();
            $("#subscribe_form .submit_subscribe").each(function(){
                if ( $(this).css("display") != "none" ){
                    $(this).trigger("click");
                }
            });
        });

        $('#change_code').click(function(){
            var d = new Date();
            var src = '/i/cart/hash_code?from=cart_balance&'+d.getTime();
            $('#code').attr('src',src);
        });

    },
    inputCheckValue: function (){
        var default_value = new Array();
        default_value['mobile'] = '';
        default_value['confirm_code']='';

        var focus = function(){
            var value = $(this).val();
            if( value == default_value[$(this).attr('name')] ){
                $(this).val('').removeClass('default_value');
                return false;
            }
        };

        var blur = function(){
            var value = $(this).val();
            if( value == '' ){
                $(this).val( default_value[$(this).attr('name')] ).addClass('default_value');
                return false;
            }
            if( value != default_value[$(this).attr('name')] ){
                return false;
            }
        };
        var loadDefaultValue = function() {
            var name = $(this).attr('name');
            return default_value[name];
        };

        $('.mobile_subscribe #mobile').val( loadDefaultValue ).addClass('default_value').focus(focus).blur(blur);
        $('.mobile_subscribe #confirm_code').val( loadDefaultValue ).addClass('default_value').focus(focus).blur(blur);
    },
    enableInput: function (){
        $('.mobile_subscribe #mobile').removeAttr('readonly').removeClass('readonly').removeAttr('disabled');
        $('.mobile_subscribe #get_confirm_code').removeAttr('disabled').val('获取手机校验码');
        $('#wait_time').val(60);
        $("#get_confirm_code").stopTime('count');
    },
    disableInput: function (){

        var w = $('#wait_time').val();
        var wait = 60;
        if( w > 0 && w < 61 ){
            wait = w;
        }
        var count = function (){
            if( wait == 0 ){
                Jumei.MobileBind.enableInput();
            }else{
                $('.mobile_subscribe #get_confirm_code').val(wait+'秒后重新发送');
                wait--;
            }
        };
        $('.mobile_subscribe #mobile').attr('readonly','readonly').addClass('readonly').attr('disabled','true');
        $('.mobile_subscribe #get_confirm_code').attr('readonly','readonly').attr('disabled','true');

        $("#get_confirm_code").everyTime(1000, 'count', count);
    },
    getConfirmCode: function (){
        var get_confirm_code = function(){
            Jumei.MobileBind.disableInput();
            Jumei.MobileBind.ajaxRequestSendConfirmCode();
            Jumei.MobileBind.can_confirm_button = true;
        };
        $('.mobile_subscribe #get_confirm_code').click(get_confirm_code);
    },
    set_cart_check:function(){
        $("#mobile_confirm").hide();
        $("#cboxOverlay").hide();
        $("#use_balance_checkbox").attr("checked","true").attr("is_mobile_checked","true");
        var check_pay_form=$('#check_pay_form');
        if(check_pay_form.length){
            check_pay_form.attr('is_balance_payment',1).removeAttr('target');
        }
        $("#rebindcheck").show();
    },
    jump_to_step2:function(){
        var mobile_confirm = $("#mobile_confirm"),
            input_box = $("#use_balance_checkbox"),
            close = $('.close',mobile_confirm),
            binded_boxs = $(".is_bind",mobile_confirm),
            not_binded_boxs = $(".not_bind",mobile_confirm),
            bind_box = $("#mobile"),
            step1_boxs = $(".step1",mobile_confirm),
            step2_boxs = $(".step2",mobile_confirm),
            uid = $.cookie("uid");

        step1_boxs.hide();
        step2_boxs.show();
        $("#mobile_step1").hide();
        $("#mobile_step2").show();

        var mobile = $('<p id="new_mobile" style="margin-left: 36px;">新绑定手机号：<input name="mobile" id="mobile" type="text" class="step2" maxlength="11"/></p>');
        $("#get_confirm_code").parent().after(mobile);

        var get_confirm_code = $('#get_confirm_code').clone(true);
        $('#get_confirm_code').remove();
        $("#confirm_code").val('');
        $("#new_mobile").append(get_confirm_code);

        $("#confirm_code").parent().css("padding-left","69px");
        $("#subscribe_form .mobile_form").css("margin-left","-10px");
        if ( $.browser.msie && parseInt ($.browser.version) < 8 ){
            $("#subscribe_form .mobile_form").css("margin-left","-20px");
        }
        $("#rebindcheck").hide();
        $("#rebind").show();


    },
    bindMobile: function (){
        // 首先尝试绑定
        var confirm_code = $('#confirm_code').val();
        var password = $('#password').val();

        var cart_confirmation = $("#cart_confirmation").val();
        var url = Jumei.MobileBind.url+'?action=try_bind&cart_confirmation=' + cart_confirmation +'&confirm_code='+confirm_code + "&is_cart=" + Jumei.MobileBind.is_cart;
        /*if( typeof(password) != 'undefined' && password.length <= 0 ){
            alert('请输入密码');
            return false;
        }else{
            url += '&password='+password;
        }*/
        if(Jumei.MobileBind.is_force_bind){
            url +='&force=1';
        }
        if( confirm_code.length != 6 ){
            if(confirm_code.length == 0){
                alert('请输入手机校验码');
                return false;
            }else{
                alert('手机校验码输入错误');
                return false;
            }
        }

        if(!Jumei.MobileBind.can_confirm_button){
        	alert("请先获取手机校验码！");
        	return false;
        }
        // if(is_binded == 'true'){
        //     var goon = confirm('该手机号已被其他账号绑定。如果继续，原账号将自动解绑。是否继续？');
        //     if(goon == false){
        //         return false;
        //     }
        // }
        if( Jumei.MobileBind.is_ajax_request === true ){
            return false;
        }
        url += '&from='+Jumei.MobileBind.from+'&operationType='+Jumei.MobileBind.operationType_bind+'&token='+Jumei.MobileBind.token;
        Jumei.MobileBind.is_ajax_request = true;
        $.get(url, function (data){
            Jumei.MobileBind.is_force_bind = false;
            Jumei.MobileBind.is_ajax_request = false;
            switch(data.error){
                case 'success':
                    $("#go_to_success").val("true");
                    if (RM_CONTROL == "Cart" || RM_CONTROL == 'Mobile'){
                        Jumei.MobileBind.set_cart_check();
                    }
                    break;
                case 'binded':
                    // 刷新当前页面
                    alert(data.message); location.reload();
                    break;
                case 'bind_other_user':
                    // 其他人绑定了该手机号
                    alert(data.message);
                    // var bind_other = confirm(data.message);
                    // if(bind_other ){
                    //     Jumei.MobileBind.is_force_bind=true;
                    //     Jumei.MobileBind.bindMobile();
                    //     return 
                    // }

                    break;
                case 'unknow_error':
                    alert(data.message);
                    break;
                // 还有没处理完的情况
                default:
                    alert(data.message);
            }
            
            
        },'json');
    },
    reBindMobile: function (){
        var confirm_code = $('#confirm_code').val();
        var verify_code = $("#verify_code").val();

        var url = Jumei.MobileBind.url+'?action=try_rebind&confirm_code='+confirm_code + "&is_cart=" + Jumei.MobileBind.is_cart +  "&verify_code=" + verify_code;
        if(Jumei.MobileBind.is_force_rebind){
            url += '&force=1';
        }
        if( confirm_code.length != 6 ){
            if(confirm_code.length == 0){
                alert('请输入手机校验码');
                return false;
            }else{
                alert('手机校验码输入错误');
                return false;
            }
        }

        // 验证码检查
        if ( verify_code!= undefined && verify_code.length != 4 ){
            alert("验证码输入错误");
            return false;
        }

        if(!Jumei.MobileBind.can_confirm_button){
            alert("请先获取手机校验码！");
            return false;
        }
        if( Jumei.MobileBind.is_ajax_request === true ){
            return false;
        }
        if(Jumei.MobileBind.is_bind == true){
            var goon = confirm('该手机号已被其他账号绑定。如果继续，原账号将自动解绑。是否继续？');
            if(goon == false){
                return false;
            }
        }
        url += '&from='+Jumei.MobileBind.from+'&operationType='+Jumei.MobileBind.operationType_bind+'&token='+Jumei.MobileBind.token;
        Jumei.MobileBind.is_ajax_request = true;
        $.get(url, function (data){
            Jumei.MobileBind.is_ajax_request = false;
            Jumei.MobileBind.is_force_rebind = false;
            switch(data.error){
                case 'success':
                    $("#go_to_success").val("true");
                    break;
                case 'binded':
                    alert(data.message);
                    location.reload();
                    break;
                case 'phone_binded_times_out':
                    alert(data.message);
                    break;
                case 'no_mobile':
                    // 可能是出错了
                    alert(data.message);
                    break;
                case 'bind_other_user':
                    // 该号码绑定到其他手机上了
                    alert(data.message);
                    // var force = confirm(data.message);
                    // if(force){
                    //     Jumei.MobileBind.is_force_rebind =  true;
                    //     Jumei.MobileBind.reBindMobile();
                    //     // 重新请求时会执行后面的代码
                    //     return ;
                    // }
                    break;
                case 'unbinded':
                    // 之前未绑定过手机
                    alert(data.message);
                    // TODO 跳转到 新绑定
                    break;
                case 'bind_other_phone':
                    // 应该不出现才对
                    alert(data.message);
                    break;
                case 'old_phone_check_failed':
                    alert(data.message);
                    // TODO 应该跳到 第一步
                    break;
                case 'unknow_error':
                    alert(data.message);
                    break;
                default:
                    alert(data.message);
                    break;
            }
            if($("#go_to_success").val() == 'true'){
                if(RM_CONTROL == "Cart" || RM_CONTROL == 'Mobile'){
                    Jumei.MobileBind.set_cart_check();
                }
            }
        },'json');

        // $.getScript(url, function(){
        //     Jumei.MobileBind.is_ajax_request = false;
        //     if($("#go_to_success").val() == 'true'){
        //         if (RM_CONTROL == "Cart"){
        //             Jumei.MobileBind.set_cart_check();
        //         }else if (RM_ACTION == "balance_confirm"){
        //             location.href = "/i/account/process_withdrawals";
        //         }else{
        //             Jumei.MobileBind.goToSuccess();
        //         }

        //     }
        //     if($("#is_confirm_to_clear").val() == 'true'){
        //         Jumei.MobileBind.ajaxRequestBindMobile();
        //     }
        // });
    },
    reBindMobileCheck: function (){
        var confirm_code = $('#confirm_code').val();
        var verify_code = $("#verify_code").val();

        var action = 'check',
            operationType = Jumei.MobileBind.operationtype_balance;

        if ( $('.mobile_subscribe #rebindcheck').attr('is_rebind') || $('.mobile_subscribe #bind').is(':visible') ) {//如果是解绑 否则 余额验证码直接支付
            operationType = Jumei.MobileBind.operationType_bind;
            action = 'rebind_check';
        }

        var url = Jumei.MobileBind.url+'?action='+action+'&confirm_code='+confirm_code + "&is_cart=" + Jumei.MobileBind.is_cart + "&verify_code=" + verify_code ;
        if( confirm_code.length != 6 ){
            if(confirm_code.length == 0){
                alert('请输入校验码');
                return false;
            }else{
                alert('校验码输入错误');
                return false;
            }
        }

     
        if(!Jumei.MobileBind.can_confirm_button){
            alert("请先获取手机校验码！");
            return false;
        }
        // 验证码检查
        if ( verify_code!= undefined && verify_code.length != 4 ){
            alert("验证码输入错误");
            return false;
        }

        
        if( Jumei.MobileBind.is_ajax_request === true ){
            return false;
        }
        
        url += '&from='+Jumei.MobileBind.from+'&operationType='+operationType+'&token='+Jumei.MobileBind.token;
        Jumei.MobileBind.is_ajax_request = true;
        $.get(url, function (data){
            Jumei.MobileBind.is_ajax_request = false;
            switch(data.error){
                case 'error_code':
                    alert("验证码错误！");$("#code").attr("src",data.data.src);
                    break;
                case 'success':
                    $("#go_to_rebind").val("true");
                    break;
                default:
                // 未处理完
                    alert(data.message);
                    break;
            }
            if($("#go_to_rebind").val() == 'true'){
                // 绑定新手机号的时候
                if ( $("#mobile_step1").css("display") !="none" ){
                    Jumei.MobileBind.enableInput();
                    Jumei.MobileBind.jump_to_step2();
                }else{
                    Jumei.MobileBind.set_cart_check();
                }
            }
            $("#go_to_rebind").val("false");


            if($("#is_confirm_to_clear").val() == 'true'){
                //Jumei.MobileBind.ajaxRequestBindMobile();
            }
        },'json');
    },
    ajaxRequestSendConfirmCode: function () {
        if( Jumei.MobileBind.is_ajax_request === true ) return false;
        Jumei.MobileBind.is_ajax_request = true;
        var obj = $('.mobile_subscribe #mobile');
        var format = /^(((13[0-9]{1})|15[0-9]{1}|18[0-9]{1}|14[0-9]{1})+\d{8})$/;
        var mobile = obj.val();
        if(typeof(obj.val()) == 'undefined'){
            mobile = '';
        }
        var url = Jumei.MobileBind.url+'?action=send_sms&force=1&mobile='+mobile + "&is_cart=" + Jumei.MobileBind.is_cart;
        if(typeof(obj.val()) != 'undefined' && !format.test(mobile) ){
            alert('请输入正确的手机号码');
            obj.addClass('field').focus();
            Jumei.MobileBind.enableInput();
            Jumei.MobileBind.is_ajax_request = false;
            return false;
        }else{

            obj.removeClass('field');
        }
        var operationType = Jumei.MobileBind.operationtype_balance;
        if ( $('.mobile_subscribe #rebindcheck').attr('is_rebind') || $('.mobile_subscribe #bind').is(':visible')) {//如果是解绑 否则 余额验证码直接支付
            operationType = Jumei.MobileBind.operationType_bind;
        }
        url += '&from='+Jumei.MobileBind.from+'&operationType='+operationType+'&token='+Jumei.MobileBind.token;
        $.get(
            url,
            function(data){
                Jumei.MobileBind.is_ajax_request = false;
                if( $('#wait_time').val() > 0 ){
                    $("#get_confirm_code").stopTime('count');
                    Jumei.MobileBind.disableInput();
                }
                switch(data.error){
                    case 'success':
                        alert(data.message);
                        Jumei.MobileBind.count_down=true;
                        break;
                    case 'format_error':
                        alert(data.message);
                        break;
                    case 'unsafe':
                        alert(data.message);
                        Jumei.MobileBind.init();setTimeout(function(){Jumei.MobileBind.enableInput();},100);
                        break;
                    case 'time':
                        alert(data.message);$("#wait_time").val("'.$r['time'].'");
                        break;
                    case 'mobile_used_by_other':
                        alert(data.message);Jumei.MobileBind.enableInput();
                        break;
                    default:
                        alert(data.message);
                        break;
                }
            },
            'json'
            );
    },
    ajaxRequestBindMobile: function (){
        //暂时在cart页没有用到
        // var confirm_code = $('#confirm_code').val();
        // var will_send_hour = $('input[name="will_send_hour"]:checked').val();
        // var url = Jumei.MobileBind.url+'?action=bind&confirm_code='+confirm_code + "&is_cart=" + Jumei.MobileBind.is_cart;
        // if( confirm_code.length != 6 ){
        //     alert('请输入校验码');
        //     return false;
        // }

        // // 验证码检查
        // var verify_code = $("#verify_code").val();
        // if ( verify_code.length != 4 ){
        //     alert("验证码输入错误");
        //     return false;
        // }

        // if( Jumei.MobileBind.is_ajax_request === true ) return false;
        // Jumei.MobileBind.is_ajax_request = true;

        // $.getScript(url, function(){
        //     Jumei.MobileBind.is_ajax_request = false;
        //     if($("#go_to_subscribe").val() == 'true'){
        //         Jumei.MobileBind.goToSuccess();
        //     }
        // });
    }
}
