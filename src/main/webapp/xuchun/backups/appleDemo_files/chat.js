window.$P=function(){};var lpMTagConfig={lpTagLoaded:false,lpTagSrv:"storechat.apple.com",pageStartTime:(new Date()).getTime(),deploymentID:"1",sendCookies:false};lpMTagConfig.deploymentConfigPath=lpMTagConfig.lpTagSrv+"/visitor/addons/deploy.asp";lpMTagConfig.lpLoadScripts=function(){lpAddMonitorTag(lpMTagConfig.lpProtocol+"://"+lpMTagConfig.deploymentConfigPath+"?site="+lpMTagConfig.lpNumber+"&d_id="+lpMTagConfig.deploymentID)};function lpAddMonitorTag(b){if(!lpMTagConfig.lpTagLoaded){if(typeof(b)=="undefined"||typeof(b)=="object"){if(lpMTagConfig.lpMTagSrc){b=lpMTagConfig.lpMTagSrc}else{if(lpMTagConfig.lpTagSrv){b=lpMTagConfig.lpProtocol+"://"+lpMTagConfig.lpTagSrv+"/hcp/html/mTag.js"}else{b="/hcp/html/mTag.js"}}}if(b.indexOf("http")!==0){b=lpMTagConfig.lpProtocol+"://"+lpMTagConfig.lpServer+b+"?site="+lpMTagConfig.lpNumber}else{if(b.indexOf("site=")<0){if(b.indexOf("?")<0){b=b+"?"}else{b=b+"&"}b=b+"site="+lpMTagConfig.lpNumber}}var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("charset","iso-8859-1");a.setAttribute("src",b);document.getElementsByTagName("head").item(0).appendChild(a)}}lpMTagConfig.calculateSentPageTime=function(){var a=(new Date()).getTime()-lpMTagConfig.pageStartTime;lpAddVars("page","pageLoadTime",Math.round(a/1000)+" sec")};if(typeof(lpMTagConfig.pageVar)=="undefined"){lpMTagConfig.pageVar=[]}if(typeof(lpMTagConfig.sessionVar)=="undefined"){lpMTagConfig.sessionVar=[]}if(typeof(lpMTagConfig.visitorVar)=="undefined"){lpMTagConfig.visitorVar=[]}if(typeof(lpMTagConfig.onLoadCode)=="undefined"){lpMTagConfig.onLoadCode=[]}if(typeof(lpMTagConfig.dynButton)=="undefined"){lpMTagConfig.dynButton=[]}if(typeof(lpMTagConfig.ifVisitorCode)=="undefined"){lpMTagConfig.ifVisitorCode=[]}function lpAddVars(b,a,c){if(a.indexOf("OrderTotal")!==-1||a.indexOf("OrderNumber")!==-1){if(c===""||c===0){return}else{lpMTagConfig.sendCookies=false}}c=lpTrimSpaces(c.toString());if(a.length>50){a=a.substr(0,50)}if(c.length>50){c=c.substr(0,50)}switch(b){case"page":lpMTagConfig.pageVar[lpMTagConfig.pageVar.length]=escape(a)+"="+escape(c);break;case"session":lpMTagConfig.sessionVar[lpMTagConfig.sessionVar.length]=escape(a)+"="+escape(c);break;case"visitor":lpMTagConfig.visitorVar[lpMTagConfig.visitorVar.length]=escape(a)+"="+escape(c);break;default:break}}function onloadEMT(){var b=document.cookie,a=window.lpMTag;if(a.lpBrowser=="IE"&&b.length>1000){lpMTagConfig.sendCookies=false}}function lpTrimSpaces(a){return a.replace(/^\s+|\s+$/g,"")}function lpSendData(c,b,d){var a=window.lpMTag;if(typeof(a)!="undefined"&&typeof(a.lpSendData)!="undefined"){a.lpSendData(c.toUpperCase()+"VAR!"+b+"="+d,true)}}try{if(typeof(lpCountryCode)=="undefined"){lpCountryCode="us"}if(typeof(lpAddVars)!="undefined"){lpAddVars("page","lpCountryCode",lpCountryCode)}if(typeof(lpSegment)=="undefined"){lpSegment="consumer"}if(typeof(lpAddVars)!="undefined"){lpAddVars("page","lpSegment",lpSegment)}if(typeof(lpUnit)=="undefined"){lpUnit="sales"}if(typeof(lpAddVars)!="undefined"){lpAddVars("page","lpUnit",lpUnit)}if(typeof(lpLanguage)=="undefined"){lpLanguage="english"}if(typeof(lpAddVars)!="undefined"){lpAddVars("session","lpLanguage",lpLanguage)}lpMTagConfig.defaultInvite="chat-"+lpCountryCode+"-"+lpSegment+"-"+lpUnit+"-"+lpLanguage}catch(e){}lpMTagConfig.onLoadCode[lpMTagConfig.onLoadCode.length]=onloadEMT;lpMTagConfig.onLoadCode[lpMTagConfig.onLoadCode.length]=function(){if(typeof(lpMTagConfig.dynButton)!="undefined"){for(var a=0;a<lpMTagConfig.dynButton.length;a++){if(typeof(lpMTagConfig.dynButton[a].pid)!=="undefined"&&document.getElementById(lpMTagConfig.dynButton[a].pid)===null){lpMTagConfig.dynButton.splice(a,1);a--}}}};lpMTagConfig.onLoadAll=function(){lpMTagConfig.calculateSentPageTime();lpMTagConfig.lpLoadScripts()};lpMTagConfig.dynButton[lpMTagConfig.dynButton.length]={name:"chat-"+lpCountryCode+"-"+lpSegment+"-"+lpUnit+"-"+lpLanguage+"-1",pid:"lpButton1",afterStartPage:true};lpMTagConfig.dynButton[lpMTagConfig.dynButton.length]={name:"chat-"+lpCountryCode+"-"+lpSegment+"-"+lpUnit+"-"+lpLanguage+"-2",pid:"lpButton2",afterStartPage:true};lpMTagConfig.dynButton[lpMTagConfig.dynButton.length]={name:"chat-"+lpCountryCode+"-"+lpSegment+"-"+lpUnit+"-"+lpLanguage+"-3",pid:"lpButton3",afterStartPage:true};lpMTagConfig.dynButton[lpMTagConfig.dynButton.length]={name:"chat-"+lpCountryCode+"-"+lpSegment+"-"+lpUnit+"-"+lpLanguage+"-4",pid:"lpButton4",afterStartPage:true};lpMTagConfig.dynButton[lpMTagConfig.dynButton.length]={name:"chat-"+lpCountryCode+"-"+lpSegment+"-"+lpUnit+"-"+lpLanguage+"-5",pid:"lpButton5",afterStartPage:true};if(typeof(lpMTagConfig.dynButton)!="undefined"){lpMTagConfig.dynButton[lpMTagConfig.dynButton.length]={name:"drawer-chat",pid:"ConciergeChat",afterStartPage:true,ovr:"lpMTagConfig.db1"};lpMTagConfig.dynButton[lpMTagConfig.dynButton.length]={name:"drawer-concierge-call",pid:"ConciergeHighTouchVoice",afterStartPage:true,ovr:"lpMTagConfig.db1"};lpMTagConfig.dynButton[lpMTagConfig.dynButton.length]={name:"drawer-lowtouch-call",pid:"ConciergeLowTouchVoice",afterStartPage:true,ovr:"lpMTagConfig.db1"};lpMTagConfig.dynButton[lpMTagConfig.dynButton.length]={name:"drawer-screencast",pid:"ConciergeScreencast",afterStartPage:true,ovr:"lpMTagConfig.db1"}}Package("apple.chat");Event.onLoad(function(){var f=window,a,b=f.chatConfig,d=Element.query,c=$("page")?$("page"):d(".page")?d(".page"):$("apple-header")&&$("apple-header").parentElement?$("apple-header").parentElement:null;if(c&&c.id&&coherent.View.viewLookup[c.id]){c=Element.queryAll(".chat").length===1?d(".chat").parentElement:d(".masthead")&&!d(".chat:not(.masthead .chat)")?d(".masthead"):d(".guide-footer")?d(".guide-footer"):null;if(c&&c.id&&coherent.View.viewLookup[c.id]){c=c.parentElement?c.parentElement:null}}if(b&&d(".chat")){if(b.chat&&f.chatButtonConfig&&c){a=new apple.chat.ChatViewController(c)}else{if(b.chat&&b.chat.lpServer){a=new apple.chat.Chat();apple.chat.applyLPConfig(b.chat)}}}});apple.chat.ChatViewController=Class.create(coherent.View,{__structure__:{".cchat":coherent.Button({action:"cchatSelected"}),".htchat":coherent.Button({action:"htchatSelected"}),".cc2c":coherent.Button({action:"cc2cSelected"}),".htc2c":coherent.Button({action:"htc2cSelected"}),".httour":coherent.Button({action:"httourSelected"})},keyDependencies:{enableBtns:"configLoaded",createForm:"configLoaded",revealBtns:"chatType",revealDrawerToggler:"chatType",enableDrawerBtns:"drawerOpen",revealDrawer:"drawerOpen",revealneedHelpDrawer:"needhelpOpen"},init:function(){var g=Element,f=g.queryAll(".concierge-drawer .concierge-button"),a=g.queryAll("#needhelp_drawer .box > *"),n=this,c=Event.observe,d={key:"l0qu4C!0u5"};this.drawer=g.query(".concierge-drawer");this.drawerTogglerContainer=$("masthead-chat-view");this.drawerToggler=$("masthead-chat-button");this.ipsChatInvite=g.query(".guide-footer .invitation-to-chat");this.needhelp=$("needhelp");this.needhelpDrawer=$("needhelp_drawer");this.setValueForKey(false,"needhelpOpen");this.setValueForKey(false,"drawerOpen");this.btnIndex=1;if(this.drawer&&coherent.Browser.IE!==8){Element.addClassName(this.drawer,"opacity")}if(this.drawerToggler){c(this.drawerToggler,"click",this.drawerTogglerSelected.bind(this));c(this.drawerToggler,"onmouseout",this.onmouseleave.bind(this))}var m={owner:this,onmouseenter:this.onmouseenter,onmouseleave:this.onmouseleave};coherent.page.addTrackingInfo("concierge-drawer",m);if(f.length>0){f.forEach(function(o){c(o,"click",n.toggleDrawer.bind(n))})}this.jsonUrl=window.chatButtonConfig.availURL;if(this.jsonUrl&&JSONRPC){this.jsonRequest=JSONRPC.get(this.jsonUrl,d);this.jsonRequest.addMethods(this.requestComplete.bind(this),this.requestFail.bind(this));this.requestTimeout.delay(15000)}Event.observe(document.getElementById("u_chat"),"keydown",this.keydown.bindAsEventListener(this));Event.observe(document.body,"click",this.closeMenu.bindAsEventListener(this));Event.observe(document.body,"touchend",this.closeMenu.bindAsEventListener(this));if(a.length>0){a.forEach(function(o){c(o,"click",n.needhelpLinksClick.bindAsEventListener(n))})}if(this.needhelp){var k=$("u_chat"),b=$("u_tele"),h=$("utilitynav");k.style.display="none";this.needhelp.setAttribute("aria-haspopup","true");Event.observe(this.needhelp,"click",this.needHelptoggleDrawerSelected.bind(this));Event.observe(this.needhelp,"keydown",this.keydownneedhelp.bindAsEventListener(this));Event.observe(this.needhelpDrawer,"keydown",this.keydownneedhelpDrawer.bindAsEventListener(this));Event.observe(this.needhelpDrawer,"change",this.revealneedHelpDrawer.bind(this));Event.observe(this.needhelpDrawer,"onmouseout",this.onmouseleave.bind(this));Event.observe(this.needhelpDrawer,"onmouseleave",this.onmouseleave.bind(this));Event.observe(this.needhelp,"onmouseout",this.onmouseleave.bind(this));this.needhelpParts={caslink:"Need help with a product you own?",orderstatuslink:"Need help with an order you placed?",chatlink:"Need help buying products you want?"}}},requestFail:function(a){a=a||"JSON load failure.";window.console.log(a+" ["+this.jsonUrl+"]")},requestTimeout:function(){try{this.jsonRequest.cancel()}catch(a){}},requestComplete:function(a){this.btnConfig=a.buttons;this.baseUrl=a.url;this.routingConfig=a.webChatRouting;this.urlMsg=a.urlMsg;if(this.btnConfig&&this.baseUrl&&this.routingConfig){this.setValueForKey(true,"configLoaded")}else{this.requestFail("Required properties not found in JSON.")}},createForm:function(){var m=document,o=this.routingConfig,f=window.chatConfig.chat.page,d,g,n,h="",b,k={WEB_CHAT_TYPE:"",WEB_CHAT_ROUTING_ID:"",WEB_CHAT_ORIGIN:"",WEB_CHAT_REFER_URL:encodeURI(m.referrer.split("#")[0]),WEB_CHAT_PAGE_URL:encodeURI(window.location.href.split("#")[0])},a=this.baseUrl,c;if(this.configLoaded&&o&&f&&a&&!m.forms.chatform){k.WEB_CHAT_TOP_QS_CAT="";k.WEB_CHAT_NI_CHAT_MESSAGE="";k.WEB_CHAT_NI_CHAR_TIMER="";k.WEB_CHAT_TOP_QS="";k.WEB_CHAT_NI_CHAT="";for(n in f){if(f.hasOwnProperty(n)){d=f[n];k[d.name]=d.value}}for(g in o){if(o.hasOwnProperty(g)){k[g]=o[g]}}for(b in k){if(k.hasOwnProperty(b)){h+='<input type="hidden" id="'+b+'" name="'+b+'" value="'+k[b]+'" />'}}c=m.createElement("form");c.id="chatform";c.action=a;c.target="chatWin";c.method="post";c.innerHTML=h;m.body.appendChild(c)}},enableBtns:function(){var b=this.btnConfig,a;if(!this.chatType){for(a in b){if(b.hasOwnProperty(a)&&b[a].status==="true"){this.setValueForKey(a,"chatType")}}}},revealBtns:function(){var c=Element,b=c.queryAll("."+this.chatType),a=this,d="lpButton";if(b.length>0&&this.chatType!==this.trackedType){b.forEach(function(f){c.addClassName(f,"chat-online");a.addLink(f)});this.trackedType=this.chatType;a.subMenuElements=c.queryAll("#concierge-drawer a")}},addLink:function(a){var c=Element,d=a.firstElementChild?a.firstElementChild:a.firstChild&&a.firstChild.nodeType===1?a.firstChild:null,b=document.createElement("a");b.setAttribute("href","#");if(c.hasClassName(a,"concierge-button")&&!c.hasClassName(a,"handheld")){b.setAttribute("tabindex","-1")}if(d&&!c.query(a,"a")){if(d.nodeName==="DIV"&&d.className==="ui-button"){b.innerHTML=d.innerHTML;b.className="ui-button"}else{b.innerHTML=d.outerHTML}a.replaceChild(b,d)}},revealDrawerToggler:function(){var b=Element,a=b.queryAll(".concierge-button."+this.chatType);if(a.length>0&&this.drawerTogglerContainer&&this.drawerToggler&&!this.drawerTogglerDisplayed){b.addClassName(this.drawerTogglerContainer,"enabled");this.drawerToggler.setAttribute("aria-controls",this.drawer.id);this.drawerTogglerDisplayed=true}},toggleChatInvite:function(){var a=window;if(this.ipsChatInvite&&a.showInvitationToChat&&a.hideInvitationToChat){a.setTimeout(a.showInvitationToChat,30000);a.setTimeout(a.hideInvitationToChat,60000)}},trackBtn:function(c,b,g){var f=apple.metrics,d="Chat",a=g?(c+":"+g):c;if(f){f.fireMicroEvent({eVar:"prop41",feature:d,part:b,action:a});if(c==="Selected"){if(b.indexOf("AskNow")!==-1){b="AskNow"}f.fireMicroEvent({eVar:"eVar41",feature:d,action:b})}}},trackDrawerBtnDisplay:function(){var f=Element,c=f.queryAll(".concierge-button.chat-online"),a=this,b,d=f.hasClassName;if(this.drawerOpen&&!d(this.drawer,"open-drawer")&&c.length>0){c.forEach(function(g){b=d(g,"cchat")||d(g,"htchat")?"TextChat":d(g,"cc2c")||d(g,"htc2c")?"Call":"ScreenCast";a.trackBtn("Displayed",b+"-ht")})}},enableDrawerBtns:function(){var c=Element,a=this,d=c.query(".concierge-button.chat-learn-more a"),b=c.queryAll(".concierge-button.chat-online a");if(b.length>0){b.forEach(function(f){f.setAttribute("tabindex",a.drawerOpen&&!c.hasClassName(a.drawer,"open-drawer")?"0":"-1")})}if(d){d.setAttribute("tabindex",a.drawerOpen&&!c.hasClassName(a.drawer,"open-drawer")?"0":"-1")}},btnSelected:function(a,f,c){var b,g,k=document,d=Element,h=k.forms.chatform,m=window.chatButtonConfig.infoURL;if(d.hasClassName(a,"chat-online")){if(d.hasClassName(a,"concierge-button")){b=c+"-ht";g=""}else{b="AskNow-lt";g=a.getAttribute("data-tracking")}this.trackBtn("Selected",b,g);if(h&&f){h.WEB_CHAT_TYPE.value=f;h.WEB_CHAT_ROUTING_ID.value=this.btnConfig[f].WEB_CHAT_ROUTING_ID;h.WEB_CHAT_ORIGIN.value=a.getAttribute("data-tracking");h.WEB_CHAT_TOP_QS_CAT.value=this.btnConfig[f].WEB_CHAT_TOP_QS_CAT;h.WEB_CHAT_NI_CHAT_MESSAGE.value=this.btnConfig[f].WEB_CHAT_NI_CHAT_MESSAGE;h.WEB_CHAT_NI_CHAR_TIMER.value=this.btnConfig[f].WEB_CHAT_NI_CHAR_TIMER;h.WEB_CHAT_TOP_QS.value=this.btnConfig[f].WEB_CHAT_TOP_QS;h.WEB_CHAT_NI_CHAT.value=this.btnConfig[f].WEB_CHAT_NI_CHAT;if(m){this.requestInfoProps(m)}else{this.openChatWin(h)}}}},openChatWin:function(a){if(typeof(this.blankWindow)!="object"){this.blankWindow=window.open("","chatWin","width=375,height=773,menubar=no,location=no,resizable=no,scrollbars=no,status=no");a.submit()}else{if(!this.blankWindow.closed){this.blankWindow.focus()}else{this.blankWindow=window.open("","chatWin","width=375,height=773,menubar=no,location=no,resizable=no,scrollbars=no,status=no");a.submit()}}},requestInfoProps:function(b){var f,a=document.forms.chatform,g=function(h){h=h||"JSON load failure.";window.console.log(h+" ["+b+"]")},d=function(){try{f.cancel()}catch(h){}},c=function(m){var q,n="",o,k,h=m.clientInfo;for(q in h){if(h.hasOwnProperty(q)){o=h[q],k=a[q];if(k){k.value=o}else{n+='<input type="hidden" id="'+q+'" name="'+q+'" value="'+o+'" />'}}}if(n!==""){Element.innerHTML(a,n,true)}this.openChatWin(a)};if(b&&JSONRPC&&a){f=JSONRPC.get(b,"",{sync:true});f.addMethods(c.bind(this),g.bind(this));d.delay(15000)}},drawerTogglerSelected:function(b){if(this.__timer){window.clearTimeout(this.__timer);this.__timer=null}function a(){this.__timer=null;this.toggleDrawer();if(this.drawerOpen){this.trackBtn("Selected","AskNow-ht",this.drawerToggler.id)}}this.__timer=a.bindAndDelay(this,150);this.hoverNodeId=b.id},onmouseenter:function(a){this.hoverNodeId=a.id;if(this.__timer){window.clearTimeout(this.__timer);this.__timer=null}},onmouseleave:function(b){if(b.id!==this.hoverNodeId){return}if(this.__timer){window.clearTimeout(this.__timer);this.__timer=null}function a(){this.__timer=null;if(this.drawer&&this.drawerOpen){this.toggleDrawer()}if(this.needhelpDrawer&&this.needhelpOpen){this.toggleDropDown()}}this.__timer=a.bindAndDelay(this,3000);this.hoverNodeId=""},cchatSelected:function(a){this.btnSelected($(a.id),"cchat","TextChat")},htchatSelected:function(a){this.btnSelected($(a.id),"htchat","TextChat")},cc2cSelected:function(a){this.btnSelected($(a.id),"cc2c","Call")},htc2cSelected:function(a){this.btnSelected($(a.id),"htc2c","Call")},httourSelected:function(a){this.btnSelected($(a.id),"httour","ScreenCast")},toggleDrawer:function(){this.setValueForKey(this.drawerOpen?false:true,"drawerOpen")},revealDrawer:function(){var a=Element,b=a.query(this.viewElement(),".intro-message");if(this.drawer){if(this.drawerOpen){a.addClassName(this.drawer,"open-drawer");a.addClassName(this.drawerToggler,"on");this.drawer.setAttribute("aria-hidden","false");this.drawerToggler.setAttribute("aria-expanded","true");if(b&&b.style.display!=="block"){b.style.display="block"}}else{a.removeClassName(this.drawer,"open-drawer");a.removeClassName(this.drawerToggler,"on");this.drawer.setAttribute("aria-hidden","true");this.drawerToggler.setAttribute("aria-expanded","false")}}},keydown:function(a){var c=a.keyCode;var b=a.target||a.srcElement;if(c===Event.KEY_ESC&&this.drawer&&this.drawerOpen){this.handlePreventDefault(a);Element.query(".ui-button").focus();this.toggleDrawer()}if(c===Event.KEY_TAB&&this.drawer&&this.drawerOpen&&this.subMenuElements.length>0){if(!a.shiftKey&&b===this.subMenuElements[this.subMenuElements.length-1]){this.handlePreventDefault(a);this.subMenuElements[0].focus()}if(a.shiftKey&&b===this.subMenuElements[0]){this.handlePreventDefault(a);this.subMenuElements[this.subMenuElements.length-1].focus()}}if(c===Event.KEY_RETURN&&!this.drawerOpen&&this.subMenuElements.length>0){this.handlePreventDefault(a);this.toggleDrawer();this.subMenuElements[0].focus()}},closeMenu:function(a){var b=a.target||a.srcElement;if(this.drawer&&this.drawerOpen){do{if(b&&b.id==="concierge-drawer"||b.id==="masthead-chat-button"){return}b=b.parentNode}while(b&&b!==document.body);this.toggleDrawer()}else{if(this.needhelpDrawer&&this.needhelpOpen){do{if(b&&b.id==="needhelp_drawer"||b.id==="needhelp"){return}b=b.parentNode}while(b&&b!==document.body);this.toggleDropDown()}}},needHelptoggleDrawerSelected:function(b){if(this.__timer){window.clearTimeout(this.__timer);this.__timer=null}function a(){this.__timer=null;this.toggleDropDown();if(this.drawerOpen){this.trackBtn("Selected","AskNow-ht",this.drawerToggler.id)}}this.__timer=a.bindAndDelay(this,150);this.hoverNodeId=b.id},toggleDropDown:function(a){this.setValueForKey(this.needhelpOpen?false:true,"needhelpOpen")},keydownneedhelp:function(a){var c=a.keyCode;var b=a.target||a.srcElement;this.needHelpMenuElements=Element.queryAll("#needhelp_drawer .box > *");if(c===Event.KEY_ESC&&this.needhelpDrawer&&this.needhelpOpen){this.handlePreventDefault(a);Element.query(".needhelp").focus();this.toggleDropDown()}if((c===Event.KEY_TAB||c===Event.KEY_DOWN)&&this.needhelpDrawer&&this.needhelpOpen&&this.needHelpMenuElements.length>0){if(c===Event.KEY_DOWN){this.needHelpMenuElements[0].focus();this.handlePreventDefault(a)}if(!a.shiftKey&&b===this.needHelpMenuElements[this.needHelpMenuElements.length-1]){this.handlePreventDefault(a);this.needHelpMenuElements[0].focus()}if(a.shiftKey&&b===this.needHelpMenuElements[0]){this.handlePreventDefault(a);this.needHelpMenuElements[this.needHelpMenuElements.length-1].focus()}}if((c===Event.KEY_RETURN||c===Event.KEY_DOWN)&&!this.needhelpOpen&&this.needHelpMenuElements.length>0){this.handlePreventDefault(a);this.toggleDropDown();this.needHelpMenuElements[0].focus()}},keydownneedhelpDrawer:function(a){var b=Element.queryAll("#needhelp_drawer .box > *"),d=b.length,g=b[0],c=b[d-1],f=a.target||a.srcElement;if(a.keyCode===Event.KEY_ESC){this.setValueForKey(false,"needhelpOpen");this.needhelp.focus()}else{if(a.keyCode===Event.KEY_TAB){if(f===c&&!a.shiftKey){this.handlePreventDefault(a);g.focus()}else{if(f===g&&a.shiftKey){this.handlePreventDefault(a);c.focus()}}}else{if(a.keyCode===Event.KEY_DOWN){if(f===c){this.handlePreventDefault(a);g.focus()}else{this.handlePreventDefault(a);this.nextElementSibling(f).focus()}}else{if(a.keyCode===Event.KEY_UP){if(f===g){this.handlePreventDefault(a);c.focus()}else{this.handlePreventDefault(a);this.prevElementSibling(f).focus()}}}}}},revealneedHelpDrawer:function(){var c=Element,f=this.needhelpDrawer,d=this.needhelp,a=this;if(f){var b=this.findParentTag(f,"li");if(this.needhelpOpen){c.addClassName(f,"open-drawer");c.addClassName(d,"on");c.addClassName(b,"open");f.setAttribute("aria-hidden","false");d.setAttribute("aria-expanded","true");a.positionDrawer(f);a.fireMetrics()}else{c.removeClassName(f,"open-drawer");c.removeClassName(d,"on");c.removeClassName(b,"open");f.setAttribute("aria-hidden","true");d.setAttribute("aria-expanded","false");a.positionDrawer(f)}}},needhelpLinksClick:function(a){(a.preventDefault)?a.preventDefault():a.returnValue=false;var d=a.target||a.srcElement,c;if(d.tagName.toLowerCase()!="a"&&d.tagName.toLowerCase()!="button"){c=this.findParentTag(d,"a")?this.findParentTag(d,"a"):this.findParentTag(d,"button")}else{c=d}if(c.id==="chatlink"){var b=this.needhelpParts.chatlink;if(b){this.fireMetrics(b)}var f=(this.urlMsg===undefined)?Element.queryAll("#u_chat ."+this.chatType)[0].click():this.openOohWindow(c)}else{this.redirectUrl(c)}},openOohWindow:function(a){var b=this.urlMsg;window.name="_parent";window.open(b,"chatWin","width=375,height=773,menubar=no,location=no,resizable=no,scrollbars=no,status=no")},fireMetrics:function(b){var d=apple.metrics,a=window.s.pageName,c="Just ask";if(!b){b=""}if(d){d.fireMicroEvent({eVar:"prop41",feature:c,action:b})}},redirectUrl:function(b){var a=b.getAttribute("id");elHref=b.getAttribute("href"),part="",windowName="",windowSpecs="";if(a=="caslink"){part=this.needhelpParts.caslink;if(part){this.fireMetrics(part)}window.open(elHref,"CAS")}else{if(a=="orderstatuslink"){part=this.needhelpParts.orderstatuslink;if(part){this.fireMetrics(part)}window.setTimeout(function(){window.location.href=elHref},150)}}},positionDrawer:function(f){var b=this.findParentTag(f,"li").offsetWidth,d=f.offsetWidth,a=(d-b)/2,c=Math.round(a);f.style.left="-"+Math.abs(c)+"px"},findParentTag:function(b,a){a=a.toLowerCase();do{b=b.parentNode;if(b.tagName&&b.tagName.toLowerCase()==a){return b}}while(b.parentNode);return null},handlePreventDefault:function(a){(a.preventDefault)?a.preventDefault():a.returnValue=false},nextElementSibling:function(a){do{a=a.nextSibling}while(a&&a.nodeType!==1);return a},prevElementSibling:function(a){do{a=a.previousSibling}while(a&&a.nodeType!==1);return a}});(function(t,w,x,D,y,G,k,o,v,n){if(!t||!w||!x||!D||!y||!G){throw new Error("Chat Module does not have required dependencies available")}var C=".chat-button",f=".chat",c="chat-standby",g="chat-online",A=/online/,a="lpButton",r=0,u=x.locateAncestor,q=x.addClassName,b=x.hasClassName,h=x.query,z=G.observe,B,F=y.create({constructor:function(K){var I=$("masthead-chat-button"),L=this.buttons=x.queryAll(f),J,H=L.length;this.maxButtonCount=K&&K.dynButton&&K.dynButton.length;B=K;for(J=0;J<H;J+=1){L[J]=d.create(L[J],this)}if(I){m.create()}},maxButtonCount:0,assignBtnID:function(K){var L=K&&K.el||null,M=x.queryAll(f+":not(.concierge-button)"),J,H=M.length,I,N;if(L){for(J=0;J<H;J+=1){N=M[J].el||M[J];if(N===K.el){I=J+=1;break}}}return I&&(I<=this.maxButtonCount)?a+I:false},reveal:function(){var J,H=this.buttons.length,I,K,L;for(J=0;J<H;J+=1){I=this.buttons[J];K=I.el;if(I.online){if(!this.drawerActive&&x.hasClassName(K,"concierge-button")){this.drawerActive=true;$("masthead-chat-view").style.display="inline"}I.online();L=I.buttonEl.id;if(!I.tracked&&L&&L.match("lpButton")){k.fireMicroEvent({eVar:"prop41",feature:"Chat",part:"AskNow",action:"Displayed:"+L});I.tracked=true}}}if(this.drawerActive&&!this.askNowBtnTrackingDone){apple.metrics.fireMicroEvent({eVar:"prop41",feature:"Chat",part:"AskNow",action:"Displayed:masthead-chat-button"});this.askNowBtnTrackingDone=true}return true}}),m=y.create({constructor:function(){this.observeChatDrawer()},observeChatDrawer:function(){var K=$("masthead-chat-button"),M=$("concierge-drawer"),L="open-drawer",N="on",J=x.queryAll(M,".chat-button"),H=J.length,I=this;z(K,"click",function(){var P,R,O;x.toggleClassName(M,L);x.toggleClassName(K,N);apple.fcs.setAcceptCookie();if(x.hasClassName(M,L)){var Q=x.query(M,".intro-message");if(Q&&Q.style.display!=="block"){Q.style.display="block"}apple.metrics.fireMicroEvent({eVar:"eVar41",feature:"Chat",action:"AskNow"});apple.metrics.fireMicroEvent({eVar:"prop41",feature:"Chat",part:"AskNow-ht",action:"Selected:"+K.id});for(P=0;P<H;P+=1){R=J[P];O=O=h(R,"a");if(x.hasClassName(O,"online")){I.fireMetricsOnActionBtnDisplay(R)}}}})},fireMetricsOnActionBtnDisplay:function(J){var H=J.id,I=(H==="ConciergeChat")?"TextChat":(H==="ConciergeLowTouchVoice"||H==="ConciergeHighTouchVoice")?"Call":"ScreenCast";apple.metrics.fireMicroEvent({eVar:"prop41",feature:"Chat",part:I+"-ht",action:"Displayed"})}}),d=y.create({constructor:function(I,H){this.el=I;this.manager=H;this.buttonEl=h(I,C);if(!this.buttonEl.id){this._setID()}if(this.shouldResizeAncestor()){this._setButtonBounds()}this.update();if(!this.ready){z(this.buttonEl,"DOMNodeInserted",this);this.pollID=o.setInterval(this.update.bind(this),250)}},el:null,manager:null,pollID:null,ready:false,online:false,updates:0,handleEvent:function(H){switch(H.type){case"DOMNodeInserted":G.stopObserving(this.buttonEl,"DOMNodeInserted",this);this.update();break;case"click":this._onClick();break;default:break}},standby:function(){if(this._hasButton()){q(this.el,c)}},reveal:function(J,I){if(!this.ready){return}var H=J||q;I&&I();this.online=function(){H(this.el,g,{only:["opacity"],curve:w.easing.easeInOut(500),callback:this.track.bind(this)})};this.accessibilityFix=function(){var Q=this.buttonEl,P=Q.parentNode,N=h(Q,"a"),O=h(P,"span"),L=O.innerHTML,R=N.innerHTML,K=L+R,M;if(x.hasClassName(P,"concierge-button")){N.appendChild(O)}else{x.setInnerHTML(N,K)}if(x.hasClassName(P,"chat-resize")){x.setStyle(P,"overflow","visible")}M=N.getAttribute("onclick");if(typeof(M)!=="function"){N.setAttribute("onclick",M+"return false;")}else{N.onclick=function(){M();return false}}N.setAttribute("href","#");this.updates=1};if(this.manager){this.manager.reveal()}else{this.online()}},update:function(){var H=A.test(this.buttonEl.innerHTML),I=this;if(!this._hasButton()||!H){return false}if(!this.ready&&this.shouldResizeAncestor()){this._animateButtonBounds(function(){I._setButtonBounds({width:"auto",height:"auto"});I._markReady();I.update()})}else{this._markReady()}if(this.pollID){o.clearInterval(this.pollID)}this.reveal(D.addClassName,this.standby.bind(this));if(this.updates===0&&this.accessibilityFix){this.accessibilityFix()}return true},track:function(){var I=this.buttonEl,H=h(I,"a"),J;if(H&&I.id&&k){J=this;z(this.buttonEl,"click",function(K){J.handleEvent(K)})}},shouldResizeAncestor:function(){return b(this.el,"chat-resize")},_setButtonBounds:function(I){var H=this.el,J=I||x.getDimensions(H);this._bounds=J;x.setStyles(H,{width:J.width,height:J.height,overflow:"hidden"})},_animateButtonBounds:function(I){var H=this.el;H.style.cssText=" ";(function(){this.standby();var J=x.getDimensions(H);this._setButtonBounds(this._bounds);D.setStyles(H,{width:J.width,height:J.height},{duration:250,callback:I})}).bindAndDelay(this,0)},_setID:function(){var H=this.manager&&this.manager.assignBtnID(this);if(H){this.buttonEl.id=H}},_hasButton:function(){return this.buttonEl.firstChild&&this.buttonEl.firstChild.nodeType===1},_markReady:function(){this.ready=true},_onClick:function(){var J=this.el,I=this.buttonEl,K=I.id,H;apple.fcs.setAcceptCookie();if(x.hasClassName(J,"concierge-button")){H=(K==="ConciergeChat")?"TextChat":(K==="ConciergeLowTouchVoice"||K==="ConciergeHighTouchVoice")?"Call":"ScreenCast";x.removeClassName($("concierge-drawer"),"open-drawer");x.removeClassName($("masthead-chat-button"),"on");apple.metrics.fireMicroEvent({eVar:"eVar41",feature:"Chat",action:H+"-ht"});apple.metrics.fireMicroEvent({eVar:"prop41",feature:"Chat",part:H+"-ht",action:"Selected"})}else{k.fireMicroEvent({eVar:"eVar41",feature:"Chat",action:"AskNow"});k.fireMicroEvent({eVar:"prop41",feature:"Chat",part:"AskNow-lt",action:"Selected:"+K})}if(B.doEVar21Capture){k.fireMicroEvent({eVar:"eVar21",feature:"chat",action:"Selected:"+I.id})}}});d.create=function(I,H){return new d(I,H)};m.create=function(){return new m()};F.create=function(H,I){if(!H){return false}return new F(H,I)};function E(J){var I=o.lpAddVars||null,L,K,M,H;if(!I||!J){return false}for(L in J){if(J.hasOwnProperty(L)){switch(L){case"page":case"session":case"visitor":M=J[L];H=M.length;for(K=0;K<H;K+=1){I(L,M[K].name,M[K].value)}break;default:B[L]=J[L];break}}}B.onLoadAll&&B.onLoadAll();return true}t._ChatButton=d;t.create=function(H){return F.create(H||o.lpMTagConfig)};t.Chat=t.create;t.applyLPConfig=E})(apple.chat,coherent,Element,coherent.Animator,Class,Event,apple.metrics,window,document);
