window.onload=()=>{
    const input2=document.querySelector('#base-val');
    const baseEnc=document.querySelector('#enc-base');
    const baseDec=document.querySelector('#dec-base');
    const resBase=document.querySelector('#base-result');
    baseEnc.addEventListener("click",()=> {
        resBase.value=btoa(input2.value)
    });
    baseDec.addEventListener("click",()=> {
        resBase.value=atob(input2.value)
    });
    
}