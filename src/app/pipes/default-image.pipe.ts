import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string): string {
    /*
     Si value chaine vide ou que des espaces on retourne l'image par défaut
     Sinon on retourne la meme image
    */
    if (!path.trim().length) {
      return 'cv.png';
    }
    return path;
  }
}
