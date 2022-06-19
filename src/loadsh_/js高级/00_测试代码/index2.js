// js找出数字在数组中下一个相邻的元素
let arr = ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "27", "30", "33", "36", "42", "48", "54", "60"]
var rr = [];
function name(n) {
    let num = Number(n);
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element!=num){
            rr.push(num--);
        } 
    }
    console.log(rr);
    return rr.find((el)=>{
        let newel = String(el);
        return arr.includes(newel);
    })
}
let newn = String(name("56"));

console.log(newn);
