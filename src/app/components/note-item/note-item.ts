import { Component, Input } from '@angular/core';
import { Note } from '../../models/note';
import { NotesService } from '../../services/notes';

@Component({
  selector: 'app-note-item',
  imports: [],
  templateUrl: './note-item.html',
  styleUrl: './note-item.css',
})
export class NoteItemComponent {
  @Input() note!: Note;

  constructor(private notesService: NotesService) {}

  pin() {
    this.notesService.togglePin(this.note.id);
  }

  remove() {
    this.notesService.deleteNote(this.note.id);
  }
}
