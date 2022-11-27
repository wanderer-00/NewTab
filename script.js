// GOOGLE SEARCH
document.querySelector('.run').addEventListener('click', function (e) {
  var query = document.querySelector('.search').value;
  
  if(query){
      window.location = `https://www.google.ru/search?q=${query}`;
  }
});




// УПРАВЛЕНИЕ С КЛАВИАТУРЫ
// ↑ - открыть в новой вкладке
// ↓ - скачать
// ← - прошлый пост
// → - следующий пост

document.onkeydown = function(event) {
    console.log(event);
    if (event.code == 'ArrowDown') {window.location = `https://www.google.ru/search?q=${query}`;};
    if (event.code == 'ArrowUp') {};
    if (event.code == 'ArrowLeft') {};
    if (event.code == 'ArrowRight') {};
};
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






/*****************************************************************************/
    var CLUSTER0 = document.getElementsByClassName('CLUSTER0')[0];

/**************************** ИНТЕРФЕЙС *************************************/
    var G = 0; // счетчик групп
    var GROUP = array.length; // кол-во групп

/***************************** ФУНКЧИЯ **************************************/
    while (G < GROUP){
        CLUSTER0.innerHTML += `
            <div class="BOX0">

                <h1 style="color:#FFF; margin-left: 24px;: ">${array[G].name.toUpperCase()}</h1>
                <div class="CLUSTER1"></div>

            </div>`;
        G++;
    }
    console.log("создано", GROUP, "группы")

/****************************************************************************/
    G = 0;
    var E = 0; // СЧЕТЧИК ЭЛЕМЕНТОВ

    while (G < GROUP){

        var ELEMENT = array[G].content.length;// КОЛ-ВО ЭЛЕМЕНТОВ
        console.log(`В группе #${G+1}: ${ELEMENT} элементов`);
        var CLUSTER1 = document.getElementsByClassName('BOX0')[G].getElementsByClassName('CLUSTER1')[0];

        var content = array[G].content;
        console.log(content);

        while (E < ELEMENT) {
            if (array[G].name != ""){
                    CLUSTER1.innerHTML += `
                        <div class="BOX" onclick="document.location.href = '${content[E].URL}';">
                            <div class="ICON">
                                <object type="image/svg+xml" data="IMG/${content[E].ICON}">
                                    <img src="IMG/${content[E].ICON}" alt=":(">
                                </object>
                            </div>
                            <div class="NAME">${content[E].NAME}</div>
                        </div>`;
            };
            E++;
        }
        E = 0;
        G++;
    }

/****************************************************************************/






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