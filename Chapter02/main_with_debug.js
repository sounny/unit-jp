function initialize(){
    cityPop();
};

function cityPop(){
    var cityPop = [
        { 
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

    var table = document.createElement("table");
    var headerRow = document.createElement("tr");
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")
    table.appendChild(headerRow);

    cityPop.forEach(function(city) {
        var row = document.createElement("tr");
        row.insertAdjacentHTML('beforeend', '<td>' + city.city + '</td><td>' + city.population + '</td>');
        table.appendChild(row);
    });

    var myDiv = document.getElementById("myDiv");
    myDiv.appendChild(table);

    myDiv.addEventListener("click", function(){
        alert("Hello World!");
    });

    addColumns(cityPop);
    addEvents();
};

function addColumns(cityPop){
    document.querySelectorAll("tr").forEach(function(row, i){
        if (i == 0){
            row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
        } else {
            var citySize;
            if (cityPop[i-1].population < 100000){
                citySize = 'Small';
            } else if (cityPop[i-1].population < 500000){
                citySize = 'Medium';
            } else {
                citySize = 'Large';
            };
            row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
        };
    });
};

function addEvents(){
    document.querySelector("table").addEventListener("mouseover", function(){
        var color = "rgb(";
        for (var i=0; i<3; i++){
            var random = Math.round(Math.random() * 255);
            color += random;
            if (i<2){
                color += ",";
            } else {
                color += ")";
            }
        }
        document.querySelector("table").style.color = color;
    });

    function clickme(){
        alert('Hey, you clicked me!');
    };
    document.querySelector("table").addEventListener("click", clickme);
};

window.onload = initialize;
