$("#currentDay").text(moment().format('MMMM Do, YYYY'));

var storedData = JSON.parse(localStorage.getItem('schedule'));
var schedule;
if (storedData === null) {
    // schedule = ['', '', '', '', '', '', '', '', ''];
    schedule = [];
} else {
    schedule = storedData;
}

fillRows();


 
function fillRows() {
    var hour = moment().hour();
    for (var i = 0; i < schedule.length; i++) {
        var tArea = $(`textarea[id=${i}]`);
        tArea.text(schedule[i]);
        var trueHour = i + 9;
        if (trueHour < hour) {
            tArea.addClass('past');
        } else if (trueHour === hour) {
            tArea.addClass('present');
        } else {
            tArea.addClass('future');
        }
    }
}

var schedule = [];

$('.saveBtn').click(function (event) {
    event.preventDefault();
    var info = $(".description").value
    schedule.push(info);
    console.log(schedule);

    if (event.target.className === "fa fa-lock") {
        var todo = this.children[1].value; 
        var index = parseInt(this.id); 
        console.log(index);
        schedule[index] = todo; 
        localStorage.setItem('schedule', JSON.stringify(schedule)); 
    }
});