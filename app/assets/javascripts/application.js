// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery-3.2.1
//= require bootstrap
//= require_tree .



$( document ).ready(function() {


    $('#B2').slideDown(1000);
    $('#B1').animate({width:'toggle'},2000);
    $('#BM').fadeIn('slow');
    $('#B1').css('display', 'block');
    $('nav a').click(function(){
        event.preventDefault();

        if ($(menu).is(":visible")) {
            $('html, body').css({
                overflow: 'auto',
                height: 'auto'
            });
        }
        else {
            $('html, body').css({
                overflow: 'hidden',
                height: '100%'
            });
        }
        $('#menu').slideToggle('slow')

    });
    $('#menu a').click(
        function( event ) {
            $('html, body').css({
                overflow: 'auto',
                height: 'auto'
            });
            event.preventDefault();
            $('#menu').slideToggle('slow');
            $('html, body').animate({

                scrollTop: $($(this).attr('href')).offset().top
            }, 2000);}
    );


    $('#formation > div > div > div ').click(function(){
        console.log('toto');
        var menu = this.getElementsByClassName('comp');
        var fleche = this.getElementsByClassName('fa');
        console.log(fleche)

        if ($(menu).is(":visible")) {
            $(fleche).removeClass('fa-sort-asc')
            $(fleche).addClass('fa-sort-desc')
            $(menu).slideUp(500);
        }
        else {
            $(fleche).removeClass('fa-sort-desc')
            $(fleche).addClass('fa-sort-asc')
            $(menu).slideDown(500);
        }
            });





});





