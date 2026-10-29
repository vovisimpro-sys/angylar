import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotesHeader } from './components/notes-header/notes-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NotesHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
