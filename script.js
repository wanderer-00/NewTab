var CLUSTER = document.getElementsByClassName('CLUSTER')[0];
var ICON = CLUSTER.getElementsByTagName('div')[0];

var numberOBJ = ARRAY.length;
console.log('Объектов всего:', numberOBJ);
var n = 0;

while (n < numberOBJ) {
    CLUSTER.innerHTML += `
    <div class="BOX" onclick="document.location.href = '${ARRAY[n].URL}';">
        <div><img src="${ARRAY[n].ICON}"></div>
        <div>${ARRAY[n].NAME}</div>
    </div>
    `;
    n++;
    console.log('Кол-во завершённых итераций:', n);
};
