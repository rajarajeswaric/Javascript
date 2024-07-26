let string = "noon"
let rev = "";

for(let i=string.length-1;i>=0;i--)
{
    rev+=string[i]
}
console.log(rev)
if(rev===string)
{
    console.log("Palindrome")
}
else{
    console.log("Not a Palindrome")
}