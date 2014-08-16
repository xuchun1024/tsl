"use strict";
var datess;

function getJSON()
{
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("get", "http://211.155.86.32:8081/tosla/user/1");

        //设置回调函数
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
	var amount_sum = parseInt(document.getElementById("datenum").innerText) * parseInt(document.getElementById("task_1_amount").value);
	if (amount_sum > 0 )
	{
		document.getElementById("amount_sum").innerHTML = amount_sum;
		document.getElementById("postTast").disabled = false;
	}
}
