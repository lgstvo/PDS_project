
//Retorna as matérias cadastradas
$.ajax({
    url: 'http://localhost:3000/aula', 
    type: 'GET', 
    dataType: 'json', 
    success: function(data) {
        $.each(data, function(index, element) {   
            $.each(element, function(i, e){
                // Exibe todas as materias em Menu -> Matérias        
                $('#todas-materias').append($('<div class="col"><div id='+e.id+' class="card"><img src="https://64.media.tumblr.com/8b69b19c86e321c791340f370165ba15/tumblr_nvge9wpGCU1u66uqto1_1280.jpg" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+e.materia+'</h5></div><div class="card-footer">Agendar</div></div></div>'));
                // Exibe as três primeiras matérias em Menu -> Início
                if(i < 3)
                    $('#tres-primeiras-materias').append($('<div class="col"><div id='+e.id+' class="card"><img src="https://64.media.tumblr.com/8b69b19c86e321c791340f370165ba15/tumblr_nvge9wpGCU1u66uqto1_1280.jpg" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+e.materia+'</h5></div><div class="card-footer">Agendar</div></div></div>'));
                //data-format:  '2011-05-05'
                
            });
        }); 
        $('.item.active').css('border-color', '');
        $('.card').css('border', '')
        $('.card').addClass('bg-primario');
        $('.card').css('color','white');            
        $('.card-footer').addClass('bg-roxo');
        $('.card-footer').css('font-size','15px');
        $('.card-footer').addClass('text-center');
        
        //$('#calendario-menu-inicio').fullCalendar({event: eventos});
        
    }, error: function(e) { 
        alert(e); 
    }
});

//Retorna os professores cadastrados
$.ajax({
    url: 'http://localhost:3000/perfil/1', 
    type: 'GET', 
    dataType: 'json', 
    success: function(data) {
        $.each(data, function(index, element) {   
            $.each(element, function(i, e){
                // Exibe todas as materias em Menu -> Matérias        
                $('#todos-professores').append($('<div class="col"><div id='+e.id+' class="card"><img src="https://64.media.tumblr.com/8b69b19c86e321c791340f370165ba15/tumblr_nvge9wpGCU1u66uqto1_1280.jpg" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+e.nome+'</h5></div><div class="card-footer">Agendar</div></div></div>'));
                // Exibe as três primeiras matérias em Menu -> Início
                if(i < 3)
                    $('#tres-primeiros-professores').append($('<div class="col"><div id='+e.id+' class="card"><img src="https://64.media.tumblr.com/8b69b19c86e321c791340f370165ba15/tumblr_nvge9wpGCU1u66uqto1_1280.jpg" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+e.nome+'</h5></div><div class="card-footer">Agendar</div></div></div>'));
                //data-format:  '2011-05-05'
                
            });
        }); 
        $('.item.active').css('border-color', '');
        $('.card').css('border', '')
        $('.card').addClass('bg-primario');
        $('.card').css('color','white');            
        $('.card-footer').addClass('bg-roxo');
        $('.card-footer').css('font-size','15px');
        $('.card-footer').addClass('text-center');
        
        //$('#calendario-menu-inicio').fullCalendar({event: eventos});
        
    }, error: function(e) { 
        alert(e); 
    }
});


function login(){
    $.ajax({
        url: 'http://localhost:3000/login',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify( { "email": $('#email').val(), "pwd": $('pwd').val() } ),
        processData: false,
        success: function( data, textStatus, jQxhr ){
            $('#button-login').html( JSON.stringify( data ) );
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
    
}
//Cria um perfil
perfil = {
    "id": 10,
    "nome": "string",
    "isProfessor": true,
    "pwd": "string",
    "email": "string",
    "telefone": 'string'
  }
  $.ajax({
    url: 'http://localhost:3000/perfil', 
    type: 'POST', 
    dataType: 'json', 
    body: perfil,
    success: function(data) {
           
    }, error: function(e) { 
        alert(e); 
    }
});