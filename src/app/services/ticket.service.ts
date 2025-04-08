import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Column } from '../model/column.model';
import { Ticket } from '../model/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  // Estado inicial de las columnas con sus tickets
  private initialColumns: Column[] = [
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

  // BehaviorSubject que mantendrá el estado actual de las columnas
  private columnsSubject = new BehaviorSubject<Column[]>(this.initialColumns);

  // Observable público para que otros componentes se puedan suscribir a los cambios
  public columns$: Observable<Column[]> = this.columnsSubject.asObservable();

  constructor() { }

  // Método para actualizar las columnas, emitirá el nuevo estado a los suscriptores.
  updateColumns(newColumns: Column[]): void {
    this.columnsSubject.next(newColumns);
  }
}
