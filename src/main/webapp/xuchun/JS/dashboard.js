 
    setInterval("load()", 1000);

  function load()
  {
	  var date1 = new Date();
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
	  document.getElementById("mm").innerHTML = printf("%02d",mm);;
	  document.getElementById("ss").innerHTML = printf("%02d",ss);;
}

function printf(){
     var as=[].slice.call(arguments),fmt=as.shift(),i=0;
  return     fmt.replace(/%(\w)?(\d)?([dfsx])/ig,function(_,a,b,c){
          var s=b?new Array(b-0+1).join(a||''):'';
          if(c=='d') s+=parseInt(as[i++]);
          return b?s.slice(b*-1):s;
     })
}