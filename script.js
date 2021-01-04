 
 var pics = ["images/pink cake.jpg" ,"images/chocolate cake3.jpg", "images/yellow cake.jpg", "images/light blue cake.jpg"];
	var index = 0;
	//var panther = "black panther.jpg";
	//var next = document.getElementById('next');
	//var back = document.getElementById('back');
	var image = document.getElementById('image');
	image.src = pics[index];
	image.style.height = '330px';
	image.style.opacity = 1;

	function Next(){
		index++;
		
		if(index > 2){
			index = 0;
			image.src = pics[index];
			
		
		}else{
			image.src = pics[index];
			
		    
		}
        
	}


	function Back(){
		index--;

		if(index < 0){
			index = pics.length - 1;
			image.src = pics[index];
			
		    
		}else{
			//index -= 1
			image.src = pics[index];
			
		    
		}
	
	}


var ham = document.getElementById('icons');

function myFunction(x){
	x.classList.toggle("change");
	var x = ham;
	x.classList.toggle("icons");
	
}

/*setInterval(function(){
	index++;
	if(index >= 0 && index != 3 ){
		//index++;
		image.style.height = '320px';  
		image.src = pics[index];
	}else if(index == 2){
		image.style.height = '120px'; 
		image.src = pics[index];
		index = -1;
	}else if(index == 3){
		image.style.height = '320px';  
		image.src = pics[index];
		index = -1;
	}else{
		/*image.style.height = '270px'; 
		image.src = pics[0];
		index = ;*/
		/*alert("index :" + index);
	}
}, 5000)*/