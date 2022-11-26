// GOOGLE SEARCH
document.querySelector('#run').addEventListener('click', function (e) {
  let query = document.querySelector('#query').value;
  
  if(query)
    window.location = `https://www.google.ru/search?q=${query}`;
});
/*-------------------------------------------------------------------*/

//let cluster = document.getElementsByClassName("cluster")[0];



/*------------------------- ИНТЕРФЕЙС ----------------------------*/
let LAYER0 = 1; // кол-во элементов 0 уровня

let LAYER1 = 2; // кол-во элементов 1 уровня
let LAYER2 = 3; // кол-во элементов 2 уровня
let LAYER3 = 4; // кол-во элементов 3 уровня
let LAYER4 = 5; // кол-во элементов 4 уровня
/*------------------------- ИНТЕРФЕЙС ----------------------------*/

//let n = 0;
//
//while (n < LAYER1){
//    cluster.innerHTML += `<div class="box layer-1">LAYER-1 #${n}</div>`;
//    
//    
//    let box = document.getElementsByClassName("layer-1")[n];
//    let r = 0;
//    while(r < LAYER2){
//        box.innerHTML += `<div class="box layer-0">LAYER-2 #${r}</div>`;
//        r++;
//    }
//    console.log(n)
//    n++;
//}







var CLUSTER0 = document.getElementsByClassName('CLUSTER0')[0];

/**************************** ИНТЕРФЕЙС *************************************/
var GROUP = 3; // КОЛ-ВО ГРУПП
var G = 0; // СЧЕТЧИК ГРУПП
/*****************************************************************************/



/**************************** СОЗДАНИЕ ГРУПП *********************************/
while (G < GROUP){
    CLUSTER0.innerHTML += `
        <div class="BOX0">
            
            <h1 style="color:#FFF; margin-left: 24px;: ">${titleArray[G]}</h1>
            <div class="CLUSTER1"></div>

        </div>`;
    G++;
}
console.log("создано", GROUP, "группы")
/*****************************************************************************/



/**************************** ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ В ГРУППЫ *********************************/
G = 0;

var E = 0; // СЧЕТЧИК ЭЛЕМЕНТОВ


while (G < 3){
    
    var ELEMENT = 10;// КОЛ-ВО ЭЛЕМЕНТОВ
    
    console.log("G =",G);
    var CLUSTER1 = document.getElementsByClassName('BOX0')[G].getElementsByClassName('CLUSTER1')[0];

    while (E < ELEMENT) {
        if (OTHER[E].NAME){
                CLUSTER1.innerHTML += `
                    <div class="BOX" onclick="document.location.href = '${OTHER[E].URL}';">
                        <div class="ICON">
                            <object type="image/svg+xml" data="IMG/${OTHER[E].ICON}">
                                <img src="IMG/${OTHER[E].ICON}">
                            </object>
                        </div>
                        <div class="NAME">${OTHER[E].NAME}</div>
                    </div>
                `;
        };
        console.log('*');
        E++;
    }
    E = 0;
    console.log(`группа #${G+1} заполнена`);
    G++;
}
/*************************************************************************************/











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