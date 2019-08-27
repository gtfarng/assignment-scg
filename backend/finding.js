var express = require('express');
var app = express();

app.get('/function/:str1/:str2/:str3/:str4', (req, res) => {
  console.log(req)
  
  let n1=req.params.str1
  let n2=req.params.str2
  let n3=req.params.str3
  let n4=req.params.str4
 



 let  	d1=n2-n1
 let 	d2=n3-n2
 let 	d3=n4-n3
 let 	d0=d2-d1
 let 	x=n1-d0

	
	let y=(n4-n3)+d0+parseInt(n4)
	
	console.log("Y=>"+y)
	let z=(y-n4)+d0+y
console.log("Z=>"+z)
	 let greetText ="X, "+ req.params.str1 + ", " + req.params.str2+ ", " + req.params.str3+ ", " + req.params.str4+", Y"+", Z"
	  let greetsText =x+", "+ n1 + ", " + n2+ ", " +n3+ ", " + n4+", "+y+", "+z
	

  res.send(`<html><h1 style="align:center;">Question: ${greetText}<br>Answer: ${greetsText}</h1></body></html>`)
})

app.listen(8000);