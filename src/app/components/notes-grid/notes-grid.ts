import { Component, Input } from '@angular/core';
import { Note } from '../../models/note';
import { NoteItemComponent } from '../note-item/note-item';

@Component({
  selector: 'app-notes-grid',
  imports: [NoteItemComponent],
  templateUrl: './notes-grid.html',
  styleUrl: './notes-grid.css',
})
export class NotesGridComponent {
  @Input() notes: Note[] = [];
}
