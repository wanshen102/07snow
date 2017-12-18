(function(window) {

    var cart_jumei = new Object();
    cart_jumei.search = search;
    cart_jumei.select = select;
    cart_jumei.browse = browse;
    cart_jumei.fb_detail = fb_detail;
    cart_jumei.invoke = invoke;
    cart_jumei.invoke2 = invoke2;
    window.cart_jumei = cart_jumei;

    var cookie_uid = "";
    var isOpen_click = true;
    var doneGet = false;
    var domain = location.hostname.substr(location.hostname.indexOf('.jumei'));
    var path = '/';

    window["clkCallback"] = function(data) {
    };

    function search() {
        this.port = "80";
        this.uri = "http://keyword.click.jumei.com";
        this.domain_id = null;
        this.cust_id = null;
        this.behavior_id = null;
        this.key_words = null;
        this.resultType = null;
        this.result_cnt = null;
        this.group_id = null;
        this.platform = null;
    }

    function select() {
        this.port = "80";
        this.uri = "http://filter.click.jumei.com";
        this.domain_id = null;
        this.cust_id = null;
        this.behavior_id = null;
        this.key_words = null;
        this.brand = null;
        this.cat = null;
        this.func = null;
        this.priceSection = null;
        this.resultType = null;
        this.sort = null;
        this.result_cnt = null;
        this.group_id = null;
        this.platform = null;
    }

    function browse() {
        this.port = "80";
        this.uri = "http://click.srv.jumei.com";
        this.path = "feedback/";
        this.domain_id = null;
        this.cust_id = null;
        this.behavior_id = null;
        this.key_words = null;
        this.fb_type = null;
        this.fb_detail = null;
        this.result_cnt = null;
        this.group_id = null;
        this.from = null;
        this.platform = null;
    }

    function fb_detail() {
        this.product_id = null;
        this.category_id = null;
        this.brand_id = null;
        this.jm_price = null;
        this.page = null;
        this.pos = null;
        this.product_type = null;
        this.show_id = null;
    }

    function hashCode(str) {
        var hash = 0;
        var count = str.length;
        if (hash == 0 && count > 0) {
            var offset = 0;
            for ( var i = 0; i < count; i++) {
                hash = 31*hash + str.charCodeAt(offset++);
            }
        }
        return hash;
    }

    function getInvokeURL(action){
        var url = action.uri + ":" + action.port + "/" + action.path + "?" + "data={\"cookie_uid\"" + ":\"" + cookie_uid +"\",";
        delete action.uri;
        delete action.port;
        delete action.path;
        for(var key in action){
            url = url + "\"" + key + "\"" + ":" + obj2Str(action[key]) + ",";
        }
        url = url.replace(/,$/,"") + "}";
        return url;
    }

    function getInvokeURL_noCookie(action) {
        var url = action.uri + ":" + action.port + "/" + "?" + "data={";
        delete action.uri;
        delete action.port;
        for(var key in action){
            url = url + "\"" + key + "\"" + ":" + obj2Str(action[key]) + ",";
        }
        url = url.replace(/,$/,"") + "}";
        return url;
    }

    function obj2Str(obj){
        switch(typeof(obj)){
            case 'object':
                var ret = [];
                if (obj instanceof Array){
                    for (var i = 0, len = obj.length; i < len; i++){
                        ret.push(obj2Str(obj[i]));
                    }
                    return '[' + ret.join(',') + ']';
                }else if (obj instanceof RegExp){
                    return obj.toString();
                }else{
                    for (var a in obj){
                        ret.push('"' + a + '"' + ':' + obj2Str(obj[a]));
                    }
                    return '{' + ret.join(',') + '}';
                }
            case 'function':
                return '';
            case 'number':
                return obj.toString();
            case 'string':
                return "\"" + obj.replace(/\n|\r|\t|\\|\"|\'/g, " ") + "\"";
            case 'boolean':
                return obj.toString();
            default:
                return obj.toString();
        }
    }

    function getHttpCookie(key){
        var arr,reg = new RegExp("(^| )"+ key +"=([^;]*)(;|$)");
        if(arr = window.document.cookie.match(reg))
            return decodeURIComponent(arr[2]);
        else
            return "";
    }

    function rdStr(length) {
        var rdStr = "";
        var flag = 0;
        for (var i = 0; i < length; i++){
            flag = Math.ceil(Math.random()*3);
            switch(flag){
                case 0:
                case 1:
                    rdStr += String.fromCharCode(Math.ceil(Math.random()*25) + 97);
                    break;
                case 2:
                    rdStr += String.fromCharCode(Math.ceil(Math.random()*25) + 65);
                    break;
                case 3:
                    rdStr += Math.ceil(Math.random()*9);
                    break;
            }
        }
        return rdStr;
    }

    function setHttpCookie(key, val){
        var exprdate = new Date();
        var interval = 365 * 24 * 60 * 60 * 1000;
        exprdate.setTime(exprdate.getTime() + interval);
        document.cookie = key + "=" + encodeURIComponent(val) + ";expires="
            + exprdate.toGMTString() + ";path="+ path +";domain=" + domain;
    }

    function delHttpCookie(key){
        var exprdate = new Date();
        exprdate.setTime(exprdate.getTime() - 10000);
        document.cookie = key + "=" + ";expires="
            + exprdate.toGMTString() + ";path="+ path +";domain=" + domain;
    }

    function getcookie_uid() {
        cookie_uid = getHttpCookie("cookie_uid");
        if(cookie_uid == ""){
            cookie_uid = rdStr(20);
            setHttpCookie("cookie_uid", cookie_uid);
            doneGet = true;
        }else {
            doneGet = true;
        }
    }

    function invoke(action, immediately) {
        if(isOpen_click == true){
            try{
                if (doneGet == false) {
                    getcookie_uid();
                }
                //支付页面如果支付方式为货到付款，则会跳转到新页面，所以需要在下一个页面发送数据，immediately 为 false
                //如果为其他支付方式则不会跳转页面，所以 immediately 为 true，立即发送数据
                if (immediately) {
                    invoke_immediately(action);
                } else {
                    invoke_cookie(action, 'search_clk_url');
                }
            } catch(e) {
            }
        }
    }

    function invoke2(action, immediately) {
        if(isOpen_click == true){
            try{
                if (doneGet == false) {
                    getcookie_uid();
                }
                //支付页面如果支付方式为货到付款，则会跳转到新页面，所以需要在下一个页面发送数据，immediately 为 false
                //如果为其他支付方式则不会跳转页面，所以 immediately 为 true，立即发送数据
                if (immediately) {
                    invoke_immediately(action);
                } else {
                    invoke_cookie(action, 'search_clk_url2');
                }
            } catch(e) {}
        }
    }

    //立即发送
    function invoke_immediately(action) {
        var url = getInvokeURL(action);
        $.ajax({
            url: url,
            dataType: "jsonp",
            success: function() {}
        });
    }

    //记录cookie
    function invoke_cookie(action, cookie_name) {
        var url = getInvokeURL(action);
        setHttpCookie(cookie_name, url);
    }

    var setCart_jumei = {
        addToCart: addToCart, //加入购物车
        settle: settle, //去结算
        settle2: settle2, //去结算 with 商品数据
        confirmation: confirmation, //确认订单
        pay: pay, //支付
        pay2: pay2,//支付 with 订单数据
        pay_again2: pay_again2,//支付 with 订单数据
        pay_again: pay_again, //再次支付
        pay_order_id: pay_order_id,//确认订单order_id
        sendData2: function(){
            var search_clk_url2 = getHttpCookie("search_clk_url2");
            if(search_clk_url2) {
                search_clk_url2 = decodeURIComponent(search_clk_url2);
                $.ajax({
                    url: search_clk_url2,
                    dataType: "jsonp",
                    success: function() {
                        delHttpCookie("search_clk_url2");
                    }
                });
                setTimeout(function() {
                    delHttpCookie("search_clk_url2");
                }, 1000);
            }
        },
        sendData: function(){
            var search_clk_url = getHttpCookie("search_clk_url");
            if(search_clk_url) {
                search_clk_url = decodeURIComponent(search_clk_url);
                $.ajax({
                    url: search_clk_url,
                    dataType: "jsonp",
                    success: function() {
                        delHttpCookie("search_clk_url");
            }
                });
                setTimeout(function() {
                    delHttpCookie("search_clk_url");
                }, 1000);
        }
    }
    };

    window.setCart = setCart_jumei;

    function queryUrlArgs(name) {
        var url = window.location.href;
        var arr,reg = new RegExp(".+"+name+"=([^&|^#]+).*");
        if(arr = url.match(reg)){
            return arr[1];
        }else{
            return '';
        }
    }
    
    function queryFrom(url) {
        var arr = '';
        var reg1 = new RegExp(".+from=([^&|^#]+).*");
        var reg2 = new RegExp("[\/]+([^\.]+).*");
        if(arr = url.match(reg1)){
            return decodeURIComponent(arr[1]);
        }else if(arr = url.match(reg2)){
            return decodeURIComponent(arr[1]);
        }else{
            return '';
        }
    }
    
    function queryNum(num) {
        var reg = new RegExp("([0-9]+[\.]?[0-9]*)");
        var arr = 0;
        if(arr = num.match(reg)){
            return arr[1];
        }else{
            return 0;
        }
    }

    function isValid(value){
        if(typeof(value) == "undefined" || null == value || "" == value || 0 == value) {
            return false;
        }else {
            return true;
        }
    }

    function queryDomain(url){
        var domain_reg = new RegExp("[\/]+([^\.]+).*");
        var arr = '';
        if(arr = url.match(domain_reg)){
            return arr[1];
        }else{
            return '';
        }
    }

    function getUid() {
        var search_user_status = getHttpCookie("search_user_status");
        var uid = getHttpCookie("uid");
        if(null != search_user_status && search_user_status == 1 && (null == uid || uid == 0 || "" == uid)) {
            return -1;
        }
        return uid;
    }

    var common = {
        cust_id: isValid(getUid()) ? getUid() : 0,
            site: getHttpCookie("default_site_25") || "",
        time: new Date() - (getHttpCookie("search_start_time") || 0),
            port: "80",
            uri: "http://click.srv.jumei.com",
            path: "ub.php"
        };

    function settle2(dataArray){
        dataArray = dataArray ? dataArray : [];
        var dataArr2String = function(dataArray){
            var result = "",
                itemArr = ['product_id', 'brand_id', 'price', 'sold', 'quantity', 'category_v3_3', 'product_type'],
                itemArrLen = itemArr.length;

            for (var index in dataArray){
                var item = dataArray[index],
                    itemString = (index == 0)? "" : "|";
                
                for (var i = 0; i < itemArrLen; i++) {
                    itemString += item[ itemArr[i] ] + '-';
                }
                itemString = itemString.slice(0, -1);

                result += itemString
            }
            return result;
        };
        var dataString = dataArr2String(dataArray);
        cart_jumei.invoke2($.extend({
            type: 7,
            subtype: dataString
        }, common));
    }

    function settle(){
        cart_jumei.invoke($.extend({
            type: 3,
            subtype: 'settle'
        }, common));
    }

    function confirmation(subtype){
        cart_jumei.invoke($.extend({
                type: 5,
            subtype: subtype ? subtype : ""
        }, common));
    }

    function pay(immediately){
        cart_jumei.invoke($.extend({
                type: 4,
            subtype: 'pay'
        }, common), immediately);
    }

    function pay2(orderString, immediately){
        cart_jumei.invoke2($.extend({
            type: 8,
            subtype: orderString ? orderString : ""
        }, common), immediately);
    }

    function pay_again2(orderString, immediately){
        cart_jumei.invoke2($.extend({
            type: 8,
            subtype: orderString ? orderString : ""
        }, common), immediately);
    }

    function pay_again(subtype, immediately){
        cart_jumei.invoke($.extend({
            type: 6,
            subtype: subtype ? subtype : ""
        }, common), immediately);
    }

    function pay_order_id(subtype, immediately) {
        cart_jumei.invoke($.extend({
            type: 9,
            subtype: subtype ? subtype : ""
        }, common), immediately);
    }

    function addToCart(fb_type, info) {
        var cart = new cart_jumei.browse();
        cart.domain_id = queryDomain(window.location.href);
        var cust_id = getUid();
        cart.cust_id = isValid(cust_id)?cust_id:0;
        cart.behavior_id = 3;
        var key_words = queryFrom(info.url || window.location.href).match(new RegExp("sr_([^_]*)_.*"));
        key_words = isValid(key_words)?key_words:[0,0];
        cart.key_words = isValid(key_words[1])?decodeURIComponent(key_words[1]):'null';
        cart.fb_type = isValid(fb_type)?fb_type:0;
        var fb_detail = new cart_jumei.fb_detail();
        var pid = $("#search_product_id").val() || info.pid;
        fb_detail.product_id = isValid(pid)?pid:0;
        var cid = $("#search_category_info").val() || info.cid;
        fb_detail.category_id = isValid(cid)?cid:0;
        var brand_id = $("#search_brand_id").val() || info.brand_id;
        fb_detail.brand_id = isValid(brand_id)?brand_id:0;
        fb_detail.page = 0;
        fb_detail.pos = info.pos || 0;
        var jm_price = $("div.pop_price").children("span.price_now").text() || info.jm_price;
        jm_price = queryNum(jm_price);
        fb_detail.jm_price = isValid(jm_price)?jm_price:0;
        var product_type = $("#search_product_type").val() || info.product_type;
        fb_detail.product_type = isValid(product_type)?product_type:"mall";
        var show_id = $("#search_pop_id").val() || info.show_id;
        fb_detail.show_id = isValid(show_id)?show_id:0;
        cart.fb_detail = [fb_detail];
        cart.result_cnt = info.result_cnt || 0;
        var abt65 = getHttpCookie("abt65");
        var group_id = isValid(abt65)?abt65:0;
        if(group_id == "new"){
            group_id = 2;
        }else if(group_id == "old"){
            group_id = 1;
        }else{
            group_id = 0;
        }
        cart.group_id = group_id;
        cart.from = info.from || window.location.href;
        cart.platform = 1;
        cart.site = getHttpCookie("default_site_25") || "null";
        cart_jumei.invoke(cart);
    }

})(window);
var cart_clk_jumei = {
    init: function(){
        setCart.sendData();
        setCart.sendData2();
    }
};