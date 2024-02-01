$(document).ready(function () {
    var exp = "";
    var num;
    var arr = [];
    arr.push(7);
    arr.push(6);
    console.log(arr);
    $(".one").click(function () {
        exp = exp + 1;
        console.log(exp);
        document.getElementById("display").innerHTML = exp;
    });
    $(".two").click(function () {
        exp = exp + 2;
        console.log(exp);
        document.getElementById("display").innerHTML = exp;
    });

    $(".three").click(function () {
        exp = exp + 3;
        console.log(exp);
        document.getElementById("display").innerHTML = exp;
    });
    $(".four").click(function () {
        exp = exp + 4;
        document.getElementById("display").innerHTML = exp;
        console.log(exp);
    });
    $(".five").click(function () {
        exp = exp + 5;
        console.log(exp);
        document.getElementById("display").innerHTML = exp;
    });
    $(".six").click(function () {
        exp = exp + 6;
        console.log(exp);
        document.getElementById("display").innerHTML = exp;
    });
    $(".seven").click(function () {
        exp = exp + 7;
        console.log(exp);
        document.getElementById("display").innerHTML = exp;
    });
    $(".eight").click(function () {
        exp = exp + 8;
        console.log(exp);
        document.getElementById("display").innerHTML = exp;
    });
    $(".nine").click(function () {
        exp = exp + 9;
        console.log(exp);
        document.getElementById("display").innerHTML = exp;
    });
    $(".zero").click(function () {
        if (exp === "0") {
            return exp;
        }
        exp = exp + 0;
        console.log(exp);
        document.getElementById("display").innerHTML = exp;
    });
    $(".plus").click(function () {
        exp = exp + "+";
        console.log(exp);
        document.getElementById("display").innerHTML = exp;
    });
    $(".divide").click(function () {
        exp = exp + "/";
        console.log(exp);
        document.getElementById("display").innerHTML = exp;
    });
    $(".multiply").click(function () {
        exp = exp + "*";
        console.log(exp);
        document.getElementById("display").innerHTML = exp;
    });
    $(".sub").click(function () {
        exp = exp + "-";
        console.log(exp);
        document.getElementById("display").innerHTML = exp;
    });
    $("#clear").click(function () {
        exp = "";
        console.log(exp);
        document.getElementById("display").innerHTML = 0;
    });
    $("#del").click(function () {
        exp = exp.slice(0, -1);
        console.log(exp);
        document.getElementById("display").innerHTML = exp;
    });
    $(".dot").click(function () {
        var l = exp.length;
        var c = Number(0);
        for (var i = l; i >= 0; i--) {
            if (exp[i] === "+") {
                c = 0;
                break;
            } else if (exp[i] === "-") {
                c = 0;
                break;
            } else if (exp[i] === "/") {
                c = 0;
                break;
            } else if (exp[i] === "*") {
                c = 0;
                break;
            } else if (exp[i] === ".") {
                c = 1;
                break;
            }
        }
        console.log(l);
        if (c === 1) {
            return exp;
        } else {
            exp = exp + ".";
        }

        console.log(exp);
        document.getElementById("display").innerHTML = exp;
    });
    
    var signcheck = Number(10), ncheck;

    function fetchnum(i) {
        num = Number(0);
        console.log("i is ", i);
        i++;
        if (exp[i] === "-" || exp[i] === "+") {
            if (exp[i] === "+") {
                signcheck = Number(1);
            } else if(exp[i]==="-"){
                signcheck = Number(0);
            }
            i++;
            console.log("Inside the if i is " , i , " and exp[i] is ", exp[i]);
            if (exp[i] === "+") {
                signcheck = Number(2);
                i++;
            } else if(exp[i]==="-"){
                signcheck = Number(3);
                i++;
            }
            
        }
        var numexp = "";
        while (exp[i] != "+" && exp[i] != "-" && exp[i] != "/" && exp[i] != "*") {
            numexp = numexp + exp[i];
            console.log("numexp is ", numexp);
            i++;
            if (i >= exp.length) {
                break;
            }
        }
        num = Number(numexp);
        console.log(num);
    }
    var pren = Number(0);
    function fetch1() {
        i = 0;
        var numexp = "";
        while (exp[i] != "+" && exp[i] != "-" && exp[i] != "/" && exp[i] != "*") {
            numexp = numexp + exp[i];
            i++;
        }
        pren = Number(numexp);
    }
    $(".equal").click(function () {
        fetch1();
        var result = Number(0);
        result = result + pren;
        for (var i = 0; i < exp.length; i++) {
            if (exp[i] === "+") {
                fetchnum(i);
                var postn = num;
                result = result + postn;
            } else if (exp[i] === "-") {
                fetchnum(i);
                var postn = num;
                result = result - postn;
            } else if (exp[i] === "*") {
                fetchnum(i);
                if (signcheck === 0) {
                    var postn = num;
                    console.log(num, result);
                    result = result * postn;
                    result = -result;
                    i++;
                } else if (signcheck === 1) {
                    var postn = num;
                    console.log(num, result);
                    result = result * postn;
                    result = result;
                    i++;
                }
                  else {
                    var postn = num;
                    console.log(num, result);
                    result = result * postn;
                }
            } else if (exp[i] === "/") {
                fetchnum(i);
                var postn = num;
                result = result / postn;
            }
        }
        console.log("Result is: ", result);
        console.log("= is clicked");
        document.getElementById("display").innerHTML = result;
    });
});
