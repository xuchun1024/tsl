 
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
 		holder: 10001,
		missionName: "背单词",
		createTime: new Date("2014-08-03"),
		beginTime: new Date("2014-09-03"),
		endTime: new Date("2014-10-03"),
		tasks : [
			{
				name : "背单词",
				detail : "我要背单词",
				date : new Date("2014-09-03"),
				amount : 30,
				supervisor : "学霸",
				status : 1,
			},
			{
				name : "背单词",
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
		totalTasks: 10,
 	},


 ];

  function load(){
	  var date1 = new Date();
	  var date2 = date1;
	  //date2 = date1.
	  var min = date1.getMinutes();
	  var sec = date1.getSeconds();
	  var hh, mm, ss;
	  if (sec == 0)
	  {
		  if (min == 0)
		  {
			  hh = 24 - date1.getHours();
			  mm = 0;
			  ss = 0;
		  }
		  else
		  {
			  hh = 23 - date1.getHours();
			  mm = 60 - date1.getMinutes();
			  ss = 0;
		  }
	  }
	  else
	  {
		  if (min == 0)
		  {
			  hh = 23 - date1.getHours();
			  mm = 59;
			  ss = 60 - sec;
		  }
		  else
		  {
			  hh = 23 - date1.getHours();
			  mm = 59 - date1.getMinutes();
			  ss = 60 - sec;
		  }
	  }

	  document.getElementById("hh").innerHTML = printf("%02d",hh);
	  document.getElementById("mm").innerHTML = printf("%02d",mm);
	  document.getElementById("ss").innerHTML = printf("%02d",ss);

	  $("#hh").text(date2.getDay());


	  var testDate = date2.getTime() - date1.getTime();
	  var testDate1 = new Date();
	  testDate1.setTime(testDate);
	  //alert(testDate1);
	  $("#testTimer").text(String(testDate1.getHours()-8) +String(testDate1.getMinutes()) + String(testDate1.getSeconds()+1));
}

function printf(){
     var as=[].slice.call(arguments),fmt=as.shift(),i=0;
  	 return     fmt.replace(/%(\w)?(\d)?([dfsx])/ig,function(_,a,b,c){
          var s=b?new Array(b-0+1).join(a||''):'';
          if(c=='d') s+=parseInt(as[i++]);
          return b?s.slice(b*-1):s;
     })
}

$(document).ready(function(){
	$("#userNameShow").text(user.name);
	$("#balanceShow").text(user.balance);
	$("#frosenShow").text(user.frosen);
	$("#sumShow").text(user.frosen + user.balance)

	var missionHTML = "进行中的任务";
	for (var i=0; i<missionList.length; i++)
	{
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

		var ff = missionList[i].finished + missionList[i].failed;

		missionHTML += "<li>" + missionList[i].missionName + "---" + switcher + " " + String(ff) + "/" + String(missionList[i].totalTasks) + "</font>";
	}
	$("#missionInProgressList").html(missionHTML);
});



















