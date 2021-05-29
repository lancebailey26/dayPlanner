var clock = $('#currentDay');
var currentTime = moment().format('H');
// var saveButton09 = document.getElementById("save09");
// var saveButton10 = document.getElementById("save10");

// var nineAMSLOT = $('#timeslot09');
// var tenAMSLOT = $('#save10');
// var elevenAMSLOT = $('#timeslot11');
// var twelvePMSLOT = $('#timeslot12');
// var onePMSLOT = $('#timeslot13');
// var twoPMSLOT = $('#timeslot14');
// var threePMSLOT = $('#timeslot15');
// var fourPMSLOT = $('#timeslot16');
// var fivePMSLOT = $('#timeslot17');
// var tenAMINPUT = $('#jobinput10');
var anyButton = $('button');
var anyInput = $('input');
// var jobText = document.getElementById("jobInput");
// var timeSlot = document.getElementById("timeslot")
// var jobDescr = [] || JSON.parse(localStorage.getItem("jobDescr")) ;

setInterval(function (){
    clock.text('It is currently ' + moment().format('dddd MMMM Do YYYY, h:mm:ss a'));
    }, 1000)

 
$('#jobInput09').val(localStorage.nineAM);
$('#jobInput10').val(localStorage.tenAM);
$('#jobInput11').val(localStorage.elevenAM);
$('#jobInput12').val(localStorage.twelvePM);
$('#jobInput13').val(localStorage.onePM);
$('#jobInput14').val(localStorage.twoPM);
$('#jobInput15').val(localStorage.threePM);
$('#jobInput16').val(localStorage.fourPM);
$('#jobInput17').val(localStorage.fivePM);


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
$('#save10').on('click',function(){
    localStorage.tenAM = $('#jobInput10').val();
});
$('#save11').on('click',function(){
    localStorage.elevenAM = $('#jobInput11').val();
});
$('#save12').on('click',function(){
    localStorage.twelvePM = $('#jobInput12').val();
});
$('#save13').on('click',function(){
    localStorage.onePM = $('#jobInput13').val();
});
$('#save14').on('click',function(){
    localStorage.twoPM = $('#jobInput14').val();
});
$('#save15').on('click',function(){
    localStorage.threePM = $('#jobInput15').val();
});
$('#save16').on('click',function(){
    localStorage.fourPM = $('#jobInput16').val();
});
$('#save17').on('click',function(){
    localStorage.fivePM = $('#jobInput17').val();
});

// console.log(tenAMSLOT.val());
console.log(currentTime);

if (currentTime > anyButton.val()){
    anyInput.addClass("past");
    anyInput.removeClass("future");
    anyInput.removeClass("present")
}

if (currenTime = anyButton.val()){
    anyInput.removeClass("past");
    anyInput.removeClass("future");
    anyInput.addClass("present");
}

if (currentTime < anyButton.val()){
    anyInput.addClass("future");
    anyInput.removeClass("past");
    anyInput.removeClass("present");
}


// saveButton10.addEventListener("click", saveText10);