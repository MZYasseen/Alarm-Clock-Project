const alarmAudio = document.getElementById("alarm-audio");
const audio = new Audio('audio/bell-sound.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;


function showTimer(){
    
    let timeNow = new Date();
    hours = timeNow.getHours();
    minutes = timeNow.getMinutes();
    seconds = timeNow.getSeconds();
    let zone = hours >= 12 ? "PM" : "AM";
    
    
    if (hours > 12) {
      hours = hours % 12;}

if (hours < 10 ) { 
 hours = "0" + hours;}
if (minutes < 10 ){
 minutes = "0" + minutes;}
if ( seconds < 10){
seconds = "0" + seconds;
}
   document.getElementById('clock').textContent = hours + ":" + minutes + ":" + seconds + " " + zone;
}

const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = 'gray';
  btn.style.color = 'white';

});
function setAlarmTime(value){
  alarmTime = value;
  console.log(alarmTime);
}

function setAlarm(){
    if(alarmTime){
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);
        if(timeToAlarm>current){
            const timeout=timeToAlarm.getTime()-current.getTime();
            alarmTimeout=setTimeout(()=>audio.play(),timeout);
            alert('Alarm set');
        }}
      }
        function clearAlarm(){
          audio.pause();
          if(alarmTimeout){
          
              clearTimeout(alarmTimeout);
              alert('Alarm cleared');
          }
        }
setInterval(showTimer, 500);




