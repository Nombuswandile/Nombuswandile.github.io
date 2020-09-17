 
 //for them ham button
 function myFunction(x){
 	test();
    x.classList.toggle("change");
    test();
}

//for the contact icons on the header
function test(){
var ham = document.getElementById('ham');
	var icons = document.getElementById('icons');
	//var icon1 = document.getElementById('icon1');
	//var icon2 = document.getElementById('icon2');
	//var icon3 = document.getElementById('icon3');

	var i = 1;

	//if(i == 0){
		//ham.addEventListener('click', function(){
		    icons.style.marginTop = '40px'; //6px
        
		    ham.addEventListener('click', function(){
			    icons.style.marginTop = '-195px';

			    ham.addEventListener('click', function(){
			    	 icons.style.marginTop = '40px'; //6px
        
		             ham.addEventListener('click', function(){
			             icons.style.marginTop = '-195px';
		             })
			    })
		   })
		
		    //i = i;
	    //})
    //}
}



//test();