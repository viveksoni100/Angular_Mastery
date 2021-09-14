import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {error} from '@angular/compiler/src/util';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    /*this.firstObsSubscription = interval(1000).subscribe(count => {
      console.log(count);
    });*/

    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 3) {
          observer.complete();
        }
        if (count > 5) {
          observer.error(new Error('Count is Greater!'));
        }
        count++;
      }, 1000);
    });

    /*customIntervalObservable.pipe(map((data: number) => {
      return 'Round: ' + (data + 1);
    }));*/

    /*this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log('Error handled!');
    }, () => {
      console.log('Completed!');
    });*/

    this.firstObsSubscription = customIntervalObservable.pipe(map((data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe(data => {
      console.log(data);
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log('Error handled!');
    }, () => {
      console.log('Completed!');
    });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
