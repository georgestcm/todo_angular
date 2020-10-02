import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service'
import  data from  'toDoList.json';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.scss']
})
export class ListToDoComponent implements OnInit {

  constructor(public crud: TodoService) { }

  ngOnInit() {
    console.log(data.toDo)
  }
  newItem='';
  error;
dataInformation = data.toDo;
updatedItem='';
currentItem='';
 deleteItem(value){
   this.crud.deleteItem(value)
   console.log(data)
 }

 addItem(){
   if(this.newItem.length===0){
     this.error = "Please enter a to do item."
   } else {
     this.crud.addItem(this.newItem)
     this.error = ' '
     this.newItem = ''
   }
 }

 selectUpgrade(item){
   this.currentItem = item;
   this.error='';
 }

 updateItem(){
   if(this.currentItem.length ===0){
     this.error = " Select an item to update"
   } else if(this.updatedItem.length ===0){
     this.error = "Please type a new value"
   } else {
     this.crud.updateItem(this.currentItem,this.updatedItem);
     console.log(data)
     this.error='';
     this.currentItem='';
     this.updatedItem='';
   }

 }

}
