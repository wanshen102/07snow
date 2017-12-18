if (!window.Jumei) {
    window.Jumei = new Object();
};
 //验证密码类型
function charMode(word){
if (word>=48 && word <=57) //数字 
    return 1; 
if (word>=65 && word <=90) //大写字母 
    return 2; 
if (word>=97 && word <=122) //小写 
    return 4; 
else 
    return 8; //特殊字符 
}; 

Jumei.Account = {
    init: function() {
        Jumei.Account.enableSendInvitation();
        Jumei.Account.enableEmailAutoComplete();
        Jumei.Account.enableRegistrationValidation();
        Jumei.Account.enableCreditTopup();

        if( (RM_CONTROL=='Order' && RM_ACTION=='comment') || (RM_CONTROL=='ProductReport' && RM_ACTION=='edit'))
            Jumei.Account.enableRating();     // 星级评价功能，临时放在这里
        
        if( RM_CONTROL=='ProductReport' || (RM_CONTROL=='Mall' && RM_ACTION=='show') )
            Jumei.Account.enableTabSwitch();  //tab切换，临时放在这里

        if(RM_CONTROL == 'Membership' && RM_ACTION == 'lucky_box'){
            Jumei.Account.lucky_box_address();
        }

        if(RM_CONTROL == 'Membership' && RM_ACTION == 'show'){
            Jumei.Account.demonds_box_address();
        }

        if(RM_CONTROL == 'Credit' && RM_ACTION == 'credit_shipping'){
            Jumei.Account.enableCreditAddress();
        }
        if( (RM_CONTROL=='Order' && RM_ACTION=='comment')
            || (RM_CONTROL=='Deal' && RM_ACTION=='deals')
            || (RM_CONTROL=='ProductReport')
            )
            Jumei.Account.enableInputWatermarkAndReset();		// 文字填入input/textarea 技术，临时放在这里

        // Help Center
        if(RM_CONTROL=='Help' || RM_CONTROL=='About' || RM_CONTROL == 'Feedback' || RM_CONTROL=='Subscribe'){
            Jumei.Account.help_left_nav();
        }

        // login & signup
        if(RM_CONTROL=='Account' && (RM_ACTION=='login' || RM_ACTION=='signup' || RM_ACTION=='pre_login') || (RM_CONTROL=='Seckill' && RM_ACTION=="login")){
            Jumei.Account.enableAccountSignupLogin();
        }
    }, 
    enableSendInvitation: function() {
        var $this = $('#form_invitation');
        if ($this.length > 0) {
            $this.submit(function() {
                if ($('#real_name').val() == '') {
                    alert('姓名不能为空');
                    return false;
                }
                if ($('#recipients').val() == '') {
                    alert('邮箱不能为空');
                    return false;
                }

                var sending_button = $('#send_button');
                sending_button.attr('disabled', 'disabled');
                sending_button.attr('class', 'formbutton disabled');
                $('#sending').css('display', 'inline-block');
                return true;
            });
        };
    },

    enableAccountSignupLogin: function() {
        // switch login & signup
        var $this = $('.input_container .f-input');

        $this.keydown(function(){
            $(this).parent().find('.input_title').hide();
        }).keyup(function(){
            if($(this).val() == ''){
                $(this).parent().find('.input_title').show();
            }
        });


        $this.blur(function(){
            if($(this).val() != ''){
                $(this).parent().find('.input_title').hide();
            }
        });

        setInterval(function(){
            $this.each(function(){
                if($(this).val() != ''){
                    $(this).parent().find('.input_title').hide();
                }
            });
        },1000);

    },
    // email auto complete
    emailAutoCompleteDefault: {
        emailHost: [
        "@163.com",
        "@gmail.com",
        "@qq.com",
        "@126.com",
        "@hotmail.com",
        "@sina.com",
        "@yahoo.com.cn",
        "@yahoo.com",
        "@sohu.com",
        "@139.com"
        ]
    },
    enableEmailAutoComplete: function() {
        var $this_email = $('#signup-user-form .field.email, #login-user-form .field.email');
        if ($this_email.length > 0) {
            $this_email.each(function(index) {
                var $this = $(this).find('input');
                $this.keyup(function() {
                    var values = new Array(),
                    i;
                    var emailTemplate = Jumei.Account.emailAutoCompleteDefault.emailHost;
                    for (i = 0; i < emailTemplate.length; i++) {
                        values.push($this.val().split("@")[0] + emailTemplate[i]);
                    }
                    $this.autocomplete({
                        source: function(request, response) {
                            var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
                            response($.grep(values,
                            function(value) {
                                value = value.label || value.value || value;
                                return matcher.test(value);
                            }));
                        }
                    });
                });
            });
        }
    },
    // validations
    validationDefault: {
        regex: {
            username: /^[\.\w\u4e00-\u9fa5\uF900-\uFA2D]{2,16}$/ig,
            email: /^[\w\.\-\+]+@([\w\-]+\.)+[a-z]{2,4}$/ig
        }
    },
    enableRegistrationValidation: function() {
        var $this_email = $('#signup-user-form .field.email');
        if ($this_email.length > 0) {
            $this_email.each(function(index) {
                var container = $(this),
                     tip_container = container.find('.f-input-tip-container'),
                     $this = $(this).find('input');
                $this.attr('isValid', false);
                $this.focusout(function() {
                    validateEmail.call($this, true, true, tip_container);
                    if (parseBool($this.attr("isValid"))) {
                        $this.oneTime(500,
                        function() {
                            validateEmailExistence.call($this, true, true, tip_container);
                        });
                    };
                }).focusin(function() {
                    clearMessage(tip_container);
                });
            });
        };

        var $this_username = $('#signup-user-form .field.username');
        if ($this_username.length > 0) {
            $this_username.each(function(index) {
                var container = $(this),
                     $this = $(this).find('input');
                $this.attr('isValid', false);
                $this.focusout(function() {
                    validateUsername.call($this, true, true, container.find('.f-input-tip-container'));
                    if (parseBool($this.attr("isValid"))) {
                        $this.oneTime(500,
                        function() {
                            validateUsernameExistence.call($this, true, true, container.find('.f-input-tip-container'));
                        });
                    };
                }).focusin(function() {
                    clearMessage(container.find('.f-input-tip-container'));
                });
            });
        };

        var $this_password = $('#signup-user-form .field.password');
        var safe_tip = $this_password.find(".safe-tip label");
      
       
        if ($this_password.length > 0) {

            $this_password.each(function(index) {
                var container = $(this),
                     $this = $(this).find('input');
                $this.attr('isValid', false);
                $this.focusout(function() {
                    validatePassword.call($this, true, true, container.find('.f-input-tip-container'));
                    if (container.siblings('.field.password-confirmation').children('input').val() != "") {
                        container.siblings('.field.password-confirmation').children('input').trigger('focusout');
                    };
                   
                    $(".btn_pwdset").fadeOut(220);
                  
                   
                }).focusin(function() {
                    clearMessage(container.find('.f-input-tip-container'));
                    $(".btn_pwdset").show();

                }).keyup(function(){
                    safeModel = new Array();
                    var _safeModel =0;
                    var input = container.find('input').val();
                    
                   
                   for (i=0;i<input.length;i++){ 
                     
                       var _safemodel =  charMode(input.charCodeAt(i));
                       if($.inArray(_safemodel,safeModel)<0){

                          safeModel.push(_safemodel);
                       };

                    }; 
                    
                    if(safeModel.length == 1 ){
                        
                        safe_tip.attr("class","");
                        safe_tip.eq(0).addClass("week")
                    };
                    if(safeModel.length==2 && input.length>=6){
                        
                        safe_tip.attr("class","");
                        safe_tip.eq(1).addClass("normal")
                    };
                    if(safeModel.length>=3 && input.length>=6){                       
                        safe_tip.attr("class","");
                        safe_tip.eq(2).addClass("storng")
                    };
                    
                });
            });
        };

        var $this_password_confirmation = $('#signup-user-form .field.password-confirmation');
        if ($this_password_confirmation.length > 0) {
            $this_password_confirmation.each(function(index) {
                var container = $(this),
                     $this = $(this).find('input');
                $this.attr('isValid', false);
                $this.focusout(function() {
                    validatePasswordConfirmation.call($this, container.siblings('.field.password').find('input').val(), true, true, container.find('.f-input-tip-container'));
                }).focusin(function() {
                    clearMessage(container.find('.f-input-tip-container'));
                });
            });
        };

		var $this_reg_voucher = $('#signup-user-form div.field.reg-voucher, #item-buy-form-signup div.field.reg-voucher'),
			$reg_voucher_trigger = $this_reg_voucher.children('a'),
			$reg_voucher_input = $this_reg_voucher.children('input.f-input'),
			$reg_voucher_hint = $this_reg_voucher.children('div.f-input-hint'),
			$reg_voucher_hint_span = $this_reg_voucher.children('span.hint'),
			$reg_voucher_label = $this_reg_voucher.children('label');
			
		$reg_voucher_trigger.bind('click',function(e){
			e.preventDefault();
			$(this).hide();
			$this_reg_voucher.attr('isValid',false);
			$reg_voucher_label.html('邀请码');
            
            //signup 和 pre_login样式不一样
            if($('.f-input-tip-container', $this_reg_voucher).length > 0) {
                $reg_voucher_input.css('display','block');
                $reg_voucher_hint.css('display','block');
                $reg_voucher_hint_span.css('display','block');
            }
            else {
                $reg_voucher_input.show();
                $reg_voucher_hint.show();
                $reg_voucher_hint_span.show();
            }
		});
        
        //pre_login不做ajax检查
		if($this_reg_voucher.parents('#signup-user-form').length > 0){
			$reg_voucher_input.bind('keyup focusout',function(){
				var input_data = $reg_voucher_input.val(),
				messageContainer = $this_reg_voucher.children('div.f-input-tip-container');
				if (input_data.length >= 8){
					$.ajax({
						url:'/i/account/check_reg_voucher',
						type:'POST',
						dataType:'json',
						data: {reg_voucher: input_data},
						success:function(data, textStatus, xhr){

                            isValid = data.status;
							message = data.msg;
							showMessage(true, true, isValid, message, messageContainer);
							$this.attr('isValid', true);
						},
						error:function(xhr, textStatus, errorThrown){
							isValid = false;
							message = "验证失败！请检查网络连接:)";
							showMessage(true, true, isValid, message, messageContainer);
							$this.attr('isValid', true);
						}
					});
				}
			}).click(function() {
                clearMessage($this_reg_voucher.children('.f-input-tip-container'));
            });
		}
        
        var $this_signup_user_form = $('#signup-user-form');
        if ($this_signup_user_form.length > 0) {
            $this_signup_user_form.each(function(index) {
                var $this = $(this);
                $this.submit(function() {
                    submitForm.call($this);
                    return parseBool($this.attr('allValid'))
                });
            });
        };
		
        function validateEmail(shouldShowSuccessMessage, shouldShowErrorMessage, messageContainer) {
            var isValid = false;
            var message = "";
            var $this = this;

            var email = $this.val();
            isValid = String(email).search(Jumei.Account.validationDefault.regex.email) != -1 ? true: false;
            if (!isValid) {
                if (email.length == 0) {
                    message = "请输入Email";
                } else {
                    message = "您的邮件格式不规范";
                }
            }
            showMessage(shouldShowSuccessMessage, shouldShowErrorMessage, isValid, message, messageContainer);
            $this.attr('isValid', isValid);
        };

        function validateEmailExistence(shouldShowSuccessMessage, shouldShowErrorMessage, messageContainer) {
            var isValid = false;
            var message = "";
            var $this = this;

            var email = $this.val();
            $.ajax({
                url: '/i/account/check_email',
                type: 'POST',
                dataType: 'json',
                data: {
                    email: email
                },
                success: function(data, textStatus, xhr) {
                    //called when successful
                    isValid = data.status;
                    message = data.msg;
                    showMessage(shouldShowSuccessMessage, shouldShowErrorMessage, isValid, message, messageContainer);
                    $this.attr('isValid', isValid);
                },
                error: function(xhr, textStatus, errorThrown) {
                    //called when there is an error
                    isValid = false;
                    message = "验证失败！请检查网络连接:)";
                    showMessage(shouldShowSuccessMessage, shouldShowErrorMessage, isValid, message, messageContainer);
                    $this.attr('isValid', isValid);
                }
            });
        };
        function validateUsername(shouldShowSuccessMessage, shouldShowErrorMessage, messageContainer) {
            var isValid = false;
            var message = "";
            var $this = this;

            var username = $this.val();
            var usernameLength = username.length;
            var countedUsernameLength = usernameLength;
            for (i = 0; i < usernameLength; i++) {
                if (username.charCodeAt(i) > 127) {
                    countedUsernameLength += 1;
                }
            }
            if (countedUsernameLength == 0) {
                message = "请输入用户名";
            } else if (countedUsernameLength < 4) {
                message = "用户名太短，最少 2 个汉字或 4 个字符";
            } else if (countedUsernameLength > 16) {
                message = "用户名太长，最多 16 个字符或 8 个汉字";
            } else if (String(username).search(Jumei.Account.validationDefault.regex.username) == -1) {
                message = "用户名只能使用中文、英文和数字";
            } else {
                isValid = true;
            }
            showMessage(shouldShowSuccessMessage, shouldShowErrorMessage, isValid, message, messageContainer);

            $this.attr('isValid', isValid);
        };

        function validateUsernameExistence(shouldShowSuccessMessage, shouldShowErrorMessage, messageContainer) {
            var isValid = false;
            var message = "";
            var $this = this;

            var username = $this.val();
            $.ajax({
                url: '/i/account/check_username',
                type: 'POST',
                dataType: 'json',
                data: {
                    username: username
                },
                success: function(data, textStatus, xhr) {
                    //called when successful
                    isValid = data.status;
                    message = data.msg;
                    showMessage(shouldShowSuccessMessage, shouldShowErrorMessage, isValid, message, messageContainer);
                    $this.attr('isValid', isValid);
                },
                error: function(xhr, textStatus, errorThrown) {
                    //called when there is an error
                    isValid = false;
                    message = "验证失败！请检查网络连接:)";
                    showMessage(shouldShowSuccessMessage, shouldShowErrorMessage, isValid, message, messageContainer);
                    $this.attr('isValid', isValid);
                }
            });
        };

        function validatePassword(shouldShowSuccessMessage, shouldShowErrorMessage, messageContainer) {
            var isValid = false;
            var message = "";
            var $this = this;

            var password = $this.val();
            isValid = password.length > 3 ? true: false;
            

            if (!isValid) {
                message = "为了您的帐号安全，密码最少4个字符！";
            }
            showMessage(shouldShowSuccessMessage, shouldShowErrorMessage, isValid, message, messageContainer);
            $this.attr('isValid', isValid);
        };

        function validatePasswordConfirmation(password, shouldShowSuccessMessage, shouldShowErrorMessage, messageContainer) {
            var isValid = false;
            var message = "";
            var $this = this;

            var confirmPassword = $this.val();
            if (password.length != 0) {
                isValid = (password == confirmPassword) ? true: false;
                if (!isValid) {
                    if (confirmPassword.length == 0) {
                        message = "请输入确认密码！";
                    } else {
                        message = "两次密码输入不一致！";
                    }
                }
                showMessage(shouldShowSuccessMessage, shouldShowErrorMessage, isValid, message, messageContainer);
            }
            $this.attr('isValid', isValid);
        };

        function submitForm() {
            var allValid = true;
            var $this = this;

            $this.find('input').each(function(index) {
                if ($(this).attr('isValid') != null && !parseBool($(this).attr('isValid'))) {
                    allValid = false;
                    $(this).trigger('focusout');
                }
            });
            $(this).attr('allValid', allValid);
        };

        function clearMessage(messageContainer) {
            $(messageContainer).html('');
            $(messageContainer).closest('.field').removeClass('success');
            $(messageContainer).closest('.field').removeClass('error');
        };

        function showMessage(shouldShowSuccessMessage, shouldShowErrorMessage, isValid, message, messageContainer) {
            var tip = $("<div class='f-input-tip'><div class='message'></div></div>");
            if (isValid) {
                $(tip).addClass('success');
                $(messageContainer).closest('.field').addClass('success');
            } else {
                $(tip).addClass('error');
                $(messageContainer).closest('.field').addClass('error');
            }
            $(tip).find('div.message').text(message);

            if (shouldShowSuccessMessage && isValid) {
                $(messageContainer).html(tip);
                $(tip).css('display', 'block');
                $(messageContainer).closest('.field').removeClass('error');
            }
            if (shouldShowErrorMessage && !isValid) {
                $(messageContainer).html(tip);
                $(tip).fadeIn('fast');
                $(messageContainer).closest('.field').removeClass('success');
            }
        };
    },
    enableCreditTopup: function() {
        $this = $('#form_topup');
        if ($this.length > 0) {
            $this.submit(function() {
                var amount = $('#form_topup input[name=amount]').val();
                if (isNaN(amount) || amount == '') {
                    $('#inner_notify').css('display', 'block');
                    $('#inner_notify').html('请输入正确的金额');
                    $('#form_topup input[name=amount]').focus();
                    return false;
                }
                if (amount > 500) {
                    $('#inner_notify').css('display', 'block');
                    $('#inner_notify').html('提示: 充值金额超出部分银行支付限额，建议每次充值小于500元');
                    $('#form_topup input[name=amount]').focus();
                    return false;
                }
            });
        };
    },
	enableRating: function(){
        var STAR_WIDTH=17;
        if ($(".service_rating .rating.editable").length>0) {
    		$('.service_rating .rating').click(function(pos){
    			var $this = $(this),
					r_value = valueByWidth(pos.clientX-$this.offset().left);
				
    			$this.find('.value').width(widthByValue(r_value));
    			$this.find('.value').trigger('widthChange', r_value);
    			$this.find('input').val(r_value);
    		}).mousemove(function(pos) {
				var $this = $(this),
					r_value = valueByWidth(pos.clientX-$this.offset().left);
        		$this.find('.value').addClass("cf_val");
    			$this.find('.value').width(widthByValue(r_value));
    			$this.find('.value').trigger('widthChange', r_value);
    		}).mouseleave(function() {
    		    var $this = $(this),
					r_value = $this.find('input').val();
    		    $(this).find('.value').width(widthByValue(r_value));
    		    $(this).find('.value').removeClass("cf_val");
    		    $(this).find('.value').trigger('widthChange', r_value);
    		});
    		
    		$('.service_rating .rating .value').bind('widthChange',function(event, value) {
    				var $hintContainer = $(this).parents('.service_rating').find('.hint');
    				switch (parseInt(value)) {
    				    case 0:
    				    $hintContainer.text('');
    				    break;
    					case 1:
    					$hintContainer.text('非常差');
    					break;
    					case 2:
    					$hintContainer.text('差');
    					break;
    					case 3:
    					$hintContainer.text('一般');
    					break;
    					case 4:
    					$hintContainer.text('好');
    					break;
    					case 5:
    					$hintContainer.text('非常好');
    					break;
    				}
    		});
    		
    		$('.service_rating .rating .value').each(function(){
        		var value = $(this).find('input').val();
        		if(value==0) {
        		    $(this).width(0); 
        		} else {
        		    $(this).width(widthByValue(value));
        		}
        		$(this).trigger('widthChange', value);
    		});
		};
		
		function valueByWidth(width) {
		    var value=parseInt(width/STAR_WIDTH+1);
			value=Math.max(Math.min(value, 5), 1);
			return value;
		}
		function widthByValue(value) {
		    return parseInt(value)*STAR_WIDTH;
		}
	},
    
	enableTabSwitch: function() {
	    $this = $(".tab_group");
	    if ($this.length>0) {
			$this.each(function(index) {
				var groupName = $(this).attr('group_name');
				var bindMethod = $(this).attr('bind_method');
				$(this).find('a').bind(bindMethod, function(event) {
					var show = $(this).attr('show');
					$(this).addClass('selected');
					$(this).siblings('a').removeClass('selected');
					$('.'+groupName).hide();
					$('#'+show).show();
				});
				
			});
	    }
	},
    
	enableInputWatermarkAndReset : function() {
		$watermark = $('input.watermark, textarea.watermark');
        $watermark.each(function(e) {
            var $this = $(this);

            //reset用于控制旁边的“取消”按钮
            var $input_reset = $this.next();
            if( ! $input_reset.is('.reset_input'))
                $input_reset = null;

            var watermark = $this.attr('watermark');
            if($this.val() == '' || $this.val() == watermark) {
                $this.val(watermark);
                if($input_reset)
                    $input_reset.hide();
            }
            else {
                if($input_reset)
                    $input_reset.show();
            }

            $this.focus(function() {
                if ($(this).val()==watermark) {
                    $(this).val('');
                    $(this).removeClass('watermark');
                }
                if($input_reset)
                    $input_reset.show();
            }).blur(function() {
                if ($(this).val()=='') {
                    $(this).val(watermark);
                    $(this).addClass('watermark');

                    if($input_reset)
                        $input_reset.hide();
                }
                else {
                    if($input_reset)
                        $input_reset.show();
                }
            });

            $this.parents('form:first').submit(function() {
                if ($this.val()==watermark) {
                    $this.val('');
                    return false;
                };
            });

        });
	},
    lucky_box_address:function(){
        var address_selector = $('#address_selector');
        var address_id = $("#lucky_address_id").val();
        //改变选中状态的样式
        var selected = function(obj){
            var address_id = obj.val();
            obj.parent('.option_box').parent().children('.option_box').removeClass('selected');
            obj.parent().addClass('selected');
            obj.attr('checked','checked');
        };
        
        address_selector.find('input[name=address_id]').each(function(){
            if($(this).val()==address_id && $(this).val() !=0){
                selected($(this));
            }else if( $(this).val() == address_id &&  address_id == 0){
                selected($(this));
                $('#address_table').show();
            }

            $(this).click(function(){
                if($(this).attr('id') == 'new_address'){
                    $('#address_table').show();
                }else{
                    $('#address_table').hide();
                }
                $("#lucky_address_id").val($(this).val());
                selected($(this));
            });
        });

        //将收货地址填到上面
        var label = address_selector.find(".option_box.selected label");
        if(label.attr("selector")=="new_address"){
            var text = label.text(),
                 patterns = /([^x00-xff]+)-([^x00-xff]+)-([^x00-xff]+\s)/g,
                 arr = text.match(patterns),
                 result = $.trim(arr[0]);
            $("#lucky_box_address").html(result);
        }


        $(".set_box_address .modify_lucky_address").toggle(function(e){
            e.preventDefault();
            address_selector.show();
        },function(e){
            e.preventDefault();
            address_selector.hide();
        });
    },

    demonds_box_address:function(){
        var address_selector = $('#address_selector');
        var address_id = $("#demonds_address_id").val();
        //改变选中状态的样式
        var selected = function(obj){
            var address_id = obj.val();
            obj.parent('.option_box').parent().children('.option_box').removeClass('selected');
            obj.parent().addClass('selected');
            obj.attr('checked','checked');
        };

        address_selector.find('input[name=address_id]').each(function(){
            if($(this).val()==address_id && $(this).val() !=0){
                selected($(this));
            }else if( $(this).val() == address_id &&  address_id == 0){
                selected($(this));
                $('#address_table').show();
            }

            $(this).click(function(){
                if($(this).attr('id') == 'new_address'){
                    $('#address_table').show();
                }else{
                    $('#address_table').hide();
                }
                $("#lucky_address_id").val($(this).val());
                selected($(this));
            });
        });

        //将收货地址填到上面
        var label = address_selector.find(".option_box.selected label");
        if(label.attr("selector")=="new_address"){
            var text = label.text(),
                patterns = /([^x00-xff]+)-([^x00-xff]+)-([^x00-xff]+\s)/g,
                arr = text.match(patterns),
                result = $.trim(arr[0]);
            $("#lucky_box_address").html(result);
        }


        $(".demonds_members .modify_lucky_address").toggle(function(e){
            e.preventDefault();
            address_selector.show();
        },function(e){
            e.preventDefault();
            address_selector.hide();
        });
    },

    // Help Center
    help_left_nav : function(){
        var containers = $('.nav .nav_sub .menu_list li');
        if(containers.length <= 0 ){
            return false;
        }

        // function : expand nav
        var expand = function (box,arrow) {
            var status = box.css('display');
                if(status == 'block'){
                    arrow.removeClass("down");
                    box.hide();
                }else{
                    arrow.addClass("down");
                    box.show();
                }
        };

        // Trigger expanding event
        containers.each(function(){
            var trigger = $(this).find('.first_category'),
                 arrow = $(this).find('.arrow'),
                 box = $(this).find('.second_category');
            if(box.length > 0){
                trigger.click(function(){
                    expand(box,arrow);
                });
            }
        });

        //init nav
        var cur_page = window.location.href,
             cur_arrow;

        // seach nav's href and location's href
        $(containers).find("a").each(function(){
            var a = $(this),
                 cur_nav = a.parent();

            if(cur_page.search(a.attr("href")) > 0 ){
                $(a).addClass("selected");
                
                if($(cur_nav).hasClass('second_category')){
                    cur_arrow = cur_nav.prev().find('.arrow');
                    expand(cur_nav,cur_arrow);
                }
            }
        });
    },

    enableCreditAddress : function(){
        var address_selector = $('#address_selector');
        address_selector.find('input[name=address_id]').each(function(){
            $(this).click(function(){
                if($(this).attr('id') == 'new_address'){
                    $('#address_table').show();
                }else{
                    $('#address_table').hide();
                }
            });
        });
    }
};
