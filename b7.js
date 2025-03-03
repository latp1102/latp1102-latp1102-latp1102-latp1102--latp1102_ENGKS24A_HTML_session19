let number1 = +prompt("Mời bạn nhập số thứ nhất");
let number2 = +prompt("Mời bạn nhập số thứ hai");
let number3 = +prompt("Mời bạn nhập số thứ ba");
number1 > number2 && number1 > number3 ? document.write(`số lớn nhất  ${number1}`) : number2 > number1 && number2 > number3 ? document.write(`so lon nhat la: ${number2}`) : document.write(`so lon nhat la: ${number3}`)

