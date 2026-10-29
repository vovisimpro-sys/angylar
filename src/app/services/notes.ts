import { Injectable } from '@angular/core';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes: Note[] = [
    { id: 1, title: 'Купить хлеб', content: 'и молоко', color: '#fff59d', pinned: true },
    { id: 2, title: 'Домашка', content: 'сделать лабу по ангуляру', color: '#a5d6a7', pinned: false },
    { id: 3, title: 'Идея', content: 'написать свой todo', color: '#90caf9', pinned: false },
  ];

  getNotes() {
    return this.notes;
  }

  getPinned() {
    return this.notes.filter(n => n.pinned);
  }

  addNote(title: string, content: string, color: string) {
    this.notes.push({
      id: Date.now(),
      title: title,
      content: content,
      color: color,
      pinned: false,
    });
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter(n => n.id != id);
  }

  togglePin(id: number) {
    let note = this.notes.find(n => n.id == id);
    if (note) {
      note.pinned = !note.pinned;
    }
  }
}
