import { Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes';
import { pinnedGuard } from './guards/pinned-guard';

export const routes: Routes = [
  { path: '', component: NotesComponent },
  { path: 'pinned', component: NotesComponent, canActivate: [pinnedGuard], data: { onlyPinned: true } },
  { path: '**', redirectTo: '' },
];
