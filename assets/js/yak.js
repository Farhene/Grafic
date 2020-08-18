

$("#post").click(function(event){
	let title= $("#ptitle").val();
	let message=$("#message").val();


	

		$("#ptitle").val("");
		$("#message").val("");

		let today= new Date();
		let date = (`${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`);
		var time = (`${today.getHours()-12}:${today.getMinutes()}:${today.getSeconds()}`);


	var hours = today.getHours()%12;
 		var PM;
 		if(hours > 12)
 		{
 			PM = true;
 		}
 		if(hours === 0 && PM === true)
 		{
 			var time = (`12:${today.getMinutes()}:${today.getSeconds()}:AM`);
 		}
 		else if(PM === true)
 		{
 			var time = (`${hours}:${today.getMinutes()}:${today.getSeconds()} PM`);
 		}
 		else{
 			var time = (`${hours}:${today.getMinutes()}:${today.getSeconds()} AM`);
 		}



	if(title==="" || message===""){
		alert("a field is missing")
		

	}else{
		$(".posts").prepend( 
		`
		<li class="thought">
  			<div class="card-body">
				<h5 class="card-title"><span class="delete"><i class="fas fa-trash"></i></span>${title}</h5>
    			<h6 class="card-subtitle mb-2 text-muted">${date}-${time}</h6>
    			<p class="card-text">${message}</p>
  			</div>
  		</li>`
  		
  			);
	}
				
});


$("ul").on("click",".delete", function(event){
	// stops event from bubbling up
	$(this).parent().parent().parent().remove();
});



$(".login").click(function(event){
      let email = $(".email").val();
      let pass = $(".pass").val();


          $(".email").val("");
          $(".pass").val("");
      if(email ===""|| pass===""){
        alert("You must enter a valid email and password");
      }else{
        alert("welcome to the homepage");
        $("#loginForm").remove();
       
       $(".navbar-nav").append(`<a href="test.html"><button class="btn btn-outline-danger my-2 my-sm-0 signout" type="submit">Sign-Out</button></a>`);
        }
       
})


