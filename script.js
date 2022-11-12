var CLUSTER = document.getElementsByClassName('CLUSTER')[0];
var ICON = CLUSTER.getElementsByTagName('div')[0];

var numberOBJ = ARRAY.length;
console.log('Объектов всего:', numberOBJ);
var n = 0;

while (n < numberOBJ) {
    if (ARRAY[n].NAME){ // не выводить пустые эл.
//        var request = new XMLHttpRequest();
//        var RESULT = request.open('GET', `${ARRAY[n].URL}favicon.ico`);
//        console.log(`ARRAY[n].URL =`, RESULT);
//
//        if (RESULT == 404){
//            CLUSTER.innerHTML += `
//                <div class="BOX" onclick="document.location.href = '${ARRAY[n].URL}';">
//                    <div>${ARRAY[n].NAME}</div>
//                </div>
//            `;
//        }
//        else {
            CLUSTER.innerHTML += `
                <div class="BOX" onclick="document.location.href = '${ARRAY[n].URL}';">
                    <div class="ICON" style="background-image: url('IMG/${ARRAY[n].ICON}')"></div>
                    <div>${ARRAY[n].NAME}</div>
                </div>
            `;
//        };
    };
    n++;
};
console.log('Кол-во завершённых итераций:', n);


// до закрытия COUB
CLUSTER.innerHTML += `
    <div class="BOX" onclick="document.location.href = 'https://coub.com/';">
        <div><img src="https://coub.com/favicon.ico"></div>
        <div>COUB</div>
        <div id="clock"></div>
    </div>
`;

function clockTimer()
{
  var date = new Date();
    //console.log(date);

  var END = new Date(2022,4,1, 0,0,0);
    console.log('END =',END);

    var time_END = new Date(END - date);
    var p = time_END.value;
    console.log('time_END =',p);
    
    
//  var time = [date.getHours(),date.getMinutes(),date.getSeconds()]; // |[0] = Hours| |[1] = Minutes| |[2] = Seconds|
  var time = [time_END.getHours(),time_END.getMinutes(),time_END.getSeconds()]; // |[0] = Hours| |[1] = Minutes| |[2] = Seconds|
  var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  var days = date.getDay();
  
  if(time[0] < 10){time[0] = "0"+ time[0];}
  if(time[1] < 10){time[1] = "0"+ time[1];}
  if(time[2] < 10){time[2] = "0"+ time[2];}
  
  var current_time = [time[0],time[1],time[2]].join(':');
  var clock = document.getElementById("clock");
  
  clock.innerHTML = current_time;
  
  
  
  setTimeout("clockTimer()", 1000);
};
clockTimer();