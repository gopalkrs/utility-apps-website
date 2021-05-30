window.onload=()=>{
    let textVal=document.querySelector('#trans-inp');
    let pirate=document.querySelector('#trans-res');
    let urlPiate='https://api.funtranslations.com/translate/pirate.json?text='+ textVal.value;

    document.querySelector('#trans-btn').addEventListener("click",()=>{
        fetch(urlPiate)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            pirate.innerText=data.contents.translated;
        });
    });
    document.querySelector('#clear-btn').addEventListener("click",()=>{
        textVal.value="";
    })
}