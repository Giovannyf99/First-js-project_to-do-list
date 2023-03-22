export default class Item {
    constructor(taskDescription = '', dueDate = '', completionStatus = false) {
        this.taskDescription = taskDescription;
        this.dueDate = dueDate;
        this.completionStatus = completionStatus;
    }
      addNewPerson(person) {
        let task1 = prompt("enter the description of your task");
        let date1 = prompt("enter your due date");
        let cs = prompt("completion status: false or true");
      
        return person = new Item(task1, date1, cs);
        
      }
}

// export default Item