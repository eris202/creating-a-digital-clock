
var getMinHand=document.querySelector("#min")
var getSecHand=document.querySelector("#sec")
var getHrHand=document.querySelector("#hr")

function clockRotate(){
    let getDate=new Date()
    let getSecond=getDate.getSeconds() /60
    let getMinute=getDate.getMinutes()/60
    let getHour=getDate.getHours()/12
    getSecHand.style.transform="rotate(" + (getSecond*360) + "deg)"
    getMinHand.style.transform="rotate(" + (getMinute*360) + "deg)"
    getHrHand.style.transform="rotate(" + (getHour*360) + "deg)"
    document.querySelector(".reading").innerHTML=getDate.getSeconds()
    
    setTimeout(clockRotate , 1000)
}

clockRotate()
