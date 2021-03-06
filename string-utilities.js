window.onload=()=>{
    const lowerbtn=document.querySelector('#lowercase');
    const upperbtn=document.querySelector('#uppercase');
    const reversebtn=document.querySelector('#reverse');
    const wordbtn=document.querySelector('#word-count');
    const charbtn=document.querySelector('#char-count');
    let strInput=document.querySelector('#string-input');
    const counter=document.querySelector('#block-text');
    const splitbtn=document.querySelector('#splitter');
    let splitchar=document.querySelector('#split-char');

    const stringReverse=(str)=>{
        let newString="";
        for(let i=(str.length-1);i>=0;i--) {
            newString+=str[i];
        }
        return newString;
    }

    let wordcount=(str)=>{
        let count=0;
        let newArray=[" " , "," , "." , "&" , "?"];
        let arrName=str.split(" ");
        let lengthval=str.split(" ").length;
        count=lengthval;
        for(let items of arrName){
            for(let val of newArray){
                if((items==val)){
                count--;
                }
            }
        }
        return count;
    }
    let charCount=(strChar)=>{
        let countVal=0;
        for(let i=0;i<strChar.length;i++){
            if(strChar[i]!=" "){
                countVal++;
            }
        }
        return countVal;
    }

    lowerbtn.addEventListener("click",()=>{
        strInput.value=(strInput.value).toLowerCase();
    });
    upperbtn.addEventListener("click",()=>{
        strInput.value=(strInput.value).toUpperCase();
    });
    charbtn.addEventListener("click",()=>{
        counter.innerText="The character count is "+ charCount(strInput.value);
    });
    reversebtn.addEventListener("click",()=>{
        strInput.value=stringReverse(strInput.value);
    });
    splitbtn.addEventListener("click",()=>{
        strInput.value=(strInput.value).split(splitchar.value);
    });
    wordbtn.addEventListener("click",()=>{
        counter.innerText="The word count is "+wordcount(strInput.value);
    });


}