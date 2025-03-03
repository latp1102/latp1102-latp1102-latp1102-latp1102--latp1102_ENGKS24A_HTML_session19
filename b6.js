let a = prompt("Nhập vào a");
let b = prompt("Nhập vào b");
let c = prompt("Nhập vào c");
if(a != 0){
    let detal = b**2 - 4 * a * c;
        if (detal < 0){
            document.write("Vô nghiệm");
        }
        else if (detal > 0){
            document.write("pt có 2 no");
            let x1 = (-b - Math.sqrt(detal)) /2*a;
            let x2 = (-b + Math.sqrt(detal)) /2 * a;
            document.write(` x1= ${x1}, x2 = ${2}`);
            
        }
        else{
            let x = (-b/ 2 * a);
            document.write("pt có nghiệm kép x1=x2=", x);
        }
}

