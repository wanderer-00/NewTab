var cluster = document.getElementsByClassName("cluster")[0];

for (n=0; n<array.length; n++) {
    if (array[n].NAME != "" & array[n].ICON != ""){
        cluster.innerHTML += `
            <a class="card" id="card" href="${array[n].URL}">
                <div class="icon" style="background-image: url(SVG/${array[n].ICON})"></div>
                <div class="name">${array[n].NAME}</div>
            </a>`
    }
}

var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart * -1;
loadTime = loadTime / 1e12;
loadTime = loadTime.toFixed(3);
console.log("Время загрузки:",loadTime,"сек");