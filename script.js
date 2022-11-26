// GOOGLE SEARCH
document.querySelector('#run').addEventListener('click', function (e) {
  let query = document.querySelector('#query').value;
  
  if(query)
    window.location = `https://www.google.ru/search?q=${query}`;
});
/*-------------------------------------------------------------------*/

let cluster = document.getElementsByClassName("cluster")[0];



/*------------------------- ИНТЕРФЕЙС ----------------------------*/
let LAYER0 = 1; // кол-во элементов 0 уровня

let LAYER1 = 2; // кол-во элементов 1 уровня
let LAYER2 = 3; // кол-во элементов 2 уровня
let LAYER3 = 4; // кол-во элементов 3 уровня
let LAYER4 = 5; // кол-во элементов 4 уровня
/*------------------------- ИНТЕРФЕЙС ----------------------------*/

let n = 0;

while (n < LAYER1){
    cluster.innerHTML += `<div class="box layer-1">LAYER-1 #${n}</div>`;
    
    
    let box = document.getElementsByClassName("layer-1")[n];
    let r = 0;
    while(r < LAYER2){
        box.innerHTML += `<div class="box layer-0">LAYER-2 #${r}</div>`;
        r++;
    }
    console.log(n)
    n++;
}







//var CLUSTER0 = document.getElementsByClassName('CLUSTER0')[0];
//var CLUSTER1 = document.getElementsByClassName('CLUSTER1')[0];
//var ICON = CLUSTER1.getElementsByTagName('div')[0];
//
//var numberOBJ = OTHER.length;
//console.log('Объектов всего:', numberOBJ);
//var n = 0;
//
//let m0 = 0;
//let m1 = titleArray.length;
//
//while (m0 < 2){
//    document.getElementsByClassName('CLUSTER0')[0].innerHTML = '<>'
//    while (n < numberOBJ) {
//        if (OTHER[n].NAME){
//                CLUSTER1.innerHTML += `
//                    <div class="BOX" onclick="document.location.href = '${OTHER[n].URL}';">
//                        <div class="ICON">
//                            <object type="image/svg+xml" data="IMG/${OTHER[n].ICON}">
//                                <img src="IMG/${OTHER[n].ICON}">
//                            </object>
//                        </div>
//                        <div class="NAME">${OTHER[n].NAME}</div>
//                    </div>
//                `;
//        };
//        n++;
//    }
//    console.log("*");
//    m0++;
//}
//console.log('Кол-во завершённых итераций:', n);












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