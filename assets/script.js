var clock = document.getElementById("currentDay");
var saveButton09 = document.getElementById("save09");
var saveButton10 = document.getElementById("save10");
// var jobText = document.getElementById("jobInput");
// var timeSlot = document.getElementById("timeslot")
var jobDescr = [] || JSON.parse(localStorage.getItem("jobDescr")) ;

function updateClock(){
    clock.textContent ="It is currently " + moment().format('dddd MMMM Do YYYY, h:mm:ss a');
}
setInterval(updateClock, 1000);

function saveText09(){
    var inputEl = document.getElementById("jobInput09");
    var input = inputEl.value;
    var timeEl = document.getElementById("timeslot09");
    var time = timeEl.textContent;
    var jobObj = {
        time: time,
        job: input,
    }
    console.log(jobObj);
    jobDescr.pop(jobObj);
    localStorage.setItem("jobDescr", JSON.stringify(jobObj));
}
function saveText10(){
    var inputEl = document.getElementById("jobInput10");
    var input = inputEl.value;
    var timeEl = document.getElementById("timeslot10");
    var time = timeEl.textContent;
    var jobObj = {
        time: time,
        job: input,
    }
    console.log(jobDescr);
    jobDescr.pop(jobObj);
    localStorage.setItem("jobDescr", JSON.stringify(jobObj));
}


saveButton09.addEventListener("click", saveText09);
saveButton10.addEventListener("click", saveText10);