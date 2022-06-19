function* nextNumber(len, list) {
	let result = [];
	let val = 0;
	
	while (val < list.length) {
		result = [];
		let i = val
		while(i < val + len)
		{
			if (list[i]) {
				result.push(list[i]);
			}
		i+=1
		}
	
		yield result;
		val += len;
	}
}
list = [
	'2','4','6',
	'8','10','12',
	'14','16','18',
	'20','21'
];

document.getElementById("list").innerHTML = list;

var myArray = nextNumber(1, list);			
	
document.writeln(myArray.next().value+"<br>");	
document.writeln(myArray.next().value+"<br>");	
document.writeln(myArray.next().value+"<br>");
document.writeln(myArray.next().value+"<br>");	
document.writeln(myArray.next().value+"<br>");	
document.writeln(myArray.next().value+"<br>");	
document.writeln(myArray.next().value+"<br>");	
document.writeln(myArray.next().value+"<br>");
document.writeln(myArray.next().value+"<br>");
document.writeln(myArray.next().value+"<br>");