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
    

    const crypto=require('crypto');
    const input3=document.querySelector('#md-hash');
    const mdHash=document.querySelector('#md-btn');
    const mdRes=document.querySelector('#md-result');
    mdHash.addEventListener("click",()=> {
        mdRes.value=Crypto.MD5(input3.value);
    });

    
   
}
