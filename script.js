 
 var pics = ["images/pink cake.jpg" ,"images/chocolate cake3.jpg", "images/yellow cake.jpg", "images/light blue cake.jpg"];
	var index = 0;
	//var panther = "black panther.jpg";
	//var next = document.getElementById('next');
	//var back = document.getElementById('back');
	var image = document.getElementById('image');
	image.src = pics[index];
	image.style.height = '330px';


//for them ham button
function myFunction(x){
    x.classList.toggle("change");
    //var i = true;
    var ham = document.getElementById('ham');
	
	//ham.addEventListener('click', function(){
		var icons = document.getElementById('icons');
		icons.style.marginTop = '40px';

		ham.addEventListener('click', function(){
			icons.style.marginTop = '-195px';
			//remove eventlistener
		})
	//})
}

setInterval(function(){
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
		alert("index :" + index);
	}
}, 5000)