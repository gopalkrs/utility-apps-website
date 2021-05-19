window.onload=()=>{
    const input3=document.querySelector('#md-hash');
    const mdHash=document.querySelector('#md-btn');
    const mdRes=document.querySelector('#md-result');
    mdHash.addEventListener("click",()=> {
        mdRes.value=window.CryptoJS.MD5(input3.value);
    });

    const input4=document.querySelector('#sh1-hash');
    const sh1Btn=document.querySelector('#sh1-btn');
    const sh1Res=document.querySelector('#sh1-result');
    sh1Btn.addEventListener("click",()=>{
        sh1Res.value=window.CryptoJS.SHA1(input4.value);
    });

    const input5=document.querySelector('#sh2-hash');
    const sh2Btn=document.querySelector('#sh2-btn');
    const sh2Res=document.querySelector('#sh2-result');
    sh2Btn.addEventListener("click",()=>{
        sh2Res.value=window.CryptoJS.SHA256(input5.value);
    });

    const input6=document.querySelector('#sh3-hash');
    const sh3Btn=document.querySelector('#sh3-btn');
    const sh3Res=document.querySelector('#sh3-result');
    sh3Btn.addEventListener("click",()=>{
        sh3Res.value=window.CryptoJS.SHA512(input6.value);
    });

    

}