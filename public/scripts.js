window.addEventListner('load', function(){

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var myArr = JSON.parse(this.responseText);
	        document.getElementById("demo").innerHTML = myArr[0];
	    }
	};
	xmlhttp.open("GET", "info.erb", true);
	xmlhttp.send();
});




