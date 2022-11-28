import $ from 'jquery'; 

/*!
* Start Bootstrap - Simple Sidebar v6.0.5 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

            // Estiliza navegação entre abas do menu
            var tabElms = document.querySelectorAll('a[data-bs-toggle="list"]')
            tabElms.forEach(function(tabElm) {
            tabElm.addEventListener('shown.bs.tab', function (event) {
                $(event.target).children().addClass('botao-ativo') // newly activated tab
                $(event.target).children().removeClass('botao-secundario')
                $(event.relatedTarget).children().addClass('botao-secundario') // previous active tab
                $(event.relatedTarget).children().removeClass('botao-ativo') 
                if(event.target.id == 'botao-tab-calendario'){
                    c_calendario.fullCalendar('render');
                    $('#calendario-menu-calendario').fullCalendar('option', 'height', 750);
                }
            })
        });

        //Retorna materias
        $(document).ready(function() { 
            retornaMaterias();
            retornaPerfis();
        });
