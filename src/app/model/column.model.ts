import { Ticket } from './ticket.model';

export interface Column {
    title: string;
    tickets: Ticket[];
  }