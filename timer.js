window.onload=()=>{
    hour=document.querySelector('#hour');
    min=document.querySelector('#min');
    sec=document.querySelector('#sec');
    let timerId;
   
    document.querySelector('#start').addEventListener("click",()=>{
            timerId=setInterval(()=>{
                document.querySelector('#start').disabled=true;
                document.querySelector('#stop').disabled=false;
                if(min.value==parseInt('0') && sec.value<=parseInt('0') && hour.value==parseInt('0')) {
                    sec.value=parseInt('0');
                    clearInterval(timerId);
                    document.querySelector('#start').disabled=false;
                    sec.disabled=false;
                }
            
                if(min.value>0 && parseInt(sec.value)==0) {
                    sec.value=60;
                    min.value--;
                }
                if(hour.value>0 && min.value==parseInt('0') && sec.value==parseInt('0')) {
                    hour.value--;
                    min.value=59;
                    sec.value=60;
                }
                sec.value--;
                if(sec.value==parseInt("-1") && min.value==parseInt('0') && hour.value==parseInt('0')){
                    sec.value=0;
                }
            },1000);
        
    });

    document.querySelector('#stop').addEventListener("click",()=>{
        clearInterval(timerId);
        document.querySelector('#start').disabled=false;
        document.querySelector('#stop').disabled=true;
    });

    document.querySelector('#clear').addEventListener("click",()=>{
        clearInterval(interId);
        hour.value=parseInt("00");
        min.value=parseInt("00");
        sec.value=parseInt("00");
        document.querySelector('#start').disabled=false;
    });


}