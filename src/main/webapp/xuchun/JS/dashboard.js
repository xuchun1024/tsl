 
 setInterval("load()", 1000);

 var user = {
 	id : 10001,
 	name : "张小猴",
 	balance: 30,
 	frosen: 300,

 };

 var missionList = [
 	{
 		///status: 
 		///		o: not start
 		///		1: on progress
 		///		2: finished
 		///		3: failed
 		id : 2,
 		holder: 10001,
		missionName: "背单词",
		createTime: new Date("2014-08-03"),
		beginTime: new Date("2014-09-03"),
		endTime: new Date("2014-10-03"),
		tasks : [
			{
				id : 12,
				name : "背单词",
				detail : "我要背单词",
				date : new Date("2014-09-03"),
				amount : 30,
				supervisor : "学霸",
				status : 2,
			},
			{
				id : 13,
				name : "背单词",
				detail : "我要背单词",
				date : new Date("2014-09-05"),
				amount : 30,
				supervisor : "学霸",
				status : 2,
			},
			{
				id : 14,
				name : "背单词",
				detail : "我要背单词",
				date : new Date("2014-09-06"),
				amount : 30,
				supervisor : "学霸",
				status : 3,
			},
			{
				id : 15,
				name : "背单词",
				detail : "我要背单词",
				date : new Date("2014-08-31"),
				amount : 30,
				supervisor : "学霸",
				status : 1,
			},
			{
				id : 16,
				name : "背单词",
				detail : "我要背单词",
				date : new Date("2014-10-05"),
				amount : 30,
				supervisor : "学霸",
				status : 1,
			},
		],
		amountSum : 100,
		status: 1,
 	},
 	{
 		///status: 
 		///		o: not start
 		///		1: on progress
 		///		2: finished
 		///		3: failed
 		id : 3,
 		holder: 10001,
		missionName: "躺着",
		createTime: new Date("2014-08-03"),
		beginTime: new Date("2014-09-03"),
		endTime: new Date("2014-10-03"),
		tasks : [
			{
				id : 12,
				name : "躺着",
				detail : "我要背单词",
				date : new Date("2014-09-03"),
				amount : 30,
				supervisor : "学霸",
				status : 1,
			},
			{
				id : 13,
				name : "躺着",
				detail : "我要背单词",
				date : new Date("2014-10-03"),
				amount : 30,
				supervisor : "学霸",
				status : 1,
			},
		],
		amountSum : 100,
		status: 1,
		finished:3,
		failed:4,
 	},

 ];

  var missionFinList = [
 	{
 		///status: 
 		///		o: not start 
 		////		0 maynot be neccessary
 		///		1: on progress
 		///		2: finished
 		///		3: failed
 		id : 3,
 		holder: 10001,
		missionName: "腹肌撕裂者已完成",
		createTime: new Date("2014-08-03"),
		beginTime: new Date("2014-08-03"),
		endTime: new Date("2014-8-23"),
		tasks : [
			{
				id : 10,
				name : "背单词",
				detail : "我要背单词",
				date : new Date("2014-09-03"),
				amount : 30,
				supervisor : "学霸",
				status : 2,
			},
			{
				id : 13,
				name : "背单词",
				detail : "我要背单词",
				date : new Date("2014-10-03"),
				amount : 30,
				supervisor : "学霸",
				status : 3,
			},
		],
		amountSum : 100,
		status: 1,
		finished:3,
		failed:4,
 	},


 ];

///倒计时功能
function load(){
	  dateN = new Date();
	  dateT = new Date(parseInt(dateN.getFullYear()),parseInt(dateN.getMonth()),parseInt(dateN.getDate()),23,59,59);
	  var testDate = new Date(dateT.getTime() - dateN.getTime() + 2000);
	  
	  document.getElementById("hh").innerHTML = printf("%02d",testDate.getUTCHours());
	  document.getElementById("mm").innerHTML = printf("%02d",testDate.getMinutes());
	  document.getElementById("ss").innerHTML = printf("%02d",testDate.getSeconds());

	  var spanTime = $(".leftTime");
	  
	  
	   
	  // spanTime.next();
	  // alert($(".leftTime").text());

	  for (var i=0;i<spanTime.length; i++){
	  	 dateTask = new Date(spanTime.eq(i).attr("deadline"));
	  	 deadTask = new Date(dateTask.getTime() - dateN.getTime() + 1000 + 24*60*60*1000);
	  	 if (deadTask > 24*60*60*1000)
	  	 {
	  	 	if (deadTask < 72*60*60*1000)
  	 		{
  	 			var hours = deadTask.getUTCHours() + (deadTask.getUTCDate()-1)*24;
	  	 		spanTime.eq(i).text("剩余:" + printf("%02d",hours) + ":" + printf("%02d", deadTask.getMinutes()) +":"+ printf("%02d", deadTask.getSeconds()));	
	  	 		// $("#testTimer").text(deadTask.toUTCString())
	  	 	} else {
	  	 		spanTime.eq(i).text("剩余3天以上");
	  	 	}
	  	 }
	  	 else
	  	 {
	  	 	spanTime.eq(i).text("剩余:" + printf("%02d",deadTask.getUTCHours()) + ":" + printf("%02d", deadTask.getMinutes()) +":"+ printf("%02d", deadTask.getSeconds()));	
	  	 }
	  	 
	  }
}

