import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTheater = [
      {
        title: 'Avenger',
        price: 200_000,
        releaseDate: new Date('2012-03-25')
      },
      {
        title: 'Avenger 2',
        price: 200_000,
        releaseDate: new Date('2012-03-08')
      }
    ];

    // this.moviesFutureRelease = undefined;
    this.moviesFutureRelease = [
      {
        title: 'Avenger 3',
        price: 200_000,
        releaseDate: new Date('2012-03-03')
      },
      {
        title: 'Avenger 4',
        price: 200_000,
        releaseDate: new Date('2012-03-26')
      }
    ];
  }

  moviesInTheater: any[] | undefined;
  moviesFutureRelease: any[] | undefined;

  title = 'balad-movie';
}
