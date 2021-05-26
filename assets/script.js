var clock = $('#currentDay');
// var saveButton09 = document.getElementById("save09");
// var saveButton10 = document.getElementById("save10");


// var elevenAM = $('#jobInput11').val();
// var twelvePM = $('#jobInput12').val();
// var onePM = $('#jobInput13').val();
// var twoPM = $('#jobInput14').val();
// var threePM = $('#jobInput15').val();
// var fourPM = $('#jobInput16').val();
// var fivePM = $('#jobInput17').val();
// var jobText = document.getElementById("jobInput");
// var timeSlot = document.getElementById("timeslot")
// var jobDescr = [] || JSON.parse(localStorage.getItem("jobDescr")) ;

setInterval(function (){
    clock.text('It is currently ' + moment().format('dddd MMMM Do YYYY, h:mm:ss a'));
    }, 1000)

 
$('#jobInput09').val(localStorage.nineAM);

// function saveText09(){
//     // var inputEl = $('#jobInput09');
//     // var nineAM = $('#jobInput09').val();
//     // var timeEl = 
//     // var time = $('#timeslot09').text();
//     // var nineAM = input;
//     var nineAM = $('#jobInput09').val();
//     var nineAMData = {
//         time: "9AM",
//         job: nineAM,
//     }
//     console.log(nineAMData);
//     jobDescr.push(nineAMData);
//     localStorage.setItem("jobDescr", JSON.stringify(jobDescr));
// }
// function saveText10(){
//     // var inputEl = document.getElementById("jobInput10");
//     // var input = inputEl.value;
//     // var timeEl = document.getElementById("timeslot10");
//     // var time = timeEl.textContent;
//     var tenAM = $('#jobInput10').val();
//     var tenAMData = {
//         time: "10AM",
//         job: tenAM,
//     }
//     console.log(tenAMData);
//     jobDescr.push(tenAMData);
//     localStorage.setItem("jobDescr", JSON.stringify(jobDescr));
// }

$('#save09').on('click',function(){
    localStorage.nineAM = $('#jobInput09').val();
});
// saveButton10.addEventListener("click", saveText10);