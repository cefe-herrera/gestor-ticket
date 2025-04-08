import { Injectable } from '@angular/core';
import { Column } from '../model/column.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  
  constructor() { }

  getColumns(): Column[] {
    return [
      {
        title: 'Pendiente',
        tickets: [
          { id: 1, title: 'Ticket 1', description: 'Revisar el código del módulo X' },
          { id: 2, title: 'Ticket 2', description: 'Solucionar error en login' }
        ]
      },
      {
        title: 'En Progreso',
        tickets: [
          { id: 3, title: 'Ticket 3', description: 'Implementar nueva funcionalidad Y' }
        ]
      },
      {
        title: 'Completado',
        tickets: [
          { id: 4, title: 'Ticket 4', description: 'Realizar pruebas unitarias del servicio Z' }
        ]
      }
    ];
  }
}
