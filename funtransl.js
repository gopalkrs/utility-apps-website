window.onload=()=>{
    let textVal=document.querySelector('#trans-inp');
    let pirate=document.querySelector('#trans-res');

    getFunTranslations=(text)=>{
        return 'https://api.funtranslations.com/translate/pirate.json?'+ 'text='+ text;
    }
    document.querySelector('#trans-btn').addEventListener("click",()=>{
        fetch(getFunTranslations(textVal.value))
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            pirate.value=data.contents.translated;
            console.log(data);
        });
    });
    document.querySelector('#clear-btn').addEventListener("click",()=>{
        textVal.value="";
    })
}