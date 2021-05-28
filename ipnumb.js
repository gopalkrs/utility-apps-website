window.onload=()=>{
    let ipVal=document.querySelector('#ip-val');
    document.querySelector('#know-ip').addEventListener("click",()=>{
        fetch('https://api.ipify.org/?format=json')
        .then(response=>response.json())
        .then(data=>{
            ipVal.innerText="Your IP is "+ data.ip;
        });
    });
}