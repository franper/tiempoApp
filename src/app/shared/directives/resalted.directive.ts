import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[resalted]'
})
export class ResaltedDirective  implements OnInit{

  constructor() { 
    console.log('constructor directive');
  }
  ngOnInit(): void {
    console.log('NgOnInit en la directiva')
  }

}
