var cluster = document.getElementsByClassName("cluster")[0];

for (n=0; n<array_all.length; n++) {
    if (array_all[n].NAME != "" & array_all[n].ICON != ""){
        cluster.innerHTML += `
            <a class="card" id="card" href="${array_all[n].URL}">
                <div class="icon" style="background-image: url(IMG/${array_all[n].ICON})"></div>
                <div class="name">${array_all[n].NAME}</div>
            </a>`
    }
}

var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart * -1;
loadTime = loadTime / 1e12;
loadTime = loadTime.toFixed(3);
console.log("Время загрузки:",loadTime,"сек");

function code(category){
    // очистка страницы
    cluster.innerHTML = '';
    
    for (n=0; n<category.length; n++) {
        if (category[n].NAME != "" & category[n].ICON != ""){
            cluster.innerHTML += `
                <a class="card" id="card" href="${category[n].URL}">
                    <div class="icon" style="background-image: url(IMG/${category[n].ICON})"></div>
                    <div class="name">${category[n].NAME}</div>
                </a>`
        }
    }
}