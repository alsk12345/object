function get(url.callback){
	var xhr = new XMLHttpRequest();
	xhr.open('get',url,true);
	xhr.send();
	xhr.onreadystatchange=function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var msg = JSON.parse(xhr.respondeText);
			callback(msg);
		}
	}
}


function post(url,data,callback){
	var shr = new XMLHttpRequest();
	xhr.open('opst',url,true);
	xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	xhr.send();
	xhr.onreadystatchange=function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var msg =JOSN.parse(xhr.responseText);
			callback(msg);
		}
	}
}