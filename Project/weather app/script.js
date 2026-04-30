const api = "95e19750b8b7468197e143423262404";
var city = "meerut";
// const apiurl = `http://api.weatherapi.com/v1/current.json?key=${api}&q=${city}`
const apiurl = `http://api.weatherapi.com/v1/current.json?key=${api}`;
// console.log(apiurl);
const inp = document.querySelector('input');
// inp.addEventListener('keyup',(e)=>{
//     if(e.key == 'Enter'){
//         data(e.target.value); 
//     }
//     // data();
// } )
async function data(){
    data = await fetch(apiurl + `&q=${city}`);
    // data = await fetch(apiurl + `&q=${val}`);
    data2= await data.json();
    console.log(data2);
    // console.log(data);
    document.getElementById('loc').innerText=  data2.location.name;
    document.getElementById('temp').innerText = Math.round(data2.current.temp_c);
    document.getElementById('hum').innerText = data2.current.humidity;
    document.getElementById('win').innerText =  Math.round(data2.current.wind_kph);
}
data();
