function fibo()

  let n1=0
  let n2 = 1
  let x=5
  console.log(n1,n2);
  for(let i=2;i<=x;i++)
  {
    let temp = n2;
    n2 = n1 + n2;
    console.log(n2)
    n1=temp
  }
console.log(fibo())