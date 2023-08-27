var VIDEO = document.getElementsByClassName("VIDEO")[0];

var n = 0;

for (n=0; n<VIDEOS.length; n++) {
    if (VIDEOS[n].NAME != ""){
        VIDEO.innerHTML += `
            <div class="card" onclick="window.location='${VIDEO[n].URL}'">
                <div class="icon">
                    <object type="image/svg+xml" data="IMG/${VIDEO[n].ICON}" >
                        <img src="IMG/${VIDEO[n].ICON}" alt=":(">
                    </object>
                </div>
                <div class="name">${VIDEO[n].NAME}</div>
            </div>`;
    }
}