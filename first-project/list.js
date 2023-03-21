export default class List {
    constructor(name = '', tasksRemaining = [], completedTasks = []) {
    this.name = name
    this.tasksRemaining = tasksRemaining
    this.completedTasks = completedTasks
    }
    addItem(item) {
        this.tasksRemaining.push(item)
        // console.log(this.tasksRemaining)
    }

    completeTask(task) {
        task.completionStatus = true;
        this.completedTasks.push(task)
        this.tasksRemaining.splice(this.tasksRemaining.indexOf(task), 1)
    }
}





// export default List