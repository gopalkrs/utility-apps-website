window.onload=()=>{
    let textVal=document.querySelector('#trans-inp');
    let pirate=document.querySelector('#trans-res');

    getTranslations=(text)=>{
        return 'https://api.mymemory.translated.net/get?'+ 'q='+ text + '&langpair=en|it';
    }
    document.querySelector('#trans-btn').addEventListener("click",()=>{
        fetch(getTranslations(textVal.value))
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            pirate.value=data.responseData.translatedText;
        });
    });
    document.querySelector('#clear-btn').addEventListener("click",()=>{
        textVal.value="";
    })
}