var oncePer=setInterval(oncePerSecond, 1000);
var itr = 0;
function oncePerSecond(){
	let d = new Date();
	let time = d.toLocaleTimeString();
	console.log(time);
	itr++;
	if(itr == 10) {
		clearInterval(oncePer);
	}
}