function printf(){
     var as=[].slice.call(arguments),fmt=as.shift(),i=0;
  	 return     fmt.replace(/%(\w)?(\d)?([dfsx])/ig,function(_,a,b,c){
          var s=b?new Array(b-0+1).join(a||''):'';
          if(c=='d') s+=parseInt(as[i++]);
          return b?s.slice(b*-1):s;
     })
}

function initializeMission(o)
{
	o.ProTasks = $.grep(o.tasks, function(value){
			return value.status == 1;
		});
	o.finTasks = $.grep(o.tasks, function(value){
			return value.status == 2;
		});
	o.faiTasks = $.grep(o.tasks, function(value){
			return value.status == 3;
		});
	o.toBeDone = o.tasks.length - o.finTasks.length - o.faiTasks.length;
	return o;
}

$(document).ready(function(){
	$("#userNameShow").text(user.name);
	$("#balanceShow").text(user.balance);
	$("#frosenShow").text(user.frosen);
	$("#sumShow").text(user.frosen + user.balance)

	
	///初始化missionList
	var missionHTML = "";
	for (var i=0; i<missionList.length; i++)
	{
		missionList[i] = initializeMission(missionList[i]);
		var switcher ="";
		switch (missionList[i].status)
		{
			case 0:
				switcher = "<font class=\"notStarted\">未开始";
				break;
			case 1:
				switcher = "<font class=\"inProgress\">进行中";
				break;
			case 2:
				switcher = "<font class=\"finished\">已完成";
				break;
			case 3:
				switcher = "<font class=\"failed\">已失败";
				break;
			default:
				switcher = "错误";
		} 

		var dateListHTML = "";
		for (var ii=0; ii < missionList[i].tasks.length; ii++){
			var dateString = missionList[i].tasks[ii].date.toLocaleDateString();

		var switcher2 ="";
		switch (missionList[i].tasks[ii].status)
		{
			case 0:
				switcher2 = "<font class=\"notStartedD\">未开始";
				break;
			case 1:
				switcher2 = "<font class=\"inProgressD\">努力中";
				break;
			case 2:
				switcher2 = "<font class=\"finishedD\">已完成";
				break;
			case 3:
				switcher2 = "<font class=\"failedD\">已失败";
				break;
			default:
				switcher2 = "错误";
		} 

			dateListHTML += "<li>" +
							dateString+
							switcher2 +
							"</font></li>";
		}

		var ff = missionList[i].finTasks.length + missionList[i].faiTasks.length + 1;

		missionHTML += "<li class=\"missLi\" id=\"pl" + i + "\">" + 
							String(ff) + "/" + String(missionList[i].tasks.length) + 
							missionList[i].missionName + "---" +
							switcher + " " + "</font>" +
							"<span class=\"leftTime\" deadline=\"" + missionList[i].ProTasks[0].date.toLocaleDateString() + "\">1*1</span>" +
							"<button class=\"finishButton\" value=\"" + i + "\">完成</button> " +
							"<button class=\"giveUpButton\">放弃</button>" +
							"<div id=\"spl" + i +"\" class=\"taskDetailSpan\">" +
								"合计：" + missionList[i].tasks.length + "<br/>" +
								"待完成：" + missionList[i].toBeDone +
								"完成了：" + missionList[i].finTasks.length +
								"失败了：" + missionList[i].faiTasks.length +
								"<ul class=\"dateList\">" +
									dateListHTML +
								"</ul>" +
							"</div>" +
						"</li>";
	}
	$("#missionInProgressList").html(missionHTML);




	$(".giveUpButton").click(function(){
		
		var tg = $(event.target);
		tg.attr("disabled","true");
		$(tg).unbind("click");
		alert("放弃你妹啊！！");
	});

	$(".finishButton").click(function(){
		var tg = $(event.target);
		i = tg.attr("value");
		var testArr = $.grep(missionList[i].tasks, function(value){
			return value.status == 1;
		})
		$("#taskNameShow").text(testArr[0].name);
		$("#clothLayer").show();
		$("#uploadEvidence").show();
		$("#taskID").val(testArr[0].id);
	});

	$(".closeAll").click(function(){
		if (window.confirm("真的要返回吗？返回之后就没了"))
		{
		$(".interactions").hide();	
		}
		
	});

	$(".missLi").click(function(){
		// tg = $(event.target);
		
		tg = "#s" + $(event.target).attr("id");
		$(tg).fadeToggle();	
		
	});


});



















