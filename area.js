window.onload=()=> {
    let fromVal=document.querySelector('#from-area');
    let toVal=document.querySelector('#to-area');
    const button=document.querySelector('#convertbtn');
    let resVal=document.querySelector('#resVal');
    let inputVal=document.querySelector('#inputVal');
    let unit=document.querySelector('#units');

    const metSq=()=> {
        if(fromVal.value=='mt'){
            if(toVal.value=='mt'){
                resVal.value=parseInt(inputVal.value);
                unit.innerText=" Metre Squares";
            }
            if(toVal.value=='km'){
                resVal.value=parseInt(inputVal.value)*1e-6;
                unit.innerText=" Kilometre Squares";
            }
            if(toVal.value=='ft'){
                resVal.value=parseInt(inputVal.value)*10.763;
                unit.innerText=" Square Feets";
            }
            if(toVal.value=='ha'){
                resVal.value=parseInt(inputVal.value)*1e-4;
                unit.innerText=" Hectares";
            }
            if(toVal.value=='ac'){
                resVal.value=parseInt(inputVal.value)*0.000247;
                unit.innerText=" Acres";
            }
        }
    }

    const kmSqu=()=> {
        if(fromVal.value=='km'){
            if(toVal.value=='mt'){
                resVal.value=parseInt(inputVal.value)*(1e+6);
                unit.innerText=" Metre Squares";
            }
            if(toVal.value=='km'){
                resVal.value=parseInt(inputVal.value);
                unit.innerText=" Kilometre Squares";
            }
            if(toVal.value=='ft'){
                resVal.value=parseInt(inputVal.value)*(1.076e+7);
                unit.innerText=" Square Feets";
            }
            if(toVal.value=='ha'){
                resVal.value=parseInt(inputVal.value)*100;
                unit.innerText=" Hectares"
            }
            if(toVal.value=='ac'){
                resVal.value=parseInt(inputVal.value)*247.105;
                unit.innerText=" Acres";
            }
        }
    }

    const ftSqu=()=> {
        if(fromVal.value=='ft'){
            if(toVal.value=='mt'){
                resVal.value=parseInt(inputVal.value)*0.0929;
                unit.innerText=" Metre Squares";
            }
            if(toVal.value=='km'){
                resVal.value=parseInt(inputVal.value)*(9.290e-8);
                unit.innerText=" Kilometre Squares";
            }
            if(toVal.value=='ft'){
                resVal.value=parseInt(inputVal.value);
                unit.innerText=" Square Feets";
            }
            if(toVal.value=='ha'){
                resVal.value=parseInt(inputVal.value)*(9.290e-6);
                unit.innerText=" Hectares"
            }
            if(toVal.value=='ac'){
                resVal.value=parseInt(inputVal.value)*(2.295e-5);
                unit.innerText=" Acres";
            }
        }
    }

    const hecT=()=> {
        if(fromVal.value=='ha'){
            if(toVal.value=='mt'){
                resVal.value=parseInt(inputVal.value)*10000;
                unit.innerText=" Metre Squares";
            }
            if(toVal.value=='km'){
                resVal.value=parseInt(inputVal.value)*0.01;
                unit.innerText=" Kilometre Squares";
            }
            if(toVal.value=='ft'){
                resVal.value=parseInt(inputVal.value)*107639;
                unit.innerText=" Square Feets";
            }
            if(toVal.value=='ha'){
                resVal.value=parseInt(inputVal.value);
                unit.innerText=" Hectares"
            }
            if(toVal.value=='ac'){
                resVal.value=parseInt(inputVal.value)*2.4710;
                unit.innerText=" Acres";
            }
        }
    }

    const acr=()=> {
        if(fromVal.value=='ac'){
            if(toVal.value=='mt'){
                resVal.value=parseInt(inputVal.value)*4046.859;
                unit.innerText=" Metre Squares";
            }
            if(toVal.value=='km'){
                resVal.value=parseInt(inputVal.value)*0.00404686;
                unit.innerText=" Kilometre Squares";
            }
            if(toVal.value=='ft'){
                resVal.value=parseInt(inputVal.value)*43560.038;
                unit.innerText=" Square Feets";
            }
            if(toVal.value=='ha'){
                resVal.value=parseInt(inputVal.value)*0.4046;
                unit.innerText=" Hectares"
            }
            if(toVal.value=='ac'){
                resVal.value=parseInt(inputVal.value);
                unit.innerText=" Acres";
            }
        }
    }

    button.addEventListener("click",()=>{
        metSq();
        kmSqu();
        ftSqu();
        hecT();
        acr();
    })
}