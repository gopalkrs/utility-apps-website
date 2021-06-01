window.onload=()=>{
    let epochVal=document.querySelector('#epoch-val');
    const convertBtn=document.querySelector('#epoch-date');
    let epochDate=(epoch)=>new Date(epoch*1000);

    let setInt=setInterval(() => {
        document.querySelector('#current-epoch').innerText=Math.floor(new Date().getTime()/1000.0);
    }, 1000);
    convertBtn.addEventListener("click",()=>{
        document.querySelector('#date').value=epochDate(epochVal.value).getDate();
        document.querySelector('#month').value=epochDate(epochVal.value).getMonth()+1;
        document.querySelector('#year').value=epochDate(epochVal.value).getFullYear();
        document.querySelector('#hour').value=epochDate(epochVal.value).getHours();
        document.querySelector('#minutes').value=epochDate(epochVal.value).getMinutes();
    });

    document.querySelector('#current-epoch-div').addEventListener("mouseover",()=>{
        clearInterval(setInt);
        document.querySelector('#current-epoch-div').style.backgroundColor="#404040"
    });
    document.querySelector('#current-epoch-div').addEventListener("mouseout",()=>{
        setInt=setInterval(() => {
            document.querySelector('#current-epoch').innerText=Math.floor(new Date().getTime()/1000.0);
        }, 1000);
        document.querySelector('#current-epoch-div').style.backgroundColor="#000000"
    });
    


    const epochDateBtn=document.querySelector('#human-date');
    const year=document.querySelector('#year2');
    const monthInput=document.querySelector('#month2');
    const dat=document.querySelector('#date2');
    const hour=document.querySelector('#hour2');
    const minute=document.querySelector('#minutes2');


    let newEpoch=new Date(year.value,(monthInput.value-1),dat.value,hour.value,minute.value);
    epochDateBtn.addEventListener("click",()=>{
        document.querySelector('#epoch').value=newEpoch.getTime()/1000;
    });

    let setDate=setInterval(() => {
        document.querySelector('#current-date').innerHTML=new Date().getDate() + "-" +(new Date().getMonth()+1)+ "-"+new Date().getFullYear() + "<br>"+new Date().getHours() +":" + new Date().getMinutes()+":"+new Date().getSeconds();
    }, 1000);

}