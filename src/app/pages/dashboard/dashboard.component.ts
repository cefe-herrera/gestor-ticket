import { Component } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column } from '../../model/column.model';
import { Ticket } from '../../model/ticket.model';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { TicketService } from '../../services/ticket.service';


@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    CardComponent,
    MatCardModule,
    DragDropModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  columns: Column[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    // Cargamos las columnas y tickets desde el servicio
    this.ticketService.columns$.subscribe(cols => {
      this.columns = cols;
    });
  }
   // Definimos las columnas y los tickets de ejemplo

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
