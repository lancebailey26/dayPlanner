var clock = $('#currentDay'); // targets the clock display element
var currentTime = moment().format('H'); //shows the current hour in an integer format

setInterval(function (){  //constantly refreshes the clock element every second
    clock.text('It is currently ' + moment().format('dddd MMMM Do YYYY, h:mm:ss a'));
    }, 1000)

//displays local storage 
$('#jobInput09').val(localStorage.nineAM);
$('#jobInput10').val(localStorage.tenAM);
$('#jobInput11').val(localStorage.elevenAM);
$('#jobInput12').val(localStorage.twelvePM);
$('#jobInput13').val(localStorage.onePM);
$('#jobInput14').val(localStorage.twoPM);
$('#jobInput15').val(localStorage.threePM);
$('#jobInput16').val(localStorage.fourPM);
$('#jobInput17').val(localStorage.fivePM);

//on button click saves inputs to local storage
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

//reference for current time
console.log("Current time in an integer format is " + currentTime);

// compares current time to time values as integers, displays css class for color coding
if (9 < currentTime){
    $('#jobInput09').addClass('past');
}else if (9 > currentTime){
    $('#jobInput09').addClass('future');
}else if (9 == currentTime){
    $('#jobInput09').addClass('present');
}

if (10 < currentTime){
    $('#jobInput10').addClass('past');
}else if (10 > currentTime){
    $('#jobInput10').addClass('future');
}else if (10 == currentTime){
    $('#jobInput10').addClass('present');
}

if (11 < currentTime){
    $('#jobInput11').addClass('past');
}else if (11 > currentTime){
    $('#jobInput11').addClass('future');
}else if (11 == currentTime){
    $('#jobInput11').addClass('present');
}

if (12 < currentTime){
    $('#jobInput12').addClass('past');
}else if (12 > currentTime){
    $('#jobInput12').addClass('future');
}else if (12 == currentTime){
    $('#jobInput12').addClass('present');
}

if (13 < currentTime){
    $('#jobInput13').addClass('past');
}else if (13 > currentTime){
    $('#jobInput13').addClass('future');
}else if (13 == currentTime){
    $('#jobInput13').addClass('present');
}

if (14 < currentTime){
    $('#jobInput14').addClass('past');
}else if (14 > currentTime){
    $('#jobInput14').addClass('future');
}else if (14 == currentTime){
    $('#jobInput14').addClass('present');
}

if (15 < currentTime){
    $('#jobInput15').addClass('past');
}else if (15 > currentTime){
    $('#jobInput15').addClass('future');
}else if (15 == currentTime){
    $('#jobInput15').addClass('present');
}

if (16 < currentTime){
    $('#jobInput16').addClass('past');
}else if (16 > currentTime){
    $('#jobInput16').addClass('future');
}else if (16 == currentTime){
    $('#jobInput16').addClass('present');
}

if (17 < currentTime){
    $('#jobInput17').addClass('past');
}else if (17 > currentTime){
    $('#jobInput17').addClass('future');
}else if (17 == currentTime){
    $('#jobInput17').addClass('present');
}