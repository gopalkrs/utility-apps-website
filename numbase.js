window.onload=()=> {
    let fromVal=document.querySelector('#from-base');
    let toVal=document.querySelector('#to-base');
    const buttonCon=document.querySelector('#convertbtn');
    let resVal=document.querySelector('#resVal');
    let inputVal=document.querySelector('#inputVal');

    const binValue=()=>{
        if(fromVal.value=='bin') {
            if(toVal.value=='bin') {
                resVal.value=parseInt(inputVal.value, '2').toString('2');
            }
            if(toVal.value=='dec') {
                resVal.value=parseInt(inputVal.value, '2').toString('10');
            }
            if(toVal.value=='oct') {
                resVal.value=parseInt(inputVal.value, '2').toString('8');
            }
            if(toVal.value=='hex') {
                resVal.value=parseInt(inputVal.value, '2').toString('16');
            }
        }
    }

    const decValue=()=>{
        if(fromVal.value=='dec') {
            if(toVal.value=='bin') {
                resVal.value=parseInt(inputVal.value, '10').toString('2');
            }
            if(toVal.value=='dec') {
                resVal.value=parseInt(inputVal.value, '10').toString('10');
            }
            if(toVal.value=='oct') {
                resVal.value=parseInt(inputVal.value, '10').toString('8');
            }
            if(toVal.value=='hex') {
                resVal.value=parseInt(inputVal.value, '10').toString('16');
            }
        }
    }
    const octValue=()=>{
        if(fromVal.value=='oct') {
            if(toVal.value=='bin') {
                resVal.value=parseInt(inputVal.value, '8').toString('2');
            }
            if(toVal.value=='dec') {
                resVal.value=parseInt(inputVal.value, '8').toString('10');
            }
            if(toVal.value=='oct') {
                resVal.value=parseInt(inputVal.value, '8').toString('8');
            }
            if(toVal.value=='hex') {
                resVal.value=parseInt(inputVal.value, '8').toString('16');
            }
        }
    }
    const hexadeciValue=()=>{
        if(fromVal.value=='hex') {
            if(toVal.value=='bin') {
                resVal.value=parseInt(inputVal.value, '16').toString('2');
            }
            if(toVal.value=='dec') {
                resVal.value=parseInt(inputVal.value, '16').toString('10');
            }
            if(toVal.value=='oct') {
                resVal.value=parseInt(inputVal.value, '16').toString('8');
            }
            if(toVal.value=='hex') {
                resVal.value=parseInt(inputVal.value, '16').toString('16');
            }
        }
    }

    buttonCon.addEventListener("click",()=>{
        binValue();
        decValue();
        octValue();
        hexadeciValue();
    });
}