let body=document.querySelector("body");
let inp=document.querySelector("#ipn");
let card=document.querySelector("#card");
let search=document.querySelector("#search");
let toggle=document.querySelector("#toggle");
let celement=document.querySelector("#hs");
let btn=document.querySelector("button");

let dest=document.querySelector("#location");
let dis=document.querySelector("#dt");
let humid=document.querySelector("#humid");
let ws=document.querySelector("#wind");
let temperature=document.querySelector("#temp");



btn.addEventListener(("click"),()=>{
    let q=inp.value;
    console.log(q);
    const apiKey="ac8680849fe1aa9a01717162d8e70824"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${apiKey}&units=metric`
async function getWeather(){
    try{
        let response= await fetch(url);
        let data = await response.json();
        console.log(data)
        let location=data.name;
        let temp=data.main.temp;
        let humidity=data.main.humidity;
        let windSpeed=data.wind.speed;
        let info=data.weather[0].description;
        let iconID=data.weather[0].icon;
        console.log(location);
        console.log(temp);
        console.log(humidity);
        console.log(windSpeed);
        console.log(info);
        console.log(iconID);
        dest.innerText=location;
        temperature.innerText=`${temp}°C`;
        ws.innerText=`${windSpeed}m/s`;
        humid.innerText=`${humidity}%`;
        dis.innerText=info;
        if(temp>=30){
            temperature.style.color="red";
        } else{
            temperature.style.color="blue";
        }
    } catch{
        alert("INVAILID REQUEST:location not found"); 
    }

}
getWeather();
    
})

let isDark=false;
toggle.addEventListener(("click"),()=>{
    if(isDark==false){
        body.classList.add("darkB");
        inp.classList.add("darkC");
        card.classList.add("darkC");
        search.classList.add("darkC");
        toggle.classList.add("darkT");
        celement.style.borderTop="1px solid rgba(243, 243, 243, 0.56)"
        toggle.innerHTML=`<span class="material-symbols-outlined">light_mode</span>Light Mode`
        isDark=true;
    } else {
        body.classList.remove("darkB");
        inp.classList.remove("darkC");
        card.classList.remove("darkC");
        search.classList.remove("darkC");
        toggle.classList.remove("darkT");
        celement.style.borderTop="1px solid rgba(0, 0, 0, 0.56)"
        toggle.innerHTML=`<span class="material-symbols-outlined">dark_mode</span>Dark Mode`
        isDark=false;
    }
    
})