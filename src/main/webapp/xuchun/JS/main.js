"use strict";

//----------------------JSON 运作-------------------------------------------------------------------
var JSONObject= {
"name":"Bill Gates",
"age":56,
"phone":"555 1234567"};

var fts = {
  "forumTitle" : [
	{ "Title" : "马路上吃肉" , "Holder" : "逯遥", "Deadline" : "2014-08-11", "status" : 0},
	{ "Title" : "吃管氏烤翅" , "Holder" : "徐诚", "Deadline" : "2014-09-12", "status" : 1 },
	{ "Title" : "吃DQ" , "Holder" : "张三", "Deadline" : "2014-08-13", "status" : 2 }
  ]
}

function tagClick(tag)
{
	document.getElementById("textfield").value = document.getElementById("textfield").value + tag;
	document.getElementById("textfield").focus();
}




function postData(){
    var requestStr = {  
            reqStr:  'test parameter'  
    };  
    var request = {   
            requestId: 'asdfasdfa',  
            sessionId: 'asdfasdfasdf',  
            userName: 'Jeremy',  
            password:'123',  
            request: requestStr  
    };  
    //调用了jquery.json 库  
    var encoded = "{ id: 1, name: \"拉风少年\", email: null, mobile: null, password: \"123456\", addTime: 1408174347799, status: null }"//$.toJSON( request );  
    var jsonStr = encoded;  
    var actionStr = $("#actionPath").val();  
    $.ajax({  
        url : "/mysite/user/save",  
        type : 'POST',  
        data : jsonStr,  
        dataType : 'json',  
        //contentType : 'application/json',  
        success : function(data, status, xhr) {  
//         Do Anything After get Return data  
//          $.each(data.payload, function(index){  
//              $("#result").append("</br>" + data.payload[index].beanStr);  
//          });  
        },  
        Error : function(xhr, error, exception) {  
            // handle the error.    
            alert(exception.toString());  
        }  
    });  
}  


function saveUser()
{
	var url='http://211.155.86.32:8081/tosla/user/save';
    $.ajax(
		{
		url : url,
		type : "POST", 
		dataType:"json",
		contentType:'application/json;charset=UTF-8',
		data:JSON.stringify({id:'1',name:'咩哈哈',password:'test',lastIp:'',lastVisit:'1986-05-27'}),
		success : function(data) {
			alert(data.name);   
			},
		error:function(e){
			alert("err");   
			} 
		});
}

///根据输入框里的账号密码获取用户信息。返回包含用户信息的JSON对象。
//userName : 输入框里的用户名
//psd: 输入框里的密码
//return: JSON形式的用户信息
///这部分要等服务端通信功能写完之后再完成
function loginHandler(userName, psd)
{
	var userObj= {
		"name":"Bill Gates",
		"age":56,
		"phone":"555 1234567"};
	return userObj;
}

function registerHandler(userName, email, psd)
{
	var userObj= {
		"name":userName,
		"email":email,
		"phone":"555 1234567"};
	return userObj;
}

$(document).ready(function(){
	$(".regbox").opacity=1;
	$("#in").click(function()//点击登入显示变化
	{
		$("#register").hide();
		$("#talkBoxin").fadeToggle();
		$("#emailInput_login").focus();

	});
	$("#regButton").click(function()//点击注册显示变化
	{
		$("#talkBoxin").hide();
		$("#register").fadeToggle();
		$("#idInput_reg").focus();
	});

	$("#login_button").click(function(){
		var userObj;
		userObj = loginHandler($("#idInput_login").val(), $("#password_login").val());
		if (typeof userObj == "object")
		{
			$(".regbox").fadeOut();
			$("#login_div").hide();
			$("#personalInfo").show();
			$("#userName").text(userObj.name)
		}
	});

	$("#reg_button").click(function(){
		var userObj;
		userObj = registerHandler($("#idInput_reg").val(), $("#email_reg").val(), $("#password_reg").val());
		if (typeof userObj == "object")
		{
			$(".regbox").fadeOut();
			$("#login_div").hide();
			$("#personalInfo").show();
			$("#userName").text(userObj.name)
		}
	});

});


















