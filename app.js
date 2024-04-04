for( i=1;i<=10;i++){
	console.log(i)
}
for( i=10;i>=1;i--){
	console.log(i);
}
for( i=1;i<=20;i++){
	if(i%2==0){
		console.log("tegsh too: "+i)
	}else if(i%2==1){
		console.log("sondgoi too: "+i)
	}	
}
var niilber=0;
	for( i=1;i<=10;i++){
		niilber=niilber+i;
}
console.log(niilber);
var urgber=1;
	for( i=1;i<=10;i++){
		urgber=urgber*i;
}
console.log(urgber);
var random = Math.floor(Math.random()*10)+1;
console.log(random);
for(i=1;i<=3;i++){
	var too = +prompt("1-ees 10 hurtleh toog taana uu")
	if(too==random){
		alert("Ta zuv taalaa");
		break;
	}else if(too<random){
		alert("bag bna")
	}else if(too>random){
		alert("ih bna")
	}else{
		
	}	alert("buruu talaa")
}