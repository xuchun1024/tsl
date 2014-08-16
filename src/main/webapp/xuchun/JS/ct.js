var datess;


function setdt(date_arr)
{
	$("#tmoney").text = "hhhh";//$("#datepicker_input")
}



function jsonPost()
{
	 var url=path+'testConverter.html';
    $.ajax( {
    url : url,
    type : "POST", 
    dataType:"json",
    contentType:'application/json;charset=UTF-8',
    data:JSON.stringify({userId:'1',userName:'hello',password:'test',credits:'2',lastIp:'',lastVisit:'1986-05-27'}),
    success : function(data) {
        alert(data.userName);   
   
    },
error:function(e){
    alert("err");   
    } 
}