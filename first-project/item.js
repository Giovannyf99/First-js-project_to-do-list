export default class Item {
    constructor(taskDescription = '', dueDate = '', completionStatus = false) {
        this.taskDescription = taskDescription;
        this.dueDate = dueDate;
        this.completionStatus = completionStatus;
    }
    // // intakeDate(due) {
    // //     this.Item.push(List)
    // // }
    // completion() {
    //     if (this.completionStatus == true) {
    //         console.log("Complete")
    //     } else {
    //         (this.completionStatus == false)
    //         console.log("Incomplete")
    //     }
    // }

}

// export default Item