import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit{
  ngOnInit(): void {
    if( !this.url ) throw new Error("Property required");
  }

  @Input()
  public url!: string;

  @Input()
  public alt?: string;

  public hasLoaded: boolean = false;

  onLoad(){
    setTimeout(() => {
      this.hasLoaded = true;

    }, 1000);
  }

}
