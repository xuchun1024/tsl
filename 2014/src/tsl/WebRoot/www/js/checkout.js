//var jsonTask = JSON.parse("[{\"name\":\"背100个单词\",\"detail\":\"请输入任务描述\",\"date\":\"2014-09-12\",\"amount\":10},{\"name\":\"背100个单词\",\"detail\":\"请输入任务描述\",\"date\":\"2014-09-13\",\"amount\":10},{\"name\":\"背100个单词\",\"detail\":\"请输入任务描述\",\"date\":\"2014-09-14\",\"amount\":10},{\"name\":\"背100个单词\",\"detail\":\"请输入任务描述\",\"date\":\"2014-09-11\",\"amount\":10},{\"name\":\"背100个单词\",\"detail\":\"请输入任务描述\",\"date\":\"2014-09-10\",\"amount\":10},{\"name\":\"背100个单词\",\"detail\":\"请输入任务描述\",\"date\":\"2014-09-09\",\"amount\":10},{\"name\":\"背100个单词\",\"detail\":\"请输入任务描述\",\"date\":\"2014-09-08\",\"amount\":10}]");

//jsonTask = $.query.get("json");
var url = location.href; 
var urlt = decodeURI(url.substring(url.indexOf("=")+1,url.length));
var jsonTask = JSON.parse(urlt,function(key, value){
	if (key=="date") {
		return new Date(value);
	} else {
		return value;
	}
});

$(document).ready(function(){
	$("#taskTitle").text("张三" + "'s " + jsonTask[0].name + "计划");
	$("#supervisor").text(jsonTask[0].supervisor);
	$("#taskDetail").text(jsonTask[0].detail);

	var deadlineString ="";
	for (var i=0; i < jsonTask.length; i++)
	{
		deadlineString += "<li class=\"deadlineLi\" style=\"float:left;list-style:none;padding-right:10px\">" + jsonTask[i].date.getFullYear() + "年" + String(jsonTask[i].date.getMonth()+1) + "月" + String(jsonTask[i].date.getDate()+1)+ "日</li>"
	}
	$("#deadlines").html(deadlineString);
});

