window.onload=()=> {
    let fromVal=document.querySelector('#from-length');
    let toVal=document.querySelector('#to-length');
    const button=document.querySelector('#convertbtn');
    let resVal=document.querySelector('#resVal');
    let inputVal=document.querySelector('#inputVal');
    let unit=document.querySelector('#units');

    const metConv=()=> {
        if(fromVal.value=='meter') {
            if(toVal.value=='Centimeters'){
               resVal.value= parseInt(inputVal.value)*100;
            }
            if(toVal.value=='Kilometers'){
                resVal.value= parseInt(inputVal.value)*0.001;
            }
            if(toVal.value=='Meters'){
                resVal.value= parseInt(inputVal.value);
            }
            if(toVal.value=='Miles'){
                resVal.value= parseInt(inputVal.value)*0.000621371;
            }
            if(toVal.value=='Feets'){
                resVal.value= parseInt(inputVal.value)*3.28084;
            }
            if(toVal.value=='Inches'){
               resVal.value= parseInt(inputVal.value)*39.3701;
            }
            unit.innerText=" " + toVal.value;
        }
    }

    const centiConv=()=> {
        if(fromVal.value=='centimeter') {
            if(toVal.value=='Centimeters'){
               resVal.value= parseInt(inputVal.value);
            }
            if(toVal.value=='Kilometers'){
                resVal.value= parseInt(inputVal.value)*0.00001;
            }
            if(toVal.value=='Meters'){
               resVal.value= parseInt(inputVal.value)*0.01;
            }
            if(toVal.value=='Miles'){
                resVal.value= parseInt(inputVal.value)*(6.2137 * 0.000001);
            }
            if(toVal.value=='Feets'){
                resVal.value= parseInt(inputVal.value)*0.0328084;
            }
            if(toVal.value=='Inches'){
               resVal.value= parseInt(inputVal.value)*0.3937008;
            }
            unit.innerText=" " + toVal.value;
        }
    }

    const kiloConv=()=> {
        if(fromVal.value=='kilometer') {
            if(toVal.value=='Centimeters'){
                resVal.value= parseInt(inputVal.value)*100000;
            }
            if(toVal.value=='Kilometers'){
               resVal.value= parseInt(inputVal.value);
            }
            if(toVal.value=='Meters'){
                resVal.value= parseInt(inputVal.value)*1000;
            }
            if(toVal.value=='Miles'){
               resVal.value= parseInt(inputVal.value)*0.6213;
            }
            if(toVal.value=='Feets'){
                resVal.value= parseInt(inputVal.value)*3280.84;
            }
            if(toVal.value=='Inches'){
                resVal.value= parseInt(inputVal.value)*39370.1;
            }

            unit.innerText=" " + toVal.value;
        }
    }
    const mileConv=()=>{
        if(fromVal.value=='mile') {
            if(toVal.value=='Centimeters'){
                resVal.value= parseInt(inputVal.value)*160934;
            }
            if(toVal.value=='Kilometers'){
               resVal.value= parseInt(inputVal.value)*1.60934;
            }
            if(toVal.value=='Meters'){
                resVal.value= parseInt(inputVal.value)*1609.34;
            }
            if(toVal.value=='Miles'){
               resVal.value= parseInt(inputVal.value);
            }
            if(toVal.value=='Feets'){
                resVal.value= parseInt(inputVal.value)*5280;
            }
            if(toVal.value=='Inches'){
                resVal.value= parseInt(inputVal.value)*63360;
            }

            unit.innerText=" " + toVal.value;
        }
    }
    const feetConv=()=> {
        if(fromVal.value=='feets') {
            if(toVal.value=='Centimeters'){
                resVal.value= parseInt(inputVal.value)*30.48;
            }
            if(toVal.value=='Kilometers'){
               resVal.value= parseInt(inputVal.value)*0.0003048;
            }
            if(toVal.value=='Meters'){
                resVal.value= parseInt(inputVal.value)*0.3048;
            }
            if(toVal.value=='Miles'){
               resVal.value= parseInt(inputVal.value)*0.0001893;
            }
            if(toVal.value=='Feets'){
                resVal.value= parseInt(inputVal.value);
            }
            if(toVal.value=='Inches'){
                resVal.value= parseInt(inputVal.value)*12;
            }

            unit.innerText=" " + toVal.value;
        }
    }

    const inchConv=()=> {
        if(fromVal.value=='inches') {
            if(toVal.value=='Centimeters'){
                resVal.value= parseInt(inputVal.value)*2.54;
            }
            if(toVal.value=='Kilometers'){
               resVal.value= parseInt(inputVal.value)*(2.54*0.00001);
            }
            if(toVal.value=='Meters'){
                resVal.value= parseInt(inputVal.value)*0.0254;
            }
            if(toVal.value=='Miles'){
               resVal.value= parseInt(inputVal.value)*(1.578*0.00001);
            }
            if(toVal.value=='Feets'){
                resVal.value= parseInt(inputVal.value)*0.0833;
            }
            if(toVal.value=='Inches'){
                resVal.value= parseInt(inputVal.value);
            }

            unit.innerText=" " + toVal.value;
        }
    }
       
    button.addEventListener("click",()=>{
            metConv();
            centiConv();
            kiloConv();
            mileConv();
            feetConv();
            inchConv();

        });
}