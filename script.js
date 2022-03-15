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
                    <div><img src="${ARRAY[n].URL}favicon.ico"></div>
                    <div>${ARRAY[n].NAME}</div>
                </div>
            `;
//        };
    };
    n++;
};
console.log('Кол-во завершённых итераций:', n);