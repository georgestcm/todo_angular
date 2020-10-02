import { Injectable } from '@angular/core';
import  data from  'toDoList.json';
@Injectable({
  providedIn: 'root'
})
 export  class TodoService {

  constructor() { }

  deleteItem(item){
    let index = data.toDo.indexOf(item)
      data.toDo.splice(index,1)
  }

  updateItem(item,update){
    let index = data.toDo.indexOf(item)
    data.toDo.splice(index,1,update);
  }

  addItem(item){
   data.toDo.push(item)
  }
}
