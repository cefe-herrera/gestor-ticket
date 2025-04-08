import { Component } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column } from '../../model/column.model';
import { Ticket } from '../../model/ticket.model';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatCard,
    MatCardModule,
    DragDropModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

   // Definimos las columnas y los tickets de ejemplo
   columns: Column[] = [
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

  getConnectedDropLists(currentIndex: number): string[] {
    return this.columns
      .map((_, index) => `drop-list-${index}`)
      .filter(id => id !== `drop-list-${currentIndex}`);
  }
  
   // Evento que se dispara al soltar (drop) una card
   drop(event: CdkDragDrop<Ticket[]>) {
    console.log('Evento drop:', event); // Agregado para depuración
    console.log('Data del evento:', event.container.data); // Agregado para depuración
    console.log('Data del evento anterior:', event.previousContainer.data); // Agregado para depuración
    if (event.previousContainer === event.container) {
      // Se reordena la lista si se mueve dentro de la misma columna.
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Se transfiere el ticket entre columnas.
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
