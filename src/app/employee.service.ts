import {Injectable} from '@angular/core';
import {Employee} from './employee';

@Injectable()
export class EmployeeService{
     getEmployee():Employee[]{
       return [{code:'emp123',name:'sanjay',gender:'male'},
        {code:'emp124',name:'gowri pombala',gender:'female'},
        {code:'emp125',name:'gowri',gender:'male'}
       ];
     }
}