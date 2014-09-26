"use strict";
var flag=true;

function tagClick(tag)
{
	document.getElementById("textfield").value = document.getElementById("textfield").value + tag;
	document.getElementById("textfield").focus();
}

$(document).ready(function(){
	$(".regbox").opacity=1;
	$("#in").click(function() {//点击登入显示变化 
		$("#register").hide();
		$("#talkBoxin").fadeToggle();
		$("#emailInput_login").focus();
	});

	$("#regButton").click(function(){//点击注册显示变化
		$("#talkBoxin").hide();
		$("#register").fadeToggle();
		$("#idInput_reg").focus();
	});

	// $("#login_button").click(function(){
	// 	var userObj;
	// 	userObj = loginHandler($("#idInput_login").val(), $("#password_login").val());
	// 	if (typeof userObj == "object")
	// 	{
	// 		$(".regbox").fadeOut();
	// 		$("#login_div").hide();
	// 		$("#personalInfo").show();
	// 		$("#userName").text(userObj.name)
	// 	}
	// });

	// $("#reg_button").click(function(){
	// 	var userObj;
	// 	userObj = registerHandler($("#idInput_reg").val(), $("#email_reg").val(), $("#password_reg").val());
	// 	if (typeof userObj == "object")
	// 	{
	// 		$(".regbox").fadeOut();
	// 		$("#login_div").hide();
	// 		$("#personalInfo").show();
	// 		$("#userName").text(userObj.name)
	// 	}
	// });

	$("#regaction").validate({
		rules : {
			idInput_reg : "required",
			emailInput_reg : {
				required : true,
				email:true,
			},
		},
		messages:{
			idInput_reg : "昵称是必要的",
		},
		submitHandler:function(form){
            reg();
        },
	});
});


//登陆
	function login(){
		 var emailInput_login=$("#emailInput_login").val();
		 var password_login=$("#password_login").val();
	 	 if(emailInput_login==''){
			alert("邮箱不能为空！");
			return;
		 }  
		if(password_login==''){
		   alert("密码不能为空！");
		   return;
		}  
	   $.ajax({
		type : 'POST',
		url  : 'login.action',
		data:{"emailInput_login":emailInput_login,"password_login":password_login},
		dataType : 'json',
		async:false,
		success : function(data){
		for(var r in data){
			if(r == 'login_success'){
				$(".regbox").fadeOut();
				$("#login_div").hide();
				$("#personalInfo").show();
				$("#userName").text(emailInput_login);
			 }
		}
		},
		error: function(data){
	    	alert("用户名与密码错误！");
		}
	});
}
	//注册
	function reg(){
		 var idInput_reg=$("#idInput_reg").val();
		 var emailInput_reg=$("#emailInput_reg").val();
		 var password_reg=$("#password_reg").val();
		 var password_reg2=$("#password_reg2").val();
		 var textfield=$("#textfield").val();
		 var selectfield=$("#selectfield").val();
	 // 	 if(idInput_reg==''){
		// 	alert("昵称不能为空！");
		// 	return;
		// }  
		// if(emailInput_reg==''){
		//    alert("邮箱不能为空！");
		//    return;
		// }  
		// if(password_reg==''){
		//     alert("密码不能为空！");
		//     return;
		// }  
		// if(password_reg2==''){
		//     alert("确认密码不能为空！");
		//     return;
		// }  
		// if(password_reg2!=password_reg){
		//     alert("两次输入密码不一致！");
		//     return;
		// }  
		// if(textfield==''){
		//     alert("验证码不能为空！");
		//     return;
		// }  

	if (textfield != null && textfield != '' && selectfield != null&& selectfield != ''){
			if (textfield.toLocaleLowerCase() != selectfield.toLocaleLowerCase()){
				alert("验证码输入有误");
				document.getElementById("textfield").value = "";
				createCode();
				document.register.textfield.focus();
				return;
			}
		}
		else {
		    alert("请输入验证码");
		}
		
		//验证邮箱是否被占用
	  $.ajax({
			type : 'POST',
			url  : 'valid.action',
			data:{"emailInput_reg":emailInput_reg},
			dataType : 'json',
			async:false,
			success : function(ok){
			flag=ok;
			},
			error: function(data){
		    	alert("验证邮箱失败");
			}
	   });
	   if(flag){
		   $.ajax({
				type : 'POST',
				url  : 'register.action',
				data:{"idInput_reg":idInput_reg,"emailInput_reg":emailInput_reg,"password_reg":password_reg},
				dataType : 'json',
				async:false,
				success : function(data){
					if(data){
					    alert("注册成功!");
						$(".regbox").fadeOut();
						$("#login_div").hide();
						$("#personalInfo").show();
						$("#userName").text(emailInput_reg);
					 }
				},
				error: function(data){
			    	alert("注册失败,系统异常");
				}
		});
	}else{
		alert("邮箱已被占用，请用别的邮箱进行注册!");
	}
}


















