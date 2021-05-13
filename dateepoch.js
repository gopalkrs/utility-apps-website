window.onload=()=>{
    const epochVal=document.querySelector('#epoch-val');
    const convertBtn=document.querySelector('#epoch-date')
    let epochDate=new Date(epochVal.value*1000);
    let monthVal=epochDate.getMonth()+1;
    let temp;

    const monthName=(month)=> {
        if(month==1){
            temp='January';
        }
        if(month==2){
            temp='February';
        }
        if(month==3){
            temp='March';
        }
        if(month==4){
            temp='April';
        }
        if(month==5){
            temp='May';
        }
        if(month==6){
            temp='June';
        }
        if(month==7){
            temp='July';
        }
        if(month==8){
            temp='August';
        }
        if(month==9){
            temp='September';
        }
        if(month==10){
            temp='October';
        }
        if(month==11){
            temp='November';
        }
        if(month==12){
            temp='December';
        }
        return temp;
    }

    convertBtn.addEventListener("click",()=>{
        document.querySelector('#date').value=epochDate.getDate();
        document.querySelector('#month').value=monthName(monthVal);
        document.querySelector('#year').value=epochDate.getFullYear();
        document.querySelector('#hour').value=epochDate.getHours();
        document.querySelector('#minutes').value=epochDate.getMinutes();
    });


    const epochDateBtn=document.querySelector('#human-date');
    const year=document.querySelector('#year2');
    const monthInput=document.querySelector('#month2');
    const dat=document.querySelector('#date2');
    const hour=document.querySelector('#hour2');
    const minute=document.querySelector('#minutes2');


    newEpoch=new Date(year.value,(monthInput.value-1),dat.value,hour.value,minute.value);
    epochDateBtn.addEventListener("click",()=>{
        document.querySelector('#epoch').value=newEpoch.getTime()/1000;
    });




}