$(document).ready(function(){
    $("#boy1").hide()
    $("#tiger1").hide()
    $("#lion1").hide()
    $("#cheetah1").hide()
    $("#boy").click(function(){
    $("#boy").hide();
    $("#boy1").show();
    });
    $("#lion").click(function(){
    $("#lion").hide();
    $("#lion1").show();
    });
    $("#tiger").click(function(){
    $("#tiger").hide();
    $("#tiger1").show();
    });
    $("#cheetah").click(function(){
    $("#cheetah").hide();
    $("#cheetah1").show();
    });
    $("#start").click(function(){
    var CWidth = $('#boy1').width();
    var RaceTrackWidth = $(window).width() - (CWidth+100);
    var boyTime = Math.floor((Math.random() * 5000) + 1);
    var tigerTime = Math.floor((Math.random() * 5000) + 1);
    var lionTime = Math.floor((Math.random() * 5000) + 1);
    var cheetahTime = Math.floor((Math.random() * 5000) + 1);
    $('#boy1').animate({left: RaceTrackWidth},boyTime);
    $('#tiger1').animate({left: RaceTrackWidth},tigerTime);
    $('#lion1').animate({left: RaceTrackWidth},lionTime);
    $('#cheetah1').animate({left: RaceTrackWidth},cheetahTime);
    $("#reset").click(function(){
    $('#boy1').css('left', '50px');
    $('#tiger1').css('left', '50px');
    $('#lion1').css('left', '50px');
    $('#cheetah1').css('left', '50px');
    });
    });
    });
    