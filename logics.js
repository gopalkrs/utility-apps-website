window.onload=()=> {
    const input1=document.querySelector('#url-val');
    const encoder=document.querySelector('#url-enbtn');
    const decoder=document.querySelector('#url-debtn');
    const res=document.querySelector('#url-result');
    encoder.addEventListener("click",()=> {
        res.value=encodeURIComponent(input1.value);
    });
    decoder.addEventListener("click",()=> {
        res.value=decodeURIComponent(input1.value);
    });
   
}
