var CLUSTER = document.getElementsByClassName('CLUSTER')[0];
var ICON = CLUSTER.getElementsByTagName('div')[0];

var numberOBJ = ARRAY.length;
console.log('Объектов всего:', numberOBJ);
var n = 0;

while (n < numberOBJ) {
    if (ARRAY[n].NAME){
            CLUSTER.innerHTML += `
                <div class="BOX" onclick="document.location.href = '${ARRAY[n].URL}';">
                    <div class="ICON">
                        <object type="image/svg+xml" data="IMG/${ARRAY[n].ICON}">
                            <img src="IMG/${ARRAY[n].ICON}">
                        </object>
                    </div>
                    <div class="NAME">${ARRAY[n].NAME}</div>
                </div>
            `;
//        };
    };
    n++;
};
console.log('Кол-во завершённых итераций:', n);

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