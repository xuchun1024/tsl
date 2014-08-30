"use strict";
var datess;
var user = {
	id : 10001,
	name: "矮小猴",
	balance: 30,
}
function getJSON()
{
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("get", "http://211.155.86.32:8081/tosla/user/1");

        //ÉèÖÃ»Øµ÷º¯Êý
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                //document.getElementById("result").innerHTML = xmlHttp.responseText;
				alert( xmlHttp.responseText);
            }
        }
	xmlHttp.send(null);

	var JSONObject= {
	"name":"Bill Gates",
	"age":56,
	"phone":"555 1234567"};

	return JSONObject;
}

function postJSON()
{
	
}

///根据输入的日期和金额计算总额度
function changeSum()
{
	var amount_sum = parseInt(document.getElementById("datenum").innerText) * parseInt(document.getElementById("spend").value);
	if (amount_sum > 0 )
	{
		document.getElementById("amount_sum").innerHTML = amount_sum;
		$("#totalAmount").text(amount_sum + ".00");
		document.getElementById("postTast").disabled = false;
	}
	else
	{
		document.getElementById("postTast").disabled = true;
	}

	if (date_arr.length > 0)
	{
		if (date_arr.length < 3)
		{
			$("#timeDetail").show();
			$("#times").hide();
			document.getElementById("timeDetail").innerHTML = "当前任务的截止日期：" + date_arr;	
		}
		else
		{
			$("#timeDetail").hide();
			$("#times").show();
			document.getElementById("sumDays").innerHTML = date_arr.length;
		}
	}
	document.getElementById("deadlineDatelist").innerHTML = date_arr;
}

///传递数据至服务端
function postTaskHandler()
{
	var taskObj = {
		"name" : 1
	};
	//if success

	//if not login
	//taskObj.err = "not user";

	//if not connected
	//taskObj.err = "no connection"
	return taskObj;
}

function creatJSON()
{

}
function by(value1, value2)
{
	if (value1.date > value2.date){
		return 1;
	} else if (value1.date > value2.date){
		return	-1;
	} else {
		return 0;
	}
}

////生成任务的Obj
function createMission()
{
	var taskList = new Array();
	for (var i=0; i < datess.length; i++)
	{
		var task = new Object();
		task.name = $("#taskName").val();
		task.detail = $("#taskDetail").val();
		task.date = new Date(datess[i]);
		task.amount = parseInt(document.getElementById("spend").value);
		task.supervisor = $("#supervisor").val();
		taskList.push(task);
	}

	taskList.sort(by);
	var missionObj = {

		holder: user.id,
		missionName: taskList[0].name,
		createTime: new Date(),
		beginTime: taskList[0].date,
		endTime: taskList[taskList.length-1].date,
		tasks : taskList,
		amountSum : taskList[0].amount * taskList.length,
	}

	return missionObj;
}	

function installConfirmPage(o)
{
	$("#taskTitle").text(o.holder + "'s " + o.missionName + "计划");
	$("#supervisorName").text(o.tasks[0].supervisor);
	$("#taskDetailShowSpan").text(o.tasks[0].detail);

	var deadlineString ="";
	for (var i=0; i < o.tasks.length; i++)
	{
		deadlineString += "<li class=\"deadlineLi\" style=\"float:left;list-style:none;padding-right:10px\">" + o.tasks[i].date.getFullYear() + "年" + String(o.tasks[i].date.getMonth()+1) + "月" + String(o.tasks[i].date.getDate()+1)+ "日</li>"
	}
	$("#deadlines").html(deadlineString);
	$("#amountSum").text(o.amountSum);

	$("#balanceSpan").text(user.balance);
	// if (user.balance < o.amountSum){
	// 	$("#payQ").disabled();
	// 	$("#chargeButton").show();
	// }

}

$(document).ready(function(){
	
	$("#times").click(function(){
		$("#deadlineDatelist").slideToggle("slow");
	});

	$("#timeDetail").hide();
	$("#times").hide();
	$("#deadlineDatelist").hide();


	///============================ 按钮处理区 ===========分隔符要长====================

	///点击保存按钮
	$("#saveTask").click(function(){
		alert("学霸说，保存你妹啊。别拖了，赶紧开始！！");
		var tg = $(event.target);
		$("#saveTask").attr("disabled","true");
		$(tg).unbind("click");
	});

	///点击增加拖星币
	$("#addTXB").click(function(){
		alert("学霸说没用，懒得做");
		var tg = $(event.target);
		tg.attr("disabled","true");
		$(tg).unbind("click");
	});

	///点击返回修改
	$("#modifyButton").click(function(){
		$("#noModification").show();

	});
	///确认修改
	$("#modifyAssured").click(function(){
		$(".interactions").hide();
	});
	///不修改
	$("#noModifyAssured").click(function(){
		$("#noModification").hide();
	});

	///点击发布任务的按钮
	$("#postTast").click(function(){
		var tg = event.target;
		//校验数据是否合理的东西
		if (!(parseInt(document.getElementById("datenum").innerText) >0))
		{
			alert("至少约定7天");
			return;
		}
		if (!(parseInt(document.getElementById("spend").value) > 9))
		{
			alert("喂喂！10块都不到，哪来的约束力？");
			return;
		};

		//// 去远端传递数据
		/*var taskObj = postTaskHandler();
		switch (taskObj.err) {
			case "not user":
				alert("no user")
			break;
			case "no connection":
				alert("no connection")
			break;
			default: 
				alert("ok");
		}
		*/

		var o = createMission();
		installConfirmPage(o);
		//window.location.href = "checkout.html?json=" + o;
		$("#clothLayer").show();
		$("#reassure").show();
		$(".ui-datepicker").hide();
	});

	///点击支付按钮
	$("#payQ").click(function(){
		
		//$("#payCheck").validate();
		if ($("#agreeMe").attr("checked") == true){
			$("#confirm").show();	
		} else {
			alert("请同意，同意框要点上啊");
		}

		
	});

	///点击真的支付
	$("#payNow").click(function(){
		window.location.href="checkout.html";
	});

	///点击认怂
	$("#payLater").click(function(){
		$("#confirm").hide();
	});

	///点击充值
	$("#chargeSubmit").click(function(){
		var chargeObj = {
			charger : user.id,
			cardCode: $("#cardCode").val()
		}
		var chargeJSON = JSON.stringify(chargeObj);
		alert(chargeJSON);
	});

	$(".chargeTri").click(function(){
		$("#chargeLayer").show();
	});

	$("#clearCardCode").click(function(){
		$("#cardCode").val("");
	});
	// ===================test
	
});



















