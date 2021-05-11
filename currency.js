window.onload=()=> {
    let fromVal=document.querySelector('#from-cur');
    let toVal=document.querySelector('#to-cur');
    const buttonCon=document.querySelector('#convertbtn');
    let resVal=document.querySelector('#resVal');
    let inputVal=document.querySelector('#inputVal');
    let currency=document.querySelector('#cur');

    const indCur=()=> {
        if(fromVal.value=='inr'){
            if(toVal=='INR'){
                resVal.value=parseInt(inputVal.value);
                currency.innerText=" Rupees";
            }
            if(toVal.value=='USD'){
                resVal.value=parseInt(inputVal.value)*0.01362;
                currency.innerText=" Dollars";
            }
            if(toVal.value=='EUR'){
                resVal.value=parseInt(inputVal.value)*0.0113;
                currency.innerText=" Euros";
            }
            if(toVal.value=='YEN'){
                resVal.value=parseInt(inputVal.value)*1.48;
                currency.innerText=" Yen";
            }
            if(toVal.value=='CHF'){
                resVal.value=parseInt(inputVal.value)*0.012;
                currency.innerText=" Swiss Francs";
            }
            if(toVal.value=='DIR'){
                resVal.value=parseInt(inputVal.value)*0.050;
                currency.innerText=" Dirham";    
            }
        }
    }
    const eurCur=()=> {
        if(fromVal.value=='eur'){
            if(toVal.value=='INR'){
                resVal.value=parseInt(inputVal.value)*89.17;
                currency.innerText=" Rupees";
            }
            if(toVal.value=='USD'){
                resVal.value=parseInt(inputVal.value)*1.22;
                currency.innerText=" Dollars";
            }
            if(toVal.value=='EUR'){
                resVal.value=parseInt(inputVal.value);
                currency.innerText=" Euros";
            }
            if(toVal.value=='YEN'){
                resVal.value=parseInt(inputVal.value)*132.40;
                currency.innerText=" Yen";
            }
            if(toVal.value=='CHF'){
                resVal.value=parseInt(inputVal.value)*1.09;
                currency.innerText=" Swiss Francs";
            }
            if(toVal.value=='DIR'){
                resVal.value=parseInt(inputVal.value)*4.46;
                currency.innerText=" Dirham";
            }
        }
    }

    const usdCur=()=> {
        if(fromVal.value=='usd'){
            if(toVal.value=='INR'){
                resVal.value=parseInt(inputVal.value)*73.43;
                currency.innerText=" Rupees";
            }
            if(toVal.value=='USD'){
                resVal.value=parseInt(inputVal.value);
                currency.innerText=" Dollars";
            }
            if(toVal.value=='EUR'){
                resVal.value=parseInt(inputVal.value)*0.82;
                currency.innerText=" Euros";
            }
            if(toVal.value=='YEN'){
                resVal.value=parseInt(inputVal.value)*110.0;
                currency.innerText=" Yen";
            }
            if(toVal.value=='CHF'){
                resVal.value=parseInt(inputVal.value)*0.90;
                currency.innerText=" Swiss Francs";
            }
            if(toVal.value=='DIR'){
                resVal.value=parseInt(inputVal.value)*3.67;
                currency.innerText=" Dirham";
            }
        }
    }

    const yenCur=()=> {
        if(fromVal.value=='yen'){
            if(toVal.value=='INR'){
                resVal.value=parseInt(inputVal.value)*0.6738;
                currency.innerText=" Rupees";
            }
            if(toVal.value=='USD'){
                resVal.value=parseInt(inputVal.value)*0.00917;
                currency.innerText=" Dollars";
            }
            if(toVal.value=='EUR'){
                resVal.value=parseInt(inputVal.value)*0.00755;
                currency.innerText=" Euros";
            }
            if(toVal.value=='YEN'){
                resVal.value=parseInt(inputVal.value);
                currency.innerText=" Yen";
            }
            if(toVal.value=='CHF'){
                resVal.value=parseInt(inputVal.value)*0.00827;
                currency.innerText=" Swiss Francs";
            }
            if(toVal.value=='DIR'){
                resVal.value=parseInt(inputVal.value)*0.0337;
                currency.innerText=" Dirham";
            }
        }
    }

    const francCur=()=> {
        if(fromVal.value=='chf'){
            if(toVal.value=='INR'){
                resVal.value=parseInt(inputVal.value)*81.473;
                currency.innerText=" Rupees";
            }
            if(toVal.value=='USD'){
                resVal.value=parseInt(inputVal.value)*1.1097;
                currency.innerText=" Dollars";
            }
            if(toVal.value=='EUR'){
                resVal.value=parseInt(inputVal.value)*0.9135;
                currency.innerText=" Euros";
            }
            if(toVal.value=='YEN'){
                resVal.value=parseInt(inputVal.value)*120.875;
                currency.innerText=" Yen";
            }
            if(toVal.value=='CHF'){
                resVal.value=parseInt(inputVal.value);
                currency.innerText=" Swiss Francs";
            }
            if(toVal.value=='DIR'){
                resVal.value=parseInt(inputVal.value)*4.075;
                currency.innerText=" Dirham";
            }
        }
    }

    const dirCur=()=> {
        if(fromVal.value=='dir'){
            if(toVal.value=='INR'){
                resVal.value=parseInt(inputVal.value)*19.990;
                currency.innerText=" Rupees";
            }
            if(toVal.value=='USD'){
                resVal.value=parseInt(inputVal.value)*0.2722;
                currency.innerText=" Dollars";
            }
            if(toVal.value=='EUR'){
                resVal.value=parseInt(inputVal.value)*0.2242;
                currency.innerText=" Euros";
            }
            if(toVal.value=='YEN'){
                resVal.value=parseInt(inputVal.value)*29.662;
                currency.innerText=" Yen";
            }
            if(toVal.value=='CHF'){
                resVal.value=parseInt(inputVal.value);
                currency.innerText=" Swiss Francs";
            }
            if(toVal.value=='DIR'){
                resVal.value=parseInt(inputVal.value)*0.2454;
                currency.innerText=" Dirham";
            }
        }
    }


    buttonCon.addEventListener("click",()=>{
        indCur();
        eurCur();
        usdCur();
        yenCur();
        francCur();
        dirCur();

    });
}