let Task = require("./class");


let task1 = new Task('meditate for 20 minutes')
let task2 = new Task('read Sword of Shannara')
let task3 = new Task('Sketch for an hour')
let task4 = new Task('Eat food')


task1.save();
task2.save();
task3.save();
task4.complete();
