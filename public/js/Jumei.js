<<<<<<< .mine
!function(a){var b=a.document,c=a.location,d="all",e=!0,f="container",g="click",h=960,i=new RegExp("([^.]+)..*"),j=new RegExp("([^#]+)#([^#]+)"),k=new RegExp("([^.]+).([^.]+)"),l=443,m="https://click.jumei.com",n="map",o=a.document.domain.match(new RegExp(".[^.]+.com"));("undefined"==typeof o||null==o||""==o||0==o)&&(o=".jumei.com");var p=function(a,b,c){return new p.fn.init(a,b,c)};p.fn=p.prototype={domain_this:d,isOpen_this:e,container_this:f,width_this:h,event_this:g,dom:null,init:function(a,c,d){this.domain_this=this.isValid(a)?a:this.domain_this,this.isOpen_this="undefined"==typeof c?this.isOpen_this:c,this.container_this=this.isValid(d)?d:this.container_this;var e=b.domain;if(e=e.match(i),e=this.isValid(e)?e:["",""],"all"==this.domain_this){if(this.isOpen_this)if("string"==typeof this.container_this&&this.container_this.indexOf("#")>=0){var f=this.getDom(this.container_this,"id");f.length>0&&(this.dom=f[0])}else if("string"==typeof this.container_this&&this.container_this.indexOf(".")>=0){var f=this.getDom(this.container_this,"class");f.length>0&&(this.dom=f[0])}else this.dom=b.getElementById(this.container_this)}else if(this.domain_this==e[1]&&this.isOpen_this)if("string"==typeof this.container_this&&this.container_this.indexOf("#")>=0){var f=this.getDom(this.container_this,"id");f.length>0&&(this.dom=f[0])}else if("string"==typeof this.container_this&&this.container_this.indexOf(".")>=0){var f=this.getDom(this.container_this,"class");f.length>0&&(this.dom=f[0])}else this.dom=b.getElementById(this.container_this);return this},getDom:function(a,c){var d="";"id"==c?d=a.match(j):"class"==c&&(d=a.match(k));var e=null,f=[];if(d=this.isValid(d)?d:["","",""],this.isValid(d[1]&&this.isValid(d[2]))){e=b.getElementsByTagName(d[1]);for(var g=0;g<e.length;g++)e[g].getAttribute(c)==d[2]&&(f[f.length]=e[g])}return f},clkMap:function(){var a=new Object;return a.port=null,a.uri=null,a.path=null,a.cookie_uid=null,a.cust_id=null,a.refer=null,a.url=null,a.xy=null,a.type=null,a.time=null,a.site=null,a},event:function(d,e,f){if(this.dom){if(this.event_this=this.isValid(d)?d:this.event_this,"string"==typeof f&&f.indexOf("#")>=0){var g=this.getDom(f,"id");g.length>0&&(f=g[0].offsetWidth)}else if("string"==typeof f&&f.indexOf(".")>=0){var g=this.getDom(f,"class");g.length>0&&(f=g[0].offsetWidth)}else/^\d+$/.test(f)?f=f:(f=b.getElementById(f),f=this.isValid(f)?f.offsetWidth:this.width_this);/^\d+$/.test(f)&&(this.width_this=this.isValid(f)?f:this.width_this);var h=this;h.addEvent(h.dom,h.event_this,function(d){d=d||a.event;var f=b.documentElement.scrollLeft||b.body.scrollLeft,g=b.documentElement.scrollTop||b.body.scrollTop,i=b.documentElement.scrollWidth||b.body.scrollWidth,j=d.pageX||d.clientX+f,k=d.pageY||d.clientY+g,n=(i-h.width_this)/2,o=encodeURIComponent(decodeURIComponent(c.href)),p=parseInt(j-n)+"_"+parseInt(k),q=new h.clkMap;q.port=l,q.uri=m,q.path="hotmap.php";var r=h.getcookie_uid("cookie_uid",20);q.cookie_uid=r;var s=h.getUid();q.cust_id=h.isValid(s)?s:0;var t=encodeURIComponent(decodeURIComponent(b.referrer));q.refer=h.isValid(t)?t:o,q.url=o,q.xy=p,q.type=e,q.time=0,q.site=h.isValid(h.getCookie("default_site_25"))?h.getCookie("default_site_25"):"",o=h.getInvokeURL_path(q),i>=h.width_this&&parseInt(j-n)>=0&&parseInt(j-n)<=h.width_this&&$.ajax({url:o,dataType:"jsonp",success:function(){}})})}},click:function(a){if((c.href.match(new RegExp(i)).length>0||"all"==this.domain_this)&&this.isOpen_this){var d=new this.clkMap;d.port=l,d.uri=m,d.path=n;var e=this.getcookie_uid("cookie_uid",20);d.cookie_uid=e;var f=this.getUid();d.cust_id=this.isValid(f)?f:0;var g=encodeURIComponent(decodeURIComponent(b.referrer)),h=encodeURIComponent(decodeURIComponent(c.href));d.refer=this.isValid(g)?g:h,d.url=h,d.xy=0,d.type=a,d.time=this.getVisitTime(),d.site=this.isValid(this.getCookie("default_site_25"))?this.getCookie("default_site_25"):"",h=this.getInvokeURL(d),$.ajax({url:h,dataType:"jsonp",success:function(){}})}},mylist:function(){var a=new Object;return a.port=443,a.uri="https://click.jumei.com",a.path="mynav.php",a.cookie_uid=null,a.cust_id=null,a.type=null,a.site=null,a},listClick:function(){var a=c.href;if((a.match(new RegExp(i)).length>0||"all"==this.domain_this)&&this.isOpen_this){var b=new this.mylist;b.cookie_uid=this.getcookie_uid("cookie_uid",20),b.cust_id=this.isValid(this.getUid())?this.getUid():0;var d=a.match(new RegExp("i/(order|product|wishdeal|membership|credit|activity|account|RMA)/?([^?/]+)?"));d=this.isValid(d)&&3==d.length?this.isValid(d[2])?this.isValid(d[1])?d[1]+"_"+d[2]:"":this.isValid(d[1])?d[1]:"":"",b.type=this.isValid(d)?d:"",b.site=this.isValid(this.getCookie("default_site_25"))?this.getCookie("default_site_25"):"";var e=this.getInvokeURL_path(b);""!=d&&$.ajax({url:e,dataType:"jsonp",success:function(){}})}},account:function(){var a=new Object;return a.port=443,a.uri="https://click.jumei.com",a.path="ub.php",a.cookie_uid=null,a.cust_id=null,a.time=null,a.type=null,a.subtype=null,a.site=null,a},otherAccount:function(){var a=c.href;if((a.match(new RegExp(i)).length>0||"all"==this.domain_this)&&this.isOpen_this){var d=a.match(new RegExp("^https://"+b.domain+"/i/extconnect/([^/]+)/\\?site_name=([^&#]+).*"));if(null!=d){var e=new this.account;e.cookie_uid=this.getcookie_uid("cookie_uid",20),e.cust_id=this.isValid(this.getUid())?this.getUid():0,e.time=(new Date).getTime()-this.getCookie("search_start_time");var f=d[1];if(e.type="login"==f?1:"signup"==f?2:0,0!=e.type&&null!=d[2]&&""!=d[2]){e.subtype=d[2],e.site=this.isValid(this.getCookie("default_site_25"))?this.getCookie("default_site_25"):"";var g=this.getInvokeURL_path(e);$.ajax({url:g,dataType:"jsonp",success:function(){}})}}}},accountLogin:function(a,b){var d=c.href;if((d.match(new RegExp(i)).length>0||"all"==this.domain_this)&&this.isOpen_this){b=new RegExp("^1[3|4|5|7|8][0-9][0-9]{8}$").test(b)?"phone":new RegExp("^[A-Za-z0-9]+([-+.][A-Za-z0-9]+)*@[A-Za-z0-9]+([-.][A-Za-z0-9]+)*.[A-Za-z0-9]+([-.][A-Za-z0-9]+)*$").test(b)?"mail":"username";var e=new this.account;e.cookie_uid=this.getcookie_uid("cookie_uid",20),e.cust_id=this.isValid(this.getUid())?this.getUid():0,e.time=(new Date).getTime()-this.getCookie("search_start_time"),e.type=a,e.subtype=b,e.site=this.isValid(this.getCookie("default_site_25"))?this.getCookie("default_site_25"):"";var f=this.getInvokeURL_path(e);this.setHttpCookie("account_clk_url",f)}},accountSignup:function(a,b){var d=c.href;if((d.match(new RegExp(i)).length>0||"all"==this.domain_this)&&this.isOpen_this){var e=new this.account;e.cookie_uid=this.getcookie_uid("cookie_uid",20),e.cust_id=this.isValid(this.getUid())?this.getUid():0,e.time=(new Date).getTime()-this.getCookie("search_start_time"),e.type=a,e.subtype=b,e.site=this.isValid(this.getCookie("default_site_25"))?this.getCookie("default_site_25"):"";var f=this.getInvokeURL_path(e);this.setHttpCookie("account_clk_url",f)}},getVisitTime:function(){var a=this.getCookie("search_start_time");if(a){var b=(new Date).getTime()-a;return this.setHttpCookie("search_start_time",(new Date).getTime()),b>18e5?-1:b}return this.setHttpCookie("search_start_time",(new Date).getTime()),-1},obj2str:function(a){switch(typeof a){case"object":var b=[];if(a instanceof Array){for(var c=0,d=a.length;d>c;c++)b.push(this.obj2Str(a[c]));return"["+b.join(",")+"]"}if(a instanceof RegExp)return a.toString();for(var e in a)b.push('"'+e+'"'+":"+this.obj2Str(a[e]));return"{"+b.join(",")+"}";case"function":return"";case"number":return a.toString();case"string":return'"'+a.replace(/\n|\r|\t|\\|\"|\'/g," ")+'"';case"boolean":return a.toString();default:return a.toString()}},getInvokeURL:function(a){var b=a.uri+":"+a.port+"/"+a.path+"/"+"?"+"data={";delete a.uri,delete a.port,delete a.path;for(var c in a)b=b+'"'+c+'"'+":"+this.obj2str(a[c])+",";return b=b.replace(/,$/,"")+"}"},getInvokeURL_path:function(a){var b=a.uri+":"+a.port+"/"+a.path+"?"+"data={";delete a.uri,delete a.port,delete a.path;for(var c in a)b=b+'"'+c+'"'+":"+this.obj2str(a[c])+",";return b=b.replace(/,$/,"")+"}"},getUserStatus:function(){var b,c=new RegExp("(^| )search_user_status=([^;]*)(;|$)"),d=0;if((b=a.document.cookie.match(c))?d=decodeURIComponent(b[2]):this.setHttpCookie("search_user_status",0),c=new RegExp("(^| )uid=([^;]*)(;|$)"),b=a.document.cookie.match(c)){var e=decodeURIComponent(b[2]);null!=e&&0!=e&&0==d&&this.setHttpCookie("search_user_status",1)}},getcookie_uid:function(a,b){var c=this.getCookie(a);return this.isValid(c)||(c=this.rdStr(b),this.setHttpCookie("cookie_uid",c)),decodeURIComponent(this.getCookie(a))},getUid:function(){var a=this.getCookie("search_user_status"),b=this.getCookie("uid");return null==a||1!=a||null!=b&&0!=b&&""!=b?b:-1},setHttpCookie:function(a,c){var d=new Date,e=31536e7;d.setTime(d.getTime()+e),b.cookie=a+"="+encodeURIComponent(c)+";expires="+d.toGMTString()+";path=/;domain="+o},delHttpCookie:function(a){var c=new Date;c.setTime(c.getTime()-1e4),b.cookie=a+"="+";expires="+c.toGMTString()+";path=/;domain="+o},rdStr:function(a){for(var b="",c=0,d=0;a>d;d++)switch(c=Math.ceil(3*Math.random())){case 0:case 1:b+=String.fromCharCode(Math.ceil(25*Math.random())+97);break;case 2:b+=String.fromCharCode(Math.ceil(25*Math.random())+65);break;case 3:b+=Math.ceil(9*Math.random())}return b},getCookie:function(b){var c,d=new RegExp("(^| )"+b+"=([^;]*)(;|$)");return(c=a.document.cookie.match(d))?c[2]:""},isValid:function(a){return"undefined"==typeof a||null==a||""==a||0==a?!1:!0},addEvent:function(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener(b,c,!1)}},p.fn.init.prototype=p.fn,a.clickMap=p;try{var q=p().getCookie("account_clk_url");null!=q&&""!=q&&(q=decodeURIComponent(q),$.ajax({url:q,dataType:"jsonp",success:function(){}}),setTimeout(function(){p().delHttpCookie("account_clk_url")},1e3)),new RegExp("^search..*$").test(a.document.domain)?p("search",!0,"container").event("mousedown",1,"1200"):new RegExp("^http://mall.[^.]+.com/(\\?from=.*)?$").test(a.location.href)||new RegExp("^http://mall.[^.]+.com/products/[0-9]+-[0-9]+-[0-9]+-[0-9]+-[0-9]+.html.*$").test(a.location.href)?p("mall",!0,"container").event("mousedown",1,"1200"):new RegExp("^http://mall.[^.]+.com/[^/]+/(\\?from=.*)?$").test(a.location.href)?p("mall",!0,"container").event("mousedown",1,"960"):new RegExp("^http://(bj|cd|sh|gz).[^.]+.com/(\\?from=.*)?$").test(a.location.href)?(p("bj",!0,"container").event("mousedown",1,"960"),p("cd",!0,"container").event("mousedown",1,"960"),p("sh",!0,"container").event("mousedown",1,"960"),p("gz",!0,"container").event("mousedown",1,"960")):(new RegExp("^http://pop.[^.]+.com/(dress_sport|shoe_bag|home_baby)(\\?from=.*)?$").test(a.location.href)||new RegExp("^http://pop.[^.]+.com/promotion/[0-9]+.html(\\?from=.*)?$").test(a.location.href)||new RegExp("^http://pop.[^.]+.com/(\\?from=.*)?$").test(a.location.href))&&p("pop",!0,"container").event("mousedown",1,"960"),p("all",!0).click(2),p("www",!0).listClick(),p("www",!0).otherAccount()}catch(r){}}(window);=======
(function (window) {
    
    var document = window.document,
    location = window.location,
    domain_default = "all",
    isOpen_default = true,
    container_default = "container",
    event_default = "click",
    width_default = 960,
    domain_reg = new RegExp("([^\.]+)\..*"),
    id_reg = new RegExp("([^#]+)#([^#]+)"),
    class_reg = new RegExp("([^\.]+)\.([^\.]+)"),
    port = 80,
    uri = "http://click.srv.jumei.com",
    path = "map",
    cookie_domain = window.document.domain.match(new RegExp("\.[^\.]+\.com"));
    
    if(typeof(cookie_domain) == "undefined" || null == cookie_domain || "" == cookie_domain || 0 == cookie_domain){
        cookie_domain = ".jumei.com";
    }
    
    var clickMap = function(domain, isOpen, container) {
        return new clickMap.fn.init(domain, isOpen, container);
    };
    
    clickMap.fn = clickMap.prototype = {
            domain_this : domain_default,
            isOpen_this : isOpen_default,
            container_this : container_default,
            width_this : width_default,
            event_this : event_default,
            dom : null,
            init : function(domain, isOpen, container) {
                this.domain_this = this.isValid(domain)?domain:this.domain_this;
                this.isOpen_this = typeof(isOpen) == "undefined"?this.isOpen_this:isOpen;
                this.container_this = this.isValid(container)?container:this.container_this;
                var href = document.domain;
                href = href.match(domain_reg);
                href = this.isValid(href)?href:['',''];
                if(this.domain_this == "all") {
                    if(this.isOpen_this) {
                        if(typeof(this.container_this) == "string" && this.container_this.indexOf("#") >= 0) {
                            var ele = this.getDom(this.container_this, "id");
                            if(ele.length > 0) {
                                this.dom = ele[0];
                            }
                        }else if(typeof(this.container_this) == "string" && this.container_this.indexOf(".") >= 0) {
                            var ele = this.getDom(this.container_this, "class");
                            if(ele.length > 0) {
                                this.dom = ele[0];
                            }
                        }else {
                            this.dom = document.getElementById(this.container_this);
                        }
                    }
                } else if(this.domain_this == href[1]) {
                    if(this.isOpen_this) {
                        if(typeof(this.container_this) == "string" && this.container_this.indexOf("#") >= 0) {
                            var ele = this.getDom(this.container_this, "id");
                            if(ele.length > 0) {
                                this.dom = ele[0];
                            }
                        }else if(typeof(this.container_this) == "string" && this.container_this.indexOf(".") >= 0) {
                            var ele = this.getDom(this.container_this, "class");
                            if(ele.length > 0) {
                                this.dom = ele[0];
                            }
                        }else {
                            this.dom = document.getElementById(this.container_this);
                        }
                    }
                }
                return this;
            },
            getDom : function(selector, type) {
                var sel = "";
                if(type == "id") {
                    sel = selector.match(id_reg);
                }else if(type == "class") {
                    sel = selector.match(class_reg);
                }
                var tagName = null;
                var element = [];
                sel = this.isValid(sel)?sel:['','',''];
                if(this.isValid(sel[1] && this.isValid(sel[2]))) {
                    tagName = document.getElementsByTagName(sel[1]);
                    for(var i = 0; i< tagName.length; i++) {
                        if(tagName[i].getAttribute(type) == sel[2]) {
                            element[element.length] = tagName[i];
                        }
                    }
                }
                return element;
            },
            clkMap : function() {
                var obj = new Object();
                obj.port = null;
                obj.uri = null;
                obj.path = null;
                obj.cookie_uid = null;
                obj.cust_id = null;
                obj.refer = null;
                obj.url = null;
                obj.xy = null;
                obj.type = null;
                obj.time = null;
                obj.site = null;
                return obj;
            },
            event : function(eventName,type,width) {
                if(this.dom){
                    this.event_this = this.isValid(eventName)?eventName:this.event_this;
                    if(typeof(width) == "string" && width.indexOf("#") >= 0) {
                        var ele = this.getDom(width, "id");
                        if(ele.length > 0) {
                            width = ele[0].offsetWidth;
                        }
                    }else if(typeof(width) == "string" && width.indexOf(".") >= 0) {
                        var ele = this.getDom(width, "class");
                        if(ele.length > 0) {
                            width = ele[0].offsetWidth;
                        }
                    }else if(/^\d+$/.test(width)){
                        width = width;
                    }else{
                        width = document.getElementById(width);
                        width = this.isValid(width)?width.offsetWidth:this.width_this;
                    }
                    if(/^\d+$/.test(width)){
                        this.width_this = this.isValid(width)?width:this.width_this;
                    }
                    var th = this;
                    th.addEvent(th.dom, th.event_this, function(event) {
                        event = event || window.event;
                        var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                        var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                        var clientWidth = document.documentElement.scrollWidth || document.body.scrollWidth;
                        var x = event.pageX || event.clientX + scrollX;
                        var y = event.pageY || event.clientY + scrollY;
                        var width = (clientWidth - th.width_this) / 2;
                        var url = encodeURIComponent(decodeURIComponent(location.href));
                        var xy = parseInt(x - width) + "_" + parseInt(y);
                        var clk = new th.clkMap();
                        clk.port = port;
                        clk.uri = uri;
                        clk.path = "hotmap.php";
                        var cookie_uid = th.getcookie_uid("cookie_uid", 20);
                        clk.cookie_uid = cookie_uid;
                        var uid = th.getUid();
                        clk.cust_id = th.isValid(uid)?uid:0;
                        var ref = encodeURIComponent(decodeURIComponent(document.referrer));
                        clk.refer = th.isValid(ref)?ref:url;
                        clk.url = url;
                        clk.xy = xy;
                        clk.type = type;
                        clk.time = 0;
                        clk.site = th.isValid(th.getCookie("default_site_25"))?th.getCookie("default_site_25"):"null";
                        url = th.getInvokeURL_path(clk);
                        if(clientWidth >= th.width_this && parseInt(x - width) >= 0 && parseInt(x - width) <= th.width_this) {
                            $.ajax({
                                url: url,
                                dataType: "jsonp",
                                success: function() {}
                            });
                        }
                    });
                }
            },
            click : function(type) {
                if((location.href.match(new RegExp(domain_reg)).length > 0 || this.domain_this == "all") && this.isOpen_this) {
                    var clk = new this.clkMap();
                    clk.port = port;
                    clk.uri = uri;
                    clk.path = path;
                    var cookie_uid = this.getcookie_uid("cookie_uid", 20);
                    clk.cookie_uid = cookie_uid;
                    var uid = this.getUid();
                    clk.cust_id = this.isValid(uid)?uid:0;
                    var ref = encodeURIComponent(decodeURIComponent(document.referrer));
                    var url = encodeURIComponent(decodeURIComponent(location.href));
                    clk.refer = this.isValid(ref)?ref:url;
                    clk.url = url;
                    clk.xy = 0;
                    clk.type = type;
                    clk.time = this.getVisitTime();
                    clk.site = this.isValid(this.getCookie("default_site_25"))?this.getCookie("default_site_25"):"null";
                    url = this.getInvokeURL(clk);
                    $.ajax({
                        url: url,
                        dataType: "jsonp",
                        success: function() {}
                    });
                }
            },
            mylist : function() {
                var obj = new Object();
                obj.port = 80;
                obj.uri = "http://click.srv.jumei.com";
                obj.path = "mynav.php";
                obj.cookie_uid = null;
                obj.cust_id = null;
                obj.type = null;
                obj.site = null;
                return obj;
            },
            listClick : function() {
                var href = location.href;
                if((href.match(new RegExp(domain_reg)).length > 0 || this.domain_this == "all") && this.isOpen_this) {
                    var list = new this.mylist();
                    list.cookie_uid = this.getcookie_uid("cookie_uid", 20);
                    list.cust_id = this.isValid(this.getUid())?this.getUid():0;
                    var listType = href.match(new RegExp("i/(order|product|wishdeal|membership|credit|activity|account|RMA)/?([^\?/]+)?"));
                    if(this.isValid(listType)&&listType.length == 3){
                        if(this.isValid(listType[2])) {
                            if(this.isValid(listType[1])) {
                                listType = listType[1] + "_" + listType[2];
                            }else {
                                listType = "";
                            }
                        }else{
                            if(this.isValid(listType[1])) {
                                listType = listType[1];
                            }else {
                                listType = "";
                            }
                        }
                    }else{
                        listType = "";
                    }
                    list.type = this.isValid(listType)?listType:"null";
                    list.site = this.isValid(this.getCookie("default_site_25"))?this.getCookie("default_site_25"):"null";
                    var url = this.getInvokeURL_path(list);
                    if(listType != "" || listType != "null") {
                        $.ajax({
                            url: url,
                            dataType: "jsonp",
                            success: function() {}
                        });
                    }
                }
            },
            account:function() {
                var obj = new Object();
                obj.port = 80;
                obj.uri = "http://click.srv.jumei.com";
                obj.path = "ub.php";
                obj.cookie_uid = null;
                obj.cust_id = null;
                obj.time = null;
                obj.type = null;
                obj.subtype = null;
                obj.site = null;
                return obj;
            },
            otherAccount:function(){
                var href = location.href;
                if((href.match(new RegExp(domain_reg)).length > 0 || this.domain_this == "all") && this.isOpen_this) {
                    var type_sitename = href.match(new RegExp("^http://" + document.domain + "/i/extconnect/([^/]+)/\\?site_name=([^&#]+).*"));
                    if(null != type_sitename) {
                        var account = new this.account();
                        account.cookie_uid = this.getcookie_uid("cookie_uid", 20);
                        account.cust_id = this.isValid(this.getUid())?this.getUid():0;
                        account.time = new Date().getTime() - this.getCookie("search_start_time");
                        var type = type_sitename[1];
                        if(type == "login") {
                            account.type = 1;
                        }else if(type ==  "signup") {
                            account.type = 2;
                        }else {
                            account.type = 0;
                        }
                        if(account.type != 0 && null != type_sitename[2] && "" != type_sitename[2]) {
                            account.subtype = type_sitename[2];
                            account.site = this.isValid(this.getCookie("default_site_25"))?this.getCookie("default_site_25"):"null";
                            var url = this.getInvokeURL_path(account);
                            $.ajax({
                                url: url,
                                dataType: "jsonp",
                                success: function() {}
                            });
                        }
                    }
                }
            },
            accountLogin:function(type, subtype) {
                var href = location.href;
                if((href.match(new RegExp(domain_reg)).length > 0 || this.domain_this == "all") && this.isOpen_this) {
                    if(new RegExp("^1[3|4|5|7|8][0-9][0-9]{8}$").test(subtype)) {
                        subtype = "phone";
                    }else if(new RegExp("^[A-Za-z0-9]+([-+.][A-Za-z0-9]+)*@[A-Za-z0-9]+([-.][A-Za-z0-9]+)*\.[A-Za-z0-9]+([-.][A-Za-z0-9]+)*$").test(subtype)) {
                        subtype = "mail";
                    }else {
                        subtype = "username";
                    }
                    var account = new this.account();
                    account.cookie_uid = this.getcookie_uid("cookie_uid", 20);
                    account.cust_id = this.isValid(this.getUid())?this.getUid():0;
                    account.time = new Date().getTime() - this.getCookie("search_start_time");
                    account.type = type;
                    account.subtype = subtype;
                    account.site = this.isValid(this.getCookie("default_site_25"))?this.getCookie("default_site_25"):"null";
                    var url = this.getInvokeURL_path(account);
                    this.setHttpCookie("account_clk_url", url);
                }
            },
            accountSignup:function(type, subtype) {
                var href = location.href;
                if((href.match(new RegExp(domain_reg)).length > 0 || this.domain_this == "all") && this.isOpen_this) {
                    var account = new this.account();
                    account.cookie_uid = this.getcookie_uid("cookie_uid", 20);
                    account.cust_id = this.isValid(this.getUid())?this.getUid():0;
                    account.time = new Date().getTime() - this.getCookie("search_start_time");
                    account.type = type;
                    account.subtype = subtype;
                    account.site = this.isValid(this.getCookie("default_site_25"))?this.getCookie("default_site_25"):"null";
                    var url = this.getInvokeURL_path(account);
                    this.setHttpCookie("account_clk_url", url);
                }
            },
            getVisitTime: function() {
                var search_start_time = this.getCookie("search_start_time");
                if(search_start_time){
                    var time = new Date().getTime() - search_start_time;
                    this.setHttpCookie("search_start_time", new Date().getTime());
                    if(time > 30 * 60 *1000) {
                        return -1;
                    }else{
                        return time;
                    }
                }else {
                    this.setHttpCookie("search_start_time", new Date().getTime());
                    return -1;
                }
            },
            obj2str : function(obj) {
                switch(typeof(obj)){
                    case 'object':
                    var ret = [];
                    if (obj instanceof Array){
                        for (var i = 0, len = obj.length; i < len; i++){
                            ret.push(this.obj2str(obj[i]));
                        }
                        return '[' + ret.join(',') + ']';
                    }else if (obj instanceof RegExp){
                        return obj.toString();
                    }else{
                        for (var a in obj){
                            ret.push('"' + a + '"' + ':' + this.obj2str(obj[a]));
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
            },
            getInvokeURL : function(action) {
                var url = action.uri + ":" + action.port + "/" + action.path + "/" + "?" + "data={";
                delete action.uri;
                delete action.port;
                delete action.path;
                for(var key in action){
                    url = url + "\"" + key + "\"" + ":" + this.obj2str(action[key]) + ",";
                }
                url = url.replace(/,$/,"") + "}";
                return url;
            },
            getInvokeURL_path : function(action) {
                var url = action.uri + ":" + action.port + "/" + action.path + "?" + "data={";
                delete action.uri;
                delete action.port;
                delete action.path;
                for(var key in action){
                    url = url + "\"" + key + "\"" + ":" + this.obj2str(action[key]) + ",";
                }
                url = url.replace(/,$/,"") + "}";
                return url;
            },
            getUserStatus : function() {
                var arr,reg = new RegExp("(^| )search_user_status=([^;]*)(;|$)");
                var status = 0;
                if(arr = window.document.cookie.match(reg)) {
                    status = decodeURIComponent(arr[2]);
                 }else {
                    this.setHttpCookie("search_user_status", 0);
                 }
               arr,reg = new RegExp("(^| )uid=([^;]*)(;|$)");
               if(arr = window.document.cookie.match(reg)) {
                   var uid = decodeURIComponent(arr[2]);
                   if(null != uid && uid != 0 && status == 0) {
                    this.setHttpCookie("search_user_status", 1);
                   }
               }
            },
            getcookie_uid : function(name, length) {
                var cookie_uid = this.getCookie(name);
                if(!this.isValid(cookie_uid)) {
                    cookie_uid = this.rdStr(length);
                    this.setHttpCookie("cookie_uid",cookie_uid);
                }
                return decodeURIComponent(this.getCookie(name));
            },
            getUid : function() {
                var search_user_status = this.getCookie("search_user_status");
                var uid = this.getCookie("uid");
                if(null != search_user_status && search_user_status == 1 && (null == uid || uid == 0 || "" == uid)) {
                    return -1;
                }
                return uid;
            },
            setHttpCookie : function(key,val) {
                var exprdate = new Date();
                var interval = 10 * 365 * 24 * 60 * 60 * 1000;
                exprdate.setTime(exprdate.getTime() + interval);
                document.cookie = key + "=" + encodeURIComponent(val) + ";expires="
                    + exprdate.toGMTString() + ";path=/;domain=" + cookie_domain;
            },
            delHttpCookie : function(key) {
                var exprdate = new Date(); 
                exprdate.setTime(exprdate.getTime() - 10000);
                document.cookie = key + "=" + ";expires="
                    + exprdate.toGMTString() + ";path=/;domain=" + cookie_domain;
            },
            rdStr : function(length) {
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
            },
            getCookie : function(name) {
                var arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
                if(arr = window.document.cookie.match(reg))
                    return arr[2];
                else
                    return '';
            },
            isValid : function(value) {
                 if(typeof(value) == "undefined" || null == value || "" == value || 0 == value) {
                     return false;
                 }else {
                     return true;
                 }
            },
            addEvent : function(target, eventName, callbackHander) {
                if (target.attachEvent) {
                    target.attachEvent("on" + eventName, callbackHander);
                } else {
                    target.addEventListener(eventName, callbackHander, false);
                }
            }
    };
    
    clickMap.fn.init.prototype = clickMap.fn;
    
    window.clickMap = clickMap;

    try{
     // clickMap("cart", true, "container").event("mousedown",1,"960");//购物车热点图，参数说明：1表示域名，2是否开启热点图，3哪个元素下的热点图统计，4表示鼠标世界，5类型（1热点图，2路径图），6热点图范围
        clickMap("all",true).click(2);//路径图，参数说明：1表示哪个域开启路径图，2表示是否开启，3类型（1热点图，2路径图）
    }catch (e) {
    }
 })(window);
>>>>>>> .r198
