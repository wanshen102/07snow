window.Jumei = window.Jumei || {};
window._adwq = window._adwq || [];

Jumei.OrderConfirmation = {
    DefaultValue : [],
/*
    setDefaultValue:function(){
        $(".option_box input[name='address_id']").each(function(){
            if(currentPageDefaultValue.address_id == $(this).val()){
                $(this).parent().addClass("selected");
                $(this).attr("checked","checked").click();
            }
        });
    },
*/
    WebSite:$("#J_WebSite").val()+"/",
    total_amount:1, //this mean that have been pay money.
    init : function() {
        //Jumei.OrderConfirmation.setDefaultValue();
        Jumei.OrderConfirmation.enableOptionManager();
        Jumei.OrderConfirmation.changeDeliveryFee();
        Jumei.OrderConfirmation.show_promo_card_box();
        Jumei.OrderConfirmation.choose_promo_card();
        Jumei.OrderConfirmation.enableBalanceConfirm();
        Jumei.OrderConfirmation.choose_red_card();
        Jumei.OrderConfirmation.enableDiscountTooltip();
        //Jumei.OrderConfirmation.enableConfirmationShow();
    },
    enableDiscountTooltip: function(){
        //满返详情 hover 提示信息
        var $a = $('.discount_detail').find('a');
        $a.hover(function(){
            $(this).closest('.discount_common').find('.discount_tooltip').show();
        }, function(){
            $(this).closest('.discount_common').find('.discount_tooltip').hide();
        });
    },
    enableCardEffects: function(order_key, $wrap){
        var $tr = $wrap.find('.discount_info'),
            $td = $tr.find('td'),
            html = '',
            div = '<div class="discount_valid discount_common">' +
                    '<span class="discount_icon">{discount_icon}</span><span class="discount_main"> {discount_main}</span><span class="discount_detail">（{promocardReplace}付款后自动发放，货到付款为收货妥投后发放）</span>' +
                  '</div>';
        try{
            $.ajax({
                url: '/i/cart/GetRedReturnInfo?_ajax_=1&order_key=' + order_key,
                dataType: 'json',
                success: function(data){
                    if(data){
                        for(var i = 0, i_len = data.length; i < i_len; i++){
                            if(data[i]){
                                for(var x in data[i]){
                                    for(var y in data[i][x]){
                                        html += div.replace('{discount_icon}',  data[i][x][y].type === 'promocard' ? '满返' : '满返红包').replace('{discount_main}', data[i][x][y].sale_name).replace("{promocardReplace}",
                                            data[i][x][y].type === 'promocard' ?  '' : '分为50元红包发放；');
                                    }
                                }
                            }
                        }

                        if(html){
                            $td.html(html);
                            $tr.show();
                        }else{
                            $tr.hide();
                            $td.html('');
                        }
                    }
                }
            });
        }catch(e){}
    },
    enableConfirmationShow: function(){
        var confirm_pay_box = $('.confirm_pay_box');

        if (confirm_pay_box.length){
            var win_top,
                obj_top,
                $window = $(window),
                foot = $('#footer_container'),
                obj_height = confirm_pay_box.innerHeight();

            $window.scroll(function(){
                win_top = $window.height() + $window.scrollTop();
                obj_top = foot.offset().top - obj_height - 15;

                if ( obj_top + obj_height >= win_top ){
                    if ($.browser.msie && $.browser.version == '6.0'){
                        var left = ($window.width() - 960) / 2;
                        confirm_pay_box.css({'position':'absolute','top':(win_top - obj_height + 30)+'px','left':left+'px', zIndex:'1000', paddingBottom: '20px', borderTop: '1px solid #d5cfca'});
                    }else{
                        confirm_pay_box.css({'position':'fixed','bottom':'0px', zIndex:'1000', paddingBottom: '20px', borderTop: '1px solid #d5cfca'});
                    }
                }else{
                    confirm_pay_box.removeAttr('style');
                }
            });
        }
    },
    enableOptionManager: function() {
        $(".cart_products_v2").each(function(){
            if( $(this).attr("cart_key").indexOf("luxury") > 0){
                currentPageDefaultValue.has_luxury_deal = true;
            }
        });

        $('#province_new, #city, #county').change(function(){
            Jumei.OrderConfirmation.on_address_changed();
        });
        
        $("#address_wrap").delegate("div[selector='new_address'] input, div[selector='old_address'] input","click",function(){
            Jumei.OrderConfirmation.on_address_changed();
        });

        //#shipping_instant, #shipping_delay, #shipping_merge
        $('.J_EMS, .J_Express, #sf-express').click(function(){
            Jumei.OrderConfirmation.update_cod_options();
        });
        // 初始化默认项调用
        var selected = $("div.selected[selector='old_address'] input");
        if(selected.length > 0){
            selected.click();
        }else{
            //没有默认选中项，很可能没有地址，这时弹出 新地址填写框//注释是因为添加地址变了方式
            //$('#address_selector .option_box_new').click();
        }
        
        //Jumei.OrderConfirmation.on_address_changed();
    },
    enableBalanceConfirm:function(){
        var mobile_confirm = $("#mobile_confirm"),
            input_box = $("#use_balance_checkbox"),
            close = $('.close',mobile_confirm),
            binded_boxs = $(".is_bind",mobile_confirm),
            not_binded_boxs = $(".not_bind",mobile_confirm),
            bind_box = $("#mobile"),
            step1_boxs = $(".step1",mobile_confirm),
            step2_boxs = $(".step2",mobile_confirm),
            uid = $.cookie("uid");

        // 弹框
        // check whether is binded or not
        //$("#paytype_gateway").show();
        $.ajax({
            url:"/i/account/ajax_is_mobile_bind?uid=" + uid,
            success:function(data){
                //console.dir(data);
                //var data = $.parseJSON(data);
                // close
                close.click(function(e){
                    e.preventDefault();
                    mobile_confirm.hide();
                    $("#cboxOverlay").hide();
                    input_box.attr("checked", false);
                });
                // show pop box
                input_box.click(function(e){
                    var self = $(this),
                        checked = self.attr("checked"),
                        is_mobile_checked = self.attr("is_mobile_checked");
                    if ( checked && is_mobile_checked != "true" ){
                        var top = $(window).scrollTop() + 200 ,
                            left = $(window).scrollLeft() + parseInt( ($("body").width() - mobile_confirm.width() ) / 2 );
                        mobile_confirm.css({"left":left,"top":top}).show();
                        $("#cboxOverlay").css("opacity", "0.2").show();
                        input_box.removeAttr("checked");
                        
                        if ( $.browser.msie && $.browser.version == '6.0' ){
                            $("#cboxOverlay").height($("#container").height()+200);
                        }

                    }
                });

                // 未绑定时
                if ( data.is_bind == 0 ){
                    binded_boxs.hide();
                    not_binded_boxs.show();
                    step1_boxs.hide();
                    step2_boxs.hide();
                }
                // 已绑定时
                else{
                    step1_boxs.hide();
                    step2_boxs.hide();
                    binded_boxs.show();
                    not_binded_boxs.hide();
                    bind_box.remove();
                }
            }
        });


        $("#bind_new_mobile").click(function(e){
            e.preventDefault();
            binded_boxs.hide();
            not_binded_boxs.hide();
            step1_boxs.show();
            $("#rebindcheck").val("下一步").show().attr('is_rebind', 'true');
            $("#mobile_step1").show();
            Jumei.MobileBind.enableInput();
            //var mobile = $('<input name="mobile" id="mobile" type="text" class="not_bind"/>');
            //$("#get_confirm_code").before(mobile);
        });

    },
    /*
    enableOptionManager: function() {
        //无旧地址则展开地址表格
        if($("div[selector='old_address'] input").length == 0){
            $("#address_table").show();
        }

        $('#county').change(function(){
            Jumei.OrderConfirmation.on_address_changed();
        });

        $("div[selector='new_address'] input, div[selector='old_address'] input").click(function(){
            Jumei.OrderConfirmation.on_address_changed();
        });

        $('#EMS, #Express, #shipping_instant, #shipping_delay, #shipping_merge').click(function(){
            Jumei.OrderConfirmation.update_cod_options();
        });

        Jumei.OrderConfirmation.update_cod_options();
    },
*/
    on_address_changed : function() {
        Jumei.OrderConfirmation.process_express();
        Jumei.OrderConfirmation.update_cod_options();// 这句是重复调用。应在前端优化或重构中，删除或调整位置。
    },
    /*当金额为有可能为0调用该函数，如果不可能为0 调用update_cod_options 更新支付方式*/
    on_read_card_change:function(total_amount){
        Jumei.OrderConfirmation.total_amount = Number(total_amount);
        Jumei.OrderConfirmation.update_cod_options();
    },
    update_cod_options : function() {
        //if(!window.address_count){return;} //如果地址为空，就不用更新COD，如果更新 需要传address_id 取不到而报错
        Jumei.OrderConfirmation.update_cod_labels();
        var $other_title = $(".other_title"),
            $last_choose_mode = $("#last_choose_mode"),
            $last_input = $last_choose_mode.find("input"),
            $no_cod = $last_choose_mode.find('.no_cod'),
            addressStr = $('#address_selector').find('.option_box').filter('.selected').find('.addr_con').html() || '';
        /*
        *当进入页面、切换地址、修改地址、新增地址时，调用此接口，判断当前地址是否支持货到付款
        *请求参数：string addressStr（'省-市-区'格式的地址）
        *返回数据：json {CodShow:'0表示不支持货到付款，1表示支持货到付款，2表示支持货到付款，但不可用',
        *               noCodInfo:'不支持货到付款的原因',
        *               OtherTitle:'选择其他支付方式后面的文字'}
        */
        $.ajax({
            url: '/i/cart/ajax_logisticsInfo_paymentInfo',
            method: 'POST',
            data: {'addressStr': addressStr.split(' ')[0]},
            dataType: 'json',
            success: function(data){
                $other_title.html(data.OtherTitle);
                currentPageDefaultValue.should_show_cod = data.CodShow;
                if(data.CodShow === 0){
                    //移除货到付款
                    Jumei.OrderConfirmation.remove_cod_option();
                    //如果上次付款方式被选中  就不默认选择一个付款方式
                    if($last_input.attr("checked") && !$last_choose_mode.is(":hidden")){
                        return;
                    }
                    //如果上次支付方式是货到付款，就展开网上银行
                    $('.gateway_bank').click();
                }else {
                    no_cod_msg = data.noCodInfo;
                    if(Jumei.OrderConfirmation.isCurrentTotalAmountAllowCod()) {
                        Jumei.OrderConfirmation.add_cod_option();
                        if($last_choose_mode.length){
                            if(data.CodShow === 2 && $last_input.val() === 'COD'){
                                $last_input.attr('disabled', true).attr('checked', false);
                                $no_cod.text(no_cod_msg).show();
                                $last_choose_mode.addClass('disabled');
                                $(".alipay_activity_cod").hide();
                            }else{
                                $last_input.attr("disabled", false);
                                $no_cod.text('').hide();
                                $last_choose_mode.removeClass('disabled');
                                if(!no_cod_msg){
                                    $(".alipay_activity_cod").show();//支付宝优惠10元活动
                                }
                            }

                            if(!$last_input.attr("checked")){
                                if($last_input.attr("disabled")){
                                    $('.gateway_bank').click();
                                }else{
                                    $last_choose_mode.show().click();
                                }
                            }
                        }else{
                            if($('.gateway_COD').hasClass('disabled')){
                                $('.gateway_bank').click();
                            }else{
                                $('.gateway_COD').click();
                            }
                        }
                    } else {
                        Jumei.OrderConfirmation.remove_cod_option();
                        //如果上次付款方式被选中  就不默认选择一个付款方式
                        if($last_input.attr("checked") && !$last_choose_mode.is(":hidden")){
                            return;
                        }
                        //如果上次支付方式是货到付款，就展开网上银行
                        $('.gateway_bank').click();
                    }
                }
            }
        });
    },
   
    update_cod_labels : function() {
        if(Jumei.OrderConfirmation.isCurrentAddressAllowCod() && currentPageDefaultValue.should_show_cod == 1) {
            $('.J_label_express').text('快递（5元，系统自动判断选择快递, 支持货到付款）');
        }
        else {
            $('.J_label_express').text('快递（5元，系统自动判断选择快递）');
        }
    },
    process_express : function() {
        if( currentPageDefaultValue.has_luxury_deal ) {
            //$('.J_EMS').attr('checked', '').parent().hide();
            if( Jumei.OrderConfirmation.isCurrentAddressBeginWith(['北京'])) {
                $('.J_EMS').attr('checked', '').parent().hide();
                $('.J_Express').attr('checked', 'checked').click().parent().show();
            }else{
                $('.J_EMS').attr('checked', '').parent().show();
                $('.J_Express').attr('checked', 'checked').click().parent().show();
            }
            $(".J_EMS").click(function(){
                $("#gateway_COD").hide();
                $("#gateway_COD").next().hide();
            });
            $(".J_Express").click(function(){
                $("#gateway_COD").show();
                $("#gateway_COD").next().show();
            });
            /*
            setTimeout(function(){
                $("#gateway_COD").attr("disabled","true");
                $("#check-cod").attr("disabled","true");

                if( Jumei.OrderConfirmation.isCurrentAddressBeginWith(['北京'])) {
                    $('.J_EMS').attr('checked', '').parent().hide();
                    $('.J_Express').attr('checked', 'checked').click().parent().show();
                }else if( Jumei.OrderConfirmation.isCurrentAddressBeginWith(['新疆', '西藏'])) {
                    $('.J_EMS').attr('checked', 'checked').click().parent().show();
                    $('.J_Express').attr('checked', '').parent().hide();
                }else{
                    $('.J_EMS').attr('checked', '').parent().show();
                    $('.J_Express').attr('checked', 'checked').click().parent().show();
                }

            },200);
            */
        }
        else {

            var showWhat = 'both';
            if( Jumei.OrderConfirmation.isCurrentAddressBeginWith(['北京'])) {
                showWhat = 'Express';
            }
            else if( Jumei.OrderConfirmation.isCurrentAddressBeginWith(['西藏'])) {
                showWhat = 'EMS';
            }
            else if( Jumei.OrderConfirmation.isCurrentAddressBeginWith(['内蒙古'])) {
                var list = [];
                var cities = ['呼和浩特市', '包头市',  '鄂尔多斯市', '乌海市', '巴彦淖尔市', '乌兰察布市', '赤峰市', '通辽市', '呼伦贝尔市', '兴安盟'];
                for(var i in cities)
                    list.push('内蒙古自治区-' + cities[i]);
                if(Jumei.OrderConfirmation.isCurrentAddressBeginWith(list)) {
                    showWhat = 'Express';
                }
                else {
                    showWhat = 'EMS';
                }
            }
            else if( Jumei.OrderConfirmation.isCurrentAddressBeginWith(['宁夏'])) {
                var list = [];
                var cities = ['银川市'];
                for(var i in cities)
                    list.push('宁夏回族自治区-' + cities[i]);
                if(Jumei.OrderConfirmation.isCurrentAddressBeginWith(list)) {
                    showWhat = 'Express';
                }
                else {
                    showWhat = 'EMS';
                }
            }
            else if (Jumei.OrderConfirmation.isCurrentAddressBeginWith(['新疆'])) {
                var list = [];
                var cities = ['乌鲁木齐市', '克拉玛依市',  '昌吉回族自治州'];
                for (var i in cities)
                    list.push('新疆维吾尔自治区-' + cities[i]);
                if (Jumei.OrderConfirmation.isCurrentAddressBeginWith(list)) {
                    showWhat = 'both';
                }
                else {
                    showWhat = 'EMS';
                }
            }
            else if (Jumei.OrderConfirmation.isCurrentAddressBeginWith(['青海'])) {
                var list = [];
                var cities = ['西宁市'];
                for (var i in cities)
                    list.push('青海省-' + cities[i]);
                if (Jumei.OrderConfirmation.isCurrentAddressBeginWith(list)) {
                    showWhat = 'Express';
                }
                else {
                    showWhat = 'EMS';
                }
            }
            if(showWhat == 'Express') {
                $('.J_EMS').attr('checked', '').parent().hide();
                $('.J_Express').attr('checked', 'checked').click().parent().show();
            }
            else if(showWhat == 'EMS') {
                $('.J_EMS').attr('checked', 'checked').click().parent().show();
                $('.J_Express').attr('checked', '').parent().hide();
            }
            else {
                $('.J_EMS').attr('checked', '').parent().show();
                $('.J_Express').attr('checked', 'checked').click().parent().show();
            }
        }
    },
    isCurrentAddressBeginWith : function(list) {
        var address = '';
        if($('#new_address:checked').length > 0) {
            address = $('#province option:selected').text() + "-" + $('#city option:selected').text() + "-" + $('#county option:selected').text();
        }
        else if($("div[selector='old_address'] input:checked").length == 1) {
            address = $("div[selector='old_address'] input:checked").next().attr('data_address');
        }
        if(!$.isArray(list)) list = [list];
        for(var i in list) {
            var p = list[i];
            if(address.indexOf(p) == 0){
                return true;
            }
        }
        return false;
    },
    remove_cod_option : function() {
        var $cod = $('.gateway_COD'),
            visible = $cod.is(':visible');
        if(visible) {
            $cod.hide();
            $("#paytype_balance_info").css("visibility","visible");
            $("#use_balance_checkbox").css("visibility","visible");
        }
        var last_choose_mode = $("#last_choose_mode");
        if(last_choose_mode.length && last_choose_mode.find("input").val() === "COD"){
            last_choose_mode.hide();
        }
    },
    add_cod_option: function() {
        var $cod = $('.gateway_COD'),
            $cod_input = $cod.find('input'),
            $no_cod = $cod.find('.no_cod');

        if(currentPageDefaultValue.should_show_cod === 2){
            $cod_input.attr('disabled', true);
            $cod.addClass('disabled');
        }else if(currentPageDefaultValue.should_show_cod === 1){
            $cod_input.attr('disabled', false);
            $cod.removeClass('disabled');
        }

        no_cod_msg ? $no_cod.text(no_cod_msg).show() : $no_cod.text('').hide();
        if(!no_cod_msg){
            $(".alipay_activity_cod").show();//支付宝优惠10元活动
        }else{
            $(".alipay_activity_cod").hide();
        }
        $cod.show();
    },

    isCurrentTotalAmountAllowCod : function(){
        return !($(".cart_products #cart_total").text() == 0);
    },

    isCurrentLogisticAllowCod : function() {
        return ($('#sf-express:checked').length > 0) || ($('.J_Express:checked').length > 0);
    },
        
    isCurrentOldAddressAllowCod : function() {
        if(currentPageDefaultValue.should_show_cod == 0)
            return false;

        var allowCod = false;
        if(allowedAddresses != null && $("div.selected[selector='old_address']").length == 1) {
            var address = $("div.selected[selector='old_address'] input").next().find('.addr_con').text();
            for ( var i = 0 ; i < allowedAddresses.length ; i++ ){
                if(address.indexOf(allowedAddresses[i]) != -1) {
                    allowCod = true;
                    break;
                }
            }

        }
        return allowCod;
    },
        
    isCurrentNewAddressAllowCod : function() {
        if(currentPageDefaultValue.should_show_cod == 0)
            return false;
        
        if(province_ids && $('#new_address:checked').length > 0 && $('#province').val() != '' && province_ids.indexOf($('#province').val()) != -1) {
            return true;
        }
        if(county_ids && $('#new_address:checked').length > 0 && $('#county').val() != '' && county_ids.indexOf($('#county').val()) != -1) {
            return true;
        }
        if(city_ids && $('#new_address:checked').length > 0 && $('#city').val() != '' && city_ids.indexOf($('#city').val()) != -1) {
            return true;
        }
        

        return false;
    },

    isCurrentAddressAllowCod : function () {
        if(Jumei.OrderConfirmation.total_amount<=0){return false;} //if the total_amount is zero, not allow cod can be selected!
        return (Jumei.OrderConfirmation.isCurrentNewAddressAllowCod() || Jumei.OrderConfirmation.isCurrentOldAddressAllowCod());
    },
    show_promo_card_box:function(){
        $(document).bind("click", function(e){
            $('.choose_promo_card_box, .choose_red_card_box').hide();
        });
        //隐藏或显示券号输入框
        var direct_input = $(".direct_input");

        direct_input.click(function(){
            $(this).hide().next("input").show().next("a").css("display", "inline-block");
            $(".close_promo_card, .close_red_card").click();
        });


        //添加watermark
        var input_promo_card  =$("input.input_promo_card");
        var watermark_text = '输入现金券号';
        input_promo_card.focus(function(){
            $(this).addClass("focus");
            if($(this).val() === watermark_text){
                $(this).val('');
           }
        }).blur(function(){
             if($(this).val() === watermark_text || $(this).val() ==""){
                 $(this).removeClass("focus").val(watermark_text);
             }
        });

        //添加watermark
        var input_red_card  =$("input.input_red_card");
        var watermark_red_text = '输入红包号';
        input_red_card.focus(function(){
            $(this).addClass("focus");
            if($(this).val() === watermark_red_text){
                $(this).val('');
           }

        }).blur(function(){
             if($(this).val() === watermark_red_text || $(this).val() ==""){
                 $(this).removeClass("focus").val(watermark_red_text);
             }
        });
        $('.JS_use_promo_card').unbind('click');
        $('.JS_use_promo_card').click(function(e){
            e.preventDefault();
            var promo_card_box = $(this).parent().find(".promo_card_box");
            if(promo_card_box.css("display") == "none"){
                promo_card_box.show();
                $(this).children(0).html('-');
            }else{
                promo_card_box.hide();
                promo_card_box.hide();
                $(this).children(0).html('+');
            }
        });
    },
    choose_promo_card:function(){
        //动态计算下拉框的高度和滚动条的显示
        var promo_box = $(".choose_promo_card_box");

        $.each(promo_box, function () {
            var $this = $(this),
                promo_ul = $this.find("ul"), 
                promo_li = promo_ul.eq(0).children(), 
                promo_len = promo_li.length, 
                height = 0;

            if(promo_len <= 3){
                promo_ul.css({"overflow-y":"hidden"});
            }
            $this.css('visibility', 'hidden').show();
            for(var i = 0; i < promo_len && i < 3; i++){
                height += promo_li.eq(i).outerHeight();
            }
            promo_ul.height(height - 1);
        });

        promo_box.hide().css('visibility', 'visible');

        $('.choose_promo_card').unbind('click');
        $('.choose_promo_card').click(function(e){
            e.stopPropagation();
            e.preventDefault();

            $('.choose_red_card_box').hide();

            //data
            var parent_box = $(this).closest('.order_amount_container').find('.choose_promo_card_box'),
                 box = $(parent_box).find('ul');


            parent_box.show();
            parent_box.focus();

            var li;
            li = $("li",box);
            box.find('li:last').css({'border':'none'});

            li.hover(function(){
                $(this).addClass('hover');
            },function(){
                $(this).removeClass('hover');
            });

            // 关闭按钮
            parent_box.find('.close_promo_card').click(function(e){
                e.preventDefault();
                parent_box.hide();
            });

            // 失焦关闭现金券列表
            $(parent_box).blur(function(){
                parent_box.hide();
            });

        });
        $(".choose_promo_card_box ul li").unbind('click');
        $(".choose_promo_card_box ul li").click(function(){
            if(!$(this).hasClass('disabled_click')){
                $(this).closest('.choose_promo_card_box').prev().find('.input_promo_card').val($(this).find('.promo_card_num').text());
                $(this).closest('.choose_promo_card_box').prev().find('.confirm_promo_card').attr("cancel","false");
                $(this).closest('.choose_promo_card_box').hide();
                // 选择现金券的同时进行提交操作
                $(this).closest('.cart_products_v2').find('.confirm_promo_card').click();
            }
            return false;
        });
        $('.cart_products_v2 .confirm_promo_card').unbind('click');
        // 提交现金券
        $('.cart_products_v2 .confirm_promo_card').click(function(e){
            e.preventDefault();
            // 防止ajax反应慢，重复提交
            $(this).attr("disabled", true);
            var $this = $(this),
                 cardno = $(this).find('.promo_card_num').text(),
                 cart = $(this).closest('.cart_products_v2'),
                 cart_key = $(cart).attr('cart_key'),
                 order_id = $(".cart_left input[name='order_id']").val(),
                 delivery_fee = parseFloat($(cart).find('.choose_delivery[checked]').attr('delivery_fee') - $(cart).find("th[delivery_reduce]").attr('delivery_reduce')),
                 tr_promo_card = $(cart).find(".tr_promo_card");
            if($(this).attr("cancel") == "true"){
                var url = '/i/cart/ajax_del_promo_card';
                var cardno = $(cart).find(".J_Promo_cardno").val();
                $.post(
                    url,
                    {cart_key:cart_key,order_id:order_id,delivery_fee:delivery_fee,old_cardno:cardno},
                    function(data){
                        if(data.status == "success"){
                            tr_promo_card.hide();
                            ////改变说明文字。
                            $this.parent().find('.promo_card_text').html('使用现金券：');
                            $this.parent().find('.input_promo_card').val('输入现金券号');
                            $this.parent().find('.or').show();
                            $this.parent().find('.direct_input').show();
                            $this.parent().find('.choose_promo_card').show();
                            // 更新价格
                            $(cart).find('.total_amount').html(data.cart_key_amount);
                            $(".cart_products #cart_total").html(data.total_amount);
                            $("#cart_total2").html(data.total_amount);
                            $(".cart_products #need_amount").html(data.need_amount);
                            $(cart).find('.promo_red_amount').html(data.red_discount_price);//更改红包价格-优先现金券-所以可能改变
                            //修改隐藏域
                            $(cart).find(".J_Promo_cardno").val('');
                            $(cart).find(".J_Effect_params").val('');
                            // 更改按钮
                            $this.attr("cancel","false");
                            $this.html("使用").removeClass("btn_con_gray").hide();
                            // 更新余额文案
                            Jumei.OrderConfirmation.change_balance_text(data.need_amount);
                            Jumei.OrderConfirmation.update_cod_options();
                            //重新更改所有订单的价格
                            Jumei.OrderConfirmation.changeDeliveryFeeFun(cart_key,order_id,"");
                            //效果
                            Jumei.OrderConfirmation.enableCardEffects(cart_key, cart);
                        } else if (data.error) {
                            alert(data.error.message);
                        }
                        
                        $this.removeAttr("disabled");
                    }
                );
            }else{
                var url = '/i/cart/ajax_add_promo_card',
                    cardno = $(this).prev().val();
                if(cardno == '输入现金券号' || $.trim(cardno) == ''){
                    alert('请输入现金券号');
                    $this.removeAttr("disabled").prev("input").focus();
                    return false;
                }
                $.post(
                    url,
                    {cart_key:cart_key,cardno:cardno,order_id:order_id,delivery_fee:delivery_fee},
                    function(data){
                        if(data.status == 'success'){
                            var scrope = "",
                                promo_price = data.promo_discount_price,//现金券价格
                                red_price = data.red_discount_price;//红包价格
                            var $card_box = $this.parents('.promo_card_box');

                            //改变说明文字。
                            $this.parent().find('.promo_card_text').html('已使用现金券：'+ data.desc + '（满'+ data.minimal_order_amount +'元可使用）');
                            $this.parent().find('.input_promo_card').hide().val('输入现金券号');
                            //隐藏现金券选框
                            $this.parent().find('.choose_promo_card').hide();
                            $this.parent().find('.or').hide();
                            $this.parent().find('.direct_input').hide();

                            //展示减免的现金券
                            tr_promo_card.find('.promo_card_amount').html(promo_price);
                            tr_promo_card.show();

                            //修改隐藏域
                            $(cart).find(".J_Promo_cardno").val(cardno);
                            $(cart).find(".J_Effect_params").val(promo_price);

                            //修改提交按钮
                            $this.attr("cancel","true");
                            $this.html("取消").addClass('btn_con_gray').css("display", "inline-block");

                            //更新价格
                            $(cart).find('.total_amount').html(data.cart_key_amount);
                            $(".cart_products #cart_total").html(data.total_amount);
                            $("#cart_total2").html(data.total_amount);
                            $(".cart_products #need_amount").html(data.need_amount);

                            // 更新余额文案
                            Jumei.OrderConfirmation.change_balance_text(data.need_amount);
                            Jumei.OrderConfirmation.update_cod_options();

                            //重新更改所有订单的价格
                            Jumei.OrderConfirmation.changeDeliveryFeeFun(cart_key,order_id,"");
                            //效果
                            Jumei.OrderConfirmation.enableCardEffects(cart_key, cart);

                            if ($card_box.find('.confirm_red_card').attr('cancel') == 'true') {
                                if (red_price == '' || red_price == '0.00') {
                                    //取消红包
                                    $card_box.find('.confirm_red_card').click();
                                } else {
                                    //红包值改变
                                    $card_box.find('.promo_red_amount').html( red_price );
                                    $card_box.find('.J_RedEffect_params').val( red_price );
                                }
                            }
                            
                        }else if(data.error){
                            alert(data.error.message);
                            if ($this.parent().find('.choose_promo_card').css("display")=="none"){
                                $this.attr("cancel","true");
                            }else{
                                $this.parent().find('.input_promo_card').val('输入现金券号').html('');
                                $this.attr("cancel","false");
                            }
                        }

                        $this.removeAttr("disabled");
                    }
                );
            }
            // 防止网络不通时，提交按钮不可用
            setTimeout(function(){
                $this.removeAttr("disabled");
            },1000);
        });
    },
    choose_red_card:function(){
        //动态计算下拉框的高度和滚动条的显示
        var red_box = $(".choose_red_card_box");

        $.each(red_box, function () {
            var $this = $(this),
                red_ul = $this.find("ul"), 
                red_li = red_ul.eq(0).children(), 
                red_len = red_li.length, 
                height = 0;

            if(red_len <= 3){
                red_ul.css({"overflow-y":"hidden"});
            }
            $this.css('visibility', 'hidden').show();
            for(var i = 0; i < red_len && i < 3; i++){
                height += red_li.eq(i).outerHeight();
            }
            red_ul.height(height - 1);
        });
        
        red_box.hide().css('visibility', 'visible');

        $('.choose_red_card').unbind('click');
        $('.choose_red_card').click(function(e){
            e.stopPropagation();
            e.preventDefault();

            $('.choose_promo_card_box').hide();

            //data
            var parent_box = $(this).closest('.order_amount_container').find('.choose_red_card_box'),
                 box = $(parent_box).find('ul');


            parent_box.show();
            parent_box.focus();

            var li;
            li = $("li",box);
            box.find('li:last').css({'border':'none'});

            li.hover(function(){
                $(this).addClass('hover');
            },function(){
                $(this).removeClass('hover');
            });

            // 关闭按钮
            parent_box.find('.close_red_card').click(function(e){
                e.preventDefault();
                parent_box.hide();
            });

            // 失焦关闭现金券列表
            $(parent_box).blur(function(){
                parent_box.hide();
            });

        });
        $(".choose_red_card_box ul li").unbind('click');
        $(".choose_red_card_box ul li").click(function(){
            if(!$(this).hasClass('disabled_click')){
                $(this).closest('.choose_red_card_box').parent().find('.input_red_card').val($(this).find('.red_card_num').text());
                $(this).closest('.choose_red_card_box').parent().find('.confirm_red_card').attr("cancel","false");
                $(this).closest('.choose_red_card_box').hide();
                // 选择现金券的同时进行提交操作
                $(this).closest('.cart_products_v2').find('.confirm_red_card').click();
            }
            return false;
        });
        $('.cart_products_v2 .confirm_red_card').unbind('click');
        // 提交现金券
        $('.cart_products_v2 .confirm_red_card').click(function(e){
            e.preventDefault();
            // 防止ajax反应慢，重复提交
            $(this).attr("disabled", true);
            var $this = $(this),
                 cart = $(this).closest('.cart_products_v2'),
                 cart_key = $(cart).attr('cart_key'),
                 order_id = $(".cart_left input[name='order_id']").val(),
                 delivery_fee = parseFloat($(cart).find('.choose_delivery[checked]').attr('delivery_fee') - $(cart).find("th[delivery_reduce]").attr('delivery_reduce')),
                 tr_promo_card = $(cart).find(".tr_red_card");
            if($(this).attr("cancel") == "true"){
                var url = '/i/cart/ajax_del_red_envelope';
                var cardno = $(cart).find(".J_Red_cardno").val();
                $.post(
                    url,
                    {cart_key:cart_key,order_id:order_id,delivery_fee:delivery_fee,old_cardno:cardno},
                    function(data){
                        if(data.status == "success"){
                            tr_promo_card.hide();
                            ////改变说明文字。
                            $this.parent().find('.promo_red_text').html('使用红包：');
                            $this.parent().find('.input_red_card').val('输入红包号');
                            $this.parent().find('.or').show();
                            $this.parent().find('.direct_input').show();
                            $this.parent().find('.choose_red_card').show();
                            // 更新价格
                            $(cart).find('.total_amount').html(data.cart_key_amount);
                            $(".cart_products #cart_total").html(data.total_amount);
                            $("#cart_total2").html(data.total_amount);
                            $(".cart_products #need_amount").html(data.need_amount);
                            //修改隐藏域
                            $(cart).find(".J_Red_cardno").val('');
                            $(cart).find(".J_RedEffect_params").val('');
                            // 更改按钮
                            $this.attr("cancel","false");
                            $this.html("使用").removeClass("btn_con_gray").hide();
                            // 更新余额文案
                            Jumei.OrderConfirmation.change_balance_text(data.need_amount);
                            Jumei.OrderConfirmation.on_read_card_change(data.total_amount);

                            //重新更改所有订单的价格
                            Jumei.OrderConfirmation.changeDeliveryFeeFun(cart_key,order_id,"");
                            //效果
                            Jumei.OrderConfirmation.enableCardEffects(cart_key, cart);
                        } else if (data.error) {
                            alert(data.error.message);
                        }
                        $this.removeAttr("disabled");
                    }
                );
            }else{
                var url = '/i/cart/ajax_add_red_envelope',
                     cardno = $(this).prev().val();
                if(cardno == '输入红包号' || $.trim(cardno) == ''){
                    alert('请输入红包号');
                    $this.removeAttr("disabled").prev("input").focus();
                    return false;
                }
                $.post(
                    url,
                    {cart_key:cart_key,card_no:cardno,order_id:order_id,delivery_fee:delivery_fee},
                    function(data){
                        if(data.status == 'success'){
                            var promo_price = data.promo_discount_price,//现金券价格
                                red_price = data.red_discount_price;//红包价格
                            var $card_box = $this.parents('.promo_card_box');

                            //改变说明文字。
                            $this.parent().find('.promo_red_text').html('已使用红包：' + data.desc + '（满'+ data.minimal_order_amount +'元可使用）');
                            $this.parent().find('.input_red_card').hide().val('输入红包号');
                            //隐藏红包选框
                            $this.parent().find('.choose_red_card').hide();
                            $this.parent().find('.or').hide();
                            $this.parent().find('.direct_input').hide();
                            //展示减免的现金券
                            tr_promo_card.find('.promo_red_amount').html(red_price);
                            tr_promo_card.show();

                            //修改隐藏域
                            $(cart).find(".J_Red_cardno").val(cardno);
                            $(cart).find(".J_RedEffect_params").val(red_price);

                            //修改提交按钮
                            $this.attr("cancel","true");
                            $this.html("取消").addClass('btn_con_gray').css("display", "inline-block");

                            //更新价格
                            $(cart).find('.total_amount').html(data.cart_key_amount);
                            $(".cart_products #cart_total").html(data.total_amount);
                            $("#cart_total2").html(data.total_amount);
                            $(".cart_products #need_amount").html(data.need_amount);

                            // 更新余额文案
                            Jumei.OrderConfirmation.change_balance_text(data.need_amount);
                            Jumei.OrderConfirmation.on_read_card_change(data.total_amount);

                            //重新更改所有订单的价格
                            Jumei.OrderConfirmation.changeDeliveryFeeFun(cart_key,order_id,"");
                            //效果
                            Jumei.OrderConfirmation.enableCardEffects(cart_key, cart);

                            //改变现金券的值
                            $card_box.find('.promo_card_amount').html( promo_price );
                            $card_box.find('.J_Effect_params').val( promo_price );
                        }else if(data.error){
                            alert(data.error.message);
                            if ($this.parent().find('.choose_red_card').css("display")=="none"){
                                $this.attr("cancel","true");
                            }else{
                                $this.parent().find('.input_red_card').val('输入红包号').html('');
                                $this.attr("cancel","false");
                            }

                        }
                        $this.removeAttr("disabled");
                    }
                );
            }
            // 防止网络不通时，提交按钮不可用
            setTimeout(function(){
                $this.removeAttr("disabled");
            },1000);
        });
    },
    changeDeliveryFeeFun : function(cart_key,order_id,express_selector,effect_params,promo_cardno){
            $.post(
                "/i/cart/ajax_update_delivery",
                {cart_key:cart_key,express_selector:express_selector,order_id:order_id,effect_params:effect_params,promo_cardno:promo_cardno},
                function(data){
                    if(data.status == "success"){
                        Jumei.OrderConfirmation.update_cod_options();
                        if(data.order_delivery){
                            for(var delivery_key in data.order_delivery){
                                var order_delivery = data.order_delivery[delivery_key];
                                var order_wrap = $(".cart_products_v2[cart_key='"+delivery_key+"']");
                                var express_wrap = order_wrap.find(".express_wrap");
                                if(order_delivery.delivery_fee_reduction){ //如果享受了包邮
                                    var _txt = '';
                                    if (order_delivery.delivery_fee_reduction_desc) {
                                        _txt = "已享受"+order_delivery.delivery_fee_reduction_desc;
                                    } else {
                                        _txt = "已享受包邮";
                                    }
                                    order_wrap.find(".J_Final_Delivery").html(order_delivery.delivery_fee);
                                    express_wrap.find(".J_Delivery_reduction").html(order_delivery.delivery_fee_reduction);
                                    express_wrap.find(".express_tit b").html("（"+_txt+"）");
                                    express_wrap.parents("tr").show();
                                }else{
                                    express_wrap.parents("tr").hide();
                                }
                                order_wrap.find(".total_amount").html(" "+order_delivery.cart_key_amount);
                            }
                        }

                    //var cart_order = $('.cart_products_v2[cart_key='+data.cart_key+']');

                        $(".cart_products #cart_total").html(data.total_amount);
                        $("#cart_total2").html(data.total_amount);
                        $(".cart_products #need_amount").html(data.need_amount);
                        //改隐藏域值
                        if(express_selector=='EMS'){
                            $(cart).find(".J_Delivery_fee").val('15');
                        }else{
                            $(cart).find(".J_Delivery_fee").val('5');
                        }
                        Jumei.OrderConfirmation.change_balance_text(data.need_amount);
                    }else{
                        try{
                            alert(data.msg || data.message);
                        }catch(e){}
                    }
                },
                'json'
            );

    },
    changeDeliveryFee:function(){
        var inputs = $('.cart_products_v2 input.choose_delivery');
        inputs.unbind('click');
        inputs.click(function(){
            var cart_key,
                cart,
                effect_params,
                order_id,
                promo_cardno,
                express_selector,
                delivery_fee;
            cart = $(this).closest('.cart_products_v2');
            cart_key = $(cart).attr("cart_key");
            express_selector = $(this).val();
            order_id = $(".cart_left input[name='order_id']").val();
            effect_params  = $(cart).find(".J_Effect_params").val();
            promo_cardno  = $(cart).find(".J_Promo_cardno").val();
            delivery_fee = $(this).attr("delivery_fee");
            $(cart).find(".J_Final_Delivery").html(delivery_fee);

            Jumei.OrderConfirmation.changeDeliveryFeeFun(cart_key,order_id,express_selector,effect_params,promo_cardno);
        });
        //初始化正确数据
        inputs.each(function(){
            if($(this).attr("checked")==true){
                $(this).click();
            }
        });
    },
    change_balance_text:function(need_amount){
        var balance = parseFloat($('#account_balance').text()) > 0 ? $('#account_balance').text() : 0;
        var cart_total = $("#cart_total").text();
        if (need_amount >0 ) {
			var proceed_notice = '<label for="use_balance_checkbox">使用聚美余额付款<span class=""><font class="pink">¥</font><span id="account_balance" class="pink">'+balance
                                +'</span> 元</span><span style="">，其余 <span class="pink"><font>¥</font>'+need_amount.toFixed(2)+"</span> 元用其他方式付款。（当前账户余额：<span class='pink'><font>¥</font>"+balance+"</span>）</label>";
            $("#paytype_balance_info").html(proceed_notice);
			//$('#paytype_gateway').css('display', 'block');
		} else {
            var proceed_notice = '<label for="use_balance_checkbox"><span id="paytype_balance" style="">使用聚美余额支付全部 </span><span class=""><font class="pink">¥</font><span class="pink">'+cart_total
                                 +'元</span><span style="">（当前账户余额：<span class="pink"><font>¥</font><span id="account_balance">'+ balance +'</span></span>）</span></label>';
			$("#paytype_balance_info").html(proceed_notice);
			//$('#paytype_gateway').hide();
		}

        if (balance > 0 && ($(".cod_user_balance").length === 0)){//用户有余额且提示节点未渲染过
            var cod_proceed_notice = $("<span class='cod_user_balance pink' style='display: none'>亲,货到付款不支持余额支付哦</span>");

            $(".gateway_COD").append(cod_proceed_notice);
        }
    }
}

$(document).ready(function(){
    if(alert_message){
        alert(alert_message);
    }
    Jumei.OrderConfirmation.DefaultValue = currentPageDefaultValue;
    Jumei.OrderNew.setDefaultValue( currentPageDefaultValue );

    //then Jumei.Order will do a callback to Jumei.OrderConfirmation.init
});