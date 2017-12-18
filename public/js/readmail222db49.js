(function(v){
var h={_sQReply:"quickreply",_sQSource:"source",_sQSendBtn:"sendbtn",_sQReplyTxtContainer:"qmQuickReplyTextContainer",_sQReplyBtnContainer:"qmQuickReplyButtonContainer",_sAfterSendDiv:"afterSendDiv",_sAfterSendingDiv:"afterSendingDiv",_sQuickReplyPart:"QuickReplyPart",_sQMEditorArea:"QMEditorArea",_sQMEditorToolArea:"QMEditorToolBarPlusArea",_sJumpToNewWin:"jumpToNewWin",_sReplyFrm:"replyfrm",_sSubMailStartDiv:"submail_start_div",_sContentDiv:"contentDiv",_sContentClassName:"qm_converstaion_body",_sImgStar:"img_star",_sTopBtn:"img_mailtop",_sStarStatus:"starStatus",_sMailtopStatus:"mailtopStatus",_sStarTopStatus:"starTopStatus",_sTagContainer:'tagContainer',_sMailContainer:"mailContentContainer",_sSendTimeMsg:"send_time_msg",_sAttachment:"attachment",_sPageEnd:"pageEnd",_sNextMailTop:"nextmail_top",_sNextMailBt:"nextmail_bt",_sNextNewMail:"nextnewmail",_sNextNewDiv:"nextnewDiv",_sQQMailBgMusicInfo:"QQMailBgMusicInfo",_sBgMusic:"bgmusic",_sMp3PlayerContainer:"mp3player_container",_sMp3PlayerInfo:"mp3player_info",_sSubMail:"submail",_sFold:"fold",_sDetail:"detail",_sSum:"sum",_sExpand:"expand",_sDetailBtn:"detailBtn",_sReferInfo:"referinfo",_sSettingGroup:"setting_group",_sRmd:"rmd",_sRemarkContent:"remarkContent",_sRemarkContainer:"remarkcontainer",_sRemarkText:"remarktext",_sRemarkWrite:"remarkwrite",_sRemarkRead:"remarkread",_sRemarkSave:"remarksave",_sSenderInfo:"senderInfo",_sSenderInfo2:"senderInfo2",_sSenderInfo3:"senderInfo3",_sMainMail:"mainmail",_sRejectGroupY:"rejectgroupy",_sRejectGroupN:"rejectgroupn",_sCheatCodeBar:"spam",_sGreenBar:"cheatcode_greenbar",_sGreenBarText:"greenbar_text"},l={_sConvReAndFw:"convreandfw",_sSpam:"spam",_sAdMail:"adMail",_sMoreOprContainer:"moreoprContainer"},H="qmTranslate",f="\u8BF7\u5728\u6B64\u8F93\u5165\u5907\u6CE8...",k=T(['<img src="$images_path$spacer104474.gif" class="icon_addMusic_d"/>','&nbsp;<a href="http://cgi.music.soso.com/fcgi-bin/m.q?w=$title$%20$author$&t=0" target="_blank">$title$ - $author$</a>']),j=TE(["/cgi-bin/mail_list?sid=$sid$&folderid=$folderid$&folderkey=$folderkey$",'$@$if($s$=="from_unread_list")$@$','&flag=new&s=unread','$@$else if($s$=="from_star_list")$@$','&flag=star&s=star','$@$endif$@$','$@$if($more$)$@$','$more$','$@$endif$@$']),m="/cgi-bin/readmail?sid=$sid$&mailid=$mailid$",n=TE([m,"&t=","$@$if($t$)$@$","$t$","$@$else$@$","compose","$@$endif$@$","&s=$s$&disptype=$disptype$"]),c=TE(['/cgi-bin/readmail?sid=$sid$&t=compose&s=forward&disptype=html&from=attachfolder&getSubjectFromAttachName=1','&mailattach=$mailid$|$attachid$|$attachname$|$fileextenal$|$filebyte$']),d=TE(["/cgi-bin/readtemplate?sid=$sid$&t=compose&s=cnew&bigatt=1&attid=$attachid$&filesize=$filesize$&downpage=$downpage$&exptime=$exptime$&nocheckframe=true&urifilename=$urifilename$&getSubjectFromAttachName=1&k=$k$&code=$code$&fid=$fid$"]),p=TE("/cgi-bin/grouplist?oper=$oper$&sid=$sid$&gid=$gid$@groupmail.qq.com&t=mail_mgr2&mailaction=$action$"),o=TE("/cgi-bin/grouplist?oper=reject&sid=$sid$&reject=$yn$&gid=$gid$@groupmail.qq.com&t=mail_mgr2&mailaction=reject_group"),t=TE("/cgi-bin/reader_list?type=home&classtype=allfriend&uin=$mail.from.qq$&t=reader_personal&sid=$sid$&s=sidebar"),s=TE("/cgi-bin/mail_list?sid=$sid$&t=mail_list_preview&sender=$mail.from.addr$&receiver=$mail.from.addr$&matchtype=include&folderid=all&page=0&name=$mail.from.name$&pagesize=5&mailidx=$mailid$&listmode=0&from=sidebar&s=$s$&record=n"),g=TE(['<form method="$sMethod$" id="$sFormId$" name="$sFormId$" target="$sTarget$" action="$sAction$" enctype="multipart/form-data">','$@$for($oInputs$)$@$','<input name="$name$" type="hidden" value="$value$"/>','$@$endfor$@$','</form>']),b='"$@$eval getTop().htmlEncode($name$)$@$"&lt;$addr$&gt;; ',a=TE(['$@$for($addrs$)$@$','"$@$eval getTop().encodeNick($name$)$@$"<$addr$>; ','$@$endfor$@$']),q=TE(['<div id="container" style="line-height:20px">','<div>','<div style="margin:8px 4px 0 0;">','<a class="right" id="other" href="/cgi-bin/grouplist?sid=$sid$&t=setting_group&oper=list">\u7BA1\u7406\u5176\u4ED6\u7FA4</a>','<p style="margin:0;">\u5BF9\u6B64\u7FA4:</p>','</div>','<div style="margin-bottom:5px;margin-left:8px;">','<div style="padding:5px 0 3px">','<input type="radio" name="qqnotify" class="cb" value="notifyyes" $@$if(!$bReject$&&$bNotify$)$@$checked="true"$@$endif$@$ id="qqnotify"/>','<label for="qqnotify" style="color:#333">\u63A5\u6536\u65B0\u90AE\u4EF6\uFF0C\u5E76\u5728QQ\u63D0\u9192</label>','</div>','<div style="padding:5px 0 3px">','<input type="radio" name="qqnotify" class="cb" value="notifyno" $@$if(!$bReject$&&!$bNotify$)$@$checked="true"$@$endif$@$ id="noqqnotify"/>','<label for="noqqnotify" style="color:#333">\u63A5\u6536\u65B0\u90AE\u4EF6\uFF0C\u4E0D\u5728QQ\u63D0\u9192</label>','</div>','<div style="padding:5px 0 3px;">','<input type="radio" name="qqnotify" class="cb" value="reject" $@$if($bReject$)$@$checked="true"$@$endif$@$ id="reject"/>','<label for="reject" style="color:#333">\u62D2\u6536\u90AE\u4EF6</label>','</div>','</div>','</div>','<div style="position:relative;border-top:1px solid #ccc;padding-top:8px;$@$if($bReject$)$@$display:none;$@$endif$@$;" class="clear" id="setnewdiv">','<p style="margin:0;">\u5BF9\u6B64\u7FA4\u5DF2\u8BFB\u90AE\u4EF6:</p>','<div style="margin-left:8px;">','<div style="padding:5px 0 3px">','<input type="radio" name="unread" class="cb" value="setnewyes" $@$if($bNewreply$)$@$checked="true"$@$endif$@$ id="setunread"/>','<label for="setunread" style="color:#333">\u6709\u65B0\u56DE\u590D\u65F6\uFF0C\u6807\u4E3A\u672A\u8BFB</label>','</div>','<div style="padding:5px 0 3px">','<input type="radio" name="unread" class="cb" value="setnewno" $@$if(!$bNewreply$)$@$checked="true"$@$endif$@$ id="setread"/>','<label for="setread" style="color:#333">\u6709\u65B0\u56DE\u590D\u65F6\uFF0C\u4FDD\u6301\u5DF2\u8BFB</label>','</div>','</div>','</div>','<div style="padding:10px 0;overflow:hidden;" class="clear">','<a class="btn_blue btn_space" id="save">\u4FDD\u5B58\u66F4\u6539</a>','<a class="btn_gray" href="javascript:;" id="cancel">\u53D6\u6D88</a>','</div>','</div>']),u={_REPLY_DLG:T(['<div class="dialog_feedback">','<span class="dialog_icon icon_info_b"></span>','<div class="dialog_f_c">','<div class="dialog_f_t">\u662F\u5426\u8981\u56DE\u590D\u5168\u90E8\u6536\u4EF6\u4EBA\uFF1F</div>','<div class="dialog_f_d"> \u60A8\u662F\u5BC6\u9001\u7684\u6536\u4EF6\u4EBA\uFF0C\u5176\u4ED6\u6536\u4EF6\u4EBA\u4E0D\u77E5\u9053\u60A8\u6536\u5230\u4E86\u6B64\u90AE\u4EF6\uFF01</div>','</div>','</div>']),_REPLY_DLG_FOOT:T(["<input type=button id='replyall' class='btn wd4' value='\u56DE\u590D\u5168\u90E8'>","<input type=button class='btn wd4' value='\u56DE\u590D\u53D1\u4EF6\u4EBA' id='reply'>","<input type=button class='btn wd4' value='\u53D6\u6D88' id='cancel'>"]),_REFERPART:TE(['<div><br></div><div><br></div>','<div style="font-size: 12px;font-family: Arial Narrow;padding:2px 0 2px 0;">','------------------&nbsp;$REFER$&nbsp;------------------','</div>','<div style="font-size: 12px;background:#efefef;padding:8px;">','<div><b>$FROM$</b> ',b,'</div>','<div><b>$DATE$</b> $date$</div>','<div><b>$TO$</b> $@$for($to$)$@$',b,'$@$endfor$@$</div>','$@$if($cc.length$)$@$','<div><b >$CC$</b> $@$for($cc$)$@$',b,'$@$endfor$@$</div>','$@$endif$@$','<div><b>$SUBJECT$</b> $subject$</div>','</div><div><br></div>','$orgcontent$'])},i={_ZH_CN:{REFER:"\u539F\u59CB\u90AE\u4EF6",FROM:"\u53D1\u4EF6\u4EBA:",DATE:"\u53D1\u9001\u65F6\u95F4:",TO:"\u6536\u4EF6\u4EBA:",CC:"\u6284\u9001:",SUBJECT:"\u4E3B\u9898:"},_EN_US:{REFER:"Original",FROM:"From:",DATE:"Date:",TO:"To:",CC:"Cc:",SUBJECT:"Subject:"}},e=T("/cgi-bin/config_blackwhitelist?sid=$sid$&act=whitelist&Fun=submit&pagefrom=readmail&group=$fromaddr$&sloc=readmail_yellow_tip"),r=T("/cgi-bin/report_cgi?r_type=$rtype$&r_result=$rresult$&r_msg=$rmsg$");
function x(J,K)
{
var N=J.sFormId||unikey(),L=S(N,J.oWin),M=[];
if(L)
{
removeSelf(L);
}
K=K||{};
K.sid=K.sid||getSid();
E(K,function(P,O){
M.push({name:O,value:P});
});
J.oInputs=M;
insertHTML(J.oWin.document.body,"beforeEnd",g.replace(extend({sFormId:N,sTarget:"actionFrame",sMethod:"POST"},J)));
return S(N,J.oWin);
}
function w(K,J)
{
rdVer(K,1);
if(!rdVer.check(J))
{
reloadFrm(J);
}
}
function z(O,N,K,L,M)
{
var P=new Date();
var Q=new Date(O,N,K,L,M,0);
var J=P>Q;
if(J)
{
return ['\u6B64\u90AE\u4EF6\u662F\u5B9A\u65F6\u90AE\u4EF6\uFF0C\u5DF2\u5728<span style="color:black;" >&nbsp;',O,'\u5E74',N,'\u6708',K,'\u65E5',L,'\u65F6',M,'\u5206','&nbsp;</span>\u53D1\u51FA\u3002'].join("");
}
else{
return ['\u6B64\u90AE\u4EF6\u662F\u5B9A\u65F6\u90AE\u4EF6\uFF0C\u5C06\u5728<span style="color:black;" >&nbsp;',O,'\u5E74',N,'\u6708',K,'\u65E5',L,'\u65F6',M,'\u5206','&nbsp;</span>\u53D1\u51FA\u3002'].join("");
}
}
function G(J)
{
return filteScript(J.replace(/<div id=\'?\"?QQMailBgMusicInfo\'?\"?.*?>.*?<\/div>/ig,"").replace(/<player .*?><\/player>/ig,"").replace(/(^\s+)|(\s+$)/ig,""));
}
function B(J)
{
var K=true,M;
try{
M=getTop().goUserInfo.get('RealDefaultAllMail');
}
catch(N)
{
return false;
}
function L(O)
{
if(!O)
{
return false;
}
for(var R=0;R<O.length;R++)
{
if(O[R])
{
var P=O[R].addr||"",Q=O[R].qq;
if(Q==g_admuin||P.indexOf("@g.qq.com")>0)
{
return true;
}
for(var U=0;U<M.length;U++)
{
if((M[U].email||"").toLowerCase()==P.toLowerCase())
{
return true;
}
}
}
}
return false;
}
if(M&&M.length)
{
K=!(L(J.to)||L(J.cc)||L([J.from]));
}
else{
K=false;
}
return K;
}
function C(J,K)
{
return (J.ctrlKey&&J.keyCode==13||J.altKey&&J.keyCode==83);
}
function y()
{
var J=getTop(),K="http://x.soso.com/js/xf/xflib2.0.js";
location.protocol==="https:"&&(K=["/cgi-bin/magurl?sid=",J.getSid(),"&act=rep&url=",K].join(""));
J.loadJsFile(K,true,J.document,function(){
var L=J.finds("[ck=xfDl]",J.getMainWin().document);
if(J.XFLIB&&J.XFLIB.IsXFInstalled())
{
J.E(L,function(M){
J.show(M,true);
});
}
});
}
function I(J)
{
var M=calcPos(J),K=calcPos(S("mainFrame",getTop())),L=QMMenu("readmail_qb_push_tip");
if(L)
{
L.show();
}
else{
new QMMenu({sId:"readmail_qb_push_tip",sClassName:"qmpanel_shadow",nX:M[3]-160,nY:M[2],nWidth:258,bAutoClose:true,oEmbedWin:this._moWin,oItems:[{nHeight:110,sItemValue:['<div style="line-height:20px;padding:15px 0 15px;white-space:normal;">','\u5EFA\u8BAE\u5B89\u88C5QQ\u6D4F\u89C8\u5668\uFF0C\u53EF\u6709\u6548\u62E6\u622A\u9493\u9C7C\u548C<br/>\u6B3A\u8BC8\u7F51\u7AD9\uFF0C\u9632\u6B62\u5E10\u53F7\u4FE1\u606F\u88AB\u76D7\u3002','</div>','<div class="txt_right" style="line-height:30px;">','<a href="javascript:;" class="btn_blue" id="setup_btn">\u7ACB\u5373\u5B89\u88C5</a>','</div>'].join('')}],onload:function(){
var N=this;
LogKV({sValue:"getinvestigate|readmail|qbpushtip|show"});
addEvent(N.S("setup_btn"),"click",function(O){
LogKV({sValue:"getinvestigate|readmail|qbpushtip|click"});
window.open(getTop().gbIsMac?'http://dldir1.qq.com/invc/tt/QQBrowser_for_QQMail.dmg':"http://dldir1.qq.com/invc/tt/QQBrowser_Setup_Email_fjck.exe","_blank");
});
}});
}
}
function A(J)
{
if(J.offsetY<J.fromElement.clientHeight/2)
{
QMMenu("readmail_qb_push_tip").hide();
}
}
var D={};
var F=D.qmBaseDM=D._qmBaseDM=inherit("_qmBaseDM",Object,function(J){
return {$_constructor_:function(){
var K=arguments;
if(K.length)
{
var L=this;
L._moContext=K[K.length-1];
L._moWin=L._moContext.oWin;
L._msModuleName=L._moContext.sModuleName;
L._init.apply(L,arguments);
}
},_initMemVar:function(){
},_setEvent:function(){
},_ready:function(){
},_startSubMod:function(){
},_init:function(){
var K=this;
K._initMemVar.apply(K,arguments);
K._setEvent.apply(K,arguments);
K._ready.apply(K,arguments);
K._getDealCustomUIMethod();
},_getDealCustomUIMethod:function(){
var K=this;
var L=K._moWin;
if(L.location.href.indexOf('t=mail_list_ad')!=-1&&L.dealCustomUI)
{
K.dealCustomUI=L.dealCustomUI;
}
else{
K.dealCustomUI=function(){
};
}
},attr:function(K,L,M){
var N=attr(K,L,M);
if(N==null&&K)
{
return M===undefined?K[L]:(K[L]=M);
}
return N;
},S:function(K){
var L=this;
return S(K+(L._moContext.sAux||""),L._moWin);
},SN:function(K){
var L=this;
return SN(K+(L._moContext.sAux||""),L._moWin);
},context:function(K){
var L=this;
K=K||"sContext";
return L._moContext[K];
},getMailId:function(){
return this.context("sContext");
},getFromInfo_:function(){
return this._moMailInfo.from||{};
},_handle:function(L,K,M){
var P=this,O=getEventTarget(K),N=O.ownerDocument,V=P._msModuleName,R,U,Q;
while(O&&isObjContainTarget(L,O))
{
R=attr(O,M);
if(R&&!U)
{
U=R;
Q=O;
}
R=attr(O,F._MOD_ATTR);
if(R)
{
if(R==V)
{
if(U&&typeof (P[U])=="function")
{
P[U](Q,P.getMailId(),K);
}
break;
}
else{
U=null;
}
}
O=O.parentNode;
}
},md:function(){
getTop().md();
},mu:function(){
getTop().mu();
},checkPoison:function(K){
var L=this,M=getTop(),N=K||L.getMailId();
QMAjax.send(T('/cgi-bin/do?action=checkvirus&sid=$sid$&mailid=$mailid$&t=do.json&cacheage=7200&ver=$ver$').replace({sid:getSid(),mailid:N,ver:getTop().CommVer.get("checkPoison")}),{method:"GET",onload:function(O,P){
var U=trim(P);
if(O&&U.indexOf("(")==0)
{
var R=evalValue(U);
for(var V in R)
{
if(!V)
{
return;
}
if(R[V].isSafe=="0")
{
var Q=M.S(["span_attachIndex_",N,"_",V].join(""),L._moWin);
Q.style.display="";
M.attr(Q,"poisonname",R[V].virus);
M.S(["span_",N,"_safe"].join(""),L._moWin).style.display="none";
}
}
}
}});
},_POISON_WARNING_TEMP:T(['<div unselectable="on" id="div_poision_warning" class="newtips" style="top: $top$px; left: $left$px;" mor="setInStatus" mot="setOutStatus">','<div unselectable="on" class="tipcontainer" style="opacity: 1;">','<span class="arrowup" style="margin-left: 106px;"></span>','<span class="arrowleft" style="display: none; margin-top: 106px;"></span>','<span class="arrowright" style="display: none; margin-top: 106px;"></span>','<div unselectable="on" class="container">','<div unselectable="on" class="contentcontainer">','<div unselectable="on" class="content" style="position:relative;zoom:1;padding:15px 14px 15px 14px">','<div class="tipstxt" style="padding-left:0px">','<b>\u75C5\u6BD2\u540D\uFF1A$poisonname$</b>','<br>','<span class="ico_Avira"></span>','\u68C0\u67E5\u7ED3\u679C\u7531\u7535\u8111\u7BA1\u5BB6\u4E91\u67E5\u6740\u5F15\u64CE\u63D0\u4F9B','</div>','</div>','</div>','</div>','</div>','</div>']),showPoisonWaring:function(K){
var N=getTop(),L=this;
var M=N.calcPos(K),O=N.S("div_poision_warning",L._moWin);
if(O)
{
N.removeSelf(O);
L._nTimeoutIndex&&clearTimeout(L._nTimeoutIndex);
}
N.insertHTML(L._moWin.document.body,"afterBegin",L._POISON_WARNING_TEMP.replace({"top":M[0],"left":M[3],"poisonname":N.attr(K.parentNode.parentNode,"poisonname")}));
var O=N.S("div_poision_warning",L._moWin),P=N.calcPos(O);
if(M[3]+M[4]/2+P[4]/2<=L._moWin.document.body.clientWidth)
{
O.style.top=M[0]+M[5]+"px";
if(M[3]+M[4]/2>=P[4]/2)
{
O.style.left=M[3]+M[4]/2-P[4]/2-M[4]+"px";
}
else{
O.style.left="0px";
}
}
else{
O.style.top=M[0]+M[5]+"px";
O.style.left=L._moWin.document.body.clientWidth-P[4]-65+"px";
}
},setOutStatus:function(K){
var M=getTop(),L=this;
M.attr(K,"isOut","1");
L.hidePoisonWaring(K);
},setInStatus:function(K){
var M=getTop(),L=this;
M.attr(K,"isOut","0");
},hidePoisonWaring:function(){
var L=getTop(),K=this;
K._nTimeoutIndex=setTimeout(function(){
var M=L.S("div_poision_warning",K._moWin);
if(M&&L.attr(M,"isOut")!="0")
{
L.removeSelf(M);
}
},100);
},evt:function(K,L){
var N=this,M=function(O){
O=typeof (O)=="string"?N.S(O):O;
E(K,function(P){
var Q=F._oEvtMap[P];
Q&&addEvent(O,Q,function(R){
N._handle(O,R,P);
});
});
};
if(typeof (L)=="string")
{
L=N.S(L);
}
if(L.nodeType)
{
M(L);
}
else{
E(L,function(O){
M(O);
});
}
}};
},{_MOD_STATE:"_module_state_",_MOD_ATTR:"module",_CON_ATTR:"context",_AUX_ATTR:"aux",_oEvtMap:{mor:"mouseover",mot:"mouseout",ck:"click",md:"mousedown",mu:"mouseup",dck:"dblclick"}});
D.qmReadMail=inherit("qmReadMail",D._qmBaseDM,function(J){
return {_ready:function(){
var K=this;
K._initWinFunc.apply(K,arguments);
K._moWin.document.body.focus();
setTimeout(function(){
K._pageReady.apply(K,arguments);
y();
K.dealCustomUI('initPage',K._moWin);
if(K._msModuleName==="qmConvMail")
{
for(_subMailId in K._moSubMails)
{
K.checkPoison(_subMailId);
break;
}
}
else{
K.checkPoison();
}
},50);
},_rInsPageEnd:function(){
var L=this,K=L.S(h._sPageEnd);
if(getTop().S("qqmail_mailcontainer",L._moWin))
{
getTop().S("qqmail_mailcontainer",L._moWin).appendChild(K);
}
else{
L._moWin.document.body.appendChild(K);
}
show(K,true);
},_fakeReadMail:function(){
var M=this,L=M._moConfig,K=new QMCache({appName:"mail_rank"});
QMAjax.send(T('/cgi-bin/readmail?sid=$sid$&rank=$rank$&mailid=$mailid$&t=readsubmail&mode=fake&s=r2&base=$base$&pf=$pf$&folderid=$folderid$&folderkey=$folderkey$').replace({sid:getSid(),mailid:M.getMailId(),pf:rdVer.isPre(L.folderid)?1:0,folderid:L.folderid,folderkey:L.folderkey,rank:K.getData(M.getMailId()),base:rdVer("BaseVer",0)}),{method:"GET",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(N,O){
var R=trim(O);
if(N&&R.indexOf("(")==0)
{
var Q=evalValue(R);
if(Q)
{
M._updatePreAndNext(Q);
}
}
else{
var P=getActionWin().document;
P.open();
P.write(O);
}
}});
},_flushFolder:function(){
var M=this,L=M._moConfig,N=M.getMailId(),K=QMMailCache.getData(N);
if((L.bNewMail==1)&&(!K||K.bUnread===true))
{
folderOpt({bNewMail:L.bNewMail,sFolderId:L.folderid,sMailId:N,oMatchTag:L.oMatchTag,oSysTag:L.oSysTag,bStar:L.bStar,bAddrvip:L.bAddrvip});
}
else{
getTop().recordCompareReadedMailId(N);
}
},_setEvent:function(){
var K=this,L=K._moWin;
K.evt(["ck","md","kd","mor","mot","mu"],L.document.body);
K._initSelectAllEvt();
},_initWinFunc:function(){
var K=this,L=K._moWin;
L.QMReadMail=K;
L.go=function(M,Q,P,N,O){
var R={opt:P};
if(O)
{
R.more=["&loc=",K._moConfig.loc,O].join("");
}
K.optMail(R,K.getMailId(),M);
};
L.fw=function(N,M){
callBack.call(K,K[N],M);
};
L.goback=function(){
K.goback();
};
L.setRemindSpan=function(M){
K.S('remind_edit_'+M).innerHTML=(reminddetail["mailid:"+M]||"").replace(/linktitle=.*&sid=/g,function(N){
return N.replace(/\'/g,"&#039;");
});
};
L.setMoreOperation=function(M,N){
K._moMoreOptSel&&K._moMoreOptSel.switchPair(M,N);
},L.fjGetFlvAttrUrl=function(){
return T("/cgi-bin/readtemplate?sid=$sid$&t=video_ref.smil&vsrc=$vsrc$").replace({sid:getSid(),vsrc:encodeURIComponent(L.sFlvPlayUrl.substr(1))});
};
},_initMemVar:function(K,L){
var M=this;
M._moConfig=K;
M._moMailInfo=L;
},_updatePreAndNext:function(K){
var O=this,P,N=O.S(h._sNextMailTop),M=O.S(h._sNextMailBt),L=O.S(h._sNextNewMail);
if(M&&N&&L)
{
if(K.sPn.indexOf("\u4E0A\u4E00\u5C01")!=-1&&K.sPn.indexOf("\u4E0B\u4E00\u5C01")!=-1)
{
N.innerHTML=M.innerHTML=K.sPn;
}
if(P=trim(K.sPnNew))
{
L.innerHTML=P;
}
show(attr(O.S(h._sNextNewDiv),"mailid",K.sPnNewMailId),P!="");
}
},clearCache:function(){
getTop().QMMLCache.upVer();
rdVer(this.getMailId(),1);
},_onMoreOptSel:function(K){
var O=this,P=O.getMailId();
switch(K)
{case "delremark":
case "addremark":
O._moRemark.toggle(P);
break;
case "delremind":
case "addremind":
var M=GelTags("a",S("remind_edit_"+P,document));
if(M&&M[0])
{
if(_aoItem.sId=="addremind")
{
fireMouseEvent(M[0],"click");
}
else{
var N=getUrlParams(S("remind_delete",document).href||location),L=document.remind_frm;
L.ruleid.value=N["ruleid"];
L.from.value=N["from"];
L.submit();
}
}
break;
case "print":
O.optMail2({opt:"print"});
break;
}
},_readMailFinish:function(K){
if(bnewwin)
{
var M=window.opener,N=this,L=N._moConfig;
try{
if(M&&M.readMailFinish)
{
M.readMailFinish(N.getMailId(),L.reandfw,L.folderid);
}
}
catch(O)
{
}
}
},getEditorContent:function(){
var K=this;
return K._moQReply&&K._moQReply.getContent();
},disableConfirm:function(){
var K=this;
return K._moQReply&&K._moQReply.disableConfirm();
},_startSubMod:function(K){
var P=this,O,N=P._moMailInfo,M=extend({},P._moContext,K),L=P._moConfig;
switch(M.sModuleName)
{case "qmRemark":
O=P._moRemark=new D.qmRemark(function(Q){
var R=P._moMoreOptSel;
if(R)
{
switch(Q)
{case "del":
R.switchPair("addremark","delremark");
break;
case "save":
R.switchPair("delremark","addremark");
}
}
QMMailCache.setExpire();
P.clearCache();
},M);
break;
case "qmMoreOptSel":
O=P._moMoreOptSel=new D.qmMoreOptSel({oMoreOpt:L.oMoreOpt,fOnSelect:function(Q){
P._onMoreOptSel(Q);
}},M);
break;
case "qmQReply":
O=P._moQReply=new D.qmQReply(L,N,{fCheckBcc:function(){
callBack.call(P,P.checkBcc,arguments);
},sSubTmp:""},M);
break;
case "qmAntiSpam":
O=P._moAntiSpam=new D.qmAntiSpam(L,N,M);
break;
case "qmMarkAdMail":
O=P._moMarkAdMail=new D.qmMarkAdMail(L,N,M);
break;
case "qmReminder":
_oModel=P._moReminder=new D.qmReminder(L,N,M);
break;
case "qmSenderInfo":
O=new D.qmSenderInfo(L,N,M);
break;
case "qmPlayerParser":
O=new D.qmPlayerParser({oContentDom:P.S(h._sContentDiv),bManuPlay:L.bMusicManuPlay},M);
break;
case H:
if(getTop().goUserInfo.get("DEF_TRANSLATE")=="1")
{
loadJsFile("$js_path$qmtranslate207d35.js",true,v.document,function(){
waitFor(function(){
return P.S(h._sContentDiv)&&v.QMTranslate;
},function(Q){
if(Q)
{
var R=P.S(h._sContentDiv);
new v.QMTranslate({oDom:R});
}
});
});
}
break;
}return O;
},_adjustMailContainer:function(){
var L=this,K=L.S(h._sMailContainer);
K.style.overflowY="scroll";
if(K.scrollHeight-K.offsetHeight>10)
{
K.style.height=K.scrollHeight+"px";
}
K.style.overflowY="";
},_sendCopyAction:function(K){
var Q=getTop(),P=this,L=false,N=0,O=0,M=0;
P._moWin.document.body.oncopy=function(R){
if(!L)
{
var W=Q.getEventTarget(R),X="",U=256,V=[[{sId:"",sItemValue:'<span class="icon_caution_s"></span>\u8BE5\u5730\u5740\u5B58\u5728\u4E0D\u826F\u5185\u5BB9\uFF0C\u5EFA\u8BAE\u505C\u6B62\u8BBF\u95EE',bDisSelect:true}],[{sId:"",sItemValue:'<span class="icon_info_s"></span>\u8BE5\u5730\u5740\u5B89\u5168\u6027\u65E0\u6CD5\u786E\u5B9A\uFF0C\u8BF7\u8C28\u614E\u6253\u5F00',bDisSelect:true}],""];
if(P._moWin.document.selection)
{
X=P._moWin.document.selection.createRange().text;
O=P._moWin.document.selection.createRange().offsetTop+bodyScroll(P._moWin.document,'scrollTop');
N=P._moWin.document.selection.createRange().offsetLeft;
M=P._moWin.document.selection.createRange().boundingHeight;
}
else{
if(Q.isObjContainTarget(K,W))
{
X=P._moWin.getSelection();
var Z=P._moWin.getSelection();
if(Z.rangeCount>0)
{
var Y=Z.getRangeAt(0).getBoundingClientRect();
N=Y.left;
O=Y.top+bodyScroll(P._moWin.document,'scrollTop');
M=Y.height;
}
}
}
if(X!="")
{
if(X.length>U)
{
X=X.substring(0,U);
}
L=true;
QMAjax.send(T("/cgi-bin/mail_spam?sid=$sid$&stat=getcopycontent&content=$content$&t=getcopycontent&action=copy_link").replace({sid:getSid(),content:Q.encodeURI(X)}),{method:"POST",onload:function(aa,ab){
L=false;
if(aa)
{
if(ab!="2")
{
new QMMenu({oEmbedWin:P._moWin,sClassName:(ab==0?"tips_maliciousLink":"tips_unknowLink"),sid:"report",oItems:V[ab],nWidth:237,nX:N,nY:O+M+5,bAutoClose:false});
}
}
}});
setTimeout(function(){
L=false;
},5000);
}
}
};
},_pageReady:function(){
var Q=getTop(),P=this,R=P._moWin,O=P._moMailInfo,L=P._moConfig,M=P.S(h._sContentDiv),N=S("folder_"+L.folderid,Q),U=R.document.body.background;
P._rInsPageEnd();
P._adjustMailContainer();
P._fakeReadMail();
L.bBccToMe=B(O);
L.sMailContent=h._sMailContainer;
P._readMailFinish();
U&&(M.style.backgroundImage="url("+U+")");
swapLink(M,L.disptype,R,P.getMailId());
P._sendCopyAction(M);
initMailSelect(L.oMoveItems,true,L.bOpenTag=="1",R,L.folderid,L.bAutoTag);
P._startSubMod({sModuleName:"qmQReply"});
P._startSubMod({sModuleName:"qmMoreOptSel"});
P._startSubMod({sModuleName:"qmRemark"});
if(L.bReminder)
{
P._startSubMod({sModuleName:"qmReminder"});
}
P._startSubMod({sModuleName:"qmAntiSpam"});
P._startSubMod({sModuleName:"qmMarkAdMail"});
P._startSubMod({sModuleName:"qmSenderInfo"});
P._startSubMod({sModuleName:"qmPlayerParser"});
var K=R.document.body;
if(getUrlParams(getTop().location)["t"]!="newwin_frame"&&K.scrollWidth>K.clientWidth)
{
requestShowTip("tipRemindEdit",19,R);
}
if(N&&N.parentNode.parentNode.id=="folder_pop_td")
{
new QMSender({oWin:R,nCurFolderId:L.folderid,sWidth:210,sCurSaveFrom:L.saveFrom});
}
L.bClearRDCache&&P.clearCache();
P._sendTimeMail();
if(L.flowid)
{
ossLog("realtime","all","flowid="+L.flowid);
}
P._flushFolder();
getTop().QMWebpushTip&&getTop().QMWebpushTip.read(1,P.getMailId());
getTop().goUserInfo.deferget('DEF_TRANSLATE',function(V){
P._startSubMod({sModuleName:H});
P.rmLanguage(M);
});
P.checkDecryptMail();
P.showAD();
P.showQBTipBtn();
P.osslogImgAttach_();
},_initSelectAllEvt:function(){
var L=getTop(),K=this,M=K._moWin;
addEvent(M.document,"keydown",function(N){
if(N.ctrlKey&&N.keyCode=="65")
{
K.doSelectAll(N,K.S(h._sMailContainer));
}
});
},osslogImgAttach_:function(){
var L=this;
var K=CN('readmail_limit_img_size',L.S('attachment'));
E(K,function(M){
var N=new Image();
N.onload=function(){
N.onload=null;
if(N.width>180||N.height>180)
{
LogKV({sValue:'readmail|attachment|imgtobig'});
}
};
N.src=M.src;
});
},_sendTimeMail:function(){
var M=this.S(h._sSendTimeMsg),N=this,O=getTop(),K=[];
if(M)
{
E(["year","month","day","hour","min"],function(P){
K.push(attr(M,P));
});
M.innerHTML=callBack(z,K);
var L=this.S("editsendtime");
getTop().addEvent(L,"click",function(){
initTimeSendDlg({sendtimeyear:O.S("sendtimeyear",O.getMainWin()),sendtimemonth:O.S("sendtimemonth",O.getMainWin()),sendtimeday:O.S("sendtimeday",O.getMainWin()),sendtimehour:O.S("sendtimehour",O.getMainWin()),sendtimemin:O.S("sendtimemin",O.getMainWin()),confirmbtn:"\u786E\u5B9A",title:"\u4FEE\u6539\u65F6\u95F4",timetips:""},function(){
QMAjax.send(T(["/cgi-bin/mail_mgr?mailaction=mdy_sendtime&mailid=$mailid$&ef=js&resp_charset=UTF8","&sendtimeyear=$sendtimeyear$","&sendtimemonth=$sendtimemonth$","&sendtimeday=$sendtimeday$","&sendtimehour=$sendtimehour$","&sendtimemin=$sendtimemin$"]).replace({mailid:N.getMailId(),sendtimeyear:O.S("sendtimeyear",O.getMainWin()).value,sendtimemonth:O.S("sendtimemonth",O.getMainWin()).value,sendtimeday:O.S("sendtimeday",O.getMainWin()).value,sendtimehour:O.S("sendtimehour",O.getMainWin()).value,sendtimemin:O.S("sendtimemin",O.getMainWin()).value}),{method:"POST",onload:function(P,Q){
if(P)
{
var U=evalValue(Q);
if(U.errcode=="0")
{
showInfo("\u5B9A\u65F6\u90AE\u4EF6\u4FEE\u6539\u6210\u529F\uFF0C\u5C06\u5728\u60A8\u6307\u5B9A\u7684\u65F6\u95F4\u53D1\u51FA");
var R=[O.S("sendtimeyear",O.getMainWin()).value,O.S("sendtimemonth",O.getMainWin()).value,O.S("sendtimeday",O.getMainWin()).value,O.S("sendtimehour",O.getMainWin()).value,O.S("sendtimemin",O.getMainWin()).value];
M.innerHTML=callBack(z,R);
}
else{
showError(U.errmsg);
}
}
}});
},function(){
});
});
}
},checkDecryptMail:function(){
var K=this;
_oConfig=K._moConfig;
if(_oConfig.bEncrypt)
{
addEvent(K.S("decryptmail_pw"),"keydown",function(L){
if(L.keyCode=="13")
{
fireMouseEvent(K.S("decryptmail"),"click");
}
});
}
},decryptMail:function(L,M,K){
var N=this,O=N._moWin,P=encodeURIComponent(N.S("decryptmail_pw").value);
if(P)
{
QMAjax.send(T("/cgi-bin/readmail?sid=$sid$&mailid=$mailid$&action=decryptmail&t=success&secmailcode=$code$&ef=js&resp_charset=UTF8").replace({mailid:M,sid:getSid(),code:P}),{method:"GET",onload:function(Q,R){
if(Q)
{
var U=evalValue(R);
if(U.errcode=="0")
{
N._moConfig.bEncrypt=false;
N.afterDecrytMail();
}
else{
showError(U.errmsg);
}
}
}});
}
else{
showError("\u8BF7\u8F93\u5165\u5BC6\u7801");
N.S("decryptmail_pw").focus();
}
},afterDecrytMail:function(){
var L=this,K=L._moConfig;
showInfo("\u90AE\u4EF6\u89E3\u5BC6\u6210\u529F");
if(K.bNeedReceipt&&K.bNewMail)
{
var M=L._moWin.location.href;
L.clearCache();
goUrl(L._moWin,cookQueryString(M,{force_needreceipt:1,r:Math.random()}));
}
else{
w(L.getMailId(),L._moWin);
}
},doSelectAll:function(L,K){
var Q=getTop(),P=this,R=P._moWin,M=R.document;
if(P._moRemark.isFoucs())
{
return;
}
if(R.getSelection)
{
var O=R.getSelection(),N=M.createRange();
O.rangeCount>0&&O.removeAllRanges();
N.selectNode(K);
O.addRange(N);
}
else{
var N=M.body.createTextRange();
N.moveToElementText(K);
N.select();
}
K.scrollIntoView();
Q.preventDefault(L);
},getMailInfo:function(){
return this._moMailInfo;
},updateMailSize:function(K){
var P=this,V=P._moWin,O=P._moMailInfo,Q=getTop(),U=Q.S("submailCnt",V),R=Q.S("submailCntAll",V),N=Q.finds(".mailunread",V).length,L=Q.finds(".mailread",V).length,M=N+L;
if(K!==true)
{
R&&(R.innerHTML=M);
U&&(U.innerHTML=N+"/");
}
return {nTotal:M,nUnReadCnt:N,nReadCnt:L};
},getCBInfo:function(){
var N=this,K=N._moConfig,M=N._moMailInfo,L=N.getFromInfo_(),O=N.S(h._sImgStar),U=N.S(h._sTopBtn),V=K.oSysTag||"",Q=[],P={};
if(V!="")
{
Q=V.split("|");
}
for(var W=0;W<Q.length-1;W++)
{
if(Q[W]!="")
{
var R=Q[W].split(":");
if(R[0]&&R[1]!="")
{
P[R[0]]=R[1];
}
}
}
return {oWin:N._moWin,sFid:K.folderid,bML:false,oMail:[{sMid:N.getMailId(),bSys:K.bSys,bAd:K.bAd,bUnr:false,bSubUnr:false,bStar:hasClass(O,'qm_ico_flagon'),bTop:hasClass(U,'qm_ico_topon'),bTms:false,oSysTag:P||{},oTagIds:K.oMatchTag,sSName:L.name,sSEmail:L.addr,oStar:O,oTopBtn:U,oTCont:N.S(h._sTagContainer)}]};
},notify:function(L,K){
var N=this;
switch(L)
{case "delsubmail":
var M=N.updateMailSize();
if(N.dealCustomUI('delSubMailInGlobal',M)!==false&&M.nTotal<=0)
{
N.goback();
}
QMMailCache.setExpire();
break;
case "toRefer":
var O=N._moSubMails[K];
if(O)
{
O.seek();
}
break;
}
},modifyTag:function(K,L){
var N=this._moConfig.oMatchTag;
if(!N)
{
return;
}
for(var M=N.length-1;M>=0;M--)
{
if(N[M]==K)
{
break;
}
}
if(L)
{
if(K<0)
{
N.length=0;
}
else{
N.splice(M,1);
}
}
else{
if(M<0)
{
N.push(K);
}
}
},toAttach:function(K){
var N=this,O=N.S(h._sAttachment+(N.attr(K,"seq")||"")),M;
function L(R,Q)
{
var P=arguments.callee;
if(!Q||!P.time)
{
P.orgclass=O.className;
P.time=0;
}
O.className=(P.time%2==0)?"toolbg":P.orgclass;
O.style.height=(P.time%2==0)?"auto":"auto";
if(++P.time<R)
{
setTimeout(function(){
P(R,true);
},70);
}
}
if(O)
{
M=N._moWin.document.documentElement;
if(M.scrollHeight<=M.clientHeight)
{
L(6);
}
else{
scrollIntoMidView(O,M,false,0,true);
L(4);
}
}
},prevandnext:function(L,M,K){
var N=this,O=N.attr(L,"mailid");
rdVer.log(O,"hit");
goUrl(N._moWin,["/cgi-bin/readmail?",rdVer.url(O,N._moConfig.folderid,"",N.attr(L,"type")==="collo"||N._moWin.name=='readmail_float'?"3":"",false,"",false,"",false,N._moConfig.folderkey).split('?')[1],N._moWin.name=='readmail_float'?'&floatRead=true&nogoback=true':'',bnewwin?"&newwin=true":""].join(""),true);
K&&preventDefault(K);
},_makeMailListUrl:function(){
var K=this._moConfig;
return j.replace({sid:getSid(),folderid:K.folderid,folderkey:K.folderkey,s:K.subtmpl,more:'&r='+Math.random()});
},goback:function(M,N,L,K){
if(bnewwin)
{
goUrlTopWin("/cgi-bin/frame_html?sid="+getSid());
}
else{
trace("history back","","start","mail_list");
if(1||!QMHistory.tryBackTo("mail_list"))
{
var O=this,P=getTop().QMMLCache.url(QMHistory.getUrl("mail_list")||O._makeMailListUrl(),{},true);
if(K)
{
P=O._makeMailListUrl();
}
O._moWin.location.href=P;
waitFor(function(){
return !!S("list",getMainWin());
},function(Q){
if(Q)
{
bodyScroll(O._moWin,"scrollTop",getTop().gnMailListPos);
}
});
}
}
preventDefault(L);
},tag:function(L,M,K){
var N=this;
QMTag.readclose(K,N.getCBInfo());
},starMail:function(K){
var L=this;
starMail(null,extend(L.getCBInfo(),{oncomplete:function(N,M){
L.clearCache();
var P=L.S(h._sStarStatus),O=L.S(h._sMailtopStatus),Q=L.S(h._sStarTopStatus);
if(M)
{
if(!isShow(Q)&&!isShow(O))
{
show(P,M);
}
else{
show(O,!M);
show(Q,M);
}
}
else{
if(isShow(L.S(h._sStarTopStatus)))
{
show(Q,M);
show(O,!M);
}
else{
show(P,M);
}
}
return true;
}}));
},topMail:function(K){
var L=this;
topMail(null,extend(L.getCBInfo(),{oncomplete:function(N,M){
L.clearCache();
var P=L.S(h._sStarStatus),O=L.S(h._sMailtopStatus),Q=L.S(h._sStarTopStatus);
if(M)
{
if(!isShow(Q)&&!isShow(P))
{
show(O,M);
}
else{
show(P,!M);
show(Q,M);
}
}
else{
if(isShow(Q))
{
show(Q,M);
show(P,!M);
}
else{
show(O,M);
}
}
return true;
}}));
},getQMPreviewer:function(K){
var L=this,M=getTop();
if(M.QMPreviewer)
{
K&&K(M.QMPreviewer);
}
else{
loadCssFile("$css_path$../js/com/kits/qmpreviewer/css/previewer1e7c9d.css",true,M.document);
loadJsFile("$js_path$com/kits/qmpreviewer1e7c9d.js",true,M.document,function(){
K&&K(M.QMPreviewer);
});
}
},showScanImg:function(L,M,K){
var P=this,N=parents("div.attachitem",L)[0],O=finds("a[ck='previewAttach2']",N)[0];
showTwoDCodeImgMenu(P._moWin,L,attr(O,"filename"),attr(O,"down"));
preventDefault(K);
},previewAttach3:function(L,M,K){
var N=this,O=S(["AttachIconA",M,(N.attr(L,"idx")||0)].join(""),N._moWin);
fireMouseEvent(O,"click");
},previewAttach2:function(L,M,K){
var Q=this,P=function(R){
var U=R&&R.getAttribute('timeout');
if(U&&U=="1")
{
return true;
}
return false;
},N=function(){
var U,R=0,V=[];
while(U=O(R))
{
V.push(U);
R++;
}
return V;
},O=function(U,R){
var W={},X=S(["AttachIconA",M,U].join(""),Q._moWin),V=+U;
for(V+=R;X&&P(X);V+=R)
{
X=S(["AttachIconA",M,V].join(""),Q._moWin);
}
V-=R;
if(!X)
{
return;
}
var Z=X.getAttribute('down'),Y=S(["AttachIconA",M,(V-1)].join(""),Q._moWin);
if(Y&&Y.getAttribute('down')===Z)
{
return;
}
E({bBigAttach:"bigattach",sName:"filename",sUriFileName:"urifilename",sDown:"down",sDownPage:"downpage",sUrl:"url",sType:"viewmode",sBytesize:"filebyte",sThumb:"iconurl",sFileIdx:"idx",sAttid:"attid",sFid:"fid",sExptime:"exptime",bIsTimeout:"timeout"},function(aa,ab){
W[ab]=Q.attr(X,aa);
});
W.sUrl=QMDistributeDomain.getHost()+W.sUrl;
W.sDown=QMDistributeDomain.getHost()+W.sDown;
W.sThumb=W.sThumb&&(''+W.sThumb).indexOf('xdisk')==-1?QMDistributeDomain.getHost()+W.sThumb:null;
W.sFrom=W.bBigAttach?"bigattach":"attach";
W.sSuffix=W.sName?(W.sName.split(".").pop()||""):"";
if(!W.sAttid)
{
W.sAttid=W.sDown.split("att=").pop();
}
if(W.sDown)
{
W.sTwoDCodeUrl=twoDCodeImgUrl(W.sDown);
}
return W;
};
if(P(L))
{
return;
}
Q.getQMPreviewer(function(R){
var U={fNext:function(V){
var W=parseInt(V.sFileIdx)+1;
return O(W,1);
},fPrev:function(V){
var W=parseInt(V.sFileIdx)-1;
return O(W,-1);
},fFrwd:function(V){
var W=function(Y,X){
var Z=new RegExp([X,"=([^&]*)"].join(""));
_oResult=Z.exec(Y);
return _oResult?_oResult[1]:"";
};
if(V.bBigAttach)
{
goNewWin(d.replace({sid:getSid(),attachid:encodeURIComponent(V.sAttid),urifilename:V.sUriFileName,filesize:V.sBytesize,exptime:V.sExptime,k:W(V.sUrl,"k"),code:W(V.sUrl,"code"),fid:W(V.sUrl,"fid")}));
}
else{
goNewWin(c.replace({sid:getSid(),mailid:M,attachid:encodeURIComponent(V.sAttid),attachname:V.sAttid,fileextenal:V.sSuffix,filebyte:V.sBytesize}));
}
}};
R.show(O(Q.attr(L,"idx")),U);
});
},previewAttach:function(L,M,K){
var N=this,O=T(m).replace({sid:getSid(),mailid:M}),P=T("$url$&nocheckframe=true&t=attachpreviewer&select=$select$&selectfile=$selectfile$&seq=$seq$").replace({url:O,select:N.attr(L,"select"),seq:N.attr(L,"seq")||"",selectfile:N.attr(L,"selectfile")||""});
if(getTop().QMDistributeDomain.isRelativeUrl(P))
{
P=getTop().getTopHost()+P;
}
window.open(P,"_blank");
preventDefault(K);
},playAttach:function(K){
var M=this,P=GelTags("span",K.parentNode.parentNode),O=P.length==0?{}:P[0],L=M.S(h._sMp3PlayerContainer);
if(O.getAttribute("player"))
{
show(L,true);
if(L.getAttribute("uin_play_id"))
{
getTop().QMPlayer.delSkinById(L.getAttribute("uin_play_id"));
}
var N="uni_id"+(+new Date());
L.setAttribute("uin_play_id",N);
audioPlay({id:N,container:L,url:O.getAttribute("player"),title:O.innerHTML,autoplay:true,global:true});
return true;
}
return false;
},attachBatchSetFlag:function(L,M,K){
var P=attr(L,"action"),Q,O=[];
if("set"===P)
{
var N=finds(".attachitem a.needSetFlag[flag='0']",getMainWin());
E(N,function(R){
Q=attr(R,"attachKey");
O.push(Q);
});
if(O.length===0)
{
showError("\u9644\u4EF6\u5DF2\u6536\u85CF");
return;
}
attachSetFlag(O.join(","),true,function(){
E(N,function(R){
attr(R,"flag","1");
show(R,false);
show(R.nextSibling,true);
});
},{sLoc:"attachfolder,col_all",sOsstype:"attach_allCollect_atRead"});
getTop().LogKV({sValue:'kv_click|collect_all_attachs'});
}
},checkdownload:function(L,M,K){
new QMDialog({sId:"checkdownload",sTitle:"\u4E0B\u8F7D\u63D0\u901F",sUrl:T("/cgi-bin/readtemplate?sid=$sid$&t=readmail_checkdownload").replace({sid:getSid()}),nWidth:461,nHeight:175});
preventDefault(K);
return true;
},checkBcc:function(L,M,K){
var N=this;
if(N._moConfig.bBccToMe)
{
attr(N.S(h._sQSource),"checkBcc",1);
new QMDialog({sId:"reply_dlg",sTitle:"\u56DE\u590D\u63D0\u793A:",sBodyHtml:u._REPLY_DLG.toString(),sFootHtml:u._REPLY_DLG_FOOT.toString(),onshow:function(){
this.S("replyall").focus();
},onload:function(){
var O=this;
addEvent(O.S("replyall"),"click",function(){
N._moConfig.bBccToMe=false;
attr(N.S(h._sQSource),"checkBcc",0);
if(L.tagName=="TEXTAREA")
{
N._moQReply.focus();
}
else{
N.optMail({opt:"reply_all"},M);
}
O.close();
});
addEvent(O.S("reply"),"click",function(P){
attr(N.S(h._sQSource),"checkBcc",0);
N.optMail({opt:"reply"},M);
O.close();
});
addEvent(O.S("cancel"),"click",function(){
O.close();
});
}});
preventDefault(K);
return true;
}
},setAutoDel:function(K,L){
var N=this,O=N._moWin,M=N._moConfig;
if(M.xqqstyle=="6")
{
x({oWin:O,sAction:"/cgi-bin/mail_mgr"},{mailid:L,mailaction:"autodel",reporttype:_attr(K,"flag"),s:"autodel"}).submit();
}
},mailRecall:function(K,L){
var N=attr(K,"loccnt"),P=attr(K,"mid"),O=attr(K,"mdata"),R=attr(K,"odd"),M=0;
if(N>0&&R!="0")
{
M=1;
new QMDialog({sId:"mailrecall",sTitle:"\u64A4\u56DE\u90AE\u4EF6",sUrl:T("/cgi-bin/readtemplate?sid=$sid$&t=mailrecall_confirm&mailid=$mailid$&localcount=$loccnt$&messageid=$mid$&date=$mdate$&odd=$odd$").replace({sid:getSid(),mailid:L,loccnt:N,mid:P,mdate:O,odd:R}),nWidth:461,nHeight:263});
}
else{
var Q,U;
if(R=="0")
{
M=2;
U='\u6B64\u90AE\u4EF6\u4E0D\u652F\u6301\u88AB\u64A4\u56DE';
Q='\u6B64\u90AE\u4EF6\u8DDD\u53D1\u9001\u65F6\u5DF2\u8D85\u8FC715\u5929\uFF0C\u65E0\u6CD5\u64A4\u56DE\u3002';
}
else{
M=3;
U='\u6B64\u90AE\u4EF6\u53D1\u5F80\u975EQQ\u90AE\u7BB1\uFF0C\u4E0D\u652F\u6301\u64A4\u56DE\u3002';
Q='\u4EC5\u652F\u6301\u64A4\u56DE\u53D1\u5F80QQ\u90AE\u7BB1\uFF0C\u4E14\u5BF9\u65B9\u672A\u8BFB\u7684\u90AE\u4EF6\u3002';
}
msgBox(T(['<b class="b_size">$t$</b>','<div style="overflow:hidden;margin-top:5px;">','$m$','</div>']).replace({t:U,m:Q}),"dialog");
}
getTop().QMMLCache.upVer();
},xfDl:function(){
var M=attr(arguments[0],"oXfLinkArray").split("&&&");
M=M.slice(0,M.length-1);
if(M.length<1)
{
return;
}
var K=function(O,N){
switch(O)
{case "check":
showProcess(1,true,"\u6B63\u5728\u68C0\u6D4B\u65CB\u98CE...");
break;
case "get_url":
showProcess(1,true,"\u6B63\u5728\u83B7\u53D6\u4E0B\u8F7D\u94FE\u63A5...");
break;
case "load_err":
showProcess(0);
showError("\u65CB\u98CE\u52A0\u8F7D\u5931\u8D25,\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01");
break;
case "geturl_err":
showProcess(0);
showError(N+"\u4E2A\u6587\u4EF6\u94FE\u63A5\u83B7\u53D6\u5931\u8D25");
break;
case "check_err":
showProcess(0);
if(confirm("\u60A8\u8FD8\u6CA1\u5B89\u88C5QQ\u65CB\u98CE\uFF0C\u73B0\u5728\u53BB\u4E0B\u8F7D\u5B89\u88C5\u4E48\uFF1F\u5B89\u88C5\u5B8C\u540E\u8BF7\u5237\u65B0\u672C\u9875\u9762\u3002"))
{
window.open("http://xf.qq.com/xf2/index.html");
}
break;
}
};
var L=new (getTop().clsXfBatchDownload)(M,K);
},markReadStatus:function(L){
var U=this,O=U._moWin,Y="menu_mark_read_status",X="",W="",Q,K=T(['<div style="padding: 8px 2px 8px 0;">','<div style="height:14px;line-height:14px;">\u81EA\u52A8\u6807\u8BB0\u4E3A\u5DF2\u8BFB:</div>','<div id="switch_on" style="display:$displayon$;">','<div style="padding: 12px 12px;"><a class="btn_blue" href="javascript:;">\u5F00\u542F</a></div>','</div>','<div id="switch_off" style="display:$displayoff$;">','<div style="padding: 12px 12px;" class="green">\u5DF2\u5F00\u542F<a class="btn_gray" href="javascript:;" style="margin-left:10px;">\u5173\u95ED</a></div>','</div>','<div style="border-top:1px solid #ccc;padding-top:10px;white-space:normal;line-height:1.5;">\u5F00\u542F\u540E\uFF0C\u8BE5\u53D1\u4EF6\u4EBA\u7684\u65B0\u90AE\u4EF6\u5C06\u4F1A\u81EA\u52A8\u6807\u8BB0\u4E3A\u5DF2\u8BFB\uFF0C\u8BA9\u60A8\u4E0D\u53D7\u672A\u8BFB\u6570\u7684\u5E72\u6270\u3002</div>','</div>']),R=calcPos(arguments[0]),N,P=finds(".autoMarkMail span",O)[0],V=attr(L,"addr"),M=S("subject",O).clientWidth;
hasClass(P,"ico_autoMark_off")?(W="none"):(X="none");
N={nArrowPos:R[1]-M+220,bAutoClose:false,oEmbedWin:O,sId:Y,nX:R[1]-19,nY:R[0]+19,nWidth:239,oItems:[{nHeight:"auto",bDisSelect:true,sItemValue:K.replace({displayon:X,displayoff:W})}],onshow:function(){
var ad=finds('#'+Y+'_QMMenu_switch_on div a',O)[0],ab=finds('#'+Y+'_QMMenu_switch_off div a',O)[0],ae=S(Y+"_QMMenu_switch_on",O),ac=S(Y+"_QMMenu_switch_off",O),aa=this;
function Z(af)
{
var ag=T(['/cgi-bin/config_blackwhitelist?','sid=$sid$&Fun=addad','&addr=$addr$:$status$','&from=self']).replace({sid:getSid(),addr:V,status:(af?'0':'1')});
return function(){
aa.close();
QMAjax.send(ag,{onload:function(ah,ai){
if(ah)
{
U.clearCache();
showInfo("\u8BBE\u7F6E\u4FDD\u5B58\u6210\u529F",3000);
rmClass(P,af?"ico_autoMark_on":"ico_autoMark_off");
addClass(P,af?"ico_autoMark_off":"ico_autoMark_on");
}
else{
showError(af?"\u5173\u95ED\u5931\u8D25":"\u6253\u5F00\u5931\u8D25");
}
}});
};
}
ad.onclick=Z(false);
ab.onclick=Z(true);
}};
Q=new QMMenu(N);
},optMail2:function(L,M,K){
var O=this,P=O._moWin,V="_blank",R=O.attr(L,"opt"),U=T(m).replace({sid:getSid(),mailid:M});
switch(R)
{case "remind":
U=T("/cgi-bin/readtemplate?t=calendar&sid=$sid$&from=readmail&cmd=moncal,,new,$subject$,mail,$mailid$").replace({sid:getSid(),mailid:M,subject:encodeURIComponent(O._moMailInfo.subject||"(\u65E0\u4E3B\u9898)")});
V="mainFrame";
rdVer(M,1);
break;
case "print":
U+=T("&t=readmail_print&s=$s$&filterflag=true").replace({s:O.attr(L,"s")||"print"});
break;
case "mime":
U+="&action=readmailmime";
break;
case "dleml":
U+="&action=downloademl";
V="actionFrame";
break;
case "code":
U+="&action=readmailcode";
break;
case "fwgroup":
U+="&t=compose_group&s=forward";
V="mainFrame";
break;
case "note":
U+="&notefmt=1&t=note_edit_show";
V="mainFrame";
break;
case "fweml":
U+="&t=compose&s=forward&action=readmaileml";
V="mainFrame";
break;
case "addc":
showProcess(1,true,"\u8054\u7CFB\u4EBA\u6DFB\u52A0\u4E2D...",null,false);
var N=L.parentNode.parentNode.parentNode.getElementsByTagName('span');
var Q='',W='';
for(var X=0,Y=N.length;X<Y;X++)
{
if(O.attr(N[X],"mailhtml")=="operhidepanel")
{
Q=O.attr(N[X],"e");
W=O.attr(N[X],"n");
break;
}
}
if(Q==''&&W=='')
{
showError('\u8054\u7CFB\u4EBA\u65B0\u5EFA\u5931\u8D25');
return;
}
QMAjax.send(T('/cgi-bin/addr_addedit?sid=$sid$&category=&isqqgroup=&addr_errorflag=&OperType=ADD&Type=&GROUPLIST=&s=addfrommail&UseFreq=&USERNAME=$username$&USEREMAILNAME=$email$&USEREMAILNAME=&MOBILEPHONE=&PHS=&NICKNAME=&BRITHDAY=&MAILBOX_BACK=&STREET=&COMPANY=&NOTES=&list_index=&ef=js&inputcharset=utf8').replace({sid:getSid(),username:encodeURIComponent(W),email:encodeURIComponent(Q)}),{method:"POST",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(Z,aa){
var ac=trim(aa);
if(Z&&(ac.indexOf("(")==0||ac.indexOf("{")==0))
{
var ab=evalValue('('+ac+')');
if(ab)
{
showProcess(0);
if(ab.errmsg)
{
showError(ab.errmsg);
}
else{
showInfo(ab.msg);
L.style.display='none';
L.nextSibling.style.display='';
L.nextSibling.setAttribute('addrid',ab.addrid);
getTop().QMProfileTips.clearInfoCard(getTop().getMainWin());
rdVer(M,1);
}
}
}
else{
showError('\u8054\u7CFB\u4EBA\u65B0\u5EFA\u5931\u8D25');
}
}});
return;
break;
case "editc":
U=U.replace('readmail','addr_detail');
U+="&AddrID="+O.attr(L,"addrid")+"&t=addr_detail_edit&s=edit&s=edit&&grpid=&category=all&rmqqgroup=1";
V="mainFrame";
break;
default:
break;
}P.open(U,V);
preventDefault(K);
O.dealCustomUI('closePage');
},newWinRead:function(L,M,K){
getTop().QMMLCache.upVer();
goNewWin(this._moWin.location,false);
preventDefault(K);
},createRule:function(L,M,K){
showSimpleRuleFilter(this.attr(L,"fromaddr"));
preventDefault(K);
},checkContactsEmails:function(L,M,K){
this.dealCustomUI('checkContactsEmails',arguments);
},delMail:function(K){
var M=this,N=M._moWin,L=false;
getTop().QMMLCache.upVer();
L=rmMail(M.attr(K,"opt")||0,extend(M.getCBInfo(),{oncomplete:function(O,P){
M.dealCustomUI('MailMethod',[O,'delMail',P]);
var U=P.url||"";
if(U.indexOf("/cgi-bin/readmail?")!=-1)
{
var Q=getUrlParams(U||M._moWin.location)["t"];
var R=(Q=="readmail_ad"||Q=="readmail_ad_conversation")?"collo":"";
M.prevandnext({mailid:getUrlParams(U||N.location)["mailid"],type:R});
return true;
}
}}));
L&&QMHistory.recordActionFrameChange();
},markAsFinished:function(K){
var L=this,M=getTop(),N=L._moWin;
M.markAsFinished("readmail",function(O){
M.removeSelf(M.S("pending_flag",N));
L.clearCache();
});
},optMail:function(L,M,K){
var P=this,Q=P._moWin,N=P._moConfig,V=P.attr(L,"opt"),W=P.getEditorContent(),U=N.folderid,R=n.replace({sid:getSid(),t:P.attr(L,"t"),s:V,mailid:M,disptype:N.disptype=="text"?"":"html"});
switch(V)
{case "reply_all":
case "reply":
case "forward":
case "send_all_again":
case "draft":
var O=[P.attr(L,"more")||""];
if(V=="draft")
{
O.push("&backurl="+encodeURIComponent(Q.location.href));
}
if(V=="send_all_again")
{
O.push("&kvclick=readmail|compose|send_all_again|1");
}
if(bnewwin)
{
O.push('&newwin=true&fwreplynewwin=true');
}
if(K&&K.shiftKey)
{
window.open(R+O.join(""));
}
else if(W)
{
P.disableConfirm();
x({oWin:Q,sTarget:"mainFrame",sMethod:"POST",sAction:R},{pluscontent:htmlEncode(W)}).submit();
}
else{
var X=R+O.join("");
if(P.dealCustomUI('optMail',{sAction:'closePage',sType:V,sUrl:X})!==false)
{
goUrl(Q,X,true);
}
}
preventDefault(K);
break;
}
},zoomup:function(L,K){
var M=this;
M._moMailZoomTool&&M._moMailZoomTool.zoomup(L,K);
},zoomdown:function(L,K){
var M=this;
M._moMailZoomTool&&M._moMailZoomTool.zoomdown(L,K);
},reset:function(L,K){
var M=this;
M._moMailZoomTool&&M._moMailZoomTool.reset(L,K);
},rmLanguage:function(K){
var O=K&&(K.innerText||K.textContent||"");
if(!O)
{
return;
}
var L=O.match(/[\u2100-\uFFFF]/g)||[],M=O.match(/[a-zA-Z]/g)||[],N=O.match(/[a-zA-Z]+[\u2100-\uFFFF\s]/g,"")||[];
if(getTop().goUserInfo.get("DEF_TRANSLATE")!="1"&&N.length/(L.length+N.length)>0.5)
{
getTop().requestShowTip("tip74container","77",this._moWin);
}
},setStatus:function(K){
var L=this;
L._mnStatus=K;
},addCalEvent:function(L,K,M){
var Q=this,R=getTop(),U=Q._moWin,P=R.S("showcalpanel",U),V=L.innerHTML,O=/((?!0000)[0-9]{4}\u5E74)?((0?[1-9]|1[0-2])\u6708(0?[1-9]|1[0-9]|2[0-8])\u65E5|(0?[13-9]|1[0-2])\u6708(29|30)\u65E5|(0?[13578]|1[02])\u670831\u65E5)/g,X=T(['<span id="showcalpanel" class="showcalpanel" onmouseover="getTop().attr(this.parentNode, \'isout\', 0);QMReadMail.setStatus(1)" onmouseout="QMReadMail.setStatus(0);QMReadMail.hideCalEvent()">','<a onclick="QMReadMail.goCal(\'$date$\', \'$mailId$\')" class="add2calendar"><span class="ico_add2cal"></span>\u6DFB\u52A0\u5230\u65E5\u5386</a>','</span>']),W=R.attr(L,"times")||"";
W&&(V+=(" "+R.trim(W)));
if(V.match(O))
{
V=V.replace(/\u5E74/,"-").replace(/\u6708/,"-").replace(/\u65E5/,"");
}
V=V.replace(/\//g,"-");
if(V.indexOf("-")<4)
{
var N=new Date();
V=N.getFullYear()+"-"+V;
}
P&&R.removeSelf(P);
if(/^[\d\-\:\s]+$/.test(V)&&!isNaN((new Date(V.replace(/-/g,'/')).getTime())))
{
L.style.cssText="border-bottom:1px dashed #ccc;position:relative;_display:inline-block;";
R.insertHTML(L,"beforeEnd",X.replace({date:V,images_path:R.getPath("images"),mailId:M}));
}
},hideCalEvent:function(L,K){
var N=this,O=getTop(),P=N._moWin,M=O.S("showcalpanel",P);
setTimeout(function(){
if(M&&O.isShow(M)&&N._mnStatus!=1)
{
O.removeSelf(M);
L.style.cssText="border-bottom:1px dashed #ccc;";
}
},100);
},goCal:function(K,L,M){
var N=this,R=L||N.getMailId(),Q='mail',O=getTop(),U=M||(N._moMailInfo.subject||O.tmpSubject);
if(N._msModuleName=='qmGroupMail')
{
Q='group';
}
else if(N._msModuleName=='qmNote')
{
Q='note';
}
var P=T("/cgi-bin/readtemplate?t=calendar&sid=$sid$&from=readmail&cmd=moncal,$date$,new,$subject$,$from$,$mailId$,&loc=readmail,calendar,,,0,1").replace({sid:O.getSid(),date:K,subject:encodeURIComponent(U||"(\u65E0\u4E3B\u9898)"),mailId:R,from:Q});
goUrl(N._moWin,P,true);
},showAD:function(){
debug("showAD");
var K=this._moMailInfo;
getTop().initGDTAD(this._moWin,{mailinfo:K});
},showQBTip:function(K){
I.call(this,K);
},hideQBTip:function(L,M,K){
A.call(this,K);
},showQBTipBtn:function(){
if(!gbIsQBWebKit&&!gbIsQBIE)
{
var K=this.S("QBPushTip");
K&&show(K,true);
}
}};
});
D.qmReminder=inherit("qmReminder",D._qmBaseDM,function(J){
return ({_ready:function(){
var K=this,L=K._moWin,M=K.getMailId();
QMAjax.send(T("/cgi-bin/read_reminder?t=read_reminder.json&linkid=mailid:$mailid$&sid=$sid$&rettype=calendar").replace({sid:getSid(),mailid:M}),{method:"GET",onload:function(N,O){
if(N)
{
var Q=evalValue(O);
if(Q&&Q.id)
{
var P=S("reminderContainer_mailid:"+M,L);
P.innerHTML=TE("<span class='qm_ico_calendar'></span><span class='addrtitle'>\u4E8B\u4EF6\u65F6\u95F4\uFF1A$starttime$</span>&nbsp;<a href='/cgi-bin/readtemplate?sid=$sid$&t=calendar&cmd=moncal,$starttime$,view,$id$'>\u67E5\u770B\u65E5\u5386</a>").replace({starttime:Q.starttime,allday:Q.allday,sid:getSid(),id:Q.id});
show(P,true);
show(S("addtoremind",L),false);
}
}
}});
}});
});
D.qmQReply=inherit("qmQReply",D._qmBaseDM,function(J){
return {_initMemVar:function(K,L,M){
var N=this;
N._moConfig=K;
N._moReplyMail=L;
N._moSendConfig=M;
N._moSource=N.S(h._sQSource);
N._mbStopFold;
},getSource:function(){
var K=this._moSource;
return (K.className.indexOf('graytext')!=-1)?"":textToHtml(htmlEncode(K.value));
},getContent:function(){
return this._moEditor&&this._moEditor.getContent();
},_combineContent:function(K){
var P=this,L=P._moConfig,O=P.S(L.sMailContent),N=P._moReplyMail,Q=[K||textToHtml(htmlEncode(P.S(h._sQSource).value))];
try{
var R=getTop().goUserInfo.get('getRealUserSignature');
if(R)
{
R=R(L.folderid,L.saveFrom);
if(R)
{
Q.push("<div>&nbsp;</div>"+R);
}
}
}
catch(M)
{
}
if(!L.noIncludeArtcle)
{
N.orgcontent=O?filteSignatureTag(G(O.innerHTML)):"";
var U=u._REFERPART.replace(extend({},N,L.titlePrefix=="1"?i._EN_US:i._ZH_CN,{'name':N.from.name,'addr':N.from.addr}));
if(N.orgcontent)
{
Q.push(U);
return {content:Q.join("")};
}
else{
return {citeprev:"yes",rmref:U,content:Q.join("")};
}
}
else{
return {content:Q.join("")};
}
},_getValidHtmlContent:function(K){
return K&&trim(K.replace(/<[^(img)]([^>]+)?>/gi,"").replace(/&nbsp;/g,""));
},saveDraft:function(){
var O=this,R=O._moWin,K=O._moConfig,M=O._moEditor,P=O._moSendConfig,U=M.getContent(false),Q=O.S(h._sQSource);
if(!M||U==O._msDraftContent||!O._getValidHtmlContent(U)||isShow(h._sAfterSendingDiv,R))
{
return;
}
else{
var N=O._moReplyMail,L=extend({actiontype:"save",ReAndFw:"reply",contenttype:"html",from_s:"comm_quick",t:"compose.json",ReAndFwMailid:O.getMailId(),to:a.replace({addrs:N.replyTo}),cc:a.replace({addrs:N.replyCc}),subject:(O._moConfig.titlePrefix=="1"?"Re:":"\u56DE\u590D\uFF1A")+N.reSubject,savesendbox:1,sendname:"",sendmailname:O._moConfig.sendmailname},O._combineContent(U));
if(O._msDraftMailId)
{
L.fmailid=O._msDraftMailId;
}
waitFor(function(){
return !!(getTop().ComposeLib);
},function(V){
if(!V)
{
debug("\u52A0\u8F7DComposeLib\u5931\u8D25");
return;
}
ComposeLib.send(L,{onready:function(){
O._disableSendBtn(true);
showProcess(1,true,"\u90AE\u4EF6\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1","",false);
},oncomplete:function(W,X){
var Z=O._moSource,Y=evalValue(X),aa=formatDate(new Date(),"%hh%:%mm%","%");
if(W)
{
O._msDraftMailId=Y.mailid;
O._msDraftContent=U;
showInfo(aa+" \u90AE\u4EF6\u6210\u529F\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1");
reloadLeftWin();
}
else{
showError(aa+" \u4FDD\u5B58\u8349\u7A3F\u5931\u8D25");
}
O._disableSendBtn(false);
}});
});
}
},removeSelf:function(){
var L=this,K=L.S('quickreply');
removeSelf(K);
},send:function(L,M,K){
var R=this,W=R._moWin,N=R._moConfig,P=R._moEditor,U=R._moSendConfig,V=R._moSource;
if(L.disabled)
{
return;
}
R.stopFold(true);
if(!P||!R._getValidHtmlContent(P.getContent(false)))
{
showError('\u8BF7\u5148\u8F93\u5165\u56DE\u590D\u5185\u5BB9');
V.focus();
}
else{
var Q=R._moReplyMail,O=extend({ReAndFw:"reply",contenttype:"html",from_s:"comm_quick",t:"compose.json",s:U.s||"",ReAndFwMailid:M,to:a.replace({addrs:Q.replyTo}),cc:a.replace({addrs:Q.replyCc}),subject:(R._moConfig.titlePrefix=="1"?"Re:":"\u56DE\u590D\uFF1A")+Q.reSubject,savesendbox:1,sendname:"",sendmailname:R._moConfig.sendmailname},R._combineContent(P.getContent(false)));
if(R._msDraftMailId)
{
O.fmailid=R._msDraftMailId;
}
waitFor(function(){
return !!(getTop().ComposeLib);
},function(X){
if(!X)
{
debug("\u52A0\u8F7DComposeLib\u5931\u8D25");
return;
}
var Z,Y=("1"==getTop().gbBackGroundSend);
if(Y)
{
Z=getTop().BackGroundSend;
}
var aa={onready:function(){
if(Y)
{
var ab=R._moSource;
ab.value="";
ab.blur();
R.stopFold(false);
ab.view("sending");
}
else{
R._disableSendBtn(true);
show(R.S(h._sAfterSendingDiv),true);
}
},oncomplete:function(ab,ac){
if(Y)
{
if(ab)
{
var ad=R._moSource;
_oData=evalValue(ac);
if(_oData&&_oData.compose=="ok")
{
ad.view("init");
}
else if(U.fQReplyComplete)
{
callBack.call(R,U.fQReplyComplete,[ac]);
}
}
}
else{
var ad=R._moSource;
if(ab)
{
getTop().QMMLCache.upVer();
ad.value="";
ad.blur();
ad.view("init");
showInfo("\u60A8\u7684\u90AE\u4EF6\u5DF2\u6210\u529F\u53D1\u9001");
show(R.S(h._sAfterSendDiv),true);
show(R.S(h._sQuickReplyPart),false);
callBack.call(R,U.fQReplyComplete,[ac]);
}
else{
ad.focus();
show(R.S(h._sQuickReplyPart),true,W);
}
R._disableSendBtn(false);
setTimeout(function(){
R._moEditor.resetFixHeight();
},500);
}
R._msDraftMailId="";
show(R.S(h._sAfterSendingDiv),false);
}};
if(Y)
{
Z.quickReply(O,"comm",aa);
}
else{
ComposeLib.send(O,aa);
}
},100);
}
preventDefault(K);
},readyToWrite:function(K,L){
var M=this;
show(M.S(h._sQuickReplyPart),true);
show(M.S(h._sAfterSendDiv),false);
M.S(h._sQSource).focus();
},checkBcc:function(){
callBack(this._moSendConfig.fCheckBcc,arguments);
},disableConfirm:function(){
setClass(this._moSource,'graytext qm_txt');
},jump:function(L,M,K){
if(L.disabled)
{
return;
}
var O=this,N=O._moEditor,R=N?N.getContent(false):O.getSource(),P=O._moWin,Q=n.replace({sid:getSid(),mailid:M,s:"reply_all",disptype:"html"});
O.disableConfirm();
x({oWin:P,sTarget:"_self",sAction:Q+(getTop().bnewwin?"&newwin=true":"")},{pluscontent:getTop().htmlEncode(R)}).submit();
preventDefault(K);
},_disableSendBtn:function(K){
var L=this;
L.S(h._sJumpToNewWin).disabled=L.S(h._sQSendBtn).disabled=K;
return this;
},_setEvent:function(){
var P=this,U=P._moWin,R=P._moSource,Q=P.S(h._sQSendBtn),N=P.S(h._sQReplyTxtContainer),O=P.S('rteContainer'),M=P.S(h._sQReplyBtnContainer);
function W(X)
{
switch(X)
{case "init":
P._moEditor&&P._moEditor.setContent("");
case "sending":
setClass(R,'graytext qm_txt').value=R.getAttribute('graytxt');
R.style.height="20px";
show(O,false);
show(N,true);
show(M,false);
break;
case "show":
show(O,true);
show(N,false);
show(M,true);
P._moEditor&&P._moEditor.focus&&P._moEditor.focus();
break;
default:
}show(P.S(h._sAfterSendDiv),X=="init");
show(P.S(h._sAfterSendingDiv),X=="sending");
}
;function L(X)
{
var Z=0,Y=0;
while(X&&X.tagName!="BODY")
{
if(X.style.position!="absolute")
{
Z+=X.offsetTop;
Y+=X.offsetLeft;
}
X=X.offsetParent;
}
return ({left:Y,top:Z});
}
;function K()
{
if(R.className.indexOf('graytext')!=-1&&attr(R,"checkBcc")!=1)
{
R.setAttribute('graytxt',R.value);
setClass(R,'qm_txt b_size').value='';
if(!P._moEditor)
{
P.S("tooBarContain").innerHTML=getTop().outputToolBarControlBtn&&getTop().outputToolBarControlBtn()||"";
show(S("editor_toolbar_btn_container",U),true);
}
qmAnimation.expand(R,{to:54,oncomplete:function(){
var X=this;
show(M,true);
R.style.overflow="auto";
if(!P._moEditor)
{
var ab=P._moSendConfig.sourceContent;
if(!ab||trim(ab)=='')
{
ab=QMEditor.getBreakLine(1,{family:goUserInfo.get("DEF_FONT_FAMILY"),size:goUserInfo.get("DEF_FONT_SIZE"),color:goUserInfo.get("DEF_FONT_COLOR")});
}
var aa=(P._moContext.sAux==undefined?'':P._moContext.sAux);
QMEditor.createEditor({editorId:"newReadMailQuickSend",editorAreaId:'QMEditorArea'+aa,tbExternId:'QMEditorToolBarPlusArea'+aa,editorAreaWin:U,isNoEditScroll:true,height:"103px",funclist:QMEditor.CONST.FUNCLIST.READMAIL,photoCGI:getPhotoCGI(),onshowinstallactive:getTop().showInstallActiveXDialog&&getTop().showInstallActiveXDialog,onkeydown:function(ac){
if(C(ac))
{
fireMouseEvent(Q,"click");
}
},onload:function(){
P._moEditor=this;
X.view("show");
V(false);
setTimeout(function(){
var ac=P.S("QuickReplyPart");
bodyScroll(U,"scrollTop",L(ac).top-document.body.clientHeight+250);
});
}}).initialize(ab,false,P.S("QMEditorArea").getAttribute("tIndex"));
}
else{
X.view("show");
var Y=GelTags("embed",P.S("QMEditorToolBarPlusArea"))[0],Z=Y.parentNode;
Z.parentNode.removeChild(Z);
P._moEditor.getTbExternInfo("Photo").funcObj.init_();
}
}});
if(!getTop().ComposeLib)
{
loadJsFileToTop(["$js_path$libcompose20f747.js"]);
if("1"==getTop().gbBackGroundSend)
{
loadJsFileToTop(["$js_path$backsend22db09.js"]);
}
}
if(!P._mnAutoSaveTimer)
{
P._mnAutoSaveTimer=U.setInterval(function(){
P.saveDraft();
},300000);
}
}
}
;function V(X)
{
X=X==null?true:X;
P._moEditor.showToolBar(X);
var aa=getTop().S("editor_toolbar_btn_container",U);
if(!aa)
{
return false;
}
var Z=getTop().GelTags("span",aa);
getTop().show(Z[0],X);
getTop().show(Z[1],!X);
var Y=arguments.callee;
aa.onclick=function(){
Y(!X);
return false;
};
}
;R.view=W;
addEvents(setClass(R,'graytext qm_txt'),{keydown:function(X){
if(C(X))
{
fireMouseEvent(Q,"click");
}
},focus:K});
if(P._moSendConfig.sourceContent&&trim(P._moSendConfig.sourceContent)!='')
{
K();
}
P.evt(["ck","md"],h._sQReply);
addEvent(U,"beforeunload",function(Y){
removeEvent(U,"beforeunload",arguments.callee);
var Z;
try{
Z=P._beforeCancelSend(Y);
}
catch(X)
{
}
if(Z)
{
return Z;
}
});
},focus:function(){
var K=this;
if(K._moEditor)
{
K._moEditor&&K._moEditor.focus&&K._moEditor.focus();
}
else K._moSource.focus();
},stopFold:function(K){
this._mbStopFold=(K==undefined?true:K);
},_cancelSend:function(){
},_beforeCancelSend:function(K){
var M=this,N=M._moSource,L=M._moEditor;
if(N.className.indexOf('graytext')==-1&&(L&&M._getValidHtmlContent(L.getContent(false))||N.value))
{
var O='\u60A8\u586B\u5199\u7684\u5185\u5BB9\u6CA1\u6709\u53D1\u9001\uFF0C\u786E\u5B9A\u8981\u79BB\u5F00\u5417\uFF1F';
K.returnValue=O;
return O;
}
return false;
}};
});
D.qmPlayerParser=inherit("qmPlayerParser",D._qmBaseDM,function(J){
return {_get:function(K,L){
return decodeURIComponent(attr(K,L));
},_fPlay:function(K){
var N=this;
if(!K.auto&&!confirm("\u64AD\u653E\u5916\u90E8\u97F3\u4E50\u6709\u98CE\u9669\uFF0C\u786E\u5B9A\u64AD\u653E\uFF1F"))
{
return;
}
var L=N.S(h._sMp3PlayerContainer),M=N.S(h._sMp3PlayerInfo);
if(K.sosoGet)
{
getMusicUrl(K.title,K.author,function(Q,P,R){
N._fPlay({auto:true,url:R||K.url,title:Q,author:P,sosoGet:false});
});
return;
}
show(L,true);
if(L.getAttribute("uin_play_id"))
{
getTop().QMPlayer.delSkinById(L.getAttribute("uin_play_id"));
}
var O="uni_id"+(+new Date());
L.setAttribute("uin_play_id",O);
audioPlay({id:O,container:L,url:K.url,author:K.author,title:K.title,autoplay:true,global:true});
M.innerHTML=k.replace({images_path:getPath('image'),author:htmlEncode(K.author)||'\u672A\u77E5',title:htmlEncode(K.title)||'\u672A\u77E5'});
show(M,true);
},_fPlayBgMusic:function(O,L,K,N){
var R=this,U=R._moWin,P=R.S(h._sBgMusic),Q={auto:K,url:O,sosoGet:L?true:false,author:L&&L.author,title:L&&L.title};
if(O.indexOf("http")!=0)
{
return;
}
if(N=='bgmusic')
{
show(P,true);
var M=GelTags("a",P);
M[0].href=O;
M[1].onclick=function(){
R._fPlay(Q);
return false;
};
}
if(K)
{
R._fPlay(Q);
}
show(R.S(h._sQQMailBgMusicInfo),false);
},_ready:function(K){
var U=GelTags("player",K.oContentDom);
if(!U.length)
{
return;
}
var V=this,Y=V._moWin,N=V.S(h._sAttachment);
for(var L=0;L<U.length;L++)
{
var Q=U[L],aa=Q.id||"",Z=aa.toLowerCase();
if(Z.indexOf("cmd:")==0)
{
Z=Z.split(":").pop();
switch(Z)
{case "voice":
if(!N)
{
return;
}
var ac=escape(attr(Q,"param")),ab=attr(Q,"media")||"voice",X=GelTags("span",N),M=X.length,ad="";
for(var ah=0,M;ah<M;ah++)
{
var W=X[ah],ad=attr(W,"player");
if(ad&&(W.innerText||W.textContent)==unescape(ac))
{
var R=Q.parentNode;
if(ab=="video")
{
if(!Y.sFlvPlayUrl)
{
Y.sFlvPlayUrl=ad;
R.innerHTML=generateFlashCode(unikey("flvplayer"),"/zh_CN/htmledition/swf/WebFlvPlayer.swf",{width:400,height:335},{wmode:"opaque"});
}
}
else{
R.innerHTML='<div style="padding-left:10px;" ></div>';
var P={id:ac,container:R.firstChild,url:ad,title:Q.getAttribute('alias')?Q.getAttribute('alias')+'\u7684\u8BED\u97F3':'\u60A8\u670B\u53CB\u7684\u8BED\u97F3',dispInfo:{title:Q.getAttribute("alias")?Q.getAttribute("alias")+"\u7684\u8BED\u97F3":"\u60A8\u670B\u53CB\u7684\u8BED\u97F3"},autoplay:false};
L--;
audioPlay(P);
}
break;
}
}
break;
case "bgmusic":
var ag=attr(Q,"url"),af=V._get(Q,"song"),ae=V._get(Q,"singer");
V._fPlayBgMusic(ag,ag&&!af&&!ae?null:{author:ae,title:af},!K.bManuPlay,Z);
break;
case "pcbgmusic":
var ag=attr(Q,"url"),af=V._get(Q,"song"),ae=V._get(Q,"singer"),O=Y.document.createElement('div');
O.innerHTML='\u64AD\u653E\u5668\u52A0\u8F7D\u4E2D...';
Q.parentNode.insertBefore(O,Q);
audioPlay({skin:'Global',id:"pcbgmusic",container:O,author:ae,title:af,autoplay:U.length==1,url:ag});
break;
default:
break;
}
}
else if(aa)
{
V._fPlayBgMusic(aa);
}
}
}};
});
D.qmMoreOptSel=inherit("qmMoreOptSel",D._qmBaseDM,function(J){
return {_ready:function(K){
var M=this;
_oData=M._moData={},_oMoreOpt=K.oMoreOpt,_oText=["\u5220\u9664\u90AE\u4EF6\u5907\u6CE8","\u6DFB\u52A0\u90AE\u4EF6\u5907\u6CE8","\u53D6\u6D88\u63D0\u9192","\u8BBE\u7F6E\u63D0\u9192","\u6253\u5370"],_oValue=["delremark","addremark","delremind","addremind","print"];
for(var L=_oValue.length-1;L>=0;L--)
{
_oData[_oValue[L]]=0;
}
for(var L=_oMoreOpt.length-1;L>=0;L--)
{
_oData[_oMoreOpt[L]]=1;
}
E(SN(l._sMoreOprContainer,K.oWin),function(N){
new QMSelect({oContainer:N,nWidth:86,sDefaultItemValue:"\u66F4\u591A\u64CD\u4F5C...",oMenu:{nWidth:"auto",nMaxWidth:180,nMaxItemView:10,oItems:QMMenu.makeMenuItem(_oText,_oValue)},onafteropenmenu:function(Q,O){
for(var P=_oValue.length-1;P>=0;P--)
{
Q.itemOption(_oValue[P],"bDisplay",_oData[_oValue[P]]);
}
},onselect:function(O){
callBack(K.fOnSelect,[O.sId]);
}});
});
},switchPair:function(K,L){
var M=this;
M._moData[K]=1;
M._moData[K]=0;
}};
});
D.qmRemark=inherit("qmRemark",D._qmBaseDM,function(J){
return {_initMemVar:function(K){
var L=this;
L._bFoucs=false;
L._mfOnChange=function(M){
L.dealCustomUI('remark',{sAction:M,oWin:L._moWin});
callBack(K,arguments);
};
L._mnDefHgt=L.S(h._sRemarkText).clientHeight;
},isFoucs:function(){
return this._bFoucs;
},_setEvent:function(){
var L=this,M=L._moWin,K=L.S(h._sRemarkText);
L.evt(["ck"],[h._sRemarkContainer,h._sRmd]);
addEvents(K,{focus:function(){
L._bFoucs=true;
L.onFocus();
},keydown:function(N){
L.onKeydown(N);
},blur:function(){
L._bFoucs=false;
L.onBlur();
}});
addEvent(M,"beforeunload",function(N){
var O=L._hasModify();
if(O)
{
N.returnValue=O;
return O;
}
});
addEvent(K,gbIsIE?"propertychange":"input",function(N){
if(gbIsIE)
{
N.propertyName=="value"&&L._resize();
}
else{
L._resize();
}
});
return L;
},_resize:function(){
if(gbIsIE&&gnIEVer==6)
{
return;
}
var M=this,L=M.S(h._sRemarkText),K=L.scrollHeight;
if(gbIsIE)
{
K>M._mnDefHgt&&(L.style.height=K+"px");
}
else{
L.style.height=M._mnDefHgt+"px";
if(L.clientHeight<K)
{
L.style.height=L.scrollHeight+"px";
}
}
},toggle:function(K){
var P=this,O=P.S(h._sRmd),L=P.S(h._sRemarkContainer),M=P.S(h._sRemarkText),N=P.S(h._sRemarkWrite);
if(O&&O.title.indexOf("\u5220\u9664")>=0)
{
P.del();
}
else if(L&&getTop().isShow(L))
{
P.modify();
}
else{
K&&K.blur();
show(L,true);
show(N,true);
M.focus();
}
return false;
},del:function(K){
var U=this,R=U.S(h._sRmd),N=U.S(h._sRemarkContent),M=U.S(h._sRemarkContainer),P=U.S(h._sRemarkText),Q=U.S(h._sRemarkWrite),O=U.S(h._sRemarkRead);
if(!N.innerHTML)
{
show(M,false);
return false;
}
var V=U.getMailId(),L=new QMAjax("/cgi-bin/mail_mgr?mailaction=remarks&type=del");
L.onError=function(W){
showError("\u5220\u9664\u5907\u6CE8\u5185\u5BB9\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
U._changeButtonMode(false);
};
L.onComplete=function(W){
if(W.responseText.indexOf("del successful")==-1)
{
return this.onError();
}
showInfo("\u5220\u9664\u6210\u529F");
if(R)
{
R.title="\u6DFB\u52A0\u90AE\u4EF6\u5907\u6CE8";
R.className="qm_ico_remarkoff";
}
P.value="";
N.innerHTML="";
show(M,0);
show(Q,0);
show(O,0);
U._changeButtonMode(false);
U._mfOnChange("del");
};
confirmBox({msg:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u6B64\u90AE\u4EF6\u5907\u6CE8\u5417\uFF1F",title:'QQ\u90AE\u7BB1\u63D0\u793A',cancelBtnTxt:"\u53D6\u6D88",confirmBtnTxt:"\u786E\u5B9A",onreturn:function(W){
if(W)
{
U._changeButtonMode(true);
L.send(T("mailaction=remarks&sid=$sid$&type=del&mailid=$mailid$").replace({sid:getSid(),mailid:V}));
}
}});
return false;
},_text2html:function(K){
return htmlEncode(K).replace(/\n/gi,"<br/>").replace(/\x20/gi,"&nbsp;");
},_html2text:function(K){
return htmlDecode(K.replace(/&nbsp;/gi," ").replace(/<br\/?>/gi,"\n"));
},save:function(){
var P=this,Q=P._moWin,L=P.S(h._sRemarkContent),N=P.S(h._sRemarkText),O=P.S(h._sRemarkWrite),M=P.S(h._sRemarkRead),K=new QMAjax("/cgi-bin/mail_mgr?mailaction=remarks&type=mdy"),R=N.value;
if(!R||R==f)
{
N.focus();
return !!showError('\u8BF7\u5148\u8F93\u5165\u5907\u6CE8\u5185\u5BB9');
}
if(R.replace(/[^\x00-\xff]/g,"aa").length>=1000)
{
N.focus();
return !!showError('\u90AE\u4EF6\u5907\u6CE8\u7684\u5B57\u7B26\u4E0D\u80FD\u8D85\u8FC71000\u4E2A');
}
K.onError=function(U){
showError("\u4FDD\u5B58\u5907\u6CE8\u5185\u5BB9\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
P._changeButtonMode(false);
};
K.onComplete=function(U){
if(U.responseText.indexOf("mdy successful")==-1)
{
return this.onError();
}
showInfo("\u4FDD\u5B58\u6210\u529F");
var V=P.S(h._sRmd);
if(V)
{
V.title="\u5220\u9664\u90AE\u4EF6\u5907\u6CE8";
V.className="qm_ico_remarkon";
}
L.innerHTML=P._text2html(R);
P._changeButtonMode(false);
P.cancel();
P._mfOnChange("save");
};
if(L.innerHTML==R)
{
return K.onComplete({responseText:"mdy successful"});
}
P._changeButtonMode(true);
K.send(T("mailaction=remarks&sid=$sid$&resp_charset=UTF8&type=mdy&mailid=$mailid$&content=$content$").replace({sid:getSid(),mailid:P.getMailId(),content:encodeURI(R)}));
return false;
},cancel:function(){
var P=this,L=P.S(h._sRemarkContent),K=P.S(h._sRemarkContainer),N=P.S(h._sRemarkText),O=P.S(h._sRemarkWrite),M=P.S(h._sRemarkRead);
if(L.innerHTML=="")
{
N.value=P._html2text(f);
show(M,false);
show(O,false);
show(K,false);
}
else{
N.value=P._html2text(L.innerHTML);
show(M,true);
show(O,false);
}
},modify:function(K){
var Q=this,M=Q.S(h._sRemarkContent),L=Q.S(h._sRemarkContainer),O=Q.S(h._sRemarkText),P=Q.S(h._sRemarkWrite),N=Q.S(h._sRemarkRead);
O.value=Q._html2text(M.innerHTML);
show(N,false);
show(P,true);
O.focus();
Q._resize();
},onFocus:function(){
var L=this,M=L._moWin,K=L.S(h._sRemarkText);
if(K.value==f)
{
K.value="";
}
K.style.color="#000";
K.style.fontSize="14px";
return false;
},onBlur:function(){
var L=this,K=L.S(h._sRemarkText);
if(K.value=="")
{
K.value=f;
K.style.color="#A0A0A0";
K.style.fontSize="12px";
}
return false;
},onKeydown:function(K){
if(K.ctrlKey&&K.keyCode==13||K.altKey&&K.keyCode==83)
{
this.save();
preventDefault(K);
}
},_changeButtonMode:function(K){
this.S(h._sRemarkSave).disabled=K;
},_hasModify:function(){
var N=this,L=N.S(h._sRemarkContent),M=N.S(h._sRemarkText);
if(!M)
{
return '';
}
var K=(M.value.replace(/\r/gi,"")!=N._html2text(L.innerHTML).replace(/\r/gi,""));
return (M&&M.value&&K&&M.value!=f)?'\u60A8\u586B\u5199\u7684\u5907\u6CE8\u6CA1\u6709\u4FDD\u5B58\uFF0C\u786E\u5B9A\u8981\u79BB\u5F00\u5417\uFF1F':'';
}};
});
D.qmAntiSpam=inherit("qmAntiSpam",D._qmBaseDM,function(J){
return {_initMemVar:function(K,L){
var M=this;
M._moMailInfo=L;
M._moConfig=K;
M._moCheatCodeBar=M.S(h._sCheatCodeBar);
},_setEvent:function(){
var K=this;
K.evt(["ck"],K.SN(l._sSpam));
},_locMore:function(K){
var L=this._moWin.location;
L.replace(appendToUrl(cookQueryString(L.href,{ver:""}),K));
},_createMailFrm:function(L,K){
x({oWin:this._moWin,sFormId:"mail_frm",sAction:"/cgi-bin/mail_mgr"},extend({s:"readmail_spam",s_reject_what:"11",isspam:'true',mailid:L,reporttype:"",location:"readmail",srcfolderid:this._moConfig.folderid,mailaction:"mail_spam"},K));
},reject:function(K,L){
var N=this,P=attr(K,"type_reject"),O=attr(K,"subjectid");
var M=N.getFromInfo_();
N._moWin.QMReadMail&&N._moWin.QMReadMail.clearCache();
QMMLCache.upVer();
if(P=="sys_reject")
{
N._createMailFrm(L,{"type_reject":P,"subjectid":O});
doReject(true,attr(K,"groupmail"),N._moWin,attr(K,"mimefrom")||M.addr,"\u62D2\u6536\u540E\u60A8\u5C06\u4E0D\u518D\u6536\u5230\u6765\u81EA\u6B64\u680F\u76EE\u7684\u7CFB\u7EDF\u90AE\u4EF6\uFF0C\u786E\u8BA4\u62D2\u6536\u5417?");
}
else{
N._createMailFrm(L);
doReject(true,attr(K,"groupmail"),N._moWin,attr(K,"mimefrom")||M.addr,T(['<div>\u62D2\u6536\u540E\u60A8\u5C06\u4E0D\u518D\u6536\u5230\u6765\u81EA\u4EE5\u4E0B\u5730\u5740\u7684\u90AE\u4EF6\uFF0C\u786E\u8BA4\u62D2\u6536\u5417\uFF1F</div>','<div for="reject_confirm_$_idx_$" class="txtflow" style="width:320px;">','<span class="green bold">$name$</span>','<span class="graytext">&lt;$addr$&gt;</span>','</div>']).replace({name:htmlEncode(M.name),addr:M.addr}));
}
},notSpam:function(K,L){
var M=this,N=M._moWin;
getTop().QMMLCache.upVer();
reportNoSpamJson({},{oWin:M._moWin,sFid:M._moConfig.folderid,oACB:null,bPop:false,bML:false,oMail:[{sMid:L,bUnr:false}]});
},reportSpam:function(M,N,L,K){
var U=this,R=U._moConfig;
if(attr(M,"yellow")=="true")
{
LogKV({sValue:"getinvestigate|readmail|report_spam|yellowbar"});
}
else{
LogKV({sValue:"getinvestigate|readmail|report_spam|button"});
}
var O=U.attr(M,"noaddblack")!="1";
var P=0;
var Q=new Array();
var W=U.attr(M,"mimefrom");
var V=U.attr(M,"mailfrom");
if(W&&W.length>0)
Q[P++]=W;
if(V&&V.length>0)
Q[P++]=V;
getTop().QMMLCache.upVer();
reportSpamJson({bBlackList:O,oAddrList:Q},{oWin:U._moWin,sFid:U._moConfig.folderid,oACB:null,bPop:false,bML:false,oncomplete:function(X){
return U.dealCustomUI('MailMethod',[X,'reportSpam'])===true||callBack.call(this,K,arguments);
},oMail:[{sMid:N,bUnr:false}]});
},openSpam:function(){
this._locMore("&disptype=html&dispimg=1&clickshowimage=1");
},addWhiteSubmit:function(L,M,K){
var N=this,O=N._moWin,P=N.getFromInfo_().addr;
if(!checkMail(trim(P)))
{
return false;
}
x({oWin:O,sMethod:"POST",sAction:e.replace({sid:getSid(),fromaddr:P})}).submit();
runUrlWithSid(r.replace({rtype:1000006,rmsg:M}));
rdVer(M,1);
N.openSpam();
show(N._moCheatCodeBar,false);
preventDefault(K);
},addSpamVote:function(K,L){
var M=this,O=M.attr(K,"rtype");
runUrlWithSid(r.replace({rtype:O,rmsg:L})+"&r_subtype=spamvote&fname="+M.getFromInfo_().addr);
if(O=="1")
{
M.S(h._sGreenBar).innerHTML='\u611F\u8C22\u53C2\u4E0E\uFF01\u60A8\u8FD8\u53EF\u4EE5\u5C06\u6B64\u53D1\u4EF6\u4EBA\u7684\u90AE\u4EF6\uFF0C\u5F52\u6863\u5230\u6307\u5B9A\u6587\u4EF6\u5939&nbsp;&nbsp;<a <a ck="exbookEmlMgr" book="1" href="javascript:;">\u81EA\u52A8\u5F52\u6863</a>&nbsp;&nbsp;<a onclick="this.parentNode.parentNode.style.display=\'none\'" href="javascript:;">\u4E0D\u9700\u8981</a>';
show(M.S(h._sGreenBarText),false);
}
else if(O=="2")
{
M.S(h._sGreenBar).innerHTML='\u611F\u8C22\u53C2\u4E0E\uFF01\u5982\u679C\u4E0D\u60F3\u518D\u6536\u5230\u6B64\u53D1\u4EF6\u4EBA\u7684\u90AE\u4EF6\uFF0C\u60A8\u53EF\u4EE5&nbsp;&nbsp;<a ck="reject" href="javascript:;">\u62D2\u6536</a>&nbsp;&nbsp;<a onclick="this.parentNode.parentNode.style.display=\'none\'" href="javascript:;">\u7EE7\u7EED\u6536\u53D6</a>';
show(M.S(h._sGreenBarText),false);
}
else{
getTop().showInfo("\u5DF2\u6210\u529F\u53CD\u9988\u60C5\u51B5");
var N=M.S(h._sGreenBar).parentNode;
N.style.display="none";
}
rdVer(L,1);
},openHttpImage:function(L,M,K){
runUrlWithSid(r.replace({rtype:"1000004",rmsg:M,rresult:1}));
this.openSpam();
preventDefault(K);
},openHttpSecureImage:function(L,M,K){
runUrlWithSid(r.replace({rtype:1000005,rresult:1,rmsg:M}));
this._locMore("&dispimg=1");
preventDefault(K);
},openUserEdu:function(K,L){
runUrlWithSid(r.replace({rtype:1000007,rresult:1,rmsg:L}));
},exbookEmlMgr:function(K,L){
var N=this,O=N.attr(K,"book"),M=N.attr(K,"tuan")||0;
loadingBox({model:"\u53CD\u5783\u573E",js:["$js_path$qmantispam1e7c35.js"],oncheck:function(){
return !!getTop().QMAntiSpam;
},onload:function(){
var P=new QMAntiSpam.qmExbookEmlMgr({sMailId:L,from:N.getFromInfo_(),fOnReload:function(){
w(L,N._moWin);
}});
if(O=="1")
{
P.book1();
}
else{
P.book2(M);
}
}});
}};
});
D.qmMarkAdMail=inherit("qmMarkAdMail",D._qmBaseDM,function(J){
return {_initMemVar:function(K,L){
var M=this;
M._moMailInfo=L;
M._moConfig=K;
},_setEvent:function(){
var K=this;
K.evt(["ck"],K.SN(l._sAdMail));
},reportAd:function(L,M,K){
var Q=this;
var P=Q.getFromInfo_();
var O=Q._moConfig;
var N=Q.attr(L,'toad')!="0";
reportAdJson({bNotAd:!N,bShowConfirm:true},{oWin:Q._moWin,sFid:O.folderid,oACB:null,bPop:false,bML:false,oncomplete:function(R){
Q.dealCustomUI('MailMethod',[R,'markAdMail',N]);
},oMail:[{sMid:M,bUnr:false,sSName:P.name,sSEmail:P.addr}]});
}};
});
D.qmSenderInfo=inherit("qmSenderInfo",D._qmBaseDM,function(J){
return {_initMemVar:function(K,L){
this._moMail=L;
this._moConfig=K;
},_setEvent:function(){
var K=this;
K.evt(["ck"],[h._sSenderInfo,h._sSenderInfo2,h._sSenderInfo3]);
},_getBlogList:function(){
var K=this;
createIframe(K._moWin,t.replace({sid:getSid(),mail:K._moMail}),{id:"iframeRss"});
},_getMailList:function(){
var K=this;
QMAjax.send(s.replace({sid:getSid(),mailid:K.getMailId(),mail:K._moMail}),{method:"GET",onload:function(L,M){
if(L)
{
var N=evalValue(M);
K.S("divMails_sidebar").innerHTML=N.sHtml||"";
}
}});
},toggle:function(){
var N=this,L=N._moConfig,M=N.S(h._sSenderInfo),K=!isShow(M);
M.style.zIndex=K?"21":"20";
show(M,K);
N.S(h._sMainMail).className=K?"myleftbar":"";
N.S(h._sPageEnd).className=K?"myleftbar":"";
N.S(h._sContentDiv).className=K?"body myleftbar_":"body";
if(bnewwin)
{
show(N.S(h._sNextMailTop),!K);
show(N.S(h._sNextMailBt),!K);
M.style.marginTop="40px";
}
if(L.logintype!="2")
{
N._getMailList();
}
}};
});
D.qmConvMail=inherit("qmConvMail",D.qmReadMail,function(J){
return {_initMemVar:function(){
var K=this;
J._initMemVar.apply(K,arguments);
K._moSubMails={};
K._mnNewSubMails=0;
K._moNewsSubMails=[];
},_setEvent:function(){
var K=this;
K.evt(["ck","md","dck","mor","mot"],K._moWin.document.body);
K._initSelectAllEvt();
},_rInsAsyn:function(){
var K=this;
var N=K._moWin;
var L=getTop();
var M=K.S('submail_inner_body');
if(M)
{
L.E(L.finds('[asyninit=1]',N),function(O){
M.appendChild(O);
});
}
},_initSelectAllEvt:function(){
var L=getTop(),K=this,M=K._moWin;
addEvent(M.document,"keydown",function(N){
if(N.ctrlKey&&N.keyCode=="65")
{
K.S(K.msCurrent)&&K.doSelectAll(N,K.S(K.msCurrent));
}
});
},_startSubMod:function(K){
var O=this,N,M=O._moMailInfo,L=extend({},O._moContext,K);
switch(L.sModuleName)
{case "qmSubMail":
var P=M.oSubMails[L.sAux]||[{},{}],Q=L.sContext||"";
P[0].cmailid=O.getMailId();
if(L.sAux!=0)
{
P[1].to=M.oSubMails[0][1].to;
P[1].cc=M.oSubMails[0][1].cc;
}
N=new D.qmSubMail(P[0],P[1],L);
Q&&(O._moSubMails[Q]=N);
break;
case "qmQReply":
var P=M.oSubMails[L.sAux]||[{},{}],R='';
if(O._moQReply)
{
R=O._moQReply.getContent();
O._moQReply.removeSelf();
}
N=O._moQReply=new D.qmQReply(P[0],P[1],{fCheckBcc:function(){
callBack.call(O,O.checkBcc,arguments);
},fQReplyComplete:function(U){
var V=evalValue(U);
if(V)
{
this.S(h._sQSource).view("init");
O._qReplyComplete(V.mailstr);
}
else{
this.S(h._sQSource).view("show");
}
},s:"conv_send",sourceContent:R},L);
break;
case "qmAntiSpam":
N=O._moAntiSpam=new D.qmAntiSpam(O._moConfig,M,L);
break;
case "qmMarkAdMail":
N=O._moMarkAdMail=new D.qmMarkAdMail(O._moConfig,M,L);
break;
}return N;
},initQReply:function(K,L){
this._startSubMod({sModuleName:"qmQReply",sAux:K,sContext:L});
},_qReplyComplete:function(K){
var M=this,N=M.S(h._sSubMailStartDiv);
insertHTML(N,"afterEnd",K);
var L=finds('div[module="qmSubMail"]',M.S('submail_inner_body'));
M._startSubMod({sContext:L[0].getAttribute("context"),sModuleName:"qmSubMail",sAux:L[0].getAttribute("aux")});
},goCal:function(K,L){
var N=this,M=N._moSubMails[L];
var O=M._moMailInfo.subject;
J.goCal.call(this,K,L,O);
},optMail:function(L,M,K){
var Q=this,N=Q.S('submail_inner_body'),P=finds('div[ck="dispSubMail"]',N),O=Q.parentToContextDom(P[0]);
if(O)
{
M=O.getAttribute('context');
}
J.optMail.call(Q,L,M,K);
},_pageReady:function(){
var M=this,O=M._moWin,K=M._moConfig,L=M._moMailInfo,N=L.oSubMails;
M._fakeReadMail();
M._readMailFinish();
M._rInsPageEnd();
M._rInsAsyn();
initMailSelect(K.oMoveItems,true,K.bOpenTag=="1",O,K.folderid,K.bAutoTag);
E(N,function(Q){
if(Q)
{
M._startSubMod(Q[2]);
}
Q&&getTop().QMWebpushTip&&getTop().QMWebpushTip.read(1,Q[2].sContext);
});
if(L.nLen>2&&N[0][1].to.length>2&&getTop().g_encryptuin==N[L.nLen-1][1].from.qq)
{
getTop().requestShowTip("tip74container","74",O);
}
if(K.nRet!=0&&K.bRetry=="")
{
var P=M._moWin.location.href+"";
P=P.replace(/#.*/gi,"")+"&retry=1";
M.clearCache();
M._moWin.location=P;
}
M._flushFolder();
K.bClearRDCache&&M.clearCache();
},getSubMailWithDom:function(K){
var N=this,M=K,L=K.ownerDocument,P,O;
while(M&&M!=L)
{
if((P=attr(M,F._CON_ATTR))&&(O=N._moSubMails[P]))
{
return O.getMailInfo();
}
M=M.parentNode;
}
return null;
},_delConvMail:function(K){
var L=this;
doRmMail(extend(L.getCBInfo(),{oncomplete:function(M,N){
L.dealCustomUI('MailMethod',[M,'delMail',N]);
var Q=N.url||"";
if(Q.indexOf("/cgi-bin/readmail?")!=-1)
{
var O=getUrlParams(Q||L._moWin.location)["t"];
var P=(O=="readmail_ad"||O=="readmail_ad_conversation")?"collo":"";
L.prevandnext({mailid:getUrlParams(Q||L._moWin.location)["mailid"],type:P});
return true;
}
}}),["mailaction=mail_del&mailid=",L.getMailId(),(K?"&Fun=PerDel":"")]);
},showAdSenderMoreInfo:function(L,M,K){
this.dealCustomUI('showAdSenderMoreInfo',arguments);
},delMail:function(K,L){
var O=this,N=finds("input[ck='selectSubMail']",O.S("submail_inner_body")).length,M=O.attr(K,"opt")=="1";
if(N==1&&!M)
{
getTop().QMMLCache.upVer();
O._delConvMail(M);
return;
}
new QMDialog({sTitle:"\u5220\u9664\u786E\u8BA4",sBodyHtml:TE(['<div>','<div class="cnfx_content">','<span class="dialog_icon icon_info_b"></span>','<div class="dialog_f_c">','$@$if($isperdel$)$@$','$@$if($count$>1)$@$','<div class="dialog_f_t">\u60A8\u786E\u5B9A\u8981\u5F7B\u5E95\u5220\u9664\u8FD9<span class="bold" style="margin:4px;">$count$</span>\u5C01\u90AE\u4EF6\u5417\uFF1F</div>','<div class="dialog_f_d">\u5F7B\u5E95\u5220\u9664\u540E\u5C06\u65E0\u6CD5\u6062\u590D\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6574\u7406\u90AE\u4EF6\u8FDB\u884C\u90E8\u5206\u5220\u9664\u3002</div>','$@$else$@$','\u5F7B\u5E95\u5220\u9664\u540E\u90AE\u4EF6\u5C06\u65E0\u6CD5\u6062\u590D\uFF0C\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F','$@$endif$@$','$@$else$@$','$@$if($count$>1)$@$','<div class="dialog_f_t">\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8FD9<span class="bold" style="margin:4px;">$count$</span>\u5C01\u90AE\u4EF6\u5417\uFF1F</div>','<div class="dialog_f_d">\u5220\u9664\u540E\u5C06\u79FB\u5230\u201C\u5DF2\u5220\u9664\u201D\u4E2D\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6574\u7406\u90AE\u4EF6\u8FDB\u884C\u90E8\u5206\u5220\u9664\u3002</div>','$@$else$@$','\u5220\u9664\u540E\u90AE\u4EF6\u5C06\u79FB\u5230\u201C\u5DF2\u5220\u9664\u201D\u4E2D\uFF0C\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F','$@$endif$@$','$@$endif$@$','<div></div>','</div>','</div>']).replace({isperdel:M,count:N}),sFootHtml:TE(['<div class=" txt_right cnfx_btn">','$@$if($count$>1)$@$','<a class="btn_gray btn_left" id="selectmail" href="javascript:;">\u6574\u7406\u90AE\u4EF6<span class="btn_dots">...</span></a>','$@$endif$@$','<a class="btn_gray confirm wd2" id="confirm" href="javascript:;">\u786E\u5B9A</a>','<a class="btn_gray cancelwd2" id="cancel" href="javascript:;">\u53D6\u6D88</a>','</div>']).replace({count:N}),onshow:function(){
var P=this;
P.S("confirm")&&P.S("confirm").focus();
},onload:function(){
var P=this;
if(N>1)
{
P.S("selectmail").onclick=function(){
O._changeToEditSubMail(true);
P.close();
};
}
P.S("confirm").onclick=function(){
getTop().QMMLCache.upVer();
O._delConvMail(M);
P.close();
};
P.S("cancel").onclick=function(){
P.close();
};
}});
},delManageMail:function(K,L){
var N=this,M=N.attr(K,"opt")=="1";
rmMail(M,extend(N.getCBInfo(),{oncomplete:function(O,P){
var U=P.url||"";
var Q=getUrlParams(U||N._moWin.location)["t"];
var R=(Q=="readmail_ad"||Q=="readmail_ad_conversation")?"collo":"";
if(U.indexOf("/cgi-bin/readmail?")!=-1)
{
N.prevandnext({mailid:getUrlParams(U||N._moWin.location)["mailid"],type:R});
return true;
}
}}));
},reportSpam:function(M,N,L,K){
this._moAntiSpam||this._startSubMod({sModuleName:"qmAntiSpam"});
this._moAntiSpam.reportSpam(M,N,L,K);
},reject:function(K){
var O=this;
if(attr(K,"type_reject")=="sys_reject")
{
O._moAntiSpam||O._startSubMod({sModuleName:"qmAntiSpam"});
O._moAntiSpam.reject(K,O.getMailId());
return;
}
var M=[];
var N=O._moMailInfo;
for(var Q=0;Q<N.nLen;++Q)
{
var P=N.oSubMails[Q][1].from;
var L=O._moWin['__relative_list_self__'][P.addr]||0;
if(L!=1)
{
M.push({sSName:P.name,sSEmail:P.addr,sMid:N.oSubMails[Q][2].sContext});
}
}
reportAddrConfirm({oMail:M},{sTitle:'\u62D2\u6536\u786E\u8BA4',sConfirmBtnTxt:'\u62D2\u6536',sTextTitle:'\u62D2\u6536\u540E\u60A8\u5C06\u4E0D\u518D\u6536\u5230\u6765\u81EA\u4EE5\u4E0B\u5730\u5740\u7684\u90AE\u4EF6\uFF0C\u786E\u8BA4\u62D2\u6536\u5417\uFF1F',onreturn:function(R,U,W,V){
if(R)
{
getTop().QMMLCache.upVer();
O._moAntiSpam||O._startSubMod({sModuleName:"qmAntiSpam"});
O._moAntiSpam._createMailFrm(O.getMailId(),{"addr":U.join(";"),"submailid":W.join(";"),"nogopage":O.dealCustomUI('getModelName')=='floatRead4mailList'?'true':''});
_oFrm=S("mail_frm",O._moWin);
if(_oFrm.s_reject_what)
{
_oFrm.s_reject_what.value="10";
}
setMailType("reject","true",attr(K,"groupmail"),O._moWin);
setTimeout(function(){
O.dealCustomUI('MailMethod',[null,'reject']);
},300);
}
}});
},parentToContextDom:function(K){
return parents("div[module='qmSubMail']",K)[0];
},editSubMail:function(){
var K=this;
K._changeToEditSubMail(true);
},foldSubMail:function(K){
var Q=this,N=K,M=Q.S("submail_inner_body"),O=finds("div[ck='dispSubMail']",M),L=true,P,R;
for(var U=0;U<O.length;U++)
{
if(!isShow(O[U]))
{
L=false;
break;
}
}
if(!L)
{
E(O,function(V){
if(!isShow(V))
{
P=Q.parentToContextDom(V);
if(P)
{
R=Q._moSubMails[P.getAttribute("context")];
R&&R._fandx(true);
}
}
});
setTimeout(function(){
addClass(N,"unfoldSubMail");
},250);
}
else{
P=Q.parentToContextDom(O[0]);
if(P)
{
R=Q._moSubMails[P.getAttribute("context")];
R&&R.dispSubMail(O[0]);
}
setTimeout(function(){
rmClass(N,"unfoldSubMail");
},250);
}
},getCBInfo4EditMode:function(){
var O=this;
if(O.S("selectAllSubMail").checked)
{
return O.getCBInfo();
}
var M=[];
var P=O.S("submail_inner_body");
var K=O._moConfig;
var N=O._moMailInfo;
var L=O.getFromInfo_();
;E(finds("input[ck='selectSubMail']",P),function(Q){
if(Q.checked)
{
var R=O.parentToContextDom(Q);
M.push({sMid:attr(R,"context"),bSys:K.bSys,bUnr:attr(R,"newmail")=='true',bSubUnr:parseInt(attr(R,"newcnt")||'0',10)>0,bTms:false,sSName:L.name,sSEmail:L.addr,sDOMid:R.id});
}
});
return {oWin:O._moWin,sFid:K.folderid,bML:false,bReadmailEditMode:true,oMail:M};
},getFromInfo_:function(){
return this._moMailInfo.oSubMails[0][1].from||{};
},configPreRmMail:function(K,L){
var N=this;
var M=K.oncomplete;
if(K.bReadmailEditMode)
{
switch(L)
{case 'moveMailJs':
K.oncomplete=function(O,P){
if(M)
{
M.apply(this,arguments);
}
E(O.oMail,function(Q){
removeSelf(S(Q.sDOMid,O.oWin));
});
N.updateDelBtnCnt(0);
return true;
};
return true;
}
}
return false;
},delSomeSubMail:function(K,L){
var U=this,N=attr(K,"opt")=="1",M=U.S("selectAllSubMail").checked,R=[],Q=[],P=0,V=U.S("submail_inner_body");
E(finds("input[ck='selectSubMail']",V),function(W){
if(W.checked)
{
var X=U.parentToContextDom(W);
R.push(attr(X,"context"));
Q.push(X.id);
}
P++;
});
if(Q.length==0)
{
showError("\u8BF7\u5148\u52FE\u9009\u8981\u5220\u9664\u7684\u90AE\u4EF6");
return;
}
function O()
{
if(M)
{
U._delConvMail(N);
}
else{
doRmMail(extend(U.getCBInfo(),{oncomplete:function(W,X){
E(Q,function(Y){
removeSelf(S(Y,U._moWin));
});
U.updateDelBtnCnt(0);
return true;
}}),["mailaction=mail_del&mailid=",R.join("&mailid="),(N?"&Fun=PerDel":"")]);
}
ossLog("delay","all","stat=nothing&locval=convmail,delsomesubmail,"+(N?"1":"0"));
}
if(N)
{
confirmBox({msg:T(['<div class="dialog_f_t">\u60A8\u786E\u5B9A\u8981\u5F7B\u5E95\u5220\u9664\u6240\u9009\u7684<span class="bold" style="margin:4px;">$count$</span>\u5C01\u90AE\u4EF6\u5417\uFF1F</div>','<div class="dialog_f_d">\u5F7B\u5E95\u5220\u9664\u540E\u90AE\u4EF6\u5C06\u65E0\u6CD5\u6062\u590D\u3002</div>']).replace({count:R.length}),title:"\u5220\u9664\u786E\u8BA4",cancelBtnTxt:"\u53D6\u6D88",confirmBtnTxt:"\u786E\u5B9A",onreturn:function(W){
if(W)
{
O();
}
}});
}
else{
O();
}
},selectAllSubMail:function(K){
var M=this,L=0;
E(finds("input[ck='selectSubMail']",M.S("submail_inner_body")),function(N){
N.checked=K.checked;
if(N.checked)
{
L++;
}
});
M.updateDelBtnCnt(L);
},updateDelBtnCnt:function(K){
var L=this;
E(finds("a[ck='delSomeSubMail']",L._moWin.document),function(M){
M.innerHTML=M.innerHTML.replace(/\(.*?\)/,"")+"("+K+")";
if(0==K)
{
addClass(M,"btn_disabled");
}
else{
rmClass(M,"btn_disabled");
}
});
},_changeToEditSubMail:function(K){
var P=this,M=P.S("submail_inner_body"),L=P._moWin.document.body;
if(K)
{
var N=finds("div[ck='dispSubMail']",M);
E(N,function(Q){
if(!isShow(Q))
{
var R=P.parentToContextDom(Q);
if(R)
{
var U=P._moSubMails[R.getAttribute("context")];
U&&U._fandx('auto');
}
}
});
addClass(L,"mail_select");
E(finds("div.qm_converstaion_summary_body",M),function(Q){
attr(Q,"_title",Q.title);
Q.title="";
attr(Q.parentNode,"ck","selectSubMailOuter");
});
var O=P.S("selectAllSubMail");
O.checked=true;
P.selectAllSubMail(O);
}
else{
rmClass(L,"mail_select");
E(finds("div.qm_converstaion_summary_body",M),function(Q){
Q.title=attr(Q,"_title");
attr(Q.parentNode,"ck","dispSubMail");
});
}
},cancelEditSubMail:function(K,L){
var M=this;
M._changeToEditSubMail(false);
M.updateMailSize();
},getSubMailFrom:function(K){
var L=this._moSubMails[K];
if(L)
{
return L.getMailInfo().from.name;
}
},goback:function(M,N,L){
var K=false;
if(this.getTipsInfo().unread>0)
{
K=true;
}
J.goback.call(this,M,N,L,K);
},isCurrentConv:function(M,K,L){
var N=this,O=N.getMailId();
QMAjax.send(T('/cgi-bin/readmail?sid=$sid$&s=$submail$&isAdMail=$isAdMail$&t=check_submail.json&mode=pre&action=checksubmail&mailid=$mailid$&submailid=$submailid$').replace({sid:getSid(),mailid:O,submailid:M,isAdMail:N._msModuleName=='qmAdConvMail'?1:0,submail:N._msModuleName=='qmAdConvMail'?'adsubmail':'submail'}),{method:'GET',onload:function(P,Q){
var R=evalValue(Q);
if(P)
{
if(R.ret=='1')
{
K.call(L,true);
N.updateNewMailTips(R.maildata);
LogKV({sValue:'convMail|newmail|tips|show'});
return;
}
}
K.call(L,false);
}});
},getTipsInfo:function(K){
return {'unread':this._mnNewSubMails||0};
},addNewSubMail:function(K){
var M=this,N=M.S(h._sSubMailStartDiv);
insertHTML(N,'afterEnd',K.mailstr);
var L=K.mailjson[2];
M._moMailInfo.oSubMails[K.mailjson[0].sIndex]=K.mailjson;
M._startSubMod({sContext:L.sContext,sModuleName:L.sModuleName,sAux:L.sAux});
},adjustTipsPosition:function(K,L){
var N=this,P=getTop(),M=12,O=finds('a[ck="checkNewSubMail"]',N._moWin)[0];
if(!N._fDoAdjust)
{
N._fDoAdjust=function(){
var Q=P.bodyScroll(N._moWin.document,'scrollTop');
if(L.top-Q+L.height/2<M)
{
O.style.top=Q-L.top+M+'px';
O.style.position='absolute';
}
else{
O.style.position='static';
}
};
}
N._fDoAdjust();
if(K)
{
P.addEvent(N._moWin,'scroll',N._fDoAdjust);
}
else{
P.removeEvent(N._moWin,'scroll',N._fDoAdjust);
}
},toggleNewMailTips:function(K){
var M=this,O=getTop(),N=finds('a[ck="checkNewSubMail"]',M._moWin),L=finds('a[ck="foldSubMail"]',M._moWin);
if(K)
{
M.adjustTipsPosition(true,O.calcPos(L[0],'json'));
show(N[0],true);
show(L[0],false);
}
else{
show(N[0],false);
show(L[0],true);
M.adjustTipsPosition(false);
}
},updateNewMailTips:function(K){
var M=this,L=S('newSubMailCnt',M._moWin);
M._mnNewSubMails++;
L.innerHTML=M._mnNewSubMails;
if(M._mnNewSubMails==1)
{
M.toggleNewMailTips(true);
}
M._moNewsSubMails.push(K);
},clearMailTips:function(){
var K=this,L=finds('a[ck="checkNewSubMail"]',K._moWin);
K._mnNewSubMails=0;
K._moNewsSubMails=[];
K.toggleNewMailTips(false);
K.updateMailSize();
},checkNewSubMail:function(K){
var O=this,Q=getTop(),L=O.S('submail_inner_body');
for(var U=0;U<O._moNewsSubMails.length;U++)
{
var P=O._moNewsSubMails[U];
if(U==O._moNewsSubMails.length-1)
{
P.mailjson[1].bInitReply=true;
}
O.addNewSubMail(P);
}
var N=finds('div[ck="dispSubMail"]',L),M=O.parentToContextDom(N[0]);
if(M)
{
_oSubMail=O._moSubMails[M.getAttribute('context')];
_oSubMail&&_oSubMail.dispSubMail(N[0]);
}
O._fakeReadMail();
O.clearCache();
var R=O._moConfig.folderid;
setFolderUnread(R,getFolderUnread(R)-1);
LogKV({sValue:'convMail|newmail|tips|click'});
Q.bodyScroll(O._moWin,'scrollTop',0);
O.clearMailTips();
}};
});
D.qmSubMail=inherit("qmSubMail",D.qmReadMail,function(J){
return {_setEvent:function(){
var K=this,L=K._moWin;
K.evt(["ck","md","dck","mot","mor"],h._sSubMail);
},_ready:function(){
var P=this,Q=P._moWin,K=P._moConfig,N=P._moMailInfo,L=P.S(h._sContentDiv);
if(!N.bAsyn)
{
K.bMusicManuPlay=K.sIndex!="0";
K.bBccToMe=B(N);
swapLink(L,N.disptype,Q,P.getMailId());
P._sendCopyAction(L);
P.checkDecryptMail();
P._startSubMod({sModuleName:"qmRemark"});
P._startSubMod({sModuleName:"qmAntiSpam"});
P._startSubMod({sModuleName:"qmPlayerParser"});
if(N.bInitReply==true)
{
var O=this._moWin.QMReadMail;
O.initQReply(P._moContext.sAux,P.getMailId());
}
else{
var M=P.S('quickreply');
removeSelf(M);
}
getTop().goUserInfo.deferget("DEF_TRANSLATE",function(R){
P._startSubMod({sModuleName:H});
P.rmLanguage(L);
});
P.showQBTipBtn();
P.osslogImgAttach_();
}
},getCMailId_:function(){
return this._moConfig.cmailid;
},selectSubMail:function(K){
var O=this,N=S("selectAllSubMail",O._moWin),L=true,M=0;
E(finds("input[ck='selectSubMail']",S("submail_inner_body",O._moWin)),function(P){
if(!P.checked)
{
L=false;
}
else{
M++;
}
});
N.checked=L;
O._moWin.QMReadMail.updateDelBtnCnt(M);
},selectSubMailOuter:function(K){
var M=this,L=finds("input[ck='selectSubMail']",K)[0];
L.checked=(L.checked?"":"checked");
M.selectSubMail(L);
},clearCache:function(){
getTop().QMMLCache.upVer();
rdVer(this._moConfig.cmailid,1);
},afterDecrytMail:function(){
var K=this;
showInfo("\u90AE\u4EF6\u89E3\u5BC6\u6210\u529F");
K._asyncGetSubMail();
K.clearCache();
},_asyncGetMail:function(L,K){
var M=this;
QMAjax.send(T("/cgi-bin/readmail?sid=$sid$&t=readsubmail&s=$s$&mailid=$mailid$&submailid=$submailid$&frid=$frid$&classalias=qmbox$index$&index=$index$&folderidAlias=$folderidAlias$").replace({sid:getSid(),mailid:M.getCMailId_(),submailid:M.getMailId(),frid:M._moMailInfo.frid,s:L,index:M._moContext.sAux,folderidAlias:getTop().S("ipt_folderid",getMainWin())&&getTop().S("ipt_folderid",getMainWin()).value}),{method:"GET",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(N,O){
var P=trim(O);
if(!N||P.indexOf("<!--cgi exception-->")==0)
{
K();
}
else{
K(evalValue(P));
M.checkPoison();
}
}});
},_setRefer:function(L,K){
var P=this,Q=K.innerHTML,M=0,O=GelTags("form",P.S(h._sContentDiv));
for(M=0;M<O.length;M++)
{
var N=O[M];
if(attr(N,"_refer_")=="1")
{
if(L.length)
{
if(M>=L.length)
{
break;
}
try{
N.innerHTML=L[M].replace(/<\/q>/g,"</blockquote>");
}
catch(R)
{
debug("error:innerHTML readonly "+M);
}
}
N.className=L?"":"qQmAIlcOnV";
}
}
if(L)
{
attr(K,"disp","0");
Q=Q.replace("\u663E\u793A","\u9690\u85CF");
}
else{
attr(K,"disp","1");
Q=Q.replace("\u9690\u85CF","\u663E\u793A");
}
K.innerHTML=Q;
},setCurrent:function(L,M,K){
var N=this._moWin.QMReadMail;
N.msCurrent="contentDiv"+this.context("sAux");
},unsetCurrent:function(L,M,K){
var N=this._moWin.QMReadMail;
N.msCurrent="";
},seek:function(){
var K=this,L=K._moWin;
scrollIntoMidView(K.S(h._sSubMail),L.document.body);
},newWinRead:function(L,M,K){
getTop().QMMLCache.upVer();
goNewWin(T([m,'&t=readmail&folderid=$folderid$&folderidAlias=$folderidAlias$']).replace({folderid:this._moConfig.folderid,mailid:M,folderidAlias:getTop().S("ipt_folderid",getMainWin())&&getTop().S("ipt_folderid",getMainWin()).value}),false);
},delMail:function(K){
var M=this;
var L=M._moWin.QMReadMail;
if(L.updateMailSize(true).nTotal<=1)
{
L.delMail(K);
return;
}
rmMail(M.attr(K,"opt")||0,extend(M.getCBInfo(),{oncomplete:function(N,O){
M.dealCustomUI('MailMethod',[N,'delSubMail',O]);
M._fandx(true,function(){
removeSelf(M.S(h._sSubMail));
L.notify("delsubmail");
return true;
});
return true;
}}));
M.clearCache();
},getCBInfo:function(){
var N=this,K=N._moConfig,M=N._moMailInfo,L=N.getFromInfo_();
;return {oWin:N._moWin,sFid:K.folderid,bML:false,oMail:[{sMid:N.getMailId(),bSys:K.bSys,bUnr:false,bSubUnr:false,bTms:false,sSName:L.name,sSEmail:L.addr}]};
},fReportSpamCallBack:function(){
var K=this;
return function(){
var L=K._moWin.QMReadMail;
K._fandx(true,function(){
removeSelf(K.S(h._sSubMail));
L._moMailInfo.nLen>1&&L.notify("delsubmail");
return true;
});
return L._moMailInfo.nLen-1?true:false;
};
},moreOpt:function(K,L){
var R=calcPos(K),U=this,V=U._moWin,P=V.document&&V.document.documentElement,Q,O=R[2],M=185,N=P?(P.clientHeight+P.scrollTop):0;
if(U._moConfig.bEncrypt)
{
Q=[{sId:"reportSpam",sItemValue:"\u4E3E\u62A5"},{sId:"PerDel",sItemValue:"\u5F7B\u5E95\u5220\u9664"}];
}
else{
Q=[{sId:"reportSpam",sItemValue:"\u4E3E\u62A5"},{sId:"PerDel",sItemValue:"\u5F7B\u5E95\u5220\u9664"},{sId:"fwgroup",sItemValue:"\u8F6C\u53D1\u5230\u7FA4\u90AE\u4EF6"},{sId:"note",sItemValue:"\u4FDD\u5B58\u5230\u8BB0\u4E8B\u672C"},{sId:"fweml",sItemValue:"\u4F5C\u4E3A\u9644\u4EF6\u8F6C\u53D1"},{sId:"dleml",sItemValue:"\u5BFC\u51FA\u4E3Aeml\u6587\u4EF6"},{sId:"mime",sItemValue:"\u663E\u793A\u90AE\u4EF6\u539F\u6587"},{sId:"code",sItemValue:"\u90AE\u4EF6\u6709\u4E71\u7801\uFF1F"}];
}
O+M>N&&(O-=(M+15));
new QMMenu({oEmbedWin:U._moWin,sId:"menu_"+L,oItems:Q,nX:R[3],nY:O,bAutoClose:false,onitemclick:function(X,W){
if(X=="reportSpam")
{
U._moAntiSpam.reportSpam(K,L,null,U.fReportSpamCallBack());
U.clearCache();
}
else if(X=="PerDel")
{
U.delMail({opt:"1"});
}
else{
U.optMail2({opt:X},L);
}
}});
},dispRef:function(K){
var L=this,M=L.attr(K,"disp");
if(!K||K.disabled)
{
return;
}
if(M=="1")
{
L._setRefer(true,K);
}
else if(M=="asyn")
{
K.disabled=true;
showProcess(1,true,"\u90AE\u4EF6\u8BFB\u53D6\u4E2D...",null,false);
L._asyncGetMail("refer",function(N){
showProcess(0);
if(N)
{
L._setRefer(N,K);
}
else{
showError("\u90AE\u4EF6\u8BFB\u53D6\u5931\u8D25");
}
K.disabled=false;
});
}
else if(M=="0")
{
L._setRefer(false,K);
}
},dispDetail:function(K){
var R=this,P=R._moMailInfo,V=R.attr(K,"disp"),N=R.S(h._sDetailBtn),M=R.S(h._sDetail),U=R.S(h._sSum),O=GelTags("img",N)[0],L=GelTags("a",N)[0],Q=R.S(h._sReferInfo);
if(V=="1")
{
if(isShow(M))
{
return;
}
show(U,false);
qmAnimation.expand(M);
O.title=L.title="\u9690\u85CF\u90AE\u4EF6\u8BE6\u60C5";
O.className="qm_conversation_input_hidemail";
L.innerHTML="\u9690\u85CF";
attr(N,"disp","0");
if(Q&&Q.innerHTML==""&&R._moWin.QMReadMail)
{
Q.innerHTML=R._moWin.QMReadMail.getSubMailFrom(P.refermailid)||"";
}
}
else{
if(isShow(U))
{
return;
}
qmAnimation.fold(M,{oncomplete:function(){
show(U,true);
}});
O.title=L.title="\u663E\u793A\u90AE\u4EF6\u8BE6\u60C5";
O.className="qm_conversation_input_showmail";
L.innerHTML="\u90AE\u4EF6\u8BE6\u60C5";
attr(N,"disp","1");
}
},_fandx:function(K,L){
debug("_fandx");
var U=this,W=getTop(),R=U.S(h._sFold),Q=U.S(h._sExpand),V=U.S(h._sSubMail);
if(K=='auto')
{
K=!isShow(R);
}
if(K)
{
show(R,true);
var N=R.scrollHeight;
show(R,false);
qmAnimation.fold(Q,{speed:"fast",to:N||48,oncomplete:function(){
if(L&&L()===true)
{
return;
}
setClass(V,"qm_con_fold clearfix");
show(Q,false);
show(R,true);
}});
}
else{
var M=R.scrollHeight;
show(R,false);
show(Q,true);
setClass(V,"qm_con_expand clearfix");
qmAnimation.expand(Q,{from:M,speed:"fast",tween:"Sine",oncomplete:L});
var P=W.finds("div[ui-type='attCon']",V)[0],O=P&&W.finds("a[ui-type='netdiskBind']",P)[0];
W.QMNetDisk&&P&&O&&setTimeout(function(){
W.QMNetDisk.route("tips","readmail",P,{offsetTop:80,offsetLeft:O.offsetLeft+O.clientWidth/2});
},3000);
}
},toReferMail:function(K){
var L=this;
L._moWin.QMReadMail.notify("toRefer",L._moMailInfo.refermailid);
},_asyncGetSubMail:function(){
var K=this;
showProcess(1,true,"\u90AE\u4EF6\u8BFB\u53D6\u4E2D...",null,false);
K._bAsyncGetSubMail=true;
K._asyncGetMail("submail",function(L){
K._bAsyncGetSubMail=false;
if(L)
{
showProcess(0);
K.S(h._sSubMail).innerHTML=L.mailstr;
typeof (K._moWin.showNetDisk)=="function"&&K._moWin.showNetDisk(K.S(h._sSubMail));
K._fandx(false);
K._moMailInfo.bAsyn=false;
K._ready();
y();
}
else{
showError("\u90AE\u4EF6\u8BFB\u53D6\u5931\u8D25");
}
});
},dispSubMail:function(K){
var M=this;
if(M._bAsyncGetSubMail)
{
return;
}
if(M.attr(K,"asyn")=="1")
{
M._asyncGetSubMail();
if(M.attr(K,"newmail")=="true")
{
M.attr(K,"newmail","false");
hasClass(K,"mailunread")&&rmClass(K,"mailunread");
!hasClass(K,"mailread")&&addClass(K,"mailread");
_oSubmailCnt=S("submailCnt",M._moWin);
if(_oSubmailCnt)
{
var L=parseInt(_oSubmailCnt.innerHTML);
if(L>1)
{
L--;
_oSubmailCnt.innerHTML=L+"/";
}
else{
show(_oSubmailCnt,0);
}
}
}
}
else{
if(M.attr(K,"newmail")=="true")
{
M.attr(K,"newmail","false");
hasClass(K,"mailunread")&&rmClass(K,"mailunread");
!hasClass(K,"mailread")&&addClass(K,"mailread");
}
M._fandx('auto');
}
}};
});
D.qmAdConvMail=inherit("qmAdConvMail",D.qmConvMail,function(J){
return {_pageReady:function(){
J._pageReady.call(this,arguments);
this._startSubMod({sModuleName:"qmAntiSpam"});
this._startSubMod({sModuleName:"qmMarkAdMail"});
this._showAD();
this.showQBTipBtn();
},_startSubMod:function(K){
var O=this,N,M=O._moMailInfo,L=extend({},O._moContext,K);
switch(L.sModuleName)
{case "qmAdSubMail":
var P=M.oSubMails[L.sAux]||[{},{}],Q=L.sContext||"";
P[0].cmailid=O.getMailId();
P[0].oMoveItems=O._moConfig.oMoveItems;
N=new D.qmAdSubMail(P[0],P[1],L);
Q&&(O._moSubMails[Q]=N);
break;
case "qmQReply":
var P=M.oSubMails["0"];
N=O._moQReply=new D.qmQReply(P[0],P[1],{fCheckBcc:function(){
callBack.call(O,O.checkBcc,arguments);
},fQReplyComplete:function(R){
O._qReplyComplete(R);
},s:"conv_send"},L);
break;
case "qmAntiSpam":
N=O._moAntiSpam=new D.qmAntiSpam(O._moConfig,M,L);
break;
case "qmMarkAdMail":
N=O._moMarkAdMail=new D.qmMarkAdMail(O._moConfig,M,L);
break;
}return N;
},reportSpam:function(M,N,L,K){
this._moAntiSpam||this._startSubMod({sModuleName:"qmAntiSpam"});
this._moAntiSpam.reportSpam(M,N,L,K);
},parentToContextDom:function(K){
return parents("div[module='qmAdSubMail']",K)[0];
},starMail:function(K){
var M=this,L=hasClass(K,"qm_ico_flagoff");
starMail(L,extend(M.getCBInfo(),{oncomplete:function(O,N){
M.dealCustomUI('MailMethod',[O,'starMail',N]);
M.clearCache();
return true;
}}));
},_showAD:function(){
var K=this._moMailInfo;
getTop().initGDTAD(this._moWin,{mailinfo:K});
}};
});
D.qmAdSubMail=inherit("qmAdSubMail",D.qmSubMail,function(J){
return {_asyncGetSubMail:function(){
var K=this;
K._bAsyncGetSubMail=true;
showProcess(1,true,"\u90AE\u4EF6\u8BFB\u53D6\u4E2D...",null,false);
K._asyncGetMail("adsubmail",function(L){
K._bAsyncGetSubMail=false;
if(L)
{
showProcess(0);
K.S(h._sSubMail).innerHTML=L.mailstr;
typeof (showNetDisk)=="function"&&showNetDisk(K.S(h._sSubMail));
K._fandx(false);
K._moMailInfo.bAsyn=false;
K._ready();
}
else{
showError("\u90AE\u4EF6\u8BFB\u53D6\u5931\u8D25");
}
});
},getCBInfo:function(){
var N=this,K=N._moConfig,M=N._moMailInfo,L=N.getFromInfo_();
;return {oWin:N._moWin,sFid:M.folderid,bML:false,oMail:[{sMid:N.getMailId(),bSys:K.bSys,bUnr:false,bSubUnr:false,bTms:false,sSName:L.name,oTCont:document.createElement("div"),sSEmail:L.addr,oStar:{}}]};
},_ready:function(){
var O=this,P=O._moWin,K=O._moConfig,M=O._moMailInfo,L=O.S(h._sContentDiv);
if(!M.bAsyn)
{
K.bMusicManuPlay=K.sIndex!="0";
K.bBccToMe=B(M);
swapLink(L,M.disptype,P,O.getMailId());
O.checkDecryptMail();
O._startSubMod({sModuleName:"qmRemark"});
O._startSubMod({sModuleName:"qmReadMail"});
O._startSubMod({sModuleName:"qmAntiSpam"});
O._startSubMod({sModuleName:"qmPlayerParser"});
if(O._moContext.sAux=="0")
{
var N=this._moWin.QMReadMail;
}
getTop().goUserInfo.deferget("DEF_TRANSLATE",function(Q){
O._startSubMod({sModuleName:H});
O.rmLanguage(L);
});
O.showQBTipBtn();
O.osslogImgAttach_();
}
},showMenu:function(K){
var M=this,L=M._moConfig,O=["menu",L.cmailid,L.sIndex].join("_"),N=M.getMailId();
new QMMenu({sId:O,oEmbedWin:M._moWin,oItems:M._generateMenuItem(),onitemclick:function(Q,P){
var U=0;
if(Q.indexOf("reply")!=0&&Q.indexOf("_")!=-1)
{
var R=Q.split("_");
Q=R[0];
U=R[1];
}
switch(Q)
{case "reply":
case "reply_all":
case "forward":
_sCpsMailUrl=n.replace({sid:getSid(),s:Q,mailid:N,disptype:L.disptype=="text"?"":"html"});
if(M.dealCustomUI('optMail',{sAction:'closePage',sType:Q,sUrl:_sCpsMailUrl})!==false)
{
goUrl(M._moWin,_sCpsMailUrl,true);
}
break;
case 'deleteMail':
M.delMail({opt:0});
break;
case "predeleteMail":
M.delMail({opt:1});
break;
case "report":
M._moAntiSpam.reportSpam(K,N,null,M.fReportSpamCallBack());
M.clearCache();
break;
case "print":
M.optMail2({opt:"print"},N);
break;
case "star":
M.starMail(true);
break;
case "unstar":
M.starMail(false);
case "markAsTag":
QMTag.setMailTag(U,M.getCBInfo());
break;
case "newTag":
QMTag.newMailTag(extend(M.getCBInfo(),{oncomplete:function(V,W){
}}));
break;
case "newFolder":
case "moveToFolder":
moveMailJs(Q==="moveToFolder"?P.sFolderId.split("_")[1]:"new",Q==="moveToFolder"?P.sItemValue:"",M._moMailInfo.folderid,extend(M.getCBInfo(),{oncomplete:function(){
M._fandx(true,function(){
removeSelf(M.S(h._sSubMail));
M._moWin.QMReadMail.notify("delsubmail");
return true;
});
return true;
}}));
break;
case "openNew":
M.openInNewWin_(N);
break;
case "remark":
M._moRemark.toggle();
break;
}
},nWidth:(getLocale()=="zh_CN")?100:160,nMaxWidth:180,nMaxItemView:15,bAnimation:true,onload:function(){
if(this.option("sId")===O)
{
var U=this,P=parseInt(U.option("nHeight"),10),Q=parseInt(U.option("nWidth"),10),R=calcPos(K),V=calcAdjPos(R.slice(0,4),Q,P,M._moWin,3);
U.option("nX",R[1]-Q).option("nY",V[0]);
}
},onshow:function(){
return;
if(this.option("sId")===O)
{
var U=this,P=parseInt(U.option("nHeight"),10),Q=parseInt(U.option("nWidth"),10),R=calcPos(K),V=calcAdjPos(R.slice(0,4),Q,P,M._moWin,3);
U.option("nX",R[1]-Q).option("nY",V[0]);
}
}});
},openInNewWin_:function(K){
var L=this;
goNewWin(T([m,'&t=readmail&folderid=$folderid$']).replace({folderid:L._moConfig.folderid,mailid:K}),false);
},_generateMenuItem:function(){
var N=this,M=[],L={nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:7px; overflow:hidden;"></div>'},K=N.getCBInfo().oMail[0]&&N.getCBInfo().oMail[0].bSys||false;
K||M.push({sId:"reply",sItemValue:"\u56DE\u590D"},{sId:"reply_all",sItemValue:"\u56DE\u590D\u5168\u90E8"});
M.push({sId:"forward",sItemValue:"\u8F6C\u53D1"},L,{sId:"deleteMail",sItemValue:"\u5220\u9664"},{sId:"predeleteMail",sItemValue:"\u5F7B\u5E95\u5220\u9664"});
K||M.push({sId:"report",sItemValue:"\u4E3E\u62A5"});
M.push(L,{sId:"print",sItemValue:"\u6253\u5370"});
M.push(L,{sId:"remark",sItemValue:"\u5907\u6CE8"});
if(!bnewwin||finds("div[module='qmAdSubMail']",S("submail_inner_body",N._moWin)).length>1)
{
M.push({sId:"openNew",sItemValue:"\u65B0\u7A97\u53E3\u6253\u5F00"});
}
return M;
},showDetail:function(){
var N=this,L=N._moMailInfo,K=N.S(h._sDetail),O=N.S(h._sSum),M=N.S(h._sReferInfo);
if(isShow(K))
{
return;
}
show(O,false);
qmAnimation.expand(K,{from:25});
if(M&&M.innerHTML=="")
{
M.innerHTML=N._moWin.QMReadMail.getSubMailFrom(L.refermailid)||"";
}
},hideDetail:function(){
var L=this,K=L.S(h._sDetail),M=L.S(h._sSum);
if(isShow(M))
{
return;
}
qmAnimation.fold(K,{oncomplete:function(){
show(M,true);
M.parentNode.style.zoom="";
M.parentNode.style.zoom="1";
}});
},showQBTip:function(K){
I.call(this,K);
},hideQBTip:function(L,M,K){
A.call(this,K);
}};
});
D.qmGroupQReply=inherit("qmGroupQReply",D._qmBaseDM,function(J){
return {_initMemVar:function(K,L,M){
var N=this;
N._moConfig=K;
N._moReplyMail=L;
N._moSendConfig=M;
N._moSource=N.S(h._sQSource);
},_setEvent:function(){
var K=this,M=K._moSource,O=K._moWin,N=getTop(),L=K.S(h._sQSendBtn);
K.evt(["ck"],K.S(h._sQReply));
addEvent(M,"focus",function(P){
if(!K._moEditor)
{
QMEditor.createEditor({editorId:"readMailGroupQuickSend",editorAreaWin:O,funclist:{tbExtern:"Mo"},photoCGI:getPhotoCGI(),isNoEditScroll:true,height:"160px",onkeydown:function(Q){
if(C(Q))
{
fireMouseEvent(L,"click");
}
},onload:function(){
K._moEditor=this;
K._fandx(false);
}}).initialize(QMEditor.getBreakLine(1,{family:goUserInfo.get("DEF_FONT_FAMILY"),size:goUserInfo.get("DEF_FONT_SIZE"),color:goUserInfo.get("DEF_FONT_COLOR")}),false,N.S("QMEditorArea",O).getAttribute("tIndex"));
if(!N.ComposeLib)
{
loadJsFileToTop(["$js_path$libcompose20f747.js"]);
if("1"==N.gbBackGroundSend)
{
loadJsFileToTop(["$js_path$backsend22db09.js"]);
}
}
}
else{
K._fandx(false);
}
});
if(!K._mnAutoSaveTimer)
{
K._mnAutoSaveTimer=O.setInterval(function(){
K.saveDraft();
},300000);
}
},saveDraft:function(){
var O=this,R=O._moWin,K=O._moConfig,M=O._moEditor,P=O._moSendConfig,U=M.getContent(false),Q=O.S(h._sQSource);
if(!M||U==O._msDraftContent||isShow(h._sAfterSendingDiv,R))
{
return;
}
else{
var N=O._moReplyMail,L={actiontype:"save",t:"compose_send.json",s:"group",qqgroupid:N.from.addr,groupname:N.from.name,subject:N.subject,content__html:U,fmailid:O.getMailId()};
waitFor(function(){
return !!(getTop().ComposeLib);
},function(V){
if(!V)
{
debug("\u52A0\u8F7DComposeLib\u5931\u8D25");
return;
}
ComposeLib.send(L,{sType:"group",onready:function(){
O._disableSendBtn(true);
showProcess(1,true,"\u90AE\u4EF6\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1","",false);
},oncomplete:function(W,X){
var Z=S(h._sQSource,R),Y=evalValue(X),aa=formatDate(new Date(),"%hh%:%mm%","%");
if(W)
{
O._msDraftMailId=Y.mailid;
O._msDraftContent=U;
showInfo(aa+" \u90AE\u4EF6\u6210\u529F\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1");
reloadLeftWin();
}
else{
showError(aa+" \u4FDD\u5B58\u8349\u7A3F\u5931\u8D25");
}
O._disableSendBtn(false);
}});
});
}
},_fandx:function(K){
var N=this,P=N._moSource,M=N._moEditor,O=N.S(h._sQSendBtn),L=isShow(P);
if(L==K)
{
return;
}
show(P,K);
show(N.S(h._sQMEditorArea).parentNode,!K);
show(N.S(h._sQMEditorToolArea).parentNode,!K);
if(K)
{
setClass(O,"grptitle_tab bd right").style.cssText="height:42px;width:44px;cursor:pointer";
setClass(O.parentNode,"qm_right bd_ccc").style.cssText="";
O.focus();
O.blur();
M.setContent(QMEditor.getBreakLine(1,{family:goUserInfo.get("DEF_FONT_FAMILY"),size:goUserInfo.get("DEF_FONT_SIZE"),color:goUserInfo.get("DEF_FONT_COLOR")}));
}
else{
setClass(O,"right bd_upload grptitle_tab_ bold").style.cssText="height:26px;width:96px;cursor:pointer;";
if(getLocale()=="zh_CN")
{
setClass(O.parentNode,"").style.cssText="border:none;clear:left;height:26px;padding:3px 0;width:449px;text-align:right;margin-top:2px;";
}
else{
setClass(O.parentNode,"").style.cssText="border:none;clear:left;height:26px;padding:3px 0;width:474px;text-align:right;margin-top:2px;";
}
show(N.S(h._sQMEditorArea).parentNode,true);
show(N.S(h._sQMEditorToolArea).parentNode,true);
M.focus();
}
},_disableSendBtn:function(K){
var L=this;
L.S(h._sQSendBtn).disabled=K;
return this;
},_getValidHtmlContent:function(K){
return K&&trim(K.replace(/<[^(img)]([^>]+)?>/gi,"").replace(/&nbsp;/g,""));
},getContent:function(){
return this._moEditor&&this._moEditor.getContent();
},disableConfirm:function(){
var K=this;
},send:function(L,M,K){
var R=this,W=R._moWin,P=R._moEditor,N=R._moConfig,U=R._moSendConfig,V=R.S(h._sQSource);
if(L.disabled)
{
return;
}
if(!P||!R._getValidHtmlContent(P.getContent(false)))
{
showError('\u8BF7\u5148\u8F93\u5165\u56DE\u590D\u5185\u5BB9');
P.focus();
}
else{
var Q=R._moReplyMail,O={qqgroupid:N.gid+"@groupmail.qq.com",subject:Q.subject||"\u65E0\u4E3B\u9898",content__html:P.getContent(),t:"compose.json",s:"group_send",fmailid:M};
waitFor(function(){
return !!(getTop().ComposeLib);
},function(X){
if(!X)
{
debug("\u52A0\u8F7DComposeLib\u5931\u8D25");
return;
}
var Z,Y=("1"==getTop().gbBackGroundSend&&(Z=getTop().BackGroundSend)),aa={sType:"group",onready:function(){
if(Y)
{
show(h._sAfterSendingDiv,true,W);
R._fandx(true);
}
else{
R._disableSendBtn(true);
}
},oncomplete:function(ab,ac){
if(Y)
{
if(ab)
{
callBack(U.fQReplyComplete,[ac]);
}
show(h._sAfterSendingDiv,false,W);
}
else{
if(ab)
{
getTop().QMMLCache.upVer();
R._disableSendBtn(false);
showInfo("\u60A8\u7684\u8BC4\u8BBA\u5DF2\u6210\u529F\u53D1\u8868");
R._fandx(true);
callBack(U.fQReplyComplete,[ac]);
}
else{
R._disableSendBtn(false);
}
setTimeout(function(){
P.resetFixHeight();
},500);
}
}};
if(Y)
{
Z.quickReply(O,"group",aa);
}
else{
ComposeLib.send(O,aa);
}
},100);
}
preventDefault(K);
}};
});
D.qmGroupMail=inherit("qmGroupMail",D.qmReadMail,function(J){
return {_pageReady:function(){
var N=this,O=N._moWin,M=N._moMailInfo,K=N._moConfig,L=CN(h._sContentClassName,getTop().getMainWin().document);
N._fakeReadMail();
E(L,function(P){
swapLink(P,M.disptype,O,N.getMailId());
});
N._readMailFinish();
initMailSelect(K.oMoveItems,true,K.bOpenTag=="1",O,K.folderid,K.bAutoTag);
N._startSubMod({sModuleName:"qmGroupQReply"});
N._startSubMod({sModuleName:"qmAntiSpam"});
getTop().goUserInfo.deferget("DEF_TRANSLATE",function(P){
N._startSubMod({sModuleName:H});
});
N._flushFolder();
getTop().QMWebpushTip&&getTop().QMWebpushTip.read(1,N.getMailId());
N.osslogImgAttach_();
},osslogImgAttach_:function(){
var L=this;
var K=finds('.attachitem .readmail_limit_img_size',L._moWin);
E(K,function(M){
var N=new Image();
N.onload=function(){
N.onload=null;
if(N.width>180||N.height>180)
{
LogKV({sValue:'readmail|attachment|imgtobig'});
}
};
N.src=M.src;
});
},getEditorContent:function(){
var K=this;
return K._moGroupQReply.getContent();
},disableConfirm:function(){
var K=this;
K._moGroupQReply.disableConfirm();
},_initSelectAllEvt:function(){
var L=getTop(),K=this,M=K._moWin;
addEvent(M.document,"keydown",function(N){
if(N.ctrlKey&&N.keyCode=="65")
{
K.doSelectAll(N,K.S(h._sContentDiv));
}
});
},_startSubMod:function(K){
var P=this,O,L=P._moConfig,N=P._moMailInfo,M=extend({},P._moContext,K);
switch(M.sModuleName)
{case "qmGroupQReply":
O=P._moGroupQReply=new D.qmGroupQReply(L,N,{fQReplyComplete:function(Q){
P._qReplyComplete(Q);
}},M);
break;
default:
O=J._startSubMod.call(P,K);
}return O;
},_qReplyComplete:function(K){
var L=evalValue(K),M=this.S(h._sSubMailStartDiv);
L&&insertHTML(M,"afterEnd",L.mailstr);
this.clearCache();
QMMailCache.setExpire();
},_makeMailListUrl:function(){
var K=this._moConfig;
return j.replace({sid:getSid(),folderid:K.folderid,s:K.subtmpl,more:"&t=mail_list_group&groupid="+K.groupid});
},showSeqContent:function(K){
var L=this,M=L.attr(K,"seq");
show(h._sGpContent+M,true);
show(h._sGpAttach+M,true);
},settingGroup:function(K,L){
var N=calcPos(K),O=this,P=O._moWin,M=O;
var Q=new QMMenu({oEmbedWin:O._moWin,sId:"menu_"+h._sSettingGroup,nWidth:getLocale()=="zh_CN"?290:454,oItems:[{nHeight:"auto",sItemValue:q.replace({bReject:M._moConfig.bReject,bNewreply:M._moConfig.bNewreply,bNotify:M._moConfig.bNotify,sid:getSid()})}],nX:N[3],nY:N[2],onload:function(){
var U=this,R=U.S("container");
U.S("qqnotify").onclick=U.S("noqqnotify").onclick=function(){
show(U.S("setnewdiv"),true);
};
U.S("reject").onclick=function(){
show(U.S("setnewdiv"),false);
};
addEvent(U.S("cancel"),"click",function(){
Q.toggle();
});
addEvent(U.S("save"),"click",function(){
var V={};
E(GelTags("input",R),function(W){
if(W.type=="radio"&&W.checked)
{
V[W.name]=W.value;
}
});
QMAjax.send(T(['/cgi-bin/grouplist?t=mail_mgr2&mailaction=groupmgr','&oper1=$oper1$&oper2=$oper2$&sid=$sid$&gid=$gid$@groupmail.qq.com']).replace({oper1:V["qqnotify"]||"",oper2:V["unread"]||"",sid:getSid(),gid:M._moConfig.gid}),{method:"GET",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(W,X){
var Y=true;
if(W)
{
try{
var Z=evalValue(X);
showInfo("\u7FA4\u90AE\u4EF6\u8BBE\u7F6E\u4FDD\u5B58\u6210\u529F");
Q.toggle();
P.QMReadMail.clearCache();
QMMailCache.setExpire();
extend(M._moConfig,Z);
}
catch(aa)
{
Y=false;
}
}
else{
Y=false;
}
!Y&&showError("\u64CD\u4F5C\u5931\u8D25");
}});
});
}});
},rejectGroup:function(L,M,K){
var N=this,O=N._moWin,P=N.attr(L,"opt");
QMAjax.send(o.replace({sid:getSid(),gid:N._moConfig.gid,yn:P}),{method:"GET",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(Q,R){
var U=evalValue(R);
if(!Q||R.indexOf("<!--cgi exception-->")==0)
{
showError("\u64CD\u4F5C\u5931\u8D25");
}
else{
toggle(h._sRejectGroupY,O);
toggle(h._sRejectGroupN,O);
showInfo((P=="yes"?"\u6210\u529F\u62D2\u6536\u8BE5\u7FA4\u7684\u90AE\u4EF6":"\u6210\u529F\u5F00\u542F\u63A5\u6536\u8BE5\u7FA4\u7684\u90AE\u4EF6"));
O.QMReadMail.clearCache();
QMMailCache.setExpire();
}
}});
},adminReject:function(K,L){
var M=getTop(),N=T("/cgi-bin/groupmail_close?groupid=$gid$&mailid=$mailid$&action=$action$&sid=$sid$").replace({gid:M.attr(K,'gid'),mailid:L,action:M.attr(K,'action'),sid:M.getSid()});
M.QMAjax.send(N,{onload:function(O,P){
if(O)
{
var Q=M.evalValue(P);
if(Q.retCode==0)
{
M.showInfo(Q.action=="wall"?"\u5C4F\u853D\u7FA4\u90AE\u4EF6\u6210\u529F":"\u53D6\u6D88\u5C4F\u853D\u7FA4\u90AE\u4EF6\u6210\u529F");
M.rdVer(L,1);
if(Q.action=="wall")
{
M.attr(K,'action',"unwall");
K.innerHTML="\u53D6\u6D88\u5C4F\u853D";
}
else{
M.attr(K,'action',"wall");
K.innerHTML="\u5C4F\u853D\u6B64\u90AE\u4EF6";
}
M.reloadAllFrm();
}
else if(Q.retCode==1000)
{
M.showInfo(Q.action=="wall"?"\u6B64\u7FA4\u90AE\u4EF6\u5DF2\u88AB\u5C4F\u853D":"\u6B64\u7FA4\u90AE\u4EF6\u672A\u88AB\u5C4F\u853D");
}
else{
M.showInfo("\u64CD\u4F5C\u5931\u8D25");
}
}
}});
},showVoter:function(L,K){
var N=this,Q;
if(!L)
{
return;
}
if(Q=L.getAttribute("vid"))
{
toggle("voter_"+Q,_oWin);
}
else{
var P=N.S("voter_play_box"),O=GelTags("tr",P),M=(K==undefined||(typeof K=="string"))?!L.getAttribute("opt"):K;
for(var R=0,U=O.length;R<U;R++)
{
if(O[R].id)
{
qmAnimation[M?"expand":"fold"](O[R],{speed:"fast"});
}
}
L[M?"setAttribute":"removeAttribute"]("opt","1");
L.innerHTML=L.getAttribute(M?"hideText":"showText");
}
}};
});
D.qmAdSubMailML=inherit("qmAdSubMailML",D.qmAdSubMail,function(J){
var K=getTop();
return {_init:function(){
setDblClickNoSel(this.S('expand'));
return J._init.apply(this,arguments);
},_generateMenuItem:function(){
var P=this,O=[],N={nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:7px; overflow:hidden;"></div>'},M=P.getCBInfo().oMail[0]&&P.getCBInfo().oMail[0].bSys||false;
var L=P._moMailInfo.bAsyn;
M||O.push({sId:"reply",sItemValue:"\u56DE\u590D"},{sId:"reply_all",sItemValue:"\u56DE\u590D\u5168\u90E8"});
O.push({sId:"forward",sItemValue:"\u8F6C\u53D1"},N,{sId:"deleteMail",sItemValue:"\u5220\u9664"},{sId:"predeleteMail",sItemValue:"\u5F7B\u5E95\u5220\u9664"});
M||O.push({sId:"report",sItemValue:"\u4E3E\u62A5"});
O.push(N,{sId:"print",sItemValue:"\u6253\u5370"});
L||O.push(N,{sId:"remark",sItemValue:"\u5907\u6CE8"});
if(!bnewwin||finds("div[module='qmAdSubMail']",S("submail_inner_body",P._moWin)).length>1)
{
O.push({sId:"openNew",sItemValue:"\u65B0\u7A97\u53E3\u6253\u5F00"});
}
return O;
},openInNewWin_:function(L){
goNewWin(this._getReadMailURL());
rdVer(this.getCMailId_(),1);
},_getReadMailURL:function(){
var L=this;
var M=L.getCMailId_();
return RD.getURL(null,M,false,3,L._moConfig.folderid,0,false,0,'');
},readMoreMails:function(){
goNewWin(this._getReadMailURL()+'&s=adsubmail');
rdVer(this.getCMailId_(),1);
},_setEvent:function(){
var L=this;
L.evt(["ck","md","dck","mot","mor"],h._sSubMail);
},_asyncGetSubMail:function(L){
var N=this;
var M=N.S('contentDivWarp');
var O=N._moWin;
N._bAsyncGetSubMail=true;
N._asyncGetMail('',function(P){
N._bAsyncGetSubMail=false;
if(P)
{
N._moMailInfo.bAsyn=false;
if(P.mailid)
{
N._moContext.sContext=P.mailid;
}
N._moMailInfo.disptype=P.disptype;
L(P);
}
else{
showError("\u90AE\u4EF6\u8BFB\u53D6\u5931\u8D25");
}
});
},_asyncGetMail:function(M,L){
var N=this;
QMAjax.send(N.getAsyncMailUrl(),{method:"GET",onload:function(O,P){
var Q=trim(P);
if(!O||Q.indexOf("<!--cgi exception-->")==0)
{
L();
}
else{
L(K.evalValue(K.gbIsIE?Q.replace(/\\x3cform/ig,'<from'):Q));
}
}});
},getAsyncMailUrl:function(L){
var M=this;
var N=M.getCMailId_();
return T("$cgi$sid=$sid$&t=readsubmail&mailid=$mailid$&frid=$frid$&index=$index$&fromModule=qmAdSubMailML&classalias=qmbox$index$&s=$s$&maxage=$maxage$&base=$base$&ver=$ver$").replace({cgi:L?'':'/cgi-bin/readmail?',sid:getSid(),mailid:N,frid:M._moMailInfo.frid,index:M._moContext.sAux,s:N.charAt(0)=='C'?'quickreadmail':'',maxage:rdVer.maxage(N),base:rdVer("BaseVer",0),ver:rdVer(N,0,234)});
},_insertHTML:function(M,L){
var V=this;
var X=V._moWin;
var W=V.S(h._sSubMail);
var P=V.S('contentDivWarp');
var Q=V.S(h._sExpand);
var R;
Q.style.height=0;
Q.style.borderWidth='0px';
show(Q,true);
P.innerHTML=M.mailstr;
var N=false;
function O()
{
if(!N)
{
N=true;
Q.style.borderWidth='1px';
V._fandx(false,function(){
Q.style.zoom='1';
addClass(Q,'expand_done');
X.setTimeout(function(){
V._gotoScrollTop();
callBack(L);
},V._nIntervalFandx2scroll);
});
}
}
R=V.S('readxqqmailIfarme');
if(R)
{
waitFor(function(){
return R.contentWindow.bindIframeWinHeight;
},function(Y){
if(Y)
{
R.contentWindow.bindIframeWinHeight(function(Z){
if(Z&&Z>0)
{
R.style.height=Z+'px';
O();
}
});
}
else{
O();
}
});
}
else{
X.setTimeout(O,100);
}
var U;
waitFor(function(){
U=P.getElementsByTagName('iframe');
for(var Y=U.length;Y--;)
{
if(U[Y].contentWindow.document.body)
{
return true;
}
}
return false;
},function(Y){
if(Y)
{
X.setTimeout(function(){
E(U,function(Z){
try{
addEvent(Z.contentWindow.document.body,'dblclick',function(){
V.dispSubMail();
});
}
catch(aa)
{
debug('\u4E3A\u5E7F\u544A\u90AE\u4EF6\u7684iframe\u7ED1\u5B9Adblclick\u4E8B\u4EF6\u5931\u8D25');
}
});
},800);
}
});
(typeof (X.showNetDisk)=="function")&&X.showNetDisk(W);
V._ready();
y();
},_nIntervalFandx2scroll:0,_nFandxSpeed:400,_nScrollSpeed:150,_nMaxScrollTop:200,_getFandxMaxHeight:function(){
var O=this;
var P=O._moWin;
var M=O.S('mHead');
var N=bodyScroll(P,'clientHeight')+10;
var L=Math.min(N,O.S('contentDivWarp').clientHeight+M.clientHeight);
return Math.max(0,Math.min(L,bodyScroll(P,'scrollTop')+N-calcPos(M,'json').top));
},_getFandxSpeedCfg:function(N,L,M){
N.speed=L*Math.abs(N.from-N.to)/M;
debug('maillist_ad fandx speed: '+N.speed);
return N;
},_fandx:function(L,M){
var R=this,W=R._moWin,V=getTop(),Q=R.S(h._sFold),P=R.S(h._sExpand),U=R.S(h._sSubMail);
if(L=='auto')
{
L=!isShow(Q);
}
if(L)
{
show(Q,true);
show(Q,false);
qmAnimation.play(P,R._getFandxSpeedCfg({tween:"Sine",easing:"easeOut",from:R._getFandxMaxHeight(),to:Q.scrollHeight||48,onaction:function(X){
P.style.height=X+'px';
},oncomplete:function(Y,X){
if(M&&M(X)===true)
{
return;
}
setClass(U,"qm_con_fold clearfix");
show(P,false);
show(Q,true);
}},R._nFandxSpeed,600));
}
else{
show(Q,false);
show(P,true);
setClass(U,"qm_con_expand clearfix");
qmAnimation.play(P,R._getFandxSpeedCfg({from:Q.scrollHeight||48,to:R._getFandxMaxHeight(),tween:"Sine",easing:"easeOut",onaction:function(X){
P.style.height=X+'px';
},oncomplete:function(Y,X){
P.style.height='auto';
callBack(M,[X]);
}},R._nFandxSpeed,600));
var O=V.finds("div[ui-type='attCon']",U)[0],N=O&&V.finds("a[ui-type='netdiskBind']",O)[0];
V.QMNetDisk&&O&&N&&W.setTimeout(function(){
V.QMNetDisk.route("tips","readmail",O,{offsetTop:80,offsetLeft:N.offsetLeft+N.clientWidth/2});
},3000);
}
},dispSubMail:function(L){
var N=this;
var O=N._moWin;
if(N._bAsyncGetSubMail)
{
return;
}
var M=N.S(h._sExpand);
if(!isShow(M)&&N._moMailInfo.bAsyn)
{
showProcess(1,true,"\u90AE\u4EF6\u8BFB\u53D6\u4E2D...",null,false);
N._prevGotoScrollTop();
N._saveScrollTop();
N._asyncGetSubMail(function(P){
N._insertHTML(P,function(){
if(N.attr(L,"newmail")=="true")
{
N.attr(L,"newmail","false");
hasClass(L,"mailunread")&&rmClass(L,"mailunread");
!hasClass(L,"mailread")&&addClass(L,"mailread");
setMailRead(false,extend(QMMailList.getCBInfo(N._moWin,N.getCMailId_()),{bNoShowFilter:true,bNoSendMailMgr:true}));
}
showProcess(0);
});
});
}
else{
if(isShow(N.S(h._sFold)))
{
N._prevGotoScrollTop();
N._saveScrollTop();
N._fandx(false,function(P){
if(!P)
{
O.setTimeout(function(){
N._gotoScrollTop();
},N._nIntervalFandx2scroll);
}
});
}
else{
N._loadScrollTop(function(P){
if(!P)
{
O.setTimeout(function(){
N._fandx(true);
},N._nIntervalFandx2scroll);
}
});
}
}
},_saveScrollTop:function(){
var L=this;
var M=L._moWin;
L._nPrevItemScrollPer=(calcPos(L.S(h._sFold).parentNode,'json').top-bodyScroll(M,'scrollTop'))/bodyScroll(M,'clientHeight');
},_loadScrollTop:function(L){
var N=this;
var O=N._moWin;
var M=0;
if(N._nPrevItemScrollPer!==undefined)
{
M=calcPos(N.S(h._sFold).parentNode,'json').top-(N._nPrevItemScrollPer||0)*bodyScroll(O,'clientHeight');
}
qmAnimation.play(O.document.body,N._getFandxSpeedCfg({win:O,from:N._getScrollFrom(M),to:M,tween:'Sine',easing:"easeIn",onaction:function(P){
bodyScroll(O,'scrollTop',P);
},oncomplete:function(Q,P){
bodyScroll(O,'scrollTop',M);
callBack(L,[P]);
}},N._nScrollSpeed,N._nMaxScrollTop));
},_prevGotoScrollTop:function(){
this._moWin._nSubMailGotoScrollTopMailId=this.getCMailId_();
},_gotoScrollTop:function(){
var O=this;
var Q=O._moWin;
if(this._moWin._nSubMailGotoScrollTopMailId!=this.getCMailId_())
{
return false;
}
var P=O.S(h._sSubMail);
var N=calcPos(P,'json');
var L=Math.max(N.top-5,0);
var M=bodyScroll(Q,'clientHeight');
qmAnimation.play(Q.document.body,O._getFandxSpeedCfg({win:Q,from:O._getScrollFrom(L),to:L,tween:'Sine',easing:"easeOut",onaction:function(R){
bodyScroll(Q,'scrollTop',R);
},oncomplete:function(U,R){
bodyScroll(Q,'scrollTop',L);
}},O._nScrollSpeed,O._nMaxScrollTop));
return true;
},_getScrollFrom:function(L){
var N=this;
var O=N._moWin;
var M=bodyScroll(O,'scrollTop');
if(L>M)
{
M=Math.max(L-N._nMaxScrollTop,M);
}
else{
M=Math.min(L+N._nMaxScrollTop,M);
}
return M;
},delMail:function(L){
var N=this;
var M=N.getCBInfo();
M.oMail[0].sMid=N.getCMailId_();
rmMail(N.attr(L,"opt")||0,extend(M,{oncomplete:function(O,P){
N.dealCustomUI('MailMethod',[O,'delSubMail',P]);
N._fandx(true,function(){
removeSelf(N.S(h._sSubMail));
});
return true;
}}));
rdVer(N.getMail,1);
},fReportSpamCallBack:function(){
var L=this;
return function(){
L._fandx(true,function(){
removeSelf(L.S(h._sSubMail));
});
return true;
};
}};
});
v.QMReadMail=D;
})(window);
