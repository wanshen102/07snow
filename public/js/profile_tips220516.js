(function(_aoLoadWin){
var _TO_RSS_URL=T("/cgi-bin/reader_article_list?sid=$sid$&t=rss_list&s=personal&classtype=onefeed&feed=3_$uin$");
function _wraparound(_asValue)
{
_asValue=_asValue||"";
if(_asValue.length>25)
{
_asValue=[_asValue.substr(0,25)+"<wbr/>"+_wraparound(_asValue.substr(25))].join("");
}
return _asValue;
}
function _isAdminUin(_asUin)
{
return _asUin==getTop().g_admuin;
}
function _isAdminEmail(_asEmail)
{
var _oAdmin=["10000@qq.com","birthday@qq.com","urlcreator@qq.com","birthdayreminder@qq.com","friends@qq.com"],_bisAdmin=false;
if((_asEmail.toLowerCase().indexOf("postmaster@")==0))
{
return true;
}
else{
getTop().E(_oAdmin,function(_asAdminEmail){
if(!_bisAdmin)
{
if(_asAdminEmail==_asEmail)
{
_bisAdmin=true;
}
}
});
return _bisAdmin;
}
}
function _isGroupEmail(_asEmail)
{
return _asEmail.indexOf("@g.qq.com")>0;
}
var _goClass,_goStatic;
var _goStatic=function(_aoWin){
this._moWin=_aoWin;
this._mnStatus;
this._moTriggerDom;
this._mnTimeId;
this._moInfoCard;
this._msUin;
this._msDomId;
this._msEmail;
this._moTmpTR;
this._msShowInfo;
this._moAjax;
this._msMailHtml;
_TEMPLATE={};
};
_goClass=_goStatic.prototype;
_goStatic._TEMPLATE={};
_goStatic._TEMPLATE._INSTANCE="_QmProfileTipsInst_";
_goStatic._TEMPLATE._INFOCARD_DETAIL=TE(['<div class="profile_inner">','<img src="$icon$" title="" class="iconMask_gray" />','<div class="nowrap">','<span class="green bold b_size txtflow ','$@$if($addrvip$=="")$@$','tip_dispname_long ','$@$else$@$','tip_dispname_short ','$@$endif$@$','" title="$attrname$" ','$@$if($addrvip$!="")$@$','style="float: left; margin-right: 4px; _width: ','$@$if($dispname$.length<8)$@$','$@$eval ($dispname$.length*15)$@$','$@$else$@$','120','$@$endif$@$','px;"','$@$endif$@$','>','$dispname$','</span>','$@$if($qqnum$)$@$','<span class="graytext" style="float: left; margin-right:4px; _line-height: 16px;">($qqnum$)</span>','$@$endif$@$','<span class="tip_iclist_ico_wrap" id="vipAddrIcon" ','$@$if($addrvip$=="false" || $addrvip$=="")$@$','style="display: none;vertical-align: 0;*vertical-align: -2px;_vertical-align: -3px;"','$@$endif$@$','>','<span class="tip_iclist_ico_remove_btn" style="*vertical-align: 1px;"></span>','</span>','</div>','<div class="profile_inner_info">','$@$if(!$issys$)$@$','<a href="javascript:;" onclick=\'getTop().QMProfileTips.oper("mailTo","$_id$","$email$", "$showinfo$", "$jsname$")\' class="graytext pointer" title="\u7ED9TA\u5199\u4FE1" style="margin-right:9px;">$dispemail$</a>','$@$else$@$','<span class="graytext" title="$dispemail$" style="margin-right:9px;">$dispemail$</span>','$@$endif$@$','$@$if($email$!="10000@qq.com")$@$','<a class="pointer" ck="checkContactsEmails" style="display:inline-block;" href="/cgi-bin/mail_list?sid=$sid$&s=searchcontact&sender=$email$&receiver=$email$&name=$name$&matchtype=include&folderid=all&page=0&AddrID=$AddrId$&grpid=$grpid$&category=all&from=profile&loc=profile,searchcontact,0,0">\u5F80\u6765\u90AE\u4EF6</a>','$@$endif$@$','</div>','</div>','$@$if($btnnum$!=0)$@$','<div class="profile_ope">','<table class="pro_ope ','$@$if($filinghtml$!="" || $rejectionhtml$!="")$@$','$@$if($filinghtml$!="" && $rejectionhtml$!="")$@$',' pro_ope_four','$@$else$@$',' pro_ope_three','$@$endif$@$','$@$endif$@$','"><tr>','$@$if($rejectionhtml$!="")$@$','<td class="reject_td','$@$if($addrvip$=="" && $filinghtml$=="" && $addrinfohtml$=="")$@$',' pro_ope_last','$@$endif$@$','">','$rejectionhtml$','</td>','$@$endif$@$','$addrinfohtml$','$@$if($addrvip$!="")$@$','<td class="vipaddr_td','$@$if($filinghtml$=="")$@$',' pro_ope_last','$@$endif$@$','">','<span id="delVipAddr" ','$@$if($addrvip$=="false")$@$','style="display: none;"','$@$endif$@$','><a class="tip_iclist_ico" href="javascript:;" >\u79FB\u9664\u91CD\u8981\u8054\u7CFB\u4EBA</a></span>','<span id="addVipAddr" ','$@$if($addrvip$=="true")$@$','style="display:none;"','$@$endif$@$','><a class="tip_iclist_ico_remove" href="javascript:;" >','\u8BBE\u4E3A\u91CD\u8981\u8054\u7CFB\u4EBA</a></span>','</td>','$@$endif$@$','$@$if($filinghtml$!="")$@$','<td class="filing_td">$filinghtml$</td>','$@$endif$@$','</tr></table>','</div>','$@$endif$@$']);
_goStatic._TEMPLATE._WX_PROFILETIPS_DETAIL=TE(['<div class="left" style="width:43px; padding:15px 5px 15px 15px;">','<div class="icon_user" style="background:#fff url($icon$); float:none; width:40px; height:40px; border:1px solid #ccc; overflow:hidden; display:block; margin-left:0px;">','<img src="/cgi-bin/getqqfriend?action=getimage&senderuin=$uin$&sid=$sid$" class="default_avator" title="$title.DATA$" width="40" onerror="this.src=\'$images_path$spacer104474.gif\'">','</div>','</div>','<div class="left gray" style="padding:17px 0 5px 0; width:230px; *margin-left:-2px;" >','<div class="green bold b_size">$weixin_nickname$</div>','<div style="margin:5px 0;" class="graytext">','$@$if($weixin_status$==3)$@$','\u5BF9\u65B9\u662F\u4F60\u7684\u5FAE\u4FE1\u597D\u53CB','$@$else if($weixin_status$==0)$@$','\u5BF9\u65B9\u662F\u4F60\u7684QQ\u597D\u53CB\uFF0C','<a href="javascript:;" class="pointer" onclick="getTop().QMProfileTips.oper(\'weixinVerify\',\'$uin$\')">\u6DFB\u52A0\u5230\u5FAE\u4FE1\u901A\u8BAF\u5F55</a>','$@$else if($weixin_status$==2)$@$','<a href="javascript:;" class="pointer" onclick="getTop().QMProfileTips.oper(\'weixinVerify\',\'$uin$\')">\u6DFB\u52A0\u5230\u5FAE\u4FE1\u901A\u8BAF\u5F55</a>','$@$else if($weixin_status$==1)$@$','<a href="javascript:;" class="pointer" onclick="getTop().QMProfileTips.oper(\'weixinhello\',\'$uin$\')" href="javascript:;">\u5FAE\u4FE1\u6253\u62DB\u547C</a>','$@$else if($weixin_status$==4)$@$','\u5DF2\u6DFB\u52A0\u5BF9\u65B9\u5230\u5FAE\u4FE1\u901A\u8BAF\u5F55','$@$endif$@$','</div>','</div>','<div class="clr"></div>']);
_goStatic._TEMPLATE._CORP_PROFILETIPS_DETAIL=TE(['<div class="tipInner tipVerified">','$@$if($sCorpHomePage$)$@$','<a href="$sCorpHomePage$" target="_blank" class="ico_verified pointer"></a>','<a class="tipVerified_logo pointer" href="$sCorpHomePage$" target="_blank" title="$@$eval htmlEncode($sCorpName$)$@$" style="background-image:url($sLogoUrl$);"></a>','$@$else$@$','<span class="ico_verified"></span>','<span class="tipVerified_logo" title="$@$eval htmlEncode($sCorpName$)$@$" style="background-image:url($sLogoUrl$);"></span>','$@$endif$@$','<div class="tipVerified_name green" test="$sLogoUrl$" style="padding:20px 0 3px;">$@$eval htmlEncode($sCorpName$)$@$</div>','<div class="tipVerified_addr"><span class="addrtitle left">\u5730\u5740\uFF1A</span>$@$eval htmlEncode($sCorpAddr$)$@$</div>','<div class="tipVerified_desc graytext">$@$eval htmlEncode($sCorpRemark$)$@$</div>','<div class="tipVerified_from"><a class="pointer" href="http://service.exmail.qq.com/cgi-bin/help?subtype=1&&id=23&&no=1001001" target="_blank">\u817E\u8BAF\u4F01\u4E1A\u90AE\u7BB1\u8BA4\u8BC1</a></div>','</div>']);
_goStatic._TEMPLATE._INFOCARD=TE(['<div class="profileTip" id="infocard_$_id$" style="display:none;">','<div class="infoArrowUp" id="infoarrowup_$_id$" style="display:none;"></div>','$@$if($isWeixin$)$@$','<div class="tipInner">',_goStatic._TEMPLATE._WX_PROFILETIPS_DETAIL,'</div>','$@$else if($role$=="corpprofile")$@$',_goStatic._TEMPLATE._CORP_PROFILETIPS_DETAIL,'$@$else$@$','<div class="tipInner">',_goStatic._TEMPLATE._INFOCARD_DETAIL,'</div>','$@$endif$@$','<div class="infoArrowDown" id="infoarrowdown_$_id$" style="display:none;"></div>','</div>']);
_goStatic._TEMPLATE._EXTENDHTML=TE(['$@$if($addrid$==-1||$addrid$==""||!$addrid$)$@$','<td id="a_add_$email$" class="addedit_td" ><a href="javascript:;"  u="$uin$" e="$email$" n="$username$" onclick="getTop().QMProfileTips.contactHandle(\'addc\',this)" title="\u5C06\u6B64\u53D1\u4EF6\u4EBA\u6DFB\u52A0\u5230\u901A\u8BAF\u5F55"  class="pointer">','\u6DFB\u52A0</a></td>','$@$else$@$','<td id="a_edit_$email$" class="addedit_td" ><a href="javascript:;" u="$uin$" e="$email$" onclick="getTop().QMProfileTips.contactHandle(\'editc\',this)" addrid="$addrid$"  class="pointer">\u7F16\u8F91</a></td>','$@$endif$@$']);
_goClass._setStatus=function(_anStatus){
var _oSelf=this;
if(_oSelf._mnStatus==-1)
{
return;
}
_oSelf._mnStatus=_anStatus;
switch(_anStatus)
{case -1:
_oSelf._moInfoCard=null;
_oSelf._forceStop();
break;
case 0:
_oSelf._showInfoCard(false);
break;
case 1:
_oSelf._mnTimeId=setTimeout(function(){
if(_oSelf._mnStatus==1)
{
if(!_oSelf._moInfoCard||_oSelf._mbRebuildFlag===true)
{
_oSelf._buildInfoCard();
}
else{
_oSelf._setStatus(2);
}
}
},_oSelf._mnWaitTime);
break;
case 2:
_oSelf._showInfoCard(true);
_oSelf._computeCardPos();
break;
case 3:
_oSelf._mnTimeId=setTimeout(function(){
if(_oSelf._mnStatus==3)
{
_oSelf._setStatus(0);
if(_oSelf._moTmpTR)
{
_oSelf._doMouseOver(_oSelf._moTmpTR);
}
}
},100);
break;
case 4:
break;
}
};
_goClass._showInfoCard=function(_abShow){
var _oSelf=this,_oInfoCard=_oSelf._moInfoCard;
if(!_oInfoCard)
{
return;
}
if(_abShow&&!isShow(_oInfoCard)||!_abShow&&isShow(_oInfoCard))
{
qmAnimation.play(_oInfoCard,{from:_abShow?0.5:1,to:_abShow?1:0.5,speed:'fast',onaction:function(_anValue){
show(_oInfoCard,true);
setOpacity(_oInfoCard,_anValue);
},oncomplete:function(){
if(_abShow&&_oSelf._msShowInfo==3)
{
ossLog("delay","all","stat=nothing&locval=,,logotips,1");
}
setOpacity(_oInfoCard,_abShow?1:0.5);
show(_oInfoCard,_abShow&&_oSelf._mnStatus==2);
gbIsIE&&(_oInfoCard.style.filter='');
}});
}
};
_goClass._computeCardPos=function(){
var _oSelf=this,_oTriggerDom=_oSelf._moTriggerDom,_oInfoCard=_oSelf._moInfoCard,_sDomId=_oSelf._msDomId,_oWin=_oSelf._moWin,_oDocument=_oWin.document,_sTargetId=_oTriggerDom.getAttribute('beside'),_oTarget=_sTargetId?S(_sTargetId,_oSelf._moWin):_oTriggerDom,_oIconPos=calcPos(_oTarget),_oCardPos=calcPos(_oInfoCard),_oArrowUp=S('infoarrowup_'+_sDomId,_oWin),_oArrowDown=S('infoarrowdown_'+_sDomId,_oWin),_nClientWidth=_oDocument.body.clientWidth,_oQQBrowserTip=S("qqbrowser_pop");
_oInfoCard.style.zIndex=9999;
if((_oIconPos[1]+_oCardPos[4])<_nClientWidth)
{
if((_oTarget.tagName=='IMG'||_oIconPos[3]<50)&&_oTarget.id!="imglogo")
{
show(_oArrowUp,false);
show(_oArrowDown,false);
_oInfoCard.style.top=_oIconPos[0]+'px';
_oInfoCard.style.left=_oIconPos[1]+5+'px';
}
else{
var dirc=(_oIconPos[0]-_oCardPos[5])>bodyScroll(_oWin,'scrollTop')+((_oTarget.id=="imglogo"&&_oQQBrowserTip)?_oQQBrowserTip.offsetHeight:0);
show(_oArrowUp,!dirc);
show(_oArrowDown,dirc);
_oInfoCard.style.top=dirc?(_oIconPos[0]-_oCardPos[5]-5+'px'):(_oIconPos[0]+_oIconPos[5]+8+'px');
_oInfoCard.style.left=_oIconPos[1]-_oIconPos[4]/2-65+'px';
}
}
else{
show(_oArrowUp,true);
show(_oArrowDown,false);
_oInfoCard.style.top=_oIconPos[2]+5+'px';
var _nOffset=_oIconPos[3]+_oCardPos[4]-_nClientWidth;
if(_nOffset>0)
{
_oInfoCard.style.left=_oIconPos[3]-_nOffset+"px";
}
else{
_oInfoCard.style.left=_oIconPos[3]+"px";
}
}
};
_goClass._contactStatus=function(_asEmail){
return;
function _adjustContactStatus(_abShowAdd,_abShowEdit,_asFromAddrId)
{
var _oAdd=S("a_add_"+_asEmail,getMainWin()),_oEdit=S("a_edit_"+_asEmail,getMainWin());
if(_abShowAdd=="1")
{
show(_oAdd,1);
show(_oEdit,0);
}
else if(_abShowEdit=="1")
{
show(_oAdd,0);
_asFromAddrId&&attr(_oEdit,"addrid",_asFromAddrId);
show(_oEdit,1);
}
else{
show(_oAdd,0);
show(_oEdit,0);
show(_oAdd.parentNode,false);
}
}
QMAjax.send(T("/cgi-bin/addr_listall?sid=$sid$&searchaddr=$searchaddr$&func=searchaddr&t=searchaddrtmp&category=all").replace({sid:getSid(),searchaddr:encodeURI(_asEmail)}),{method:"POST",onload:function(_abIsOk,_asParam){
var _sfromaddrid="",_bShowAdd=0,_bShowEdit=0;
if(_abIsOk)
{
if(_asParam=="none")
{
_bShowAdd="1";
_bShowEdit="0";
}
else if(_asParam!="")
{
_sfromaddrid=_asParam;
_bShowAdd="0";
_bShowEdit="1";
}
else{
_bShowAdd="0";
_bShowEdit="0";
}
}
else{
_bShowAdd="0";
_bShowEdit="0";
}
_adjustContactStatus(_bShowAdd,_bShowEdit,_sfromaddrid);
}});
};
_goClass.oprVipAddr=function(_asAction,_asAddrId,_asName,_asEmail,_afCallback){
var _oTop=getTop(),_sUrl=_oTop.T("/cgi-bin/vip_addr?sid=#sid#&action=#action#&id=#addrid#&addr=#addr#&t=vip_addr",'#').replace({sid:_oTop.getSid(),addrid:(_asAddrId=="-1"?"":_asAddrId),action:_asAction,addr:(_asAddrId==""||_asAddrId=="-1")?["\"",_asName,"\""," <",_asEmail,">"].join(""):""});
_oTop.QMAjax.send(_sUrl,{onload:function(_abIsOk,_asParam){
if(_abIsOk)
{
var _oRet=_oTop.evalValue(_asParam);
if(_oRet.retCode==0)
{
_oTop.showInfo("\u64CD\u4F5C\u6210\u529F");
_afCallback&&_afCallback(_oRet.addrid);
}
else{
_oTop.showError("\u64CD\u4F5C\u5931\u8D25");
}
}
}});
};
_goClass._buildInfoCard=function(){
var _oSelf=this,_oTop=getTop(),_sUin=_oSelf._msUin,_sQQNum=_oSelf._msQQNum,_sShowInfo=_oSelf._msShowInfo,_sDomId=_oSelf._msDomId,_sEmail=_oSelf._msEmail,_sRole=_oSelf._msRole,_sIcon=_oSelf._msIcon,_sMailid=_oSelf._sMailid,_sHome=_oSelf._msHome,_sQQFnd=_oSelf._msQQFnd,_sMailHtml=_oSelf._msMailHtml,_sRejectionHtml=_oSelf._msRejectHtml,_sFilingHtml=_oSelf._msFilingHtml,_sAddrInfoHtml=_oSelf._msAddrInfoHtml,_fBuildHelp=function(_aoFeed){
_aoFeed=_aoFeed||{};
var _oTriggerDom=_oSelf._moTriggerDom,_sNickName=_oSelf._msNickName,_nBtnNum=0,_bAdUin=_isAdminUin(_sUin),_bAdminEmail=_isAdminEmail(_sEmail),_bGroupMail=_isGroupEmail(_sEmail),_bMail=_sEmail&&!_bAdminEmail,_bSms=_sEmail&&!_bAdminEmail&&!_bAdUin&&!_bGroupMail,_bRss=_sUin&&!_bAdUin&&!_bAdminEmail,_bBanSmsByFol=_bSms&&_aoFeed.followedby!="1"&&_sShowInfo=="2";
if(_sUin==getUin()||_sUin==_oTop.g_encryptuin||(!_bMail&&!_bSms&&!_bRss))
{
_nBtnNum=0;
}
else if(_sShowInfo=="2")
{
_nBtnNum=3;
}
else{
_nBtnNum=(_sShowInfo=="1"&&_aoFeed.follower&&_aoFeed.sharecount)?3:2;
}
if(_sNickName)
{
_aoFeed.name=_sNickName;
}
var _sNickNameNE=htmlEncode(encodeNick(_aoFeed.name)),_sNameHtml=htmlEncode(_wraparound(_aoFeed.name)),_sNameAttrHtml=htmlEncode(_aoFeed.name),_oDomEdit=S("a_edit_"+_sEmail,getMainWin()),_sNameURI=encodeURI(_aoFeed.name);
delete _aoFeed.name;
var _sAddrvip=attr(_oTriggerDom,'addrvip');
_aoFeed=extend({'_id':_sDomId,'uin':_sUin,'qqnum':_sQQNum,'email':_sEmail,'dispname':_sNameHtml,'attrname':_sNameAttrHtml,'jsname':_sNickNameNE,'dispemail':_wraparound(_sEmail),'showinfo':_sShowInfo,'sid':getSid(),'images_path':getPath('image'),'img_path':getPath('image'),'btnnum':_nBtnNum,'arrow':_oTriggerDom.tagName=="IMG"?0:1,'bmail':_bMail,'bsms':_bSms,'bansms':_bBanSmsByFol,'brss':_bRss,'rssdomain':typeof (gsRssDomain)=="undefined"?"":gsRssDomain,'role':_sRole,"mailid":_sMailid,"qqfriend":_sQQFnd,'home':_sHome,'mailhtml':_sMailHtml,'addrinfohtml':_sAddrInfoHtml,'rejectionhtml':_sRejectionHtml,'filinghtml':_sFilingHtml,'name':_sNameURI,'AddrId':attr(_oDomEdit,"addrid")||"",'addrvip':_sAddrvip?(_sAddrvip=='true'||_sAddrvip=='1'?'true':'false'):'','addrvipid':attr(_oTriggerDom,'addrid')||"",'issys':_bAdminEmail,'icon':"/cgi-bin/getqqicon?uin="+_sUin+"&mode=newaddr&mailaddr="+encodeURI(_sEmail)+"&sid="+_oTop.getSid()},_aoFeed);
insertHTML(_oSelf._moWin.document.body,'afterBegin',_goStatic._TEMPLATE._INFOCARD.replace(_aoFeed));
_oSelf._moInfoCard=_oInfoCard=S('infocard_'+_sDomId,_oSelf._moWin);
addEvents(_oInfoCard,{mouseover:function(_aoEvent){
_oSelf._setStatus(4);
},mouseout:function(_aoEvent){
_oSelf._setStatus(3);
}});
var _oDomAddVipAddr=S('addVipAddr',_oSelf._moWin.document),_oDomDelVipAddr=S('delVipAddr',_oSelf._moWin.document),_oDomVipAddrIcon=S('vipAddrIcon',_oSelf._moWin.document);
addEvent(finds("a",_oDomAddVipAddr)[0],'click',function(){
_oSelf.oprVipAddr('add',_aoFeed.addrvipid,_aoFeed.name,_aoFeed.email,function(_asAddrid){
_oTop.show(_oDomAddVipAddr,false);
_oTop.show(_oDomDelVipAddr,true);
_oTop.show(_oDomVipAddrIcon,true);
attr(_oTriggerDom,'addrvip','true');
if(_asAddrid)
{
attr(_oTriggerDom,'addrid',_asAddrid);
}
_oTop.rdVer(_aoFeed.mailid,1);
_oTop.QMMLCache.upVer();
_oTop.reloadLeftWin();
});
});
addEvent(finds("a",_oDomDelVipAddr)[0],'click',function(){
_oSelf.oprVipAddr('del',_aoFeed.addrvipid,_aoFeed.name,_aoFeed.email,function(){
_oTop.show(_oDomAddVipAddr,true);
_oTop.show(_oDomDelVipAddr,false);
_oTop.show(_oDomVipAddrIcon,false);
attr(_oTriggerDom,'addrvip','false');
_oTop.rdVer(_aoFeed.mailid,1);
_oTop.QMMLCache.upVer();
_oTop.reloadLeftWin();
});
});
_oSelf._setStatus(2);
};
if(_sRole=="weixinprofile")
{
var _oAjax=_oSelf._moAjax=new QMAjax();
_oAjax.method="post",_oAjax.url="/cgi-bin/getqqfriend";
_oAjax.send(T("action=addsendermmfrd&subaction=$subaction$&senderuin=$uin$&sid=$sid$&t=weixinfriend").replace({sid:getSid(),uin:_sUin,subaction:"checkstatus"}));
_oAjax.onComplete=function(_aoXml){
var _oJson=null;
if(_aoXml&&_oSelf._mnStatus==1)
{
_oJson=evalValue(_aoXml.responseText);
if(_oJson)
{
_oJson.isWeixin=true;
_fBuildHelp(_oJson);
_oSelf._contactStatus(_oSelf._msEmail);
}
}
};
_oAjax.onError=function(){
};
}
else if(_sRole=="corpprofile")
{
var _oAjax=_oSelf._moAjax=new QMAjax();
_oAjax.method="post";
_oAjax.url="/cgi-bin/getauthbizinfo?t=infocard&s=corp&bizdomain="+_oSelf._msEmail+"&sid="+getSid();
_oAjax.send();
_oAjax.onComplete=function(_aoXml){
var _oJson=null;
if(_aoXml&&_oSelf._mnStatus==1)
{
_oJson=evalValue(_aoXml.responseText);
if(_oJson)
{
_fBuildHelp(_oJson);
}
}
};
}
else if(_sRole=='ad')
{
_fBuildHelp({'icon':"/cgi-bin/getqqicon?type=ad&uin="+_sUin+"&mode=newaddr&mailaddr="+_oSelf._msEmail});
_oSelf._contactStatus(_oSelf._msEmail);
}
else if(_sUin&&!_isAdminUin(_sUin)&&!_isAdminEmail(_sEmail))
{
if(_oSelf._msShowInfo==2)
{
var _oAjax=_oSelf._moAjax=new QMAjax();
_oAjax.method="post",_oAjax.url="/cgi-bin/reader_account_info";
_oAjax.send(T("func=infocard&uin=$uin$&sid=$sid$&t=rss_mgr&s=infocard&r=$r$").replace({sid:getSid(),r:_oSelf._mbRebuildFlag===true?Math.random():'',uin:_sUin}));
_oAjax.onComplete=function(_aoXml){
var _oJson=null;
if(_aoXml&&(_oSelf._mnStatus==1||_oSelf._mbRebuildFlag===true))
{
if(_aoXml.responseText.indexOf("new_rss_success")!=-1)
{
_oJson=evalValue(_aoXml.responseText);
if(_oJson)
{
_fBuildHelp(_oJson.feed);
_oSelf._contactStatus(_oSelf._msEmail);
}
}
}
_oSelf._mbRebuildFlag=false;
};
_oAjax.onError=function(){
_oSelf._mbRebuildFlag=false;
};
}
else{
var _oFeed={};
if(_sShowInfo=="1")
{
_oFeed.icon="/cgi-bin/getqqicon?uin="+_sUin+"&mode=newaddr&mailaddr="+_oSelf._msEmail;
}
_fBuildHelp(_oFeed);
_oSelf._contactStatus(_oSelf._msEmail);
}
}
else{
if(_sShowInfo=="3")
{
_oSelf._buildLogoCard();
}
else{
_fBuildHelp();
_oSelf._contactStatus(_sEmail);
}
}
};
_goStatic._TEMPLATE._LOGO=TE(['<span id="infocard_$_id$" style="display:none;position:absolute;cursor:default;z-index:888;margin:-12px 0 0 -15px;">','<div unselectable="on" id="imglogonewtips" class="newtips" >','<div style="opacity: 1;" unselectable="on" id="imglogotipcontainer" class="tipcontainer">','<img id="imglogoup" class="arrowup" style="margin-left:18px;*position:relative;*top:6px;*left:18px;" src="$images_path$spacer104474.gif">','<div unselectable="on" class="container">','<div unselectable="on" class="contentcontainer">','<a class="btnClose" name="closecard" href="javascript:;" style="margin-top:6px;*right:0;"></a>','<div unselectable="on" class="content" nowrap>','$tipsword$','&nbsp; &nbsp; &nbsp;','<div unselectable="on" class="tipsrightpanel" style="font-size: 12px; color: rgb(0, 0, 0); font-weight: normal;">','<div unselectable="on" class="opertbar">','$@$for($links$)$@$','&nbsp;&nbsp;<a name="_tipslink_" style="text-decoration: underline;" target="$target$" href="$href$">$linkname$</a>','$@$endfor$@$','</div>','</div>','<div unselectable="on" class="clr"></div>','</div>','</div>','</div>','<img id="imglogodown" class="arrowdown" style="display: none; margin-left: -5px;" src="$images_path$spacer104474.gif">','</div>','<div unselectable="on" class="tipbackground"></div>','<div unselectable="on" class="oneheight"></div>','</div>','</span>']);
_goClass._buildLogoCard=function(){
var _oSelf=this,_sDomId=_oSelf._msDomId,_oTriggerDom=_oSelf._moTriggerDom;
_sStylenum=_oTriggerDom.getAttribute("stylenum"),_sLogoStr=_oTriggerDom.getAttribute("logotitle"),_sTipsWord,_sLink,_bNoLogo;
if(!_sLogoStr)
{
_bNoLogo=true;
}
else{
var _oBuf=_sLogoStr.split("aboutlogo="),_sTipsWord=_oBuf[0],_sLink=_oBuf[1],_bNoLogo=_sTipsWord=="nothing"||!_sStylenum;
}
if(_bNoLogo)
{
_oTriggerDom.title="\u90AE\u7BB1\u9996\u9875";
}
else{
var _oLinks=[],_oArray=eval(["(",_sLink,")"].join(""));
for(var i=0;i<_oArray.length;i++)
{
if(i%3==0)
{
_oLinks.push({linkname:_oArray[i],href:TE(_oArray[i+1]).replace({sid:getSid(),uin:getUin()}),target:_oArray[i+2]});
}
}
insertHTML(_oSelf._moWin.document.body,'afterBegin',_goStatic._TEMPLATE._LOGO.replace({'_id':_sDomId,images_path:getPath("image"),tipsword:_sTipsWord,links:_oLinks}));
_oSelf._moInfoCard=S('infocard_'+_sDomId,_oSelf._moWin);
addEvents(_oSelf._moInfoCard,{mouseover:function(_aoEvent){
_oSelf._setStatus(4);
},mouseout:function(_aoEvent){
_oSelf._setStatus(3);
},click:function(_aoEvent){
var _oTarget=getEventTarget(_aoEvent);
if(_oTarget.name=="closecard")
{
_oSelf._setStatus(3);
_oSelf._moTriggerDom.setAttribute("t","");
}
else if(_oTarget.name=="_tipslink_")
{
var _sLogoStatId=getTop().getUrlParams(_oTarget.href||location)["logostatid"];
if(_sLogoStatId)
{
ossLog("delay","all","stat=nothing&locval=,,logotips,"+_sLogoStatId);
}
}
}});
_oSelf._setStatus(2);
}
};
_goClass._forceStop=function(){
var _oSelf=this,_oInfoCard=_oSelf._moInfoCard;
if(_oInfoCard)
{
qmAnimation.stop(_oInfoCard);
show(_oInfoCard,false);
}
clearTimeout(_oSelf._mnTimeId);
_oSelf._moAjax&&_oSelf._moAjax.abort();
};
_goClass._doMouseOver=function(_aoTriggerDom){
var _oSelf=this;
if(_oSelf._moTriggerDom!=_aoTriggerDom)
{
if(_oSelf._mnStatus==3)
{
_oSelf._moTmpTR=_aoTriggerDom;
return;
}
_oSelf._moInfoCard&&removeSelf(_oSelf._moInfoCard);
var _sUin=_aoTriggerDom.getAttribute('u'),_sQQNum=_aoTriggerDom.getAttribute('qq'),_sNickName=_aoTriggerDom.getAttribute('n'),_sShowInfo=_aoTriggerDom.getAttribute("t"),_sEmail=_aoTriggerDom.getAttribute('e'),_sIcon=_aoTriggerDom.getAttribute('i'),_sRole=_aoTriggerDom.getAttribute("r"),_sQQFnd=_aoTriggerDom.getAttribute("f"),_sMailid=_aoTriggerDom.getAttribute("mailid"),_sHome=_aoTriggerDom.getAttribute("h"),_sMailHtmlId=_aoTriggerDom.getAttribute("mailhtml")||"",_sRejectHtmlId=_aoTriggerDom.getAttribute("rejecthtml")||"",_sFilingHtmlId=_aoTriggerDom.getAttribute("filinghtml")||"",_bOpen=_aoTriggerDom.getAttribute("mop"),_bShowEdit=_aoTriggerDom.getAttribute("se"),_bShowAdd=_aoTriggerDom.getAttribute("sa"),_bSys=_aoTriggerDom.getAttribute("sys"),_sAddrid=_aoTriggerDom.getAttribute("addrid"),_oOperPanel=getMainWin()._oOperPanel,_oMailHtmlDom=_oOperPanel?_oOperPanel[_sMailHtmlId]:undefined,_oRejectHtmlDom=_oOperPanel?_oOperPanel[_sRejectHtmlId]:undefined,_oFilingHtmlDom=_oOperPanel?_oOperPanel[_sFilingHtmlId]:undefined,_sMailHtml=_oMailHtmlDom?_oMailHtmlDom:"",_sRejectHtml=_oRejectHtmlDom?_oRejectHtmlDom:"",_sFilingHtml=_oFilingHtmlDom?_oFilingHtmlDom:"",_sAddrinfoHtml="";
function _buildHtml()
{
_sAddrinfoHtml=_goStatic._TEMPLATE._EXTENDHTML.replace({bopen:_bOpen,bsys:_bSys,addrid:_sAddrid,email:_sEmail,uin:_sUin,qqnum:_sQQNum,username:htmlEncode(_sNickName)});
if(_sUin=="0"||!_sUin||_sUin==getTop().g_encryptzero)
{
_sUin="";
}
_sMailHtml=_sMailHtml.replace(/(\s[^<]+?)=([^ \f\n\r\t\v\"\'>]+)/g,function(_asWhole,_asKey,_asValue){
return _asKey+'="'+_asValue+'"';
});
_sRejectHtml=_sRejectHtml.replace(/(\s[^<\'\"]+?)=([^ \f\n\r\t\v\"\'>]+)/g,function(_asWhole,_asKey,_asValue){
return _asKey+'="'+_asValue+'"';
});
_sFilingHtml=_sFilingHtml.replace(/(\s[^<]+?)=([^ \f\n\r\t\v\"\'>]+)/g,function(_asWhole,_asKey,_asValue){
return _asKey+'="'+_asValue+'"';
});
_oSelf._msAddrInfoHtml=_sAddrinfoHtml;
_oSelf._msMailHtml=_sAddrinfoHtml+_sMailHtml.replace(/\s([^<=]+?)=(\"|\')(.*?[^\\]?)\2/g,function(_asWhole,_asKey,_asQuot,_asValue){
if(_asKey=="id")
{
return " onclick='getTop().QMProfileTips.oper(\"custom\",\""+_asValue+"\")'";
}
if(/(href|title|style|onclick|class)/i.test(_asKey))
{
return _asWhole;
}
return "";
});
_oSelf._msRejectHtml=_sRejectHtml.replace(/\s([^<=]+?)=(\"|\')(.*?[^\\]?)\2/g,function(_asWhole,_asKey,_asQuot,_asValue){
if(_asKey=="id")
{
return " onclick='getTop().ossLog(\"delay\", \"all\", \"stat=nothing&locval=profiletip,refuse,,1\");getTop().QMProfileTips.oper(\"custom\",\""+_asValue+"\")'";
}
if(/(href|title|style|onclick|class)/i.test(_asKey))
{
return _asWhole;
}
return "";
});
_oSelf._msFilingHtml=_sFilingHtml.replace(/\s([^<=]+?)=(\"|\')(.*?[^\\]?)\2/g,function(_asWhole,_asKey,_asQuot,_asValue){
if(_asKey=="id")
{
return " onclick='getTop().QMProfileTips.oper(\"custom\",\""+_asValue+"\")'";
}
if(/(href|title|style|onclick|class)/i.test(_asKey))
{
return _asWhole;
}
return "";
});
_oSelf._forceStop();
_oSelf._moTmpTR=null;
_oSelf._moTriggerDom=_aoTriggerDom;
_oSelf._msUin=_sUin;
_oSelf._msQQNum=_sQQNum;
_oSelf._msDomId=[_sUin,_sEmail?_sEmail.replace(/\W/gi,""):""].join("");
_oSelf._mnStatus=0;
_oSelf._moInfoCard=S('infocard_'+_oSelf._msDomId,_oSelf._moWin);
_oSelf._msNickName=_sNickName;
_oSelf._msEmail=_sEmail||(_sUin?_sUin+"@qq.com":"");
_oSelf._msShowInfo=_sShowInfo;
_oSelf._msIcon=_sIcon;
_oSelf._msRole=_sRole;
_oSelf._msHome=_sHome;
_oSelf._msQQFnd=_sQQFnd;
_oSelf._sMailid=_sMailid;
_oSelf._mnWaitTime=_sShowInfo==3?800:500;
_oSelf._setStatus(_oSelf._mnStatus==0?1:2);
}
if(_bOpen=="")
{
_bOpen="1";
}
if(_bOpen!="0")
{
_buildHtml();
}
}
else{
_oSelf._setStatus(_oSelf._mnStatus==0?1:2);
}
};
_goClass._doMouseOut=function(_aoTriggerDom){
var _oSelf=this,_nStatus=_oSelf._mnStatus;
_oSelf._moTmpTR=null;
_oSelf._setStatus((_nStatus==2||_nStatus==3)?3:0);
};
_goStatic._getInstance=function(_aoWin){
if(_aoWin)
{
var _sInstName=_goStatic._TEMPLATE._INSTANCE,_oInst=_aoWin[_sInstName];
if(!_oInst)
{
_oInst=_aoWin[_sInstName]=new _goStatic(_aoWin);
addEvent(_aoWin,"unload",function(_aoEvent){
var _oTmpInst=_goStatic._getInstance(_aoWin);
if(_oTmpInst)
{
_oTmpInst._setStatus(-1);
}
});
}
return _oInst;
}
};
_goStatic.clearInfoCard=function(_aoWin){
var _oSelf=this;
_goStatic._getInstance(_aoWin)._moTriggerDom=null;
_goStatic._getInstance(_aoWin)._mbRebuildFlag=true;
};
_goStatic.doMouseEvent=function(_asType,_aoWin,_aoTriggerDom){
if(_asType=="over")
{
_goStatic._getInstance(_aoWin)._doMouseOver(_aoTriggerDom);
}
else if(_asType=="out")
{
_goStatic._getInstance(_aoWin)._doMouseOut(_aoTriggerDom);
}
};
_goStatic.oper=function(_asOper,_asUin,_asEmail,_sShowInfo,_asNickName){
var _oDlgTmpl=T(['<div class="dialog_txt">','<div class="bold" style="padding-bottom:10px;">$HeadTitle$</div>','<input type="text" class="txt" id="content" style="width:365px;" maxlength="20"/>','</div>','<div class="dialog_operate">','<input type="button" class="btn wd2" value="\u53D1\u9001" id="send"/>','<input type="button" class="btn wd2" value="\u53D6\u6D88" id="cancel" />','</div>']);
function _toAddr(_asN,_asU,_asE)
{
return T('"$name$" <$email$>').replace({name:encodeNick(_asN)||_asU,email:_asEmail||(_asUin+"@qq.com")});
}
function _DlgShow(_asId,_asTmpl,_asUrl,_asRlyMsg,_asTitle)
{
new QMDialog({sId:_asId,sTitle:_asTitle||"&nbsp;",sBodyHtml:_asTmpl,nWidth:405,onshow:function(){
this.S("content").focus();
},onload:function(){
var _oDlg=this;
addEvent(_oDlg.S("send"),"click",function(_oEvent){
QMAjax.send(_asUrl.replace({sid:getSid(),uin:_asUin,msg:trim(_oDlg.S("content").value)}),{method:"POST",onload:function(_abIsOk,_asParam){
if(_abIsOk)
{
if(_asParam=="0")
{
showInfo(_asRlyMsg);
}
else if(_asParam=="-1")
{
showError("\u53D1\u9001\u5931\u8D25\uFF0C\u5BF9\u65B9\u628A\u4F60\u52A0\u5165\u4E86\u9ED1\u540D\u5355\u3002");
}
else{
showInfo("\u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
}
}
else{
showError("\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");
}
}});
_oDlg.close();
});
addEvent(_oDlg.S("cancel"),"click",function(){
_oDlg.close();
});
}});
}
switch(_asOper)
{case "mailTo":
openComposeDlg("normal",{sDefAddrs:_toAddr(_asNickName,_asUin,_asEmail),bUinEncrypt:true,bAddrEdit:true,nWidth:495});
break;
case "smsTo":
openComposeDlg("sms",{sDefAddrs:_toAddr(_asNickName,_asUin,_asEmail),bUinEncrypt:true,bAddrEdit:false});
break;
case "rssTo":
if(!_asUin)
{
return;
}
var _sUrl=_TO_RSS_URL.replace({sid:getSid(),uin:_asUin});
if(_sShowInfo=="1")
{
goNewWin(_sUrl,false,true);
}
else{
goUrlMainFrm(gsRssDomain+_sUrl);
}
break;
case "custom":
var _oDom=S(_asUin,getMainWin());
if(_oDom)
{
fireMouseEvent(_oDom,"click");
}
break;
case "weixinhello":
var _oDlgHelloTmpl=_oDlgTmpl.replace({HeadTitle:"\u5411TA\u8BF4\u53E5\u8BDD\u6253\u4E2A\u62DB\u547C"}),_oQueryDlgUrl=T("/cgi-bin/getqqfriend?sid=$sid$&action=addsendermmfrd&subaction=greet&t=weixinfriend&senderuin=$uin$&greetmsg=$msg$&loc=readmail,weixin,,,0,1");
_DlgShow("weixinhello",_oDlgHelloTmpl,_oQueryDlgUrl,"\u6D88\u606F\u53D1\u9001\u6210\u529F\uFF0C\u5982\u679C\u5BF9\u65B9\u56DE\u590D\u4F60\uFF0C\u4F60\u4EEC\u4F1A\u6210\u4E3A\u597D\u53CB\u3002","\u5FAE\u4FE1\u6253\u62DB\u547C");
break;
case "weixinVerify":
var _oDlgVerifyTmpl=_oDlgTmpl.replace({HeadTitle:"<b style='line-height:2;'>\u5BF9\u65B9\u542F\u7528\u4E86\u597D\u53CB\u9A8C\u8BC1</b><br/>\u60A8\u9700\u8981\u53D1\u9001\u9A8C\u8BC1\u8BF7\u6C42\uFF0C\u5E76\u5728\u5BF9\u65B9\u901A\u8FC7\u540E\u624D\u80FD\u6210\u4E3A\u597D\u53CB\u3002"}),_oQueryDlgUrl=T("/cgi-bin/getqqfriend?sid=$sid$&action=addsendermmfrd&subaction=greet&t=weixinfriend&senderuin=$uin$&greetmsg=$msg$");
QMAjax.send(T("/cgi-bin/getqqfriend?sid=$sid$&action=addsendermmfrd&subaction=addcontact&senderuin=$uin$&t=weixinfriend").replace({sid:getSid(),uin:_asUin}),{method:"POST",onload:function(_abIsOk,_asParam){
if(_abIsOk)
{
if(_asParam=="0")
{
showInfo("\u6DFB\u52A0\u6210\u529F");
S("weixinContainer",getMainWin())&&attr(S("weixinContainer",getMainWin()),"w","0");
}
else if(_asParam=="-1")
{
showError("\u6DFB\u52A0\u5931\u8D25\uFF0C\u5BF9\u65B9\u628A\u4F60\u52A0\u5165\u4E86\u9ED1\u540D\u5355\u3002");
}
else if(_asParam=="1")
{
_DlgShow("weixinverify",_oDlgVerifyTmpl,_oQueryDlgUrl,"\u6D88\u606F\u53D1\u9001\u6210\u529F\uFF0C\u5982\u679C\u5BF9\u65B9\u901A\u8FC7\u9A8C\u8BC1\uFF0C\u4F60\u4EEC\u4F1A\u6210\u4E3A\u597D\u53CB\u3002","\u5FAE\u4FE1\u6253\u62DB\u547C");
}
else{
showError("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u6E05\u7A0D\u540E\u518D\u8BD5");
}
}
}});
break;
}
};
_goStatic.contactHandle=function(_asAction,_aoTarget){
var _oTop=getTop();
if(_asAction=="addc")
{
var _sEmail=_oTop.attr(_aoTarget,"e"),_sUsername=_oTop.attr(_aoTarget,"n"),_sUin=_oTop.attr(_aoTarget,"u");
if(_oTop.isSpreadAddr())
{
var _oAddrDlg=new _oTop.QMDialog({sId:"newAddr",sTitle:"\u65B0\u5EFA\u8054\u7CFB\u4EBA",sUrl:_oTop.T('/cgi-bin/laddr_detail?sid=$sid$&view=qq&t=contact&edit=1&user=$username$&email=$email$&dlgname=newAddr&icon=$icon$').replace({sid:_oTop.getSid(),username:encodeURI(_sUsername),email:encodeURIComponent(_sEmail),icon:encodeURIComponent("/cgi-bin/getqqicon?"+"uin="+_sUin+"&mode=newaddr&sid="+_oTop.getSid()+"&mailaddr="+_sEmail)}),nHeight:538,nWidth:600,onload:function(){
this.S("_dlgiframe_").scrolling="yes";
_oTop.rdVer(_goStatic._sMailid,1);
}});
}
else{
_oTop.goUrlMainFrm(T('/cgi-bin/combine_addrlist?method=list&view=normal&t=addr_listall&sid=$sid$&s=addfromlist&category=all&addrusername=$username$&addruseremail=$email$&rmqqgroup=1&mode=new').replace({sid:getSid(),username:encodeURI(_sUsername),email:encodeURIComponent(_sEmail)}));
}
}
else if(_asAction=="editc")
{
var _sUrl="",_sEmail=_oTop.attr(_aoTarget,"e"),_sUin=_oTop.attr(_aoTarget,"u");
debug("edit");
debug(["addrid=",getTop().attr(_aoTarget,"addrid")]);
if(_oTop.isSpreadAddr())
{
_sUrl=T("/cgi-bin/laddr_detail?sid=$sid$&view=normal&t=contact&edit=1&AddrID=$addrid$&editexist=1&dlgname=editAddr&icon=$icon$").replace({sid:getSid(),addrid:getTop().attr(_aoTarget,"addrid"),icon:encodeURIComponent("/cgi-bin/getqqicon?"+"uin="+_sUin+"&mode=newaddr&sid="+_oTop.getSid()+"&mailaddr="+_sEmail)});
var _oAddrDlg=new _oTop.QMDialog({sId:"editAddr",sTitle:"\u7F16\u8F91\u8054\u7CFB\u4EBA",sUrl:_sUrl,nHeight:538,nWidth:600,onload:function(){
this.S("_dlgiframe_").scrolling="yes";
}});
}
else{
_sUrl=T("/cgi-bin/combine_addrlist?t=addr_listall&method=list&view=normal&sid=$sid$&AddrID=$addrid$&s=edit&s=edit&&grpid=&category=all&rmqqgroup=1").replace({sid:getSid(),addrid:getTop().attr(_aoTarget,"addrid")});
goUrlMainFrm(_sUrl,true);
}
}
};
_aoLoadWin.QMProfileTips=_goStatic;
})(window);
