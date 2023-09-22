// GOOGLE SEARCH
//document.querySelector('.run').addEventListener('click', function (e) {
//  var query = document.querySelector('.search').value;
//  
//  if(query){
//      window.location = `https://www.google.ru/search?q=${query}`;
//  }
//});




// УПРАВЛЕНИЕ С КЛАВИАТУРЫ
// ↑ - открыть в новой вкладке
// ↓ - скачать
// ← - прошлый пост
// → - следующий пост

// document.onkeydown = function(event) {
//     console.log(event);
//     if (event.code == 'ArrowDown')
//     {
//         window.location = `https://www.google.ru/search?q=${query}`;
//     };
// };

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
//    var CLUSTER0 = document.getElementsByClassName('cluster')[0];

/**************************** ИНТЕРФЕЙС *************************************/
//    var G = 0; // счетчик групп
//    var GROUP = array.length; // кол-во групп

/***************************** ФУНКЧИЯ **************************************/
//    while (G < GROUP){
//        CLUSTER0.innerHTML += `
//            <div class="BOX0">
//
//                <h1 style="color:#FFF; margin-left: 24px;: ">${array[G].name.toUpperCase()}</h1>
//                <div class="CLUSTER1"></div>
//
//            </div>`;
//        G++;
//    }
//    console.log("создано", GROUP, "группы")

/****************************************************************************/

var cluster = document.getElementsByClassName("cluster")[0];

for (n=0; n<array.length; n++) {
    
    cluster.innerHTML += `<hr>`;
    
    
console.log(array[n]);

    
    
//    if (array[n].NAME != "" & array[n].ICON != ""){
        for (m=0; m<array[n].content.length; m++) {
            cluster.innerHTML += `
                <a class="card" href="${array[0].content[m].URL}">
                    <div class="icon" style="background-image: url(../../IMG/${array[n].content[m].ICON})"></div>
                    <div class="name">${array[n].content[m].NAME}</div>
                </a>`;
        }
//    }
}



//
//    while (G < GROUP){
//
//        var ELEMENT = array[G].content.length;// КОЛ-ВО ЭЛЕМЕНТОВ
//        console.log(`В группе #${G+1}: ${ELEMENT} элементов`);
//        var CLUSTER1 = document.getElementsByClassName('BOX0')[G].getElementsByClassName('CLUSTER1')[0];
//
//        var content = array[G].content;
//        console.log(content);
//
//        while (E < ELEMENT) {
//            if (array[G].name != ""){
//                    CLUSTER1.innerHTML += `
//                        <div class="card" onclick="document.location.href = '${content[E].URL}';">
//                            <div class="icon">
//                                <object type="image/svg+xml" data="IMG/${content[E].ICON}">
//                                    <img src="IMG/${content[E].ICON}" alt=":(">
//                                </object>
//                            </div>
//                            <div class="name">${content[E].NAME}</div>
//                        </div>`;
//            };
//            E++;
//        }
//        E = 0;
//        G++;
//    }

/****************************************************************************/