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
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require cocoon
//= require notifyjs
//= require bootstrap
//= require_tree .

$('document').ready(function () {
    // quando clicar no botão de diminuir o side nav, vai sumir os spans
    $('.sidebar-main-toggle').click(function () {
        var classe = $("#body").hasClass('sidebar-xs');
        if ( classe == true) {
            $('.legenda_side_nav').css('display', 'none');
        } else{
            $('.legenda_side_nav').css('display', 'inline');
        }
    });

});


// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

function mensagensAlerta(titulo,mensagem,icone,url_redirecionada="",botao="OK") {

    if(url_redirecionada != "") {


        swal({
            titulo: titulo,
            text: mensagem,
            icon: icone,
            button: botao,
            animation: false
        }).then((value) => {
            window.location.replace(url_redirecionada);
        });




    } else {
        swal({
            titulo: titulo,
            text: mensagem,
            icon: icone,
            button: botao,
            animation: false
        });
    }
}



