import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css'],
})
export class ObservableExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const observable2 = of(10, 20, 30);
    observable2.subscribe((x) => console.log(x));
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.error();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.subscribe(
      (val) => {
        console.log(val);
      },
      (erreur) => {
        console.log(erreur);
      },
      () => {
        console.log('BOOM');
      }
    );
    observable
      .pipe(
        filter((x) => x % 2 === 0),
        map((x) => x * 2)
      )
      .subscribe((variable) => {
        console.log('J ai recu ', variable);
      });
  }
}
