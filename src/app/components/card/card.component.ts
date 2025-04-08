import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ticket } from '../../model/ticket.model';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() ticket!: Ticket;

  // Eventos para notificar al componente padre
  @Output() edit = new EventEmitter<Ticket>();
  @Output() delete = new EventEmitter<Ticket>();

  onEdit(): void {
    this.edit.emit(this.ticket);
  }

  onDelete(): void {
    this.delete.emit(this.ticket);
  }
}
