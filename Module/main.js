let Task = require("./class");
let Repo = require("./taskDB");


let task1 = new Task(Repo.get(1));

let task2 = new Task({ name: 'read Sword of Shannara'})
let task3 = new Task({name: 'Sketch for an hour'})
let task4 = new Task({name: 'Eat food'})


task1.complete();
task2.save();
task3.save();
task4.save();
