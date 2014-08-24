"use strict";
var datess;

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


function postTask()
{
	for (var f in datess)
	{
		var task = new JSONObject();
		task.name = document.getElementById("taskDetail").innerText;
		task.date = datess[f];
		alert(task.name);
	}
}

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

function changePrice()
{

}

$(document).ready(function(){
  $("#times").click(function(){
	  $("#deadlineDatelist").slideToggle("slow");
  });

  $("#timeDetail").hide();
  $("#times").hide();
  $("#deadlineDatelist").hide();
});
















