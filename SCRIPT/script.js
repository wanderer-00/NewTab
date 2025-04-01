// блок отрисовки вкладок
var cluster = document.getElementsByClassName("cluster")[0];

// загружаемая категория вкладок по умолчанию
code(array_all);

// отрисовка категорий вкладок
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
};

// вывод времени полной отрисовки страницы
var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart * -1;
loadTime = loadTime / 1e12;
loadTime = loadTime.toFixed(3);
console.log("Время загрузки:",loadTime,"сек");
