 const finding=(a,b,c,d)=>{
	let x,y,z
	console.log("Question : X, "+a+", "+b+", "+c+", "+d+", Y ,"+"Z")

	d1=b-a
	d2=c-b
	d3=d-c
	d0=d2-d1
	x=a-d0

	console.log("X: "+x)
	y=(d3+d0)+d
	console.log("Y: "+y)
	z=(y-d)+d0+y
	console.log("Z: "+z)

	console.log("Answer :"+x+", " +a+", "+b+", "+c+", "+d+", "+y+", " +z)
}
finding(5,9,15,23)
