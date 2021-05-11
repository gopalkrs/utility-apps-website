window.onload=()=> {
    let r=0,g=0,b=0;
    const rgbToHex=(num)=> {
        let temp= parseInt(num,'10').toString('16');
        if(temp.length==1){
            temp="0"+temp;
        }
        return temp;
    }

    const hexTorgb=(hex)=> {
        if(hex.length==7) {
            r=""+hex[1]+hex[2];
            g=""+hex[3]+hex[4];
            b=""+hex[5]+hex[6];
        }
        else if(hex.length==6) {
            r=""+hex[0]+hex[1];
            g=""+hex[2]+hex[3];
            b=""+hex[4]+hex[5];
        }
    
       r=parseInt(r,'16').toString('10');
       g=parseInt(g,'16').toString('10');
       b=parseInt(b,'16').toString('10');
       return ("RGB"+"("+ r + " , "+ g +" , "+ b + ")");
       
    }

    const red=document.querySelector('.red-val');
    const blue=document.querySelector('.blue-val');
    const green=document.querySelector('.green-val');
    const convertBtn=document.querySelector('#rgb-hex');
    const hexVal=document.querySelector('#hex-value');
    const div=document.querySelector('#change-col')

   
    convertBtn.addEventListener("click",()=> {
        hexVal.innerText=("#"+rgbToHex(red.value) + rgbToHex(green.value) + rgbToHex(blue.value)).toUpperCase();
        div.style.backgroundColor=hexVal.innerText;
       
    });

    const inputVal=document.querySelector('#hexa');
    const ConvertorBtn=document.querySelector('#hex-rgb');
    const divcolor=document.querySelector('#red-res');
    
    
    ConvertorBtn.addEventListener("click",()=> {
        divcolor.innerText=hexTorgb(inputVal.value);
        document.querySelector('#color-chg').style.backgroundColor=divcolor.innerText;
    });
    const reset=document.querySelectorAll('.reset');
    reset.addEventListener("click",()=>{
        red.value=0;
        green.value=0;
        blue.value=0;
        inputVal.value=0;
    })
}