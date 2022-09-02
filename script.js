let chartData = document.querySelector('.c-content');
let day = document.querySelector('.bars');
let barColor;

fetch("data.json")
.then(response => response.json())
.then(data => {
    data.forEach(function(d){
        chartData.innerHTML += "<div class='bar-container'><div class='bars' style='height: "+(50+d.amount)+"px;' data-total='$"+d.amount+"'></div><p class='day'>"+d.day+"</p></div>";
    });
});
