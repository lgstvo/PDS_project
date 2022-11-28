import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import $ from 'jquery';


export default class Calendario extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  criaCalendario(){
    const eventos = [] 
    $.ajax({
        url: 'http://localhost:9000/aula', 
        type: 'GET', 
        dataType: 'json', 
        success: function(data) {
            $.each(data, function(index, element) {   
                $.each(element, function(i, e){
                    eventos.push({id: e.id, title: e.materia, start: e.dataaula, allDay: true, className: 'info'})  
                });
            });                 
        }, error: function(e) { 
            alert(e); 
        }
    });
    this.setState({ apiResponse: eventos })
  }
  
  componentDidMount() {
    this.criaCalendario();
}

  
  render() {
    return (
      <FullCalendar
      
        plugins={[ dayGridPlugin ]}
        headerToolbar= {{
          left: '',
          center: 'title agendaDay,agendaWeek,month prev,next today',
          right: ''
        }}
        locale = 'PT-BR'
        height={700}
        events= {this.state.apiResponse}
        buttonText= {{
          today: 'hoje',
          month: 'mês',
          week: 'semana',
          day: 'dia'
        }}
      

      />
    )
  }
}
