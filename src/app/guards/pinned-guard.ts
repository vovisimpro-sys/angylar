import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { NotesService } from '../services/notes';

// пускаем на /pinned только если есть закрепленные заметки
export const pinnedGuard: CanActivateFn = (route, state) => {
  const notesService = inject(NotesService);
  const router = inject(Router);

  if (notesService.getPinned().length > 0) {
    return true;
  }
  console.log('нет закрепленных заметок');
  return router.parseUrl('/');
};
