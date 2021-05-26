window.onload=()=>{
    let hour=document.querySelector('#hour');
    let min=document.querySelector('#min');
    let sec=document.querySelector('#sec');

    document.querySelector('#start').addEventListener("click",()=>{
        document.querySelector('#start').disabled=true;
        document.querySelector('#stop').disabled=false;
        interId=setInterval(()=>{
            if(sec.value<9){
                sec.value++;
                sec.value="0"+(sec.value);
            }
            else{
                sec.value++;
            }

            if(sec.value==60){
                if(min.value<9){
                    min.value++;
                    min.value="0"+(min.value);
                }
                else{
                    min.value++;
                }
                sec.value=parseInt("00");
            }
            if(min.value==60){
                if(hour.value<10){
                    hour.value++;
                    hour.value="0"+hour.value;
                }
                else{
                    hour.value++;
                }
                min.value=parseInt("00");
            }
        },1000);
    });

    document.querySelector('#stop').addEventListener("click",()=>{
        clearInterval(interId);
        document.querySelector('#start').disabled=false;
        document.querySelector('#stop').disabled=true;
    });

    document.querySelector('#clear').addEventListener("click",()=>{
        hour.value=parseInt("00");
        min.value=parseInt("00");
        sec.value=parseInt("00");
    });
}