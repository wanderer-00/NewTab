var div_all_figures = document.getElementsByClassName("all-figures")[0];

var array_all_figures = [
    {
        "name": "прямоугольник",
        "note": "точкой отсчета у прямоугольника является левый вверхний угол",
        "attr_note":[
            ["x","положение точки отсчета по оси X"],
            ["y","положение точки отсчета по оси Y"],
            ["rx","скругление углов вдоль оси X"],
            ["ry","скругление углов вдоль оси Y"],
            ["width","ширина фигуры"],
            ["height","высота фигуры"]
        ],
        "type": "rect",
        "attr": [
            ["x","10%"],
            ["y","20%"],
            ["rx","2"],
            ["ry","6"],
            ["width","40"],
            ["height","20"]
        ]
    },

    {
        "name": "окружность",
        "note": "точка отсчета у окружности является ее центром",
        "attr_note":[
            ["cx","положение центра по оси X"],
            ["cy","положение центра по оси Y"],
            ["r","радиус"]
        ],
        "type": "circle",
        "attr": [
            ["cx","20"],
            ["cy","20"],
            ["r","14"]
        ]
    },

    {
        "name": "элипс",
        "note": "точка отсчета у окружности является ее центром",
        "attr_note":[
            ["cx","положение <a href='#dot_zero'>точки отсчета</a> по оси X (центр окружности)"],
            ["cy","положение <a href='#dot_zero'>точки отсчета</a> по оси Y"],
            ["rx","радиус вдоль оси X"],
            ["ry","радиус вдоль оси Y"],
        ],
        "type": "ellipse",
        "attr": [
            ["cx","40"],
            ["cy","20"],
            ["rx","30"],
            ["ry","10"]
        ]
    },

    {
        "name": "линия",
        "note": "проводиться из точки #1 в точку #2, проще некуда",
        "attr_note":[
            ["x1, y1","координаты точки #1"],
            ["x2, y2","координаты точки #2"],
        ],
        "type": "line",
        "attr": [
            ["x1","10"],
            ["x2","80"],
            ["y1","20"],
            ["y2","20"]
        ]
    },
    
    {
        "name": "ломаная линия",
        "note": "проводиться по точкам, указанным в атрибуте points",
        "attr_note":[
            ["points","точки, через которые проходит ломаная линия"]
        ],
        "type": "polyline",
        "attr": [
            ["points","10 5, 10 30, 20 20, 30 35, 40 20, 80 20"]
        ]
    },

    {
        "name": "многоугольник",
        "note": "тоже что и ломаная линия, отличается соединением начальной и конечной точки",
        "attr_note":[
            ["points","точки, через которые проходит ломаная линия"]
        ],
        "type": "polygon",
        "attr": [
            ["points","10 5, 10 30, 20 20, 30 35, 40 20, 80 20"]
        ]
    },

    {
        "name": "путь",
        "note": "-",
        "attr_note":[
            ["d","-"]
        ],
        "type": "path",
        "attr": [
            ["d","M10 10"]
        ]
    }
]

for (var n = 0; n < array_all_figures.length; n++){
    div_all_figures.innerHTML += `
        <div class="box">
            <h2>${array_all_figures[n].name}</h2>
            ${array_all_figures[n].note}
            <ul></ul>

            <div class="sample-figure">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40">
                    <${array_all_figures[n].type} class="all-sample" ${write_attr()}/>
                </svg>
            </div>
        </div>
    `;
    
    // добавление атрибутов в svg
    function write_attr(){
        var attr = array_all_figures[n].attr;
        var all = "";
        
        for (var m = 0; m < array_all_figures[n].attr.length; m++) {
            all += `${attr[m][0]}="${attr[m][1]}" `;
        }
        return all;
    }
    
    // заполнение списка с описанием атрибутов
    var list_attr = div_all_figures.getElementsByClassName("box")[n].getElementsByTagName("ul")[0]; // список
    var li_attr = array_all_figures[n].attr_note;
    
    for (var i = 0; i < array_all_figures[n].attr_note.length; i++ ) {
        list_attr.innerHTML += `<li>${li_attr[i][0]} - ${li_attr[i][1]}</li>`
    }
}