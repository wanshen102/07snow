if (!window.Jumei) {
    window.Jumei = new Object();
};
window.debug = function($obj) {
    if (window.console && window.console.log) {
        window.console.log($obj);
    }
};
window.parseBool = function(string) {
    if (string == "true" || string == true) {
        return true;
    } else if (string == "false" || string == false) {
        return false
    }
};
jQuery.fn.hasAttr = function(attr) {
    var ret = jQuery(null).not(document);
    this.each(function() {
        if ($(this).attr(attr)) {
            ret = ret.add($(this));
        }
    });
    return ret;
};

// 对数组对象排序
jQuery.fn.bubbleSort = function(array){
    var length = array.length, temp;
    for(var i = 0; i < length - 2; i++){
        for (var j = length -1; j >=1;j--) {
            if (array[j].val < array[j - 1].val){
                temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
        }
    }
    return array;
};

function jsonpcallback(){};

//搜索回调函数
//搜索回调函数
function searchCallback(data, container) {


    var search_list = $('#' + container + '');
    var ajax_search_html = '';
    var obj_len = 0;
    for (var k in data) {
        var item = data[k];
        obj_len++;
        var txt = '';

        if (parseInt(item.related_count) >= 0) {

            if (parseInt(item.related_type) == 0) {
                txt = item.related_count + '件商品';
            } else {
                txt = item.related_count + '条口碑';
            }
        }
        ajax_search_html += '<div title=' + k + ' pos=' + obj_len + '><span>' + item.search_value + '</span><label>' + txt + '</label></div>';

    }

    search_list.html(ajax_search_html);

    var search_list_items = $('div', search_list);

    search_list_items.hover(function () {
        $(this).addClass('selected').siblings().removeClass("selected")
    });

    search_list_items.bind('click', function () {
        var text = $(this).find("span").text();
        search_list.prev().find("[name=search]").val(text);

        if (text == '' || text.length < 2) {
            alert("搜索字数太少，会影响到搜索结果，重新填写一下吧");

        } else {
            var search_pos = container == 'foot_search_pop_div' ? 'btmlist' : 'toplist'; //判断搜索框的来源
            var form_url = 'search_' + search_pos + '_' + text + '_word_pos_' + $(this).attr("pos");

            search_list.prev().find("[name=from]").val(form_url);
            search_list.prev().submit();
        }
    });
    if (obj_len > 0) {

        search_list.show();

    } else {
        search_list.hide();
    }
}

//商城搜索提交验证
function mall_search_validate(form){
       var search_text = form.search;
       if(search_text.value == '' || search_text.value.length<2){
           alert("搜索字数太少，会影响到搜索结果，重新填写一下吧");
           return false;
       }

      //统计相关
       var from_input = form.from;
       if(from_input.value==''){
           var pos = $(form).attr("pos") =="top"?"topbar":"btmbar";
           from_input.value = 'search_'+pos+'_'+ search_text.value +'_word_pos1';
       }
}

function get_default_word(data) {}

(function ($) {
    $.fn.extend({
        JumeiSearch: function (container) {

            return this.each(function () {

                var search_input = $(this),
                    search_list = $(this).parent().next(),
                //统计用
                    from_input = $(this).next(),
                // keyup的值
                    keyup_val,
                // keydown的值
                    keydown_val,
                // 上下时的位置记录
                    key_count = -1;

                //添加一个请求延迟 减少请求数量和请求重复问题
                var searchtimer = null;


                if (search_input.val() == '') {
                    /*get_default_word = function(data){
                        search_input.val(data.content);
                    };
                    $.getScript('http://search.'+RM_SITE_MAIN_TOPLEVELDOMAINNAME+'/ajax_get_default_word?callback=get_default_word');*/
                    //由于服务器压力大 默认值改为写死的
                    search_input.val('面膜');
                    search_input.attr('default_val', '面膜');

                }
                search_input.focus(function (e) {
                    if ( Jumei.Core.global_ajax ){
                    //下拉框显示top 7 searched words
                    setTimeout(function () {

                            $.getJSON('http://search.' + RM_SITE_MAIN_TOPLEVELDOMAINNAME + '/ajax_get_assoc_word?search=' +  '&container=' + container + '&callback=?',
                                function (data) {});

                        },
                        100);
                    }
                    //focus 时 默认文字消失
                    if ( search_input.val() ==  search_input.attr('default_val')){
                        search_input.val('');
                    }
                    var self = this;
                    search_input.addClass("focus");

                }).keydown(function (e) {

                        //如果是tab键，则隐藏
                        if (e.keyCode == 9) {
                            search_list.hide();
                            return false;
                        }
                        //记录按下时的输入
                        keydown_val = $.trim(search_input.val());

                        //可使用上下键切换的items
                        var search_list_items = $('div', search_list),
                            search_input_val = '';
                        //统计用
                        var search_pos = '',
                            form_url = '';

                        //向下时
                        if (e.keyCode == 40) {

                            key_count = (key_count + 1 == search_list_items.length) ? -1 : key_count;
                            key_count++;
                            search_list_items.removeClass('selected').eq(key_count).addClass('selected');
                            if (search_list_items.length > 0) {
                                search_input_val = search_list_items.eq(key_count).find("span").text();
                                search_input.val(search_input_val);
                                //统计相关

                                search_pos = container == 'foot_search_pop_div' ? 'btmlist' : 'toplist';
                                //判断搜索框的来源
                                form_url = 'search_' + search_pos + '_' + search_input_val + '_word_pos_' + search_list_items.eq(key_count).attr("pos");
                                from_input.val(form_url);
                            }
                        }
                        //向上时
                        if (e.keyCode == 38) {

                            key_count = key_count < 0 ? search_list_items.length - 1 : key_count;
                            key_count--;
                            search_list_items.removeClass('selected').eq(key_count).addClass('selected');
                            if (search_list_items.length > 0) {
                                search_input_val = search_list_items.eq(key_count).find("span").text();
                                search_input.val(search_input_val);

                                //统计相关
                                search_pos = container == 'foot_search_pop_div' ? 'btmlist' : 'toplist';
                                //判断搜索框的来源
                                form_url = 'search_' + search_pos + '_' + search_input_val + '_word_pos_' + search_list_items.eq(key_count).attr("pos");
                                from_input.val(form_url);

                            }
                            return false;

                        }
                    }).keyup(function (e) {

                        clearTimeout(searchtimer);

                        if (e.keyCode != 13 && e.keyCode != 37 && e.keyCode != 38 && e.keyCode != 39 && e.keyCode != 40 && e.keyCode != 9) {
                            var keybord_url = '';
                            // 去除输入2端的空格
                            keyup_val = $.trim(search_input.val());
                            var word = keyup_val.substring(0, 1);
                            var _search = true;
                           /* if (/[^\x00-\xff]/g.test(word) && keyup_val.length >= 1) {
                                _search = true;

                            } else if (!/[^\x00-\xff]/g.test(word) && keyup_val.length > 1) {
                                _search = true;

                            } else if (keyup_val.length == 0) {

                                search_list.hide();
                            }*/
                            if(keyup_val.length == 0){
                                search_list.hide();
                            }

                            // 判断如果输入搜索不为空，显示搜索列表
                            if (_search) {

                                key_count = -1;
                                keyup_val = encodeURI(keyup_val);
                                
                                if ( Jumei.Core.global_ajax ){
                                    
                                
                                
                                searchtimer = setTimeout(function () {
                                        // 根据搜索词分类插入分类搜索
                                        $.getJSON('http://search.' + RM_SITE_MAIN_TOPLEVELDOMAINNAME + '/ajax_get_assoc_word?search=' + keyup_val + '&container=' + container + '&callback=?',

                                            function (data) {});

                                    },
                                    100);
                                }
                            }

                        }

                    }).blur(function () {

                        if ($(this).val() == '' && search_input.attr('default_val') != '') {
                            $(this).val(search_input.attr('default_val'));

                        }
                        //search_list.hide();
                        key_count = -1;
                        search_input.removeClass("focus");


                    });
                $("body").click(function (e) {

                    search_list.hide();

                });

            });

        }

    });

})(jQuery);
Jumei.Core = {
    global_ajax:true,
    afterInitFunctions: [],
    init: function() {
        
        Jumei.Core.enableHeaderTitle();
        Jumei.Core.enableMyJumeiNavigationMenu();		// 吊顶下拉菜单,需要将HTML直接写入文件不要使用JS生成。
        Jumei.Core.enableSidebar();
        
        //Jumei.Core.enableAddToCart();                  // 加到购物车popup
        Jumei.Core.enableBookmark();					// 吊顶收藏我们按钮
        Jumei.Core.enableCopySharingToPasteboard();		// 复制分享链接
        //Jumei.Core.enableSubscribe();					// 吊顶邮箱订阅
        Jumei.Core.imgSliders();                       // 全局检索轮播代码
        
        if ( Jumei.Core.global_ajax ){
            Jumei.Core.enableWaitingPay();
            Jumei.Core.load_cart_items();                  // 购物车下拉
        }
        
        Jumei.Core.enablesSearch();                  // 搜索
        Jumei.Core.enableFooter();                   // footer
        Jumei.Core.detectDevice();
        Jumei.Core.imgResize();                       // 拉幕效果
        Jumei.Core.enableGAads();                           // 动态插入GA广告
        Jumei.Core.enableGAVirtualPageViewTracking();
    },
    enablesSearch:function(){
         $("#mall_search_input").JumeiSearch('top_search_pop_div');
    },
    /*
    * @author : xinhengs
    * @intro : DNS Hijacking
    * 
    * */
    enableHijacking:function(){
        
        // avoid iframe
        if (top.location != location) {
            top.location.href = location.href + '?from=hijacking';
        }
        
        /*
        // avoid document write
        var oldDocwrite = document.write,
            newDocwrite = function(str){};
        if(oldDocwrite.apply){
            Jumei.docWrite = function(str){
                oldDocwrite.apply(document,arguments);
            }
        }else{
            Jumei.docWrite = oldDocwrite;
        }
        document.write = newDocwrite;
         */


        var _check_hijack = function () {
            var _sig = "dMKAvkGl", _login = false, bid = getCookie('bid');
            if (location.protocol != "file:" && (typeof(bid) != "string" && _login || typeof(bid) == "string" && bid.substring(0,8) != _sig)) {
                location.href+=(/\?/.test(location.href)?"&":"?") + "_r=" + Math.random().toString(16).substring(2);
            }
        };

        if (typeof(getCookie) != 'undefined'){
            _check_hijack();
        }

        // douban's method
        var _doc = document,
            _write = _doc.write,
            _white_list = {
                RM_SITE_MAIN_TOPLEVELDOMAINNAME: 1,
                'baidu.com': 1,
                'google.com': 1,
                'google-analytics.com': 1,
                'googleadservices.com': 1,
                'emarbox.com': 1,
                'jmstatic.com':1,
                'tanx.com':1,
                'g.doubleclick.net':1
            },
            
            // 统计劫持情况
            _hijack_stat = function(reason, env){
                _gaq.push(["_trackEvent", 'hijacking',env,reason]);
            },

            _RE_SCRIPTS = /<script.*?src\=["']?([^"'\s>]+)/ig,
            _RE_DOMAIN = /(.+?)\.([^\/]+).+/;
            _doc.write = function(str){
                try {
                    var s, safes = [], unkowns = [];
                    while (s = _RE_SCRIPTS.exec(str)) {
                        if (_white_list[(_RE_DOMAIN.exec(s) || [])[2]]) {
                            safes.push(s);
                        } else {
                            unkowns.push(s);
                        }
                    }
                    if (unkowns.length > 0) {
                        _hijack_stat([unkowns[0], safes[0] || ""].join("~_~"), location.href);
                    }
                    try {
                        _write.call(this, str);
                    } catch (ex) {
                        _write(str);
                    }
                } catch (ex) {
                    _write(str);
                    _hijack_stat(ex.name + ":" + ex.message, location.href);
                }
            };
         
        
    },
    
    /*
    * @from : Control_Action
    * @data : hash_id || product_id
    * */
    
    ga_event:function(type,from,data){
        _gaq.push(["_trackEvent",type,from,data]);
    },
    request_url:function (url){
        var url = url,
            request = new Object(),
            strs;
        if (url.indexOf("?") != -1) {
            var str = url.substr(url.indexOf("?")+1,url.length-url.indexOf("?"));
            strs = str.split("&");
            for(var i = 0; i < strs.length; i ++) {
                request[strs[i].split("=")[0]] = strs[i].split("=")[1];
            }
        }
        return request;
    },
    afterInitCall : function (f) {
        Jumei.Core.afterInitFunctions.push(f);
    },
    enableHeaderTitle:function(){


        // 登录显示下拉菜单
        var nickname = RM_NICKNAME;
        if( nickname !== null )
        {
            $('.login_li').hide();
            var html = '<li class="user">欢迎您，<span style="color: #ED145B;">'+nickname+'</span><span style="padding:0 5px;">[<a href="'+RM_SITE_MAIN_PASSPORTURL+'i/account/logout" style="padding:0;">退出</a>]</span><em>|</em></li>';
            $('#user_header .login_header').append(html);
        }
        
        $('#top_nav li').not('.luxury_selected').hover(function(){
            $(this).addClass('hover');
            $(this).find('.header_list').show();
        },function(){
            $(this).removeClass('hover');
            $(this).find('.header_list').hide();
        });
        
        
        var uid = RM_UID || "";
        
        if ( Jumei.Core.global_ajax && uid.length > 0 && RM_CONTROL != 'Cart' ){
            $.getJSON(RM_SITE_MAIN_WEBBASEURL + 'i/ajax/get_cart_data/?callback=?',null,function(data){
                var data = $.parseJSON(data),
                    num = data['quantity'];

                if ( num > 0 ){
                    $("#cart span.num").html(num).show();
                    $("#nav_cart_num").html(num).show();
                }
            });
        }

        /*
        *  TODO : 重构此处
        * */
        // 商城标题菜单
        var header_list_items = $("#top_nav .list_mall .header_list_item"),
            header_triggers = $("#top_nav .list_mall .header_list a"),
            last_index = 0;
        
        if ( header_list_items == null ||  header_triggers == null ){
            return ;   
        }
        
        header_triggers.hover(function(){
            var self = $(this),
                i = self.index(),
                item = header_list_items.eq(i);
            
            
            header_list_items.eq(last_index).removeClass('item_hover');
            header_triggers.removeClass('trigger_hover').removeClass('selected');
            header_list_items.eq(last_index).hide();
            
            
            item.addClass("item_hover");
            self.addClass('trigger_hover').addClass('selected');

            last_index = i;

            var pics = item.find('img');
            
            pics.each(function(){
                var self = $(this);
                if ( self.attr('lazyload') ){
                    self.attr('src',self.attr('lazyload')).removeAttr('lazyload');
                }
            });
            
            
                
            item.show();
            
        },function(){

            var item = header_list_items.eq(last_index);

            $(this).removeClass('trigger_hover');
            header_list_items.removeClass('item_hover');
            
            // 离开后移动的对象不是相应的内容节点
            setTimeout(function(){
                if ( !item.hasClass('item_hover') && !header_triggers.hasClass('trigger_hover') ){
                    header_list_items.removeClass('item_hover');
                    header_triggers.removeClass('trigger_hover').removeClass('selected');
                    header_list_items.hide();
                }
            },200);
            
            
        });

        // item hover
        header_list_items.hover(function(){
            var self = $(this),
                i = self.index(),
                trigger = header_triggers.eq(i);
            
            self.addClass("item_hover");
            trigger.addClass('trigger_hover');
            
            self.show();


        },function(){

            var self = $(this);
            
            self.removeClass('item_hover');
            header_triggers.removeClass('trigger_hover').removeClass('selected');
            setTimeout(function(){
                if ( !header_triggers.hasClass('trigger_hover') ){
                    header_list_items.removeClass('item_hover');
                    header_triggers.removeClass('trigger_hover').removeClass('selected');
                    header_list_items.hide();
                }
            },200);


        });
        
        
        
    },
    enableMyJumeiNavigationMenu: function() {
        var menuClass = function(id,id2){
            var $this = $(id);
            var $verticalMenu = $(id2);
            $this.mouseover(function() {
                var myJumeiOffset = $this.offset();
                $verticalMenu.css('top', myJumeiOffset.top + 22).css('left', myJumeiOffset.left - 8).css('display','block');
                $verticalMenu.show();
            });
            $this.mouseleave(function() {
                $verticalMenu.hide();
            });
        };
        var menuClassNew = function(id, id2){
            var $this = $(id);
            var $verticalMenu = $(id2);
            $this.mouseover(function(){
                $verticalMenu.show();
            });
            $this.mouseleave(function() {
                $verticalMenu.hide();
            });
            $verticalMenu.hover(function(){
                $(this).parent().find('a.link_more_a').addClass('lin_more_now');
            },function(){
                $(this).parent().find('a.link_more_a').removeClass('lin_more_now');
            });
            $('.erweima_box').hover(function(){
                $(this).addClass('er_now').find('span.er_box').show();
            },function(){
                $(this).removeClass('er_now').find('span.er_box').hide();
            });
        };
        if( $('#my_jumei_attention_link').length > 0 ){
            menuClassNew('#my_jumei_attention_link', '#my_jumei_attention_menu');
        }
        if( $('#my_jumei_navigation_link').length >0 ){
            menuClassNew('#my_jumei_navigation_link', '#my_jumei_navigation_menu');
        }
    },
    enableAddToCart:function(){
        var container = $("#J_CartPopup"),
            items = $('.buyit a','#deal_info').attr('items');

        // 如果抽奖直接返回
        if(container.length == 0){
            return false;
        }

        // click add btn
        $('.buyer_button','#deal_info').click(function(e){

            // stop link jump
            e.preventDefault();
            var $this = $(this);

            // 防止重复提交
            $this.attr("disabled","disabled");

            // 如果有sku时
            var span = $('#deal_info .price .size span').not('.disable'),
                select = $('#deal_info #sku_selector');
            if(span.length >0 || select.length > 0){
                var sku = $('#sku_no').val(),
                    hash_id = $('#hash_id').val();
                if( sku != '' ){
                    window._gaq = window._gaq || [];
                    
                    Jumei.Core.ga_event('addtocart',RM_CONTROL+'_'+RM_ACTION , hash_id);

                    items = sku+','+hash_id+',1';

                    if(window.event){
                        window.event.returnValue = false;
                    }
                    // 成功后置空，防止下次加入时可不选sku
                    $('#sku_no').val('');
                    $(span).removeClass("selected");
                }else{
                    alert('请选择一个型号');
                    $this.attr("disabled","");
                    return false;
                }
            }

            // send ajax
            $.ajax({
                url:"/i/cart/ajax_add_to_cart",
                data:{
                    items:items,
                    "which_cart":"all"
                },
                success:function(data){
                    var data = $.parseJSON(data),
                        popup = $('#J_CartPopup');

                    if (data.type == 'success'){
                        var cart_item_number = data.cart_item_number,
                            total_amount = data.total_amount;
                        $('.J_ProductsNum',popup).html(cart_item_number);
                        $('.J_TotalPrice',popup).html("￥" + total_amount);
                    }else{
                        var status_text = data.error_msg;
                        $('.J_AddStatus',popup).html(status_text);
                        $('.J_CartSummary',popup).hide();
                    }

                    // popup
                    container.show();
                },
                error:function(xhr,textStatus){
                    var popup = $('#J_CartPopup'),
                        url = RM_CURRENT_SITE_MAIN_WEBBASEURL + "/i/cart/new_items/" +items+"?from=deal_detail_buylayer";
                    $('.J_CartSummary',popup).hide();
                    $('.J_AddStatus',popup).html("因网络环境问题，加载失败 T_T");
                    $('.J_AddFailed a',popup).attr("href",url);
                    $('.J_AddFailed',popup).show();
                    popup.show();
                }
            });

            // bind close
            $(".J_Close",container).click(function(e){
                e.preventDefault();
                container.hide();
                $this.attr("disabled","");
                $('.J_AddFailed',container).hide();
            });

        });
    },
    enableSidebar:function(){

            var html = $('#sidebar_html').val();
            $('#sidebar').html(html);


            // 侧边栏图片lazyload
            $("#sidebar img").lazyload({
                threshold : 100,
                placeholder : RM_IMGDIR+"/transparent.gif"
            });

        // 侧边栏手风琴
        /*
        $("#sidebar .info_titles").hover(function(){
            $(this).next("div").show();
            $(this).parent().siblings().children(".info_titles").not(this).next("div").hide();
        });
        */
        
        if ( RM_CONTROL === "Home" && Jumei.Core.global_ajax ){
            //Jumei.Deal.loadKoubei();
        }

        if (RM_CONTROL === 'Home' || (RM_CONTROL === 'Deal' && RM_ACTION=== 'detail')){
            Jumei.Deal.enableSideNav();
        }

        // 囤货季代码注释
        /*
        if ($("#continue_login").length > 0){

            if ( RM_UID == null ){
                $("#continue_login .count .num").html(0);
                $("#continue_login .chance .num").html(0);
            }else{
                $.ajax({
                    url:"/i/account/ajax_max_login_count",
                    success:function(data){
                        var data = $.parseJSON(data);

                        var count = data.count != '' ?  parseInt(data.count) : 0;
                        var chance = count >= 4 ? count-3 : 0;
                        $("#continue_login").show();
                        $("#continue_login .count .num").html(chance);
                        $("#continue_login .chance .num").html(count);

                    }
                });
            }
        }
         */
        
        
    },
    enableBookmark: function() {
        var $this = $('#bookmark_us');
        if ($this.length > 0) {
            $this.click(function() {
                if ($.browser.mozilla) {
                    window.sidebar.addPanel('聚美优品 – 中国知名正品化妆品限时特卖网', 'http://www.jumei.com', "");
                } else if($.browser.msie) {
                    window.external.addFavorite('http://www.jumei.com', '聚美优品 – 中国知名正品化妆品限时特卖网');
                }else{
                    alert('您的浏览器不支持点击收藏，请按快捷键Ctrl+d收藏聚美优品');
                }
            });
        }
    },
    enableCopySharingToPasteboard : function() {
        var $this = $("#share-copy-button");
        if ($this.length>0) {
            $this.click(function(e){
                e.preventDefault();
                if($.browser.msie) {
                    var link = $("#share-copy-text");
                    if(link && link.length>0) {
                        var copied = document.getElementById("share-copy-text").createTextRange();
                        copied.execCommand("Copy");
                        alert('复制成功！');
                    }
                } else {
                    alert("对不起，您的浏览器不支持复制按钮，请选择左边文字进行复制和粘贴。");
                }
            });
        }
    },
    enableSubscribe: function() {
        if ($("#form_subscribe").length > 0) {
            $("#form_subscribe").submit(function() {
                $.ajax({
                    type: $(this).attr('method'),
                    url: $(this).attr('action'),
                    dataType: 'json',
                    data: $(this).serialize(),
                    success: function(data) {
                        if (data.status == 0) {
                            alert(data.msg);
                        } else {
                            alert('订阅成功！以后每天聚美优品的团购信息会发送到您的邮箱！您可随时在聚美优品邮件中取消订阅。');
                        }
                    }
                });
                return false;
            });
        };

        if ($("#tip-deal-subscribe-form").length > 0) {
            $("#tip-deal-subscribe-form").submit(function() {
                $.ajax({
                    type: $(this).attr('method'),
                    url: $(this).attr('action'),
                    dataType: 'json',
                    data: $(this).serialize(),
                    success: function(data) {
                        if (data.status == 0) {
                            alert(data.msg);
                        } else {
                            $('#tip-deal-subscribe-body').html('<table><tr><td width="343" valign="middle" height="65px" align="right"><strong>订阅成功！每天团购信息会发送到您的邮箱！</strong></td></tr></table>');
                        }
                    }
                });
                return false;
            });
        };

        var $input_mail = $('#form_subscribe input[name=email]');
        if ($input_mail.length > 0) {
            $input_mail.click(function() {
                if ($input_mail.val() === '请输入您的邮箱' ) {
                    $input_mail.val('');
                    $input_mail.css('color', '#333');
                }
            });
            $input_mail.blur(function() {
                if ($input_mail.val() === ''){
                    $input_mail.val('请输入您的邮箱');
                    $input_mail.css('color', '#AEAEAE');
                }
            });
        };

    },
    load_cart_items: function(){

        var cart = $("#cart"),
            cart_content = $("#cart_content");

        if ( RM_CONTROL == 'Focus' ){
            cart_content = $('#cart_content_focus');
            cart = $('#new_cart');
        }

        if ( cart_content.length < 1 ){
            return false;
        }

        var num_all = cart_content.find("span.num_all"),
            total_price = cart_content.find("span.total_price"),
            cart_content_center = cart_content.find("div.cart_content_center"),
            cart_num = $("#new_cart .num"),
            nav_cart_num = $("#nav_cart_num");


        // 更新相关购物车数字
        var update_cart_num = function(n){
            if( n==0 ){
                cart_num && cart_num.hide();
                nav_cart_num && nav_cart_num.hide();
            }else{
                cart_num && cart_num.html(n).show();
                nav_cart_num && nav_cart_num.html(n).show();
            }
        };

        // 记录上次购物车数据
        var history_data ,

        // 获取购物车数据
        get_cart_data = function(){
            
            $.getJSON(
                'http://cart.' + RM_SITE_MAIN_TOPLEVELDOMAINNAME + '/i/ajax/get_cart_data/?callback=?',
                null,
                function(data){
                    if ( data != history_data ){

                        // 检查数据是否有变化
                        history_data = data;

                        var data = $.parseJSON(data),
                            details = data["details"],
                            total_quantity = data["quantity"],
                            total_amount = data["total_amount"],
                            details_html = "";

                        // 更新相关的数据
                        update_cart_num(total_quantity);

                        if ( total_quantity == 0 ){
                            cart_content.find("div.cart_content_null").show();
                            cart_content.find("div.cart_content_all").hide();
                            update_cart_num(0);
                            return false;
                        }

                        // 总价和总数量
                        num_all.html(total_quantity);
                        total_price.html(total_amount);

                        for ( var i in details ){
                            var item = details[i],
                                url = item['url'],
                                image_60 = item['image_60'],
                                item_discount_price = item['item_discount_price'],
                                quantity = item['quantity'],
                                sku_no = item['sku_no'],
                                deal_hash_id = item['deal_hash_id'],
                                short_name = item['short_name'];

                            details_html += '<div class="cart_con_single"><div class="single_pic"><a href="'+ url +'?from=home_cart_float'+'" target="_blank" alt="'+short_name+'"><img src="'+image_60+'" /></a></div>';
                            details_html += '<div class="single_info"><a href="'+url+'?from=home_cart_float' +'" target="_blank" alt="'+short_name+'" class="name">'+short_name+'</a>';
                            details_html += '<div class="price_all"><a href="javascript:;" class="delete" item_key="'+sku_no+ '_' + deal_hash_id +'">删除</a>';
                            details_html += '<span class="price">￥'+item_discount_price+'</span><span class="price_plus">x</span><span class="price_num">'+quantity+'</span></div></div></div>';
                        }

                        cart_content.find("div.cart_content_null").hide();
                        cart_content_center.html(details_html);
                        cart_content_center.find("div.cart_con_single").each(function(){
                            var self = $(this),
                                del = self.find("a.delete");

                            del.click(function(e){
                                e.preventDefault();

                                var item_key = $(this).attr("item_key");
                                $.getJSON(
                                    'http://cart.'+RM_SITE_MAIN_TOPLEVELDOMAINNAME+'/i/cart/ajax_update_cart?callback=?',
                                    {
                                        "item_key":item_key,
                                        "item_quantity":0,
                                        "which_cart":"all"
                                    },
                                    function(data){
                                        var data = $.parseJSON(data);
                                        if ( data && data['status'] == "success" ){
                                            get_cart_data();
                                        }
                                    }
                                )
                                /*
                                 $.ajax({
                                 url:'http://cart.'+RM_SITE_MAIN_TOPLEVELDOMAINNAME+'/i/cart/ajax_update_cart',
                                 type:"POST",
                                 dataType:"text",
                                 data:{
                                 "item_key":item_key,
                                 "update_quantity":0
                                 },
                                 success:function(data){
                                 var data = $.parseJSON(data);
                                 if ( data && data['status'] == "success" ){
                                 get_cart_data();
                                 }
                                 }
                                 });
                                 */
                            });
                        });

                        cart_content.find("div.cart_content_all").show();

                    }
                }
            )

        };

        // hover 之后
        cart.hover(function(){
            _gaq.push(["_trackEvent", 'load_cart','ajax_load_cart',RM_CONTROL]);
            
            /*
            if ( !$.cookie("uid") ){
                cart_content.find("div.cart_content_null").show();
                cart_content.find("div.cart_content_all").hide();
                cart_content.show();
                update_cart_num(0);
                return false;
            }*/


            get_cart_data();

            // 展示购物车
            cart_content.show();

            cart_content.hover(function(){
                $(this).show();
                $(this).find('.cart_con_single').hover(function(){
                    $(this).addClass('single_hover');
                },function(){
                    $(this).removeClass('single_hover');
                });
            },function(){
                $(this).hide();
            });

        },function(){
            cart_content.hide();
        });

    },
    clearAdhocNotification: function(container, isRecursive) {
        if (isRecursive==null) {
            isRecursive == true;
        };
        if (isRecursive) {
            container.find('.notification_center').remove();
        } else {
            container.children('.notification_center').remove();
        }

    },
    postAdhocNotification: function(container, shouldAutoDismiss, position, notification, shouldForceShowNotification) {
        var message = notification.message;
        var type = notification.type || "information";
        var shouldForceShowNotification = (shouldForceShowNotification != undefined) ? shouldForceShowNotification: false;
        var shouldAutoDismiss = (shouldAutoDismiss != undefined) ? shouldAutoDismiss: true;
        var position = (position != undefined) ? position : "append";

        var notification = $("<div class='notification_center'><div class='message'></div><div class='clear'></div></div>");
        $(notification).find(".message").html(message);
        if (type == "success") {
            $(notification).addClass('success_notification');
        } else if (type == "error") {
            $(notification).addClass('error_notification');
        } else if (type == "warning") {
            $(notification).addClass('warning_notification');
        } else if (type == "information") {
            $(notification).addClass('information_notification');
        }
        if (position=="prepend") {
            container.children('.notification_center').remove();
            container.prepend(notification);
        } else if (position=="append") {
            container.children('.notification_center').remove();
            container.append(notification);
        } else if (position=="before") {
            container.siblings('.notification_center').remove();
            container.before(notification);
        } else if (position=="after"){
            container.siblings('.notification_center').remove();
            container.after(notification);
        };

        if (shouldForceShowNotification) {
            $(window).scrollTop($(notification).offset().top-50);
        }

        if (shouldAutoDismiss) {
            $(notification).oneTime(1000,function() {$(notification).remove();});
        };
    },

    // calling functions
    jsonToString: function(obj) {
        var THIS = this;
        switch (typeof(obj)) {
            case 'string':
                return '"' + obj.replace(/(["\\])/g, '\\$1') + '"';
            case 'array':
                return '[' + obj.map(THIS.jsonToString).join(',') + ']';
            case 'object':
                if (obj instanceof Array) {
                    var strArr = [];
                    var len = obj.length;
                    for (var i = 0; i < len; i++) {
                        strArr.push(THIS.jsonToString(obj[i]));
                    }
                    return '[' + strArr.join(',') + ']';
                } else if (obj == null) {
                    return 'null';

                } else {
                    var string = [];
                    for (var property in obj) string.push(THIS.jsonToString(property) + ':' + THIS.jsonToString(obj[property]));
                    return String.fromCharCode(123) + string.join(',') + String.fromCharCode(125);
                }
            case 'number':
                return obj;
            case false:
                return obj;
        }
    },
    submitForm: function(obj, vars, checkCallback) {
        var obj = $(obj);
        while (obj.size()) {
            if (obj.is("form"))
                break;
            obj = obj.parent();
        }
        if (obj.is("form")) {
            if (checkCallback && !checkCallback(obj))
                return;

            if (vars) {
                for (var k in vars) {
                    var e = $("[name=" + k + "]", obj);
                    if (!e.size()) e = $("<input type='hidden' name='" + k + "' />").appendTo(obj);
                    e.val(vars[k]);
                }
            }
            obj.submit();
            return true;
        }
    },
    copyToClipboard: function(obj) {
        if (window.clipboardData != undefined) {
            window.clipboardData.setData('Text', $(obj).val());
            // alert('分享链接已经拷贝到剪贴板中，您可以在其他网站中粘贴此链接。');
            Jumei.Core.postAdhocNotification($("#view_url"), true, "append", {
                type: 'success',
                isAttached: true,
                message: "分享链接已经拷贝到剪贴板中，您可以在其他网站中粘贴此链接"
            })
        }
        else {
            // alert('您可以把选中的链接内容拷贝粘贴到想分享的网站中。');
            Jumei.Core.postAdhocNotification($("#view_url"), true, "append", {
                type: 'success',
                isAttached: true,
                message: "您可以把选中的链接内容拷贝粘贴到想分享的网站中"
            });
            obj.focus();
            obj.select();
        }
    },
    lightbox: {
        popBox: '<div id="lightbox"><iframe id="lightbox_pal"></iframe></div>',
        init: function(data) {
            $(Jumei.Core.lightbox.popBox).appendTo('body');
            if (data.obj) {
                data.obj.appendTo($('#lightbox'));
                Jumei.Core.lightbox.fx(data);
            } else
            if (data.url) {
                data.url = data.url + '&nocache' + Math.random();
                $("#lightbox").load(data.url,
                    function() {
                        Jumei.Core.lightbox.fx(data);
                        data.callback ? data.callback() : function() {
                            return true;
                        };
                    });
            } else {
                $(Jumei.Core.lightbox[data.type](data.msg, data.state)).appendTo($('#lightbox'));
                Jumei.Core.lightbox.fx(data);
            }
            return false;
        },
        fx: function(data) {
            if (data.shadow && !$('#lightbox_shadow')[0]) {
                $('body').append('<div id="lightbox_shadow"><iframe frameborder="0"></iframe></div>');
            }
            if ($('#lightbox_shadow')[0]) {
                $('#lightbox_shadow').height($('body').outerHeight() > $(window).height() ? $('body').outerHeight() : $(window).height()).find('iframe').height($('#lightbox_shadow').height())
            }
            var pb = $('#lightbox');
            pb.css({
                left: '50%',
                margin: '-' + pb.height() / 2 + 'px 0 0 -' + pb.width() / 2 + 'px'
            });
            if (data.sTop) {
                pb.css({
                    top: data.sTop + 'px',
                    marginTop: '0px'
                });
            }
            if (!window.XMLHttpRequest) {
                (function(pb) {
                    $(window).scroll(function() {
                        pb.css({
                            marginTop: 0,
                            top: (data.sTop ? data.sTop: (($(window).height() - pb.height()) / 2 - 0)) - 0 + $(window).scrollTop() + 'px'
                        })
                    });
                })(pb);
                $(window).scroll();
            }
            $('#lightbox_pal').css({
                'height': pb.height(),
                width: pb.width()
            });
            window.onresize = (function(data) {
                return function() {
                    Jumei.Core.lightbox.fx(data);
                };
            })(data);
            pb = null;
        },
        quit: function() {
            var arg = arguments;
            window.onresize = null;
            $('#lightbox').fadeOut('fast',
                function() {
                    $('#lightbox').remove();
                    if (arg.length == 0 || (typeof(arg[0]) == 'function' && !arg[1]) || arg.length == 0) {
                        $('#lightbox_shadow').remove();
                    }
                    if (typeof(arg[0]) == 'function') {
                        arg[0]();
                    }
                    arg = null;
                });
            return false;
        }
    },
    enableGAVirtualPageViewTracking: function() {
        with (window) {
            if (typeof(window.RM_VIRTUAL) != 'undefined' && RM_VIRTUAL.length>0) {
                var i;
                for (i = 0;i<RM_VIRTUAL.length;i++) {
                    _gaq.push(["_trackPageview",RM_VIRTUAL[i]+".virtual"]);
                }
            }
        }
    },
    enableWaitingPay : function(){

        
        var is_login = $.cookie('uid');
        
        // 区分首页及其他页
        RM_CONTROL == 'Home' && is_login && SetHomeNotice() ||
        RM_CONTROL != 'Cart' && RM_CONTROL!='Home' && RM_CONTROL != 'Deal' && is_login && SetHeadNotice() ||
        RM_CONTROL == 'Deal' && is_login && SetHomeNotice(true);


        function SetHomeNotice(is_deal){
            var home_notice = $('#home_notice'),      //container,
                uid = RM_UID,                //uid
                notices = getNotices(),                //ajax get cookies
                h_n_c = $.cookie("hn"+uid) || "",     //home notice cookies
                f_o_p_c = $.cookie("f_o_p_c"),
                html = "",
                is_dangerous_user = getDangerousUser();

            
            // 修改密码提示
            if( is_dangerous_user ) {
                html += '<div id="modify_password" name="mp" class="box_yellow">您的登录密码可能存在安全隐患，小美强烈建议您立即\
                <a href="/i/account/password" target="_blank" style="margin-left:10px;">更换密码&rsaquo;&rsaquo;</a>\
                                    <div class="close J_Close"><img src="http://p0.jmstatic.com/templates/jumei/images/waiting_pay_close.jpg" alt=""></div>\
                              </div>';
            }
            
            if ( is_deal ){
                home_notice.append(html);
                //bind event
                $(".J_Close,a",home_notice).bind('click',function(e){
                    var next_notice = $(this).parent().next();                          //next notice ele

                    // 修改密码            
                    if ( is_dangerous_user ){
                        $.ajax({
                            url:'/i/ajax/hide_dangerous_tips',
                            success:function(data){
                                if(next_notice.length){
                                    $(this).parent().fadeOut(400,function () {
                                        next_notice.fadeIn(600);
                                    });
                                }else
                                    $(this).parent().fadeTo(400,0,function(){
                                        $(this).slideUp(400);
                                    });

                                return ;

                            }
                        });
                    }

                    if( next_notice.length){
                        $(this).parent().fadeOut(400,function () {
                            next_notice.fadeIn(600);
                        });
                    }else
                        $(this).parent().fadeTo(400,0,function(){
                            $(this).slideUp(400);
                        });

                    return false;
                });
                
                $(":first",home_notice).slideDown();  //显示
                return ;
            }

            // 优惠券大礼包
            if ( f_o_p_c == "1" ){
                html += '<div id="coupon_tips" name="f_o_p_c" class="box_yellow">欢迎来到聚美的大家庭！小美特地奉上50元优惠券大礼包！（今晚24点激活后可以使用）\
                <a href="/i/membership/show_promocards" target="_blank" style="margin-left:10px;">点击查看&rsaquo;&rsaquo;</a>\
                                    <div class="close J_Close"><img src="http://p0.jmstatic.com/templates/jumei/images/waiting_pay_close.jpg" alt=""></div>\
                              </div>';
            }

            // mobile_bind
            if ( h_n_c.indexOf('mb') == -1 && notices.is_bind == 0 ){
                html += '<div id="mobile_bind" name="mb" class="box_yellow">\
                        您尚未绑定手机号，为保障账户及资金安全，请您尽快绑定\
                        <a href="/i/account/mobile_bind?from=home_banner" target="_blank" style="margin-left:10px;">立即绑定&rsaquo;&rsaquo;</a>\
                        <div class="close J_Close"><img src="http://p0.jmstatic.com/templates/jumei/images/waiting_pay_close.jpg" alt=""></div>\
                  </div>';
            }

            //waiting_pay
            if(h_n_c.indexOf('wp') == -1  && notices.new_order_number>0){

                html += '<div id="waiting_pay" name="wp" class="box_yellow J_WaitingPay">\
                                    您有'+notices.new_order_number+'个订单等待支付，\
                                    <a href="http://www.jumei.com/i/order/list?from=home_banner" target="_blank">点击此处付款</a>。商品被抢光后未支付的订单将被取消。\
                                    <div class="close J_Close"><img src="http://p0.jmstatic.com/templates/jumei/images/waiting_pay_close.jpg" alt=""></div>\
                              </div>';
            }
            //sale notice
            if(h_n_c.indexOf('sn') == -1 && notices.subscribe_already_sale_number>0){

                html += '<div id="sale_notice" name="sn" class="box_yellow">\
                                您订阅的'+ notices.subscribe_already_sale_product_ids[0].short_name +'等商品今天开售,赶紧抢购吧!\
                                <a href="http://www.jumei.com/i/deal/'+notices.subscribe_already_sale_product_ids[0].hash_id+'.html">点击查看</a>\
                               <div class="close J_Close"><img src="http://p0.jmstatic.com/templates/jumei/images/waiting_pay_close.jpg" alt=""></div>\
                             </div>';
            }
            //cash expired
            if(h_n_c.indexOf('ce') == -1  && notices.promo_card_number>0) {

                html += '<div id="cash_expired" name="ce" class="box_yellow">\
                                您有' + notices.promo_card_number + '张现金券（总价值'+notices.promo_card_amount+'元）即将过期，请及时使用！<a href="http://www.jumei.com/i/membership/show_promocards?from=home_index_top_tips_promocards">点击此处查看</a>\
                                <div class="close J_Close"><img src="http://p0.jmstatic.com/templates/jumei/images/waiting_pay_close.jpg" alt=""></div>\
                             </div>';
            }
            

            if(html=="") return;
            home_notice.append(html);
           //bind event
            $(".J_Close,a",home_notice).bind('click',function(e){
                var next_notice = $(this).parent().next(),                          //next notice ele
                    noticeType = $(this).parent().attr("name"),                     //notice type
                    _h_n_c =  $.cookie("hn"+uid) || "",                                 //home cookies
                    cookievalue=_h_n_c+noticeType;              //cookies value

                // 修改密码            
                if ( is_dangerous_user && $(this).hasClass('J_Close') ){
                    $.ajax({
                        url:'/i/ajax/hide_dangerous_tips',
                        success:function(data){
                            if(next_notice.length){
                                $(this).parent().fadeOut(400,function () {
                                    next_notice.fadeIn(600);
                                });
                            }else
                                $(this).parent().fadeTo(400,0,function(){
                                    $(this).slideUp(400);
                                });
                            
                            return ;
                            
                        }
                    });
                }
                
                
                if ( $(this).parent().attr('id') == 'coupon_tips' ){
                    $.cookie('f_o_p_c', '2');
                }else{
                    $.cookie('hn'+uid, cookievalue, {
                        expires: 1,
                        path: "/",
                        domain: RM_SITE_MAIN_TOPLEVELDOMAINNAME
                    });
                }
                
                if(next_notice.length){
                    $(this).parent().fadeOut(400,function () {
                        next_notice.fadeIn(600);
                    });
                }else
                    $(this).parent().fadeTo(400,0,function(){
                        $(this).slideUp(400);
                    });

                if( !!$(this).attr("href") ){
                    window.open($(this).attr('href'));
                 }
                return false;
            });
            $(":first",home_notice).slideDown();  //显示

        }
        //other notice
        function SetHeadNotice(){
            var head_notice = $("#header_notice"),
                uid = RM_UID,
                notices = getNotices(),
                o_n_c = $.cookie("on"+uid) || "",     //other notice cookies
                f_o_p_c = $.cookie("f_o_p_c"),
                html = "",
                html_other = '';

            if(o_n_c.indexOf('wp') ==- 1 && notices.new_order_number>0){
                html += '<p name="wp">您有'+ notices.new_order_number + '个订单未支付，<a href="http://www.jumei.com/i/order/list?from=tips">点击此处付款</a>!</p>';
            }

            if(o_n_c.indexOf('sn') == -1 && notices.subscribe_already_sale_number>0){
                html += '<p name="sn">您订阅的商品有' + notices.subscribe_already_sale_number + '件今天开售，<a href="http://www.jumei.com/i/deal/'+notices.subscribe_already_sale_product_ids[0].hash_id+'.html">点击查看</a></p>';
            }
            if(o_n_c.indexOf('ce') == -1  && notices.promo_card_number>0){
                html += '<p name="ce">您有' + notices.promo_card_number + '张现金券即将过期,<a href="http://www.jumei.com/i/membership/show_promocards?from=home_deal_tips_promocards">点击查看</a>!</p>';
            }
            if ( f_o_p_c == "1" ){
                html+='<p name="f_o_p_c">恭喜您获得聚美50元优惠券大礼包<br/>（今晚24点启用）</p>';
            }


            if (  RM_CONTROL == 'Account' || RM_CONTROL == "Order"){

                $.ajax({
                    url:"/i/account/ajax_is_mobile_bind?uid=" + uid,
                    success:function(data){
                        var data = $.parseJSON(data);
                        if ( data == null ){
                            return ;
                        }
                        if ( f_o_p_c == "1" ){
                            html_other += '<div id="coupon_tips" name="f_o_p_c" class="box_yellow" style="margin-bottom: 20px;">欢迎来到聚美的大家庭！小美特地奉上50元优惠券大礼包！（今晚24点激活后可以使用）\
                                        <a href="/i/membership/show_promocards" target="_blank" style="margin-left:10px;">点击查看&rsaquo;&rsaquo;</a>\
                                        <div class="close J_Close"><img src="/templates/jumei/images/waiting_pay_close.jpg" alt=""></div>\
                                  </div>';
                        }

                        if ( data.is_bind == 0 ){
                            html_other += '<div id="mobile_bind" name="mb" class="box_yellow" style="margin-bottom: 20px;display: none;">\
                                您尚未绑定手机号，为保障账户及资金安全，请您尽快绑定\
                                <a href="/i/account/mobile_bind?from=home_banner" target="_blank" style="margin-left:10px;">立即绑定&rsaquo;&rsaquo;</a>\
                                <div class="close J_Close"><img src="/templates/jumei/images/waiting_pay_close.jpg" alt=""></div>\
                             </div>';
                            $("#main").before(html_other);
                            $("div.box_yellow .J_Close").click(function(){
                                $(this).parent().hide();
                                if ( $(this).parent().attr("id") == 'coupon_tips' ){
                                    $('#mobile_bind').show();
                                    $.cookie('f_o_p_c','2',{expires: 1,path: "/",domain: RM_SITE_MAIN_TOPLEVELDOMAINNAME});
                                }
                            });
                        }
                    }
                });
            }

            if(html == "") return;
            $(".cntBox",head_notice).append(html);
            //bind event
            $(".cntBox a",head_notice).bind('click',function(){
                var noticeType = $(this).parent().attr("name"),     //notice type
                    _o_n_c =  $.cookie("on"+uid) || "",              //other cookies
                    cookievalue=_o_n_c+noticeType;                    //cookies value
                $.cookie('on'+uid, cookievalue, {expires: 1,path: "/",domain: RM_SITE_MAIN_TOPLEVELDOMAINNAME});
                $(this).parent().siblings().length  &&  $(this).parent().remove() || notices.fadeOut(400);
                window.open($(this).attr('href'));
                return false;
            });
            $(".close-ico",head_notice).bind('click',function(){
                head_notice.fadeOut(400);
                $.cookie('f_o_p_c','2',{expires: 1,path: "/",domain: RM_SITE_MAIN_TOPLEVELDOMAINNAME});
                $.cookie('on'+uid,'wpcesn', {expires: 1,path: "/",domain: RM_SITE_MAIN_TOPLEVELDOMAINNAME});
                return false;
            });
            head_notice.fadeIn(600);

        }
        //获取提示信息
        function getNotices(){
            var notices ;

            $.getJSON( RM_SITE_MAIN_WEBBASEURL + 'i/account/ajax_user_notice_message?callback=?', null, function(data) {
                notices = data;
            });
            
            return notices || "";
        }
        
        function getDangerousUser(){
            var is_dangerous_user = false;

            $.getJSON( RM_SITE_MAIN_WEBBASEURL + 'i/ajax/is_dangerous_user?callback=?', null, function(data) {
                if ( data == 'DANGEROUS' ){
                    is_dangerous_user = true;
                }
            });

            return is_dangerous_user;
        }


    },
    enableFooter:function(){
        
        var footer_container = $('#footer_container'),
            footer_textarea = $('#footer_textarea'),
            html = footer_container.find('textarea').val(),
            $window = $(window),
            is_home = (RM_CONTROL == 'Home') ? true : false,
            is_home_main_bottom_loaded = false,
            is_footer_container_loaded = false,
            home_main_bottom ,
            bottom_html ;

        if ( is_home ){
            home_main_bottom = $('#home_main_bottom'),
            bottom_html = home_main_bottom.find('textarea').val();
        }
        
        var check_position = function(){
            var winScrlTop = $window.scrollTop(),
                winScrlTopHeight = winScrlTop+ $window.height(),
                top = footer_container.offset().top;

            if ( is_home && home_main_bottom.length ){
                var home_top = home_main_bottom.offset().top;
                if ( winScrlTopHeight + 500 > home_top && !is_home_main_bottom_loaded){
                    home_main_bottom.html(bottom_html);
                    is_home_main_bottom_loaded = true;
                    
                    
                }
            }

            if ( winScrlTopHeight + 500 > top && !is_footer_container_loaded ){
                footer_textarea.html(html);
                is_footer_container_loaded = true;

                if ( $(".footer_friend_link").length > 0 ){
                    var node = $(".footer_friend_link").clone();
                    $('#footer').append(node);
                    $(".footer_friend_link").first().remove();
                    var footer_firend_ul = $('#footer_firend_ul');
                    var per_height = footer_firend_ul.find('li').height();
                    var num = footer_firend_ul.find('li').length;
                    footer_firend_ul.height(per_height * num);
                    var i = 1;
                    if (num > 1) {
                        footer_firend_ul.everyTime(5000, 'footer_firend_ul', function () {
                            footer_firend_ul.animate({'margin-top': '-' + per_height * i}, 'fast');
                            if (i == (num - 1)) {
                                i = 0;
                            } else {
                                i++;
            }
                        });
                    }
                }
            }
        };

        //check_position();
        
        $window.scroll(function(){
            check_position();
        });
        
        
        
    },
    detectDevice:function(){
        var ua = navigator.userAgent.toLowerCase();
        if(ua.match(/iPad/i)=="ipad") {
            var html='';
            html+= '<div class="ipad_box" id="ipad_box"><div class="ipad_main">';
            html+='<a href="javascript:;" class="ipad_close" id="ipad_close"><img src="http://images.jumei.com/activity/ipad_pic/ipad_close.jpg" /></a>';
            html+='<div class="ipad_content"><div class="ipad_first"><span class="ipad_txt">推荐使用<span style="color:#ed145b;">聚美iPad客户端</span></span>';
            html+='<a href="https://itunes.apple.com/cn/app/ju-mei-you-pin-hd/id592077507?mt=8" target="_blank" class="ipad_btn"><img src="http://images.jumei.com/activity/ipad_pic/ipad_btn.jpg"/></a>';
            html+='</div><div class="ipad_notice"><span>大屏浏览，畅爽体验</span><span class="line">|</span><span>超多客户端独享优惠</span><span class="line">|</span><span>随时掌握订单状态</span>';
            html+='</div></div></div></div>';
            $('body').prepend(html);

            $('#ipad_close').click(function(){
                $('#ipad_box').animate({height:'0'},500);
            });
        }
    },
    imgSliders:function(){
        var sliders = $(".img_slider","body");
        if( sliders.length > 0 ){
            sliders.each(function(i){
                var self = $(this),
                    parent = self.parent(),
                    id = "img_slider_"+i;
                parent.attr("id",id);

                var slider = new HtmlSlidePlayer("#"+id,{autosize:0,fontsize:12,time:5000});
            });
        }
    },
    imgResize:function(){
        var img_resizes = $(".img_resize","body");
        if( img_resizes.length >0 ){
            img_resizes.each(function(){
                var self = $(this),
                // 大图展示时间
                    show_time = self.attr('show_time') > 0 ? self.attr('show_time') : 3000 ,
                // 大图缩放时间
                    first_resize_time = parseInt(self.attr('first_resize_time') > 0 ? self.attr('first_resize_time') : 3000),
                // 小图展开时间
                    second_resize_time = parseInt(self.attr('second_resize_time') > 0 ? self.attr('second_resize_time') : 2000),
                // 最终小图高度
                    end_height = parseInt(self.attr('end_height') > 0 ? self.attr('end_height') : 100),
                // 是否开始动画
                    first_pic = self.find('.first_pic');


                setTimeout(function(){
                    // 窗帘关上
                    self.animate({
                        height: 0
                    },first_resize_time,function(){
                        first_pic.hide();
                        self.find('.second_pic').show();
                    }).animate({
                            height:end_height
                        },second_resize_time);
                },show_time);


            });
        }
    },
    enableGAads:function(){
        var ga_ads = $('<div style="display:inline;visibility: hidden;"><img height="1" width="1" style="border-style:none;" alt="" src="http://www.googleadservices.com/pagead/conversion/991625942/?label=AbcyCJKGhwIQ1oXs2AM&amp;guid=ON&amp;script=0"/></div>');
        $(ga_ads).appendTo('body');
    }


};
