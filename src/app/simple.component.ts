import {Component,Input,OnChanges,SimpleChanges} from '@angular/core';

@Component({
  selector:'simple',
  templateUrl:'./simple.component.html'
})

export class SimpleComponent implements OnChanges{
 @Input() simpleText:string;

 ngOnChanges(changes:SimpleChanges){
   for(let property in changes ){
     let change=changes[property];
     let current =change.currentValue;
     let previous=change.previousValue;
     console.log(property+" current: "+current+" previous: ");
   }
 }
}