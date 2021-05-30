window.onload=()=>{
    days=document.querySelector('#days');
    hour=document.querySelector('#hour');
    min=document.querySelector('#min');
    sec=document.querySelector('#sec');
    days.value=0;
    hour.value=0;
    min.value=0;
    let timerId;
   
    document.querySelector('#start').addEventListener("click",()=>{
            timerId=setInterval(()=>{
                document.querySelector('#start').disabled=true;
                sec.disabled=true;
                sec.value--;
                if(min.value==parseInt('0') && sec.value<=parseInt('0') && hour.value==parseInt('0')) {
                    clearInterval(timerId);
                    sec.value=parseInt('0');
                    document.querySelector('#start').disabled=false;
                    sec.disabled=false;
                }
            
                if(min.value>0 && sec.value==parseInt('0')) {
                    sec.value=59;
                    min.value--;
                }
                if(hour.value>0 && min.value==parseInt('0') && sec.value==parseInt('0')) {
                    hour.value--;
                    min.value=59;
                    sec.value=59;
                }
            },1000);
        
    });

    document.querySelector('#stop').addEventListener("click",()=>{
        clearInterval(timerId);
        document.querySelector('#start').disabled=false;
    });

    document.querySelector('#clear').addEventListener("click",()=>{
        clearInterval(interId);
        hour.value=parseInt("00");
        min.value=parseInt("00");
        sec.value=parseInt("00");
        document.querySelector('#start').disabled=false;
    });


}