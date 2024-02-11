// script.js
var session;

 $.ajax({
   url: "php/jslogin.php",
   type: "GET",
   data: "getDetails",
   contentType: "text/plain",
   success: function(data){
                    session = JSON.parse(data);
                    if(session.length!=0)
                    {
	                 document.getElementById("username").innerHTML=session?.userlogin?.firstname;
                    }
                    else
                    {
                         //alert("Not a valid session");
                    }
                },
                error: function(data){
                    alert('There were errors while trying to connect to database');
                }
   });

function logout(){
  $.ajax({
   url: "php/jslogin.php",
   type: "GET",
   data: "logout",
   contentType: "text/plain",
   success: function(data){
                    if($.trim(data) === "1"){
                        setTimeout('window.location.href ="login.html"', 1000);
                    }
                },
                error: function(data){
                    alert('There were erros while doing the operation.');
                }
});
}