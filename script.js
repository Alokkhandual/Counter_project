
const title=document.querySelector('#title')

 let crrValue=0;

const inc=document.querySelector('#inc')
const dec=document.querySelector('#dec')
const res=document.querySelector('#res')

inc.addEventListener('click',function(){
    if(crrValue<10){
        crrValue++;
        title.innerHTML=crrValue;
    }
   
})

dec.addEventListener('click',function(){
   if(crrValue>-5){
    crrValue--;
    title.innerHTML=crrValue;
   }
})

res.addEventListener('click',function(){
    crrValue =0;
    title.innerHTML=crrValue;
})