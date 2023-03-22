export default class Item {
    constructor(taskDescription = '', dueDate = '', completionStatus = false) {
        this.taskDescription = taskDescription;
        this.dueDate = dueDate;
        this.completionStatus = completionStatus;
    }
}