var CLUSTER = document.getElementsByClassName("CLUSTER")[0];

for (n=0; n<VIDEOS.length; n++) {
    if (VIDEOS[n].NAME != ""){
        CLUSTER.innerHTML += `
            <div class="card" onclick="window.location='${VIDEOS[n].URL}'">
                <div class="icon">
                    <img src="IMG/POSTER/${VIDEOS[n].ICON}" alt=":(">
                </div>
                <div class="name">${VIDEOS[n].NAME}</div>
            </div>`
    }
}