window.$P=function(){};if(window.self!==window.top){window.top.location=window.location}window.apple={};Object.create=function(b){function a(){}a.prototype=b;return new a()};if(!window.console){console={log:function(a){if(window.DebugMenu&&window.DebugMenu.log!==null){window.DebugMenu.log(a)}}}}try{window.referrerIsHanheld=window.localStorage.getItem("LAST_PAGE_FORMAT")==="handheld";window.localStorage.setItem("LAST_PAGE_FORMAT",null)}catch(e){}window.apple.data={};if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v;default:return"null"}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());apple.data.json={parse:JSON.parse,stringify:JSON.stringify};(function(){window.apple.cookie=function(b,o,n){var m=document.cookie;if(arguments.length==1){if(b){var q=m.lastIndexOf(b+"=");if(q==-1){return null}var f=q+b.length+1;var h=m.indexOf(";",q+b.length+1);if(h==-1){h=m.length}return decodeURIComponent(m.substring(f,h))}else{return null}}else{if(b&&undefined!==typeof(o)){n=n||{};o=encodeURIComponent(o);var g=n.expires;if(typeof(g)=="number"){var k=new Date();k.setTime(k.getTime()+(g*24*60*60*1000));g=k}document.cookie=b+"="+o+(g?"; expires="+g.toUTCString():"")+(n.path?"; path="+n.path:"")+(n.domain?"; domain="+n.domain:"")+(n.secure?"; secure":"")}return null}};var a=apple.cookie;a.deleteCookie=function(b,c){if(b){var d=Object.create(c);d.expires=d.expires||0;a(b,null,d)}};a.objectCookie=function(b,g,d){if(arguments.length==1){var h=window.apple.cookie(b);return a.decodeObject(h)}var f=a.encodeObject(g);a(b,f,d);return null};a.encodeObject=function(b){if(!b){return null}return escape(JSON.stringify(b))};a.decodeObject=function(b){if(!b){return null}try{return JSON.parse(unescape(b))}catch(c){return null}}})();window.dojo={require:function(){},provide:function(){},lang:{doesObjectExist:function(f){try{var a=0,d=window,c=f.split(".");do{d=d[f[a++]]}while(a<f.length&&d);return d&&d!=window}catch(b){return false}}}};(function(a){function b(){}a.s={t:b,tl:b,pageName:"disabled",disabled:true}}(window));apple.Tracking=(function(d){function c(o,n,q,m){if(o.addEventListener){o.addEventListener(n,q,m)}else{o.attachEvent("on"+n,q)}}function h(n){if(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey){return true}var o=n.which,m=n.button;if(!o&&m!==undefined){return(!m&1)&&(!m&2)&&(m&4)}else{if(o===2){return true}}return false}function g(m){return typeof(m)==="function"}function k(){var m=d.s_gi,n=d.s_account;if(!(m&&n)){return d.s}return m(n)}function f(m){var n=this.getSitecatalystInstance();n.t(m)}function a(q,n,w,x){if(!(n&&w)){throw new Error("Tracking.track require a valid event name and metrics overrides params.")}else{if(!("linkTrackVars" in w&&"linkTrackEvents" in w)){throw new Error("Tracking.track requires both linkTrackVars and linkTrackEvents to be defined in the metricsData param.")}}var v=this.getSitecatalystInstance(),m=v.mrq,r=v.tl.length!==5&&g(x),t=(q===true||q===void 0)?0:300,o=false,u=function(y){if(!o){o=true;x.call(d)}};w.linkTrackVars+=[",prop2,eVar3","prop4","prop5","prop6","prop8,eVar4","prop14","prop19,eVar19","prop20","prop23","prop40"].join(",");if(r){v.mrq=function(){v.mrq=m;v.mrq.apply(v,arguments);u()}}v.tl(q||true,"o",n,w,x);if(r){setTimeout(u,t)}}function b(n,m,x,y){if(!(n&&n.tagName&&m&&x)){throw new Error("Tracking.trackClick requires a valid DOM element, event name and metrics overrides params.")}var z=this,o=g(y),v=n.tagName.toLowerCase()==="form",t=false,w,r=(d.jQuery||d.Zepto),u=v?"submit":"click",q=function(A){t=n.href&&n.target!=="_blank"&&!h(A);if(!o&&(v||t)){A=A||d.event;if(A.preventDefault){A.preventDefault()}else{A.returnValue=false}}w=g(x)?(x(A,n)||{}):x;z.track(n,m,w,function(){if(o){y.call(this,A)}else{if(v){n.submit()}else{if(t){d.location.href=n.href}}}})};if(r){r(n).on(u,q)}else{c(n,u,q)}}return{getSitecatalystInstance:k,trackPage:f,track:a,trackClick:b}}(this));window.Event=Object.create(window.Event||{});window.Event.onLoad=function(a){if(Event.onLoad.done){window.setTimeout(a,0);return}if(!Event.onLoad.callbacks){Event.onLoad.callbacks=[]}Event.onLoad.callbacks.push(a)};window.Event.scripts=function(){var b={},a=[];b.collect=function(c){if(typeof c==="function"){a.push(c)}};b.execute=function(){var c=a.length,d;for(d=0;d<c;d+=1){a[d]()}Event.scripts.collect=function(g){if(typeof g==="function"){console.log("function "+g);g()}}};return b}();window.Event.onDomReady=window.Event.onLoad;window.onload=function(){Event.onLoad.done=true;if(Event.onLoad.callbacks){while(Event.onLoad.callbacks.length){Event.onLoad.callbacks.shift()()}}};function StorageSimulator(b){var c=b||{};function d(h){var f=[];if(h){for(var g in h){if(Object.prototype.hasOwnProperty.call(h,g)){f.push(g)}}}return f}function a(){var f=apple.cookie.objectCookie(c.name)||{};return f}return{get:function(f){return a()[f]},set:function(f,g){var h=a();h[f]=g;apple.cookie.objectCookie(c.name,h,c);return true},remove:function(f){var h=a(),g;g=(delete h[f]);apple.cookie.objectCookie(c.name,h,c);if(this.length()<1){apple.cookie.deleteCookie(c.name,c)}return g},length:function(){var f=a();return d(f).length},getKey:function(f){var g=a();return d(g)[f]}}}var Storage=function(a){a||(a={});this.wantSession="session" in a&&a.session;this.wantCookie="cookie" in a&&a.cookie;this.wantHash="hash" in a&&a.hash;this.noFallback=!this.wantCookie&&!this.wantHash;this.fauxSession=this.wantSession;this.inFallback=false;this.noop=false;this.expires=a.expires;this.expiryInMs=a.expiryInMs;this.name=a.name;this.path=a.path;this.domain=a.domain;this.secure=a.secure;this.db=null;this.init()};var isBrowserIE=!!(!window.opera)&&(function(){var d=/Trident.+rv:(\d+)/;var b=d.exec(navigator.userAgent);if(b){return b&&parseInt(b[1],10)}else{var c=/MSIE (\d+)/;var a=c.exec(navigator.userAgent);return a&&parseInt(a[1],10)}})();Storage.prototype.init=function(b,a){this.db=b?this.fallback():this.local()||this.fallback()||this.global()||this.getUserData();if(this.db&&b){this.set(b,a)}if(!this.db){this.noop=true;if(console&&console.log){console.log("Storage Info: No client storage will be available")}}};Storage.prototype.local=function(){var a;try{a=this.wantSession?window.sessionStorage||window.localStorage:window.localStorage;if(!a){return false}this.hasDomStorage=true;a.setItem("T3sT3iNg","123");a.removeItem("T3sT3iNg")}catch(b){this.inFallback=true;return false}return a};Storage.prototype.fallback=function(){if(this.inFallback&&!this.noFallback){this.db=null;this.fauxSession=false;if(this.wantCookie){var a=this.expires/3600000;return new Storage.cookieFB({expires:this.expiryInMs?a/24:this.expires,name:this.name,path:this.path,domain:this.domain,secure:this.secure})}else{return new Storage.hashFB()}}else{return false}};Storage.cookieFB=function(a){var b=window.StorageSimulator(a);b.getItem=b.get;b.setItem=b.set;b.removeItem=b.remove;b.key=b.getKey;b.clear=function(){};return b};Storage.hashFB=function(){this.data={}};Storage.hashFB.prototype.getData=function(){return this.data};Storage.hashFB.prototype.getItem=function(a){return this.data[a]||null};Storage.hashFB.prototype.setItem=function(a,b){this.data[a]=b;this.length++};Storage.hashFB.prototype.removeItem=function(a){delete this.data[a];if(this.length>0){this.length--}};Storage.hashFB.prototype.length=0;Storage.hashFB.prototype.key=function(b){var c=0,a;for(a in this.data){if(c===b){return a}else{c++}}return null};Storage.hashFB.prototype.clear=function(){this.length=0;this.data={}};Storage.hashFB.prototype.key=function(a){var b=Object.keys(this.data);return this.data[b[a]]};Storage.prototype.global=function(){if(window.globalStorage){this.hasDomStorage=true;return window.globalStorage}else{return false}};Storage.prototype.getUserData=function(){if(!this.hasDomStorage&&isBrowserIE){this.fauxSession=false;return new Storage.userData(this.expires,this.expiryInMs)}else{return false}};Storage.userData=function(a,c){this.txtArea=document.createElement("textarea");this.txtArea.style.behavior="url(#default#userData)";this.txtArea.setAttribute("expires",Storage.getFutureDate(a,c,true));this.txtArea.style.display="none";var b=document.getElementById("aos-pocket")||document.body;b.appendChild(this.txtArea)};Storage.userData.prototype.getKeys=function(){var a;this.txtArea.load("AOSMeta");if((a=this.txtArea.getAttribute("keys"))){return a.split("__")}else{return[]}};Storage.userData.prototype.setKeys=function(a){this.txtArea.load("AOSMeta");this.txtArea.setAttribute("keys",a.join("__"));this.txtArea.save("AOSMeta")};Storage.userData.prototype.addKey=function(b){var c=this.getKeys(),a=c.indexOf(b);if(a!==-1){return}c.push(b);this.setKeys(c)};Storage.userData.prototype.removeKey=function(b){var c=this.getKeys(),a=c.indexOf(b);if(a===-1){return}c.splice(a,1);this.setKeys(c)};Storage.userData.prototype.getItem=function(a){this.txtArea.load("AOSData");return this.txtArea.getAttribute(a)};Storage.userData.prototype.setItem=function(b,c){this.txtArea.load("AOSData");var a=this.txtArea.getAttribute(b);this.txtArea.setAttribute(b,c);this.txtArea.save("AOSData");if(this.txtArea.getAttribute(b)===c){if(!a){this.addKey(b)}return true}this.txtArea.setAttribute(b,a);this.txtArea.save("AOSData");return false};Storage.userData.prototype.removeItem=function(a){this.txtArea.load("AOSData");this.txtArea.removeAttribute(a);this.txtArea.save("AOSData");this.removeKey(a)};Storage.userData.prototype.length=function(){return this.getKeys().length};Storage.userData.prototype.key=function(a){return this.getKeys()[a]};Storage.userData.prototype.clear=function(){var c=this.getKeys();for(var b=0,a=c.length;b<a;b++){this.removeItem(c[b])}};Storage.getFutureDate=function(a,c,b){var g=new Date(),f=c?1:86400000;if(typeof a!=="number"){a=parseInt(a,10)}if(b){g.setTime(g.getTime()+(a*f));return g.toUTCString()}else{return g.getTime()+(a*f)}};Storage.prototype.get=function(a){if(this.noop){return null}var b,c;if(this.fauxSession){c=new Date();if((b=JSON.parse(this.db.getItem(a)))){if(b.timestamp>c.getTime()){return b.value}else{this.db.removeItem(a)}}return null}else{return this.db.getItem(a)}};Storage.prototype.set=function(a,b){if(this.noop){return}if(this.fauxSession){b=JSON.stringify({value:b,timestamp:Storage.getFutureDate(this.expires,this.expiryInMs)})}try{this.db.removeItem(a);this.db.setItem(a,b)}catch(c){if(console&&console.log){console.log(c.message)}if(!this.inFallback&&!this.noFallback){this.inFallback=true;this.init(a,b)}else{if(console&&console.log){console.log("Storage Error: No fallback specified or available")}}}};Storage.prototype.remove=function(a){if(this.noop){return}return this.db.removeItem(a)};Storage.prototype.clear=function(){if(this.noop){return}return this.db.clear()};Storage.prototype.length=function(){if(this.noop){return 0}return typeof this.db.length==="function"?this.db.length():this.db.length};Storage.prototype.getKey=function(a){if(this.noop){return null}return this.db.key(a)};window.apple.metrics={};apple.metrics.Metrics=function(a){this.config=a;apple.metrics.evarDataNodesEnabled=this.config.evarDataNodes?this.config.evarDataNodes:true;this.cookieProps=Object.create(apple.metrics.Metrics.CONSTANTS.cookieDefaults);this.metrics=this.getObjectCookie()||{};this.init()};apple.metrics.Metrics.CONSTANTS={AosNamespace:"AOS: ",cookieDefaults:{name:"asmetrics",path:"/",domain:window.location.host,expires:0.0208333333,secure:false},pageLoadDataKeyPrefix:"apple.metrics",pageLoadDataKeySeparator:"__",pageLoadDataKeyLatestKeyName:"apple_Metrics_LatestKey",pageLoadDataKeyPreviousKeyName:"apple_Metrics_PreviousKeyName",pageLoadDataKeyPreviousKeyData:"apple_Metrics_PreviousKeyData"};apple.metrics.evarDataNodesEnabled;apple.metrics.pageLoadMetricsData;apple.metrics.Metrics.reportCustomLink=function(f,d){var b=apple.metrics.Metrics.CONSTANTS.AosNamespace,c=" | ",a=d.split(c),g=a.length<=4?d:a.slice(2).join(c);if(d.indexOf(b)!==0){d=b+d}apple.Tracking.track(f,g,{linkTrackVars:"eVar5",linkTrackEvents:"None",eVar5:d})};apple.metrics.Metrics.getCustomLinkName=function(b){var a=b.split("|");if(a.length<=4){return b}return b.substring(b.indexOf(a[2]))};apple.metrics.Metrics.getProductSubstring=function(b){if(!b){return""}var a=b.split(";");if(a.length<6){return b}return a[1]};apple.metrics.Metrics.prototype={setObjectCookie:function(a){apple.cookie.objectCookie(this.cookieProps.name,a,this.cookieProps)},getObjectCookie:function(){return apple.cookie.objectCookie(this.cookieProps.name)},pageName:function(a){return a+(this.pageSuffix()||"")},appendEVar31:function(a){var b=this.getEvar31();return b?a+(a?"|":"")+"eVar31="+b:a},mark:function(){if(this.config.isHome){this.getStore().vh=true}this.setObjectCookie(this.metrics)},hasReturnedHome:function(){return this.getStore().vh},pageSuffix:function(){if(this.config.isHome){return" - "+(this.hasReturnedHome()?"Return":"First")}else{return null}},getStore:function(){if(!this.metrics.store){this.initStore()}return this.metrics.store},getEvar1:function(){return(apple.metrics.pageLoadMetricsData&&apple.metrics.pageLoadMetricsData.evar1)||""},getEvar30:function(){return(apple.metrics.pageLoadMetricsData&&apple.metrics.pageLoadMetricsData.evar30)||""},getEvar31:function(){return(apple.metrics.pageLoadMetricsData&&apple.metrics.pageLoadMetricsData.evar31)||""},getProp30:function(){var a=apple.metrics.pageLoadMetricsData&&apple.metrics.pageLoadMetricsData.evar1||"";return a.split("|")[0]},getProp37:function(){return(apple.metrics.pageLoadMetricsData&&apple.metrics.pageLoadMetricsData.prop37)||""},getProp42:function(){return(apple.metrics.pageLoadMetricsData&&apple.metrics.pageLoadMetricsData.prop42)||""},initStore:function(){var a=this.metrics.store;if(a&&a.sid!==this.config.storeId){a=null}if(!a){a={sid:this.config.storeId};this.metrics.store=a}return a},loadStorageData:function(){if(!apple.metrics.evarDataNodesEnabled){return}var r,h,c,k,t=metricsStorage.length(),n=apple.metrics.transformKey(apple.metrics.Metrics.CONSTANTS.pageLoadDataKeyPrefix),m=apple.metrics.Metrics.CONSTANTS.pageLoadDataKeySeparator,d=apple.metrics.Metrics.CONSTANTS.pageLoadDataKeyLatestKeyName,b=apple.metrics.Metrics.CONSTANTS.pageLoadDataKeyPreviousKeyName,g=apple.metrics.Metrics.CONSTANTS.pageLoadDataKeyPreviousKeyData,u=apple.metrics.transformKey(window.location.pathname),a=apple.metrics.transformKey(window.location.href),q=new RegExp("^"+n+m+".*"+m+"(?:("+u+"$))","gi"),f=new RegExp("^"+n+m+"("+a+")"+m+".*$","gi");if(!apple.metrics.pageLoadMetricsData){r=apple.metrics.getStorageKey();h=metricsStorage.get(r);if(!h){for(var o=0;o<t;o++){c=metricsStorage.getKey(o);if(q.test(c)){r=c;h=metricsStorage.get(r);break}}}if(!h){c=metricsStorage.get(d);if(f.test(c)){r=c}else{k=metricsStorage.get(c);if(k){r=c;h=k}else{if(metricsStorage.get(b)===metricsStorage.get(d)){h=metricsStorage.get(g)}}}}apple.metrics.pageLoadMetricsData=h?apple.data.json.parse(h):{};metricsStorage.remove(r);metricsStorage.set(b,r);metricsStorage.set(g,h)}},init:function(){this.initStore();this.loadStorageData()}};apple.metrics.fireMicroEvent=function(a,b){apple.metrics.fireMicroEventImpl(a,false,b)};apple.metrics.fireMicroEventNoDuplicates=function(a,b){apple.metrics.fireMicroEventImpl(a,true,b)};apple.metrics.fireMicroEventImpl=function(a,k,m){var g=apple.Tracking.getSitecatalystInstance(),d=apple.metrics.Metrics.CONSTANTS.AosNamespace;if(!("feature" in a&&"action" in a)){throw new Error("Microevents require a feature and an action.")}if(!g){return}a=Object.applyDefaults(a,{page:g.pageName||"",slot:"",part:"",eVar:"eVar5"});if(!a.excludeAosNamespace&&a.page.indexOf(d)!==0){a.page=d+a.page}var f=a.eVar,c,b=[a.feature,a.part,a.action].join(" | "),h={linkTrackVars:f,linkTrackEvents:"None"};if(a.pageName){h.pageName=a.pageName}if(a.events){h.linkTrackVars=f+",events";h.linkTrackEvents=a.events;h.events=a.events}if(a.page===g.pageName){c=['D=pageName+"',a.slot,b].join(" | ")+'"'}else{c=[a.page,a.slot,b].join(" | ")}h[f]=c;if(!k||!(c in apple.metrics.microEventDuplicateDetector)){apple.metrics.microEventDuplicateDetector[c]=true;apple.Tracking.track(a.node,b,h,m)}};apple.metrics._stringToEvent=function(c){var b=c.split(" | ");var a={page:b[0],slot:b[1],feature:b[2],part:b[3],action:b[4]};return a};apple.metrics.microEventDuplicateDetector={};apple.metrics.checkDuplicateMicroEvent=function(b){var a=apple.metrics.microEventDuplicateDetector;if(a[b]){return true}a[b]=true;return false};apple.metrics.fireEvent=function(a){apple.Tracking.trackPage(a)};apple.metrics.fireEventCollection=function(f,b){var d,a,c;if(!f){return}if(f.microEvent){d=[].concat(f.microEvent);a=d.length;for(c=0;c<a;c++){d[c].pageName=d[c].pageName||b;apple.metrics.fireMicroEvent(d[c])}}if(f.metrics){d=[].concat(f.metrics);a=d.length;for(c=0;c<a;c++){if(d[c].pageName===undefined&&b){d[c].pageName=b}apple.metrics.fireEvent(d[c])}}};apple.metrics.transformKey=function(a){return a?a.replace(/\W+(\w|$)/g,function(){return arguments[1]?arguments[1].toUpperCase():""}):a};apple.metrics.getStorageKey=function(b){var d=b?window.location.href:(window.document.referrer||""),a=b?b:window.location.pathname,c=apple.metrics.Metrics.CONSTANTS.pageLoadDataKeyPrefix,f=apple.metrics.Metrics.CONSTANTS.pageLoadDataKeySeparator,g=c+f+d+f+a;return apple.metrics.transformKey(g)};apple.metrics.clone=function(){return Object.extend({},s)};apple.metrics.getNewKeyObject=function(c){var b={};for(var a in s){if(s.hasOwnProperty(a)&&s[a]&&a in c===false){b[a]=s[a]}}return b};var metricsStorage=(function(){var c,a={name:"asmco",path:"/",domain:window.location.host,secure:false},b=!!(!window.opera)&&(function(){var h=/Trident.+rv:(\d+)/;var f=h.exec(navigator.userAgent);if(f){return f&&parseInt(f[1],10)}else{var g=/MSIE (\d+)/;var d=g.exec(navigator.userAgent);return d&&parseInt(d[1],10)}})();if(b&&b<8){c=new StorageSimulator(a)}else{c=new Storage()}return c})();(function(k){var g=k.ai={},d="apple.ai",b="deferred",h="TOREAD",c=3000,n;g.url=window.location.pathname.replace(/^\/?([^\/]*)(.*)/g,"/$1/appleinstantfeedback");var m=function(){var o=g.get("NOTREAD");if(!o){return}g.send("NOTREAD",o);g.clear("NOTREAD")};var a=function(){var o=g.get("NOTVIEWED");if(!o){return}g.send("NOTVIEWED",o);g.clear("NOTVIEWED")};var f=function(o){var q=g.get(b+"."+h);if(!q){return}g.clear(b+"."+h);g.set("NOTREAD",q);window.setTimeout(function(){k.ai.send("READ",q,g.clear.bind(null,"NOTREAD"))},c)};g.init=function(){m();a();f()};g.setToRead=function(o){g.set(b+"."+h,o)};g.set=function(o,q){n.set(d+"."+o,JSON.stringify(q))};g.get=function(o){var q=n.get(d+"."+o);if(q){return JSON.parse(q)}else{return null}};g.send=function(o,q,r){q.feedType=o;XHR.get(g.url,q).addMethods(r,r)};g.clear=function(o){n.remove(d+"."+o)};n=(function(){var r,o={name:"aifb",path:"/",domain:window.location.host,secure:false},q=!!(!window.opera)&&(function(){var w=/Trident.+rv:(\d+)/;var u=w.exec(navigator.userAgent);if(u){return u&&parseInt(u[1],10)}else{var v=/MSIE (\d+)/;var t=v.exec(navigator.userAgent);return t&&parseInt(t[1],10)}})();if(q&&q<8){r=StorageSimulator(o)}else{r=new Storage()}return r})()})(window.apple||(window.apple={}));window.apple=window.apple||{};apple.ImageReplacer=function(f,h){var a=document.images,d,b;this.imagesToBeReplaced=[];for(d=0,b=a.length;d<b;d++){if(a[d].className.match(/\bir\b/)){this.imagesToBeReplaced.push(a[d])}}if(this.imagesToBeReplaced.length>0){var g=this.determineSwitchScale(this.imagesToBeReplaced[0]),c,k;this.oldScale=g&&g[0];this.newScale=this.oldScale&&g[1];if(this.newScale==f){return}this.origSrc=[];for(d=0,b=this.imagesToBeReplaced.length;d<b;d++){c=this.imagesToBeReplaced[d];k=this.determineImageType(c,this.newScale);if(!c.getAttribute("width")||!c.getAttribute("height")){this.checkImageDimensions(c)}this.swapImage(c,k,this.origSrc)}}};apple.ImageReplacer.w="width";apple.ImageReplacer.h="height";apple.ImageReplacer.i="image-";apple.ImageReplacer.p="params-";apple.ImageReplacer.dataScale="data-scale-";apple.ImageReplacer.prototype={determineSwitchScale:function(b){var d=apple.ImageReplacer.dataScale+apple.ImageReplacer.i,a=apple.ImageReplacer.dataScale+apple.ImageReplacer.p,c;if(b.getAttribute(d+"2")||b.getAttribute(a+"2")){c=[1,2]}else{if(b.getAttribute(d+"1")||b.getAttribute(a+"1")){c=[2,1]}}return c},determineImageType:function(c,f){var d=apple.ImageReplacer.dataScale+apple.ImageReplacer.i+f,a=apple.ImageReplacer.dataScale+apple.ImageReplacer.p+f,b;if(c.getAttribute(d)){this.completeDataString=d;b=apple.ImageReplacer.i}else{if(c.getAttribute(a)){this.completeDataString=a;b=apple.ImageReplacer.p}}return b},checkImageDimensions:function(b){var c=apple.ImageReplacer.dataScale+apple.ImageReplacer.i,a=apple.ImageReplacer.dataScale+apple.ImageReplacer.p;if(b.getAttribute(c+"2")||b.getAttribute(a+"2")){b.setAttribute("width",b.width);b.setAttribute("height",b.height)}},swapImage:function(f,m,d){var c=(m==apple.ImageReplacer.i)?"/":"?",g=f.src,k=g.slice(0,g.lastIndexOf(c)+1),n=g&&g.slice(g.lastIndexOf("/")+1),b=(m==apple.ImageReplacer.i)?n:n.substr(n.indexOf("?")+1),h=this.completeDataString?f.getAttribute(this.completeDataString):null,a=k+h;if(d){d.push(g)}this.setNewDataSrc(f,b);f.src=a},setNewDataSrc:function(d,b){var c=this.completeDataString?this.completeDataString:null,a=c.replace(this.newScale,this.oldScale);d.setAttribute(a,b);d.removeAttribute(c)}};(function(){var d="pxro",c=parseInt(apple.cookie(d),10),b=window.devicePixelRatio||1,h=window.location.search&&window.location.search.match("debug.pixelRatio");if(h){return}var g={name:d,path:"/",domain:".apple.com",expires:730,secure:false};if(window.irOn){if(!c||c!==b){var f=navigator.userAgent,a=!!f.match(/AppleWebKit/i)&&(!!f.match(/Mobile/i)&&!f.match(/ipad/i)),k=!a?b:1;apple.cookie(d,k,g);if(b&&b>=2){if(!a){Event.onDomReady(function(){new apple.ImageReplacer(c,h)})}}}}else{apple.cookie(d,1,g)}})();(function(){var c=["abbr","article","aside","command","details","figcaption","figure","footer","header","hgroup","mark","meter","nav","output","progress","section","summary","time"];var a,b=c.length;for(a=0;a<b;a++){document.createElement(c[a])}})();
