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
        if(str){
            for(let i=0;i<str.length;i++){
                if((str[i]===" ")||(str[i]===".")||(str[i]===",")||(str[i]==="/")||(str[i]==="?")||(str[i]===":")||(str[i]==="+")) {
                    count++;
                }
            }
            return count+1;
        }
        return count;
    }

    lowerbtn.addEventListener("click",()=>{
        strInput.value=(strInput.value).toLowerCase();
    });
    upperbtn.addEventListener("click",()=>{
        strInput.value=(strInput.value).toUpperCase();
    });
    charbtn.addEventListener("click",()=>{
        counter.innerText="The character count is "+ (strInput.value).length;
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