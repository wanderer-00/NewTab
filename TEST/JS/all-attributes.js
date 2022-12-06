var div_all_attributes = document.getElementsByClassName("all-attributes")[0];

var array_all_attributes = [
    "fill",
    "fill-opacity",
    "stroke",
    "stroke-width",
    "stroke-opacity"
]

var n = 0;

while (n < array_all_attributes.length){
    div_all_attributes.innerHTML += `<div>${array_all_attributes[n]}</div>`;
    n++;
}