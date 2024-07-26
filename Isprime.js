function Isprime()

{
   let n=15
   let count = 0;
   let co=0;
   

   for(int i=1;i<=n;i++)
   {
       if(i%2==0)
       {
        count++;
       }
       else
       {
           co++;
       }
   }

   if(count>2)
   {
      console.log("not a prime number")
   }
   else{
    console.log("Prime ");
   }
}