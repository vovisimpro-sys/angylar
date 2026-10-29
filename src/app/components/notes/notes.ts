import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../../services/notes';
import { NotesGridComponent } from '../notes-grid/notes-grid';

@Component({
  selector: 'app-notes',
  imports: [ReactiveFormsModule, NotesGridComponent],
  templateUrl: './notes.html',
  styleUrl: './notes.css',
})
export class NotesComponent {
  onlyPinned = false;

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    content: new FormControl(''),
    color: new FormControl('#fff59d'),
  });

  constructor(public notesService: NotesService, private route: ActivatedRoute) {
    this.onlyPinned = this.route.snapshot.data['onlyPinned'] == true;
  }

  getNotes() {
    if (this.onlyPinned) {
      return this.notesService.getPinned();
    }
    return this.notesService.getNotes();
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.notesService.addNote(this.form.value.title!, this.form.value.content!, this.form.value.color!);
    this.form.reset({ title: '', content: '', color: '#fff59d' });
  }
}
