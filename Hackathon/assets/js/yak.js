

$("button[type='submit']").click(function(event){
	let title= $("#ptitle").val();
	
	let message=$("#message").val();


	

		$("#ptitle").val("");
		$("#message").val("");

		let today= new Date();
		let date = (`${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`);
		var hours = today.getHours()%12;
		if(hours === 0)
		{
			var time = (`12:${today.getMinutes()}:${today.getSeconds()}`);
		}
		else
		{
			var time = (`${hours}:${today.getMinutes()}:${today.getSeconds()}`);
		}

	

		// grabbing new to do from input
		
		//$(this).val("");
		// create a new li and add to ul
		// using append methond
	if(title==="" || message===""){
		alert("a field or more are missing")
		

	}

	else
	{
		$(".post").prepend(`<div class="card" >
  			<div class="card-body">
    			<h5 class="card-title">${title}</h5>
    			<h6 class="card-subtitle mb-2 text-muted">${date}-${time}</h6>
    			<p class="card-text">${message}</p>
  			</div>`
  			);
	}
				
});

