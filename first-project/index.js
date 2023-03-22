import Item from './item.js'
import List from './list.js'
import prompt from '@cloud-technology/cli-prompt'

let dishes = new Item('do the dishes by scrubbing them with a smile scrub thing with dawn soap and hot water', '02/22/2023', false)
let cook = new Item('cook dinner', '02/22/2023', false)
let vaccum = new Item('vaccum the living room and bed room', '02/22/2023', false)
let trash = new Item('take the trash out', '02/21/2023', true)


let toDo = new List ('chores')
let wow = new List ('other chores')

toDo.addItem(dishes)
toDo.addItem(cook)
toDo.addItem(vaccum)
wow.addItem(trash)
wow.completeTask(trash)

let inputItem = new Item(await prompt('Describe the task: '), await prompt('enter your due date: '))
toDo.addItem(inputItem) 
    if(List.completeTask == false) {
    } else { wow.addItem(inputItem)
    }

// console.log(inputItem)

console.log(toDo)
console.log(wow)
