!function(t){t.fn.imagesUpload=function(e){function i(t,i){e.multiple||(n.val(""),t.stopImmediatePropagation(),t.preventDefault());try{e.error.call(t.target,i)}catch(a){}}function a(t,i,a){e.callback.call(t.target,i,a)}var n=this;return this[0].files&&!e.multiple?n.change(function(n){t.each(this.files,function(){var l,s=this;if(s.type&&!/^image\//.test(s.type))return i(n,s),void 0;try{l=(window.URL||webkitURL).createObjectURL(s)}catch(r){}if(!e.multiple&&l)a(n,s,l);else{var o=new FileReader;o.onload=function(){s.url=l||o.result,a(n,s,e.multiple?t("<input>",{type:"hidden",value:o.result}):s.url)},o.readAsDataURL(s)}}),e.multiple&&(this.value="")}).attr({accept:"image/*",multiple:e.multiple}):n.change(function(n){var l=this.files?this.files[0]:{name:this.value.substr(this.value.lastIndexOf("\\")+1)};if(this.files&&!/^image\//.test(this.files[0].type)||!/.(jpg|gif|jpeg|png)$/i.test(l.name))return i(n,l),void 0;if(e.multiple){var s=t(this);s.replaceWith(s.clone(!0).val("")),a(n,l,s.unbind("change").attr({"class":"",id:""}).remove())}else a(n,l)})}}(jQuery);