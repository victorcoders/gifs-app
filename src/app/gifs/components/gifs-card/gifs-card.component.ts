import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class GifsCardComponent implements OnInit {
  ngOnInit(): void {
    if( !this.gif ) throw new Error("Es necesario el gif");
  }

  @Input()
  public gif!: Gif;
}
