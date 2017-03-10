
//create simple task constuctor

class Task {
  constructor(name){
    this.name = name;
    this.isCompleted = false;
  };
  complete() {
    console.log('completing task...' + this.name)
    this.complete = true;
  }
  save() {
    console.log('saving task: ' + this.name);
  }

};

module.exports = Task;
