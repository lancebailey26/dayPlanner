var clock = $('#currentDay');
var currentTime = moment().format('H');
// var saveButton09 = document.getElementById("save09");
// var saveButton10 = document.getElementById("save10");

var int9am = 9;
var int10am = 10;
var int11am = 11;
var int12pm = 12;
var int1pm = 13;
var int2pm = 14;
var int3pm = 15;
var int4pm = 16;
// var tenAMSLOT = $('#save10');
// var elevenAMSLOT = $('#timeslot11');
// var twelvePMSLOT = $('#timeslot12');
// var onePMSLOT = $('#timeslot13');
// var twoPMSLOT = $('#timeslot14');
// var threePMSLOT = $('#timeslot15');
// var fourPMSLOT = $('#timeslot16');
// var fivePMInput = document.querySelector('#timeslot17').textContent;
// fivePMInput = parseInt(fivePMInput[0,1]);
var int5pm = 17;
// var tenAMINPUT = $('#jobinput10');
// var anyButton = $('button');
// var anyInput = $('.input');
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
// console.log(fivePMInput);

// console.log(anyInput.val());

// if (currentTime >  anyInput.val()){
//     anyInput.addClass("present");
// }

if (int9am < currentTime){
    $('#jobInput09').addClass('past');
}else if (int9am > currentTime){
    $('#jobInput09').addClass('future');
}else if (int9am == currentTime){
    $('#jobInput09').addClass('present');
}

if (int10am < currentTime){
    $('#jobInput10').addClass('past');
}else if (int10am > currentTime){
    $('#jobInput10').addClass('future');
}else if (int10am == currentTime){
    $('#jobInput10').addClass('present');
}

if (int11am < currentTime){
    $('#jobInput11').addClass('past');
}else if (int11am > currentTime){
    $('#jobInput11').addClass('future');
}else if (int11am = currentTime){
    $('#jobInput11').addClass('present');
}

if (int12pm < currentTime){
    $('#jobInput12').addClass('past');
}else if (int12pm > currentTime){
    $('#jobInput12').addClass('future');
}else if (int12pm = currentTime){
    $('#jobInput12').addClass('present');
}

if (int1pm < currentTime){
    $('#jobInput13').addClass('past');
}else if (int1pm > currentTime){
    $('#jobInput13').addClass('future');
}else if (int1pm = currentTime){
    $('#jobInput13').addClass('present');
}

if (int2pm < currentTime){
    $('#jobInput14').addClass('past');
}else if (int2pm > currentTime){
    $('#jobInput14').addClass('future');
}else if (int2pm = currentTime){
    $('#jobInput14').addClass('present');
}

if (int3pm < currentTime){
    $('#jobInput15').addClass('past');
}else if (int3pm > currentTime){
    $('#jobInput15').addClass('future');
}else if (int3pm = currentTime){
    $('#jobInput15').addClass('present');
}

if (int4pm < currentTime){
    $('#jobInput16').addClass('past');
}else if (int4pm > currentTime){
    $('#jobInput16').addClass('future');
}else if (int4pm = currentTime){
    $('#jobInput16').addClass('present');
}

if (int5pm < currentTime){
    $('#jobInput17').addClass('past');
}else if (int5pm > currentTime){
    $('#jobInput17').addClass('future');
}else if (int5pm == currentTime){
    $('#jobInput17').addClass('present');
}
// if ()
// saveButton10.addEventListener("click", saveText10);