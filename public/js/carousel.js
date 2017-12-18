/*
* Carousel component for jQuery(1.4.2)
*
* Mail : yiguoc@jumei.com
* Date : 2014-07-16
*/

(function( define, window ){

define(function(){

'use strict';

var defaults = {    
    index : 0,             // Number 初始化的索引值
    indexSwitch : true,    // Boolean 是否支持索引切换
    imglazyload : false,   // Boolean 是否开启图片延迟加载
    singleSlide : false,   // Boolean 是否开启单个切换模式
    vertical : false       // Boolean 是否开启垂直显示
};

$.easing.easeInStrong = function(t){
    return t * t * t * t;
};

var easyCarousel = {

    /*
     * 首字母大写转换
     * @param { String } 要转换的字符串
     * @return { String } 转换后的字符串 top => Top
     */    
    capitalize : function( str ){
        var firstStr = str.charAt(0);
        return firstStr.toUpperCase() + str.replace( firstStr, '' );
    },

    loadImg : function( o, elem ){
        var min = o.wrapOffset,
            max = min + o.wrapSize,            
            offsetPos = elem.offset()[o.posName],
            lazysrc, img;
            
        if( offsetPos >= min && offsetPos < max ){            
            img = elem.find( 'img' );
            lazysrc = img.attr( 'data-lazysrc' );
            
            if( lazysrc ){
                img[0].src = lazysrc;
                img.removeAttr( 'data-lazysrc' );
                
                return true;
            }
        }
        
        return false;
    },
    
    lazyLoad : function( o ){
        var beLoaded = o.beLoaded,
            i = 0;
            
        for( ; i < beLoaded.length; i++ ){
            if( easyCarousel.loadImg(o, beLoaded[i]) ){
                beLoaded.splice( i--, 1 );
            }
        }
    },
    
    slide : function( o, isPrev ){
        var target = o.target,
            listElem = o.listElem,
            pos = Math.abs( parseInt(listElem.css(o.posName)) ),
            wrapSize = o.wrapSize,
            lastPos = o.listSize - wrapSize,
            singleSlide = o.singleSlide,
            itemSize = o.itemSize,
            animMap = {},
            distance, operator, eventType;
            
        if( isPrev ){                            
            if( pos === 0 ){
                return;
            }
            
            // 单个切换
            if( singleSlide ){
                distance = itemSize;

                if( pos === itemSize ){
                    eventType = 'liketoStart';
                }
            }
            // 整屏切换
            else{
                if( wrapSize > pos ){
                    distance = pos;
                    eventType = 'liketoStart';
                }
                else{
                    distance = wrapSize;
                }
            }

            operator = '+=';
        }
        else{
            if( pos >= lastPos ){
                return;
            }            

            // 单个切换
            if( singleSlide ){
                distance = itemSize
                if( pos + itemSize >= lastPos ){
                    eventType = 'liketoEnd';
                }
            }
            // 整屏切换
            else{
                if( pos + wrapSize > lastPos ){
                    distance = lastPos - pos;
                    eventType = 'liketoEnd';
                }
                else{
                    distance = wrapSize;
                }
            }
                
            operator = '-=';    
        }
        
        animMap[ o.posName ] = operator + distance + 'px';

        listElem.animate( animMap, 400, 'easeInStrong', function(){
            if( o.imglazyload ){
                easyCarousel.lazyLoad( o );
            }
        
            if( eventType ){                
                target.trigger( eventType );
            }
        });     
    },
    
    switchHandle : function( o, elem, isTrigger ){
        var target = o.target,
            posName = o.posName,
            listElem = o.listElem,       
            itemSize = o.itemSize,     
            animMap = {},
            pos, middlePos, offsetPos, lastPos, distance, operator, eventType, wrapSize;
            
        if( o.slide ){
            wrapSize = o.wrapSize;
            pos = Math.abs( parseInt(listElem.css(posName)) );
            middlePos = pos + wrapSize / 2;
            offsetPos = Math.floor( elem.offset()[posName] ) - o.wrapOffset + pos;
            lastPos = o.listSize - wrapSize;

            if( offsetPos > middlePos ){
                distance = offsetPos - middlePos;      

                if( distance < itemSize ){
                    distance = itemSize;
                }
                // 取整计算，确保不会在图片滑动的时候出现截断的操作
                else if( distance % itemSize !== 0 ){
                    distance -= ( distance % itemSize );
                }     
                
                if( (pos + distance) > lastPos ){
                    distance = lastPos - pos;
                    eventType = 'liketoEnd';
                }

                operator = '-=';
            }
            else if( pos !== 0 ){
                distance = middlePos - offsetPos;     

                // 取整计算，确保不会在图片滑动的时候出现截断的操作
                if( distance % itemSize !== 0 ){
                    distance = distance - ( distance % itemSize );
                }      

                if( distance > pos ){
                    distance = pos;
                    eventType = 'liketoStart';
                }
                
                operator = '+=';
            }
            
            if( distance ){                        
                animMap[ posName ] = operator + distance + 'px';

                listElem.animate( animMap, 400, 'easeInStrong', function(){
                    if( o.imglazyload ){
                        easyCarousel.lazyLoad( o );
                    }
                
                    if( eventType ){
                        target.trigger( eventType );                        
                    }                    
                    
                    target.trigger( 'likeslided', [ elem[0], elem.attr('data-index') ] );
                });               
            }
            else{
                if( o.imglazyload ){
                    easyCarousel.lazyLoad( o );
                }
            }
        }
        
        if( o.indexSwitch && isTrigger ){
            target.trigger( 'likechange', [ elem[0], elem.attr('data-index') ] );
        }  
    },

    init : function( o ){
        var listElem = o.listElem,
            imglazyload = o.imglazyload,
            cssMap = {};
            
        o.wrapElem.css({
            overflow : 'hidden',
            position : 'relative' 
        });

        cssMap[ o.sizeName ] = o.listSize + 'px';
        cssMap[ o.posName ] = '0px';

        listElem.css( 'position', 'absolute' ).css( cssMap );
        
        if( o.indexSwitch ){
            o.wrapOffset = Math.floor( o.wrapElem.offset()[o.posName] );

            if( imglazyload ){
                o.beLoaded = [];
            }
            
            o.itemElem.each(function( i ){
                var item = $( this );            
                item.attr( 'data-index', i );

                if( o.index === i ){
                    item.addClass( 'current' );
                }

                // 初始化时对图片进行加载，将未加载的缓存到一个数组中
                if( imglazyload && !easyCarousel.loadImg(o, item) ){
                    o.beLoaded.push( item );
                }                
            });        
        
            listElem.delegate( 'li', 'click', function(){
                var elem = $( this );
                listElem.stop( true, true );
                if( !elem.hasClass('current') && elem.parent().hasClass('cs_list') ){
                    easyCarousel.switchHandle( o, elem, true );
                    listElem.find( 'li.current' ).removeClass( 'current' );
                    elem.addClass( 'current' );
                }
            });
            
            // 初始化高亮item的位置
            if( o.index ){
                easyCarousel.switchHandle( o, o.itemElem.eq(+o.index) );
            }
        }

        if( o.slide ){
            o.prevElem.bind( 'click.', function( e ){
                listElem.stop( true, true );  
                easyCarousel.slide( o, true );    
                e.preventDefault();
            });
            
            o.nextElem.bind( 'click', function( e ){
                listElem.stop( true, true );  
                easyCarousel.slide( o ); 
                e.preventDefault();
            });
        }   
        
        setTimeout(function(){
            o.target.trigger( 'likelayout' );
        }, 50 );
    }
    
};

var Carousel = function( target, options ){
    target = $( target ).first();
    options = options || {};
    
    var o = $.extend( {}, defaults, options ),
        outerSize;   
    
    this.__o__ = o;
    o.index = (+o.index);  

    $.extend( o, {
        target : target,
        wrapElem : target.find( 'div.cs_wrapper' ),         // wrap元素用于对超出部分的图片列表做截断
        listElem : target.find( 'ul.cs_list' ),             // 图片列表元素
        prevElem : target.find( 'a.cs_prev' ),              // 上翻页按钮
        nextElem : target.find( 'a.cs_next' ),              // 下翻页按钮
        wrapOffset : null,                                  // wrap元素的位置
        itemElem : null,                                    // 图片列表的子元素
        itemSize : null,                                    // 子元素的尺寸
        listSize : null,                                    // 图片列表元素的尺寸
        wrapSize : null,                                    // wrap元素的宽度
        slide : null,                                       // 是否滑动
        sizeName : null,                                    // 尺寸名称
        posName : null                                      // 定位名称
    });   

    if( o.vertical ){
        o.sizeName = 'height';
        o.posName = 'top';
    }
    else{
        o.sizeName = 'width';
        o.posName = 'left';
    }

    outerSize =  'outer' + easyCarousel.capitalize( o.sizeName );
    o.itemElem = o.listElem.children( 'li' );
    o.itemSize = o.itemElem[ outerSize ]();     
    o.listSize = o.itemSize * o.itemElem.length;    
    o.wrapSize = o.wrapElem[ outerSize ]();  

    // item数量不够的情况下就没有动画切换效果
    if( o.listSize <= o.wrapSize ){
        o.prevElem.hide();
        o.nextElem.hide();
        o.slide = false;
    }
    else{
        o.prevElem.show();
        o.nextElem.show();
        o.slide = true;        
    }
  
    easyCarousel.init( o );
};

Carousel.prototype = {

    destroy : function(){
        if( !this.__o__ ){
            return;
        }
        
        var o = this.__o__;
        
        o.target.unbind( 'likechange liketoStart liketoEnd' );
        o.listElem.undelegate( 'li', 'click' );
        o.prevElem.unbind( 'click' );
        o.nextElem.unbind( 'click' );
        o.itemElem.filter( '.current' ).removeClass( 'current' );

        this.__o__ = o = null;
        delete this.__o__;
    },

    on : function( type, fn ){
        if( this.__o__ ){
            var self = this;
            this.__o__.target.bind( 'like' + type, function( e, target, index ){
                if( target ){
                    e.target = target;
                    e.index = (+index);
                }                
                
                e.type = type;                
                fn.call( self, e );
                e.stopPropagation();
            });            
        }
        
        return this;
    },

    un : function( type, fn ){
        if( this.__o__ ){
            this.__o__.target.unbind( 'like' + type );
        }
        
        return this;
    },
    
    change : function( index ){
        var o = this.__o__,
            itemElem = o.itemElem.eq( index ),
            listElem = o.listElem;
            
        if( !itemElem.hasClass('current') ){                
            listElem.stop( true, true );
            easyCarousel.switchHandle( o, itemElem );
            listElem.find( 'li.current' ).removeClass( 'current' );
            itemElem.addClass( 'current' );
        }
        
        return this;
    }

};

if( !$.ui ){
    $.ui = {};
}

$.ui.Carousel = Carousel;

});

})( typeof define === 'function' && (define.amd || define.cmd) ? define : 
    function ( name, deps, factory ) { 
        if( typeof name === 'function' ){
            factory = name;
        }
        
        if( typeof deps === 'function' ){
            factory = deps;
        }
        
        if( factory ){
            factory();
        }
    }
, window );