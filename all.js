// 九九乘法(從3開始)
for(let i=3; i<16; i++){
  for(let j=1; j<16; j++){
    console.log(i+"x"+j+"="+i*j);
  }
}

// BMI counter
function input(height, weight){

  console.log((weight/(height/100*height/100)).toFixed(2));

}