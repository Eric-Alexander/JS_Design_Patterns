
let Repo = require('./taskRepo');

class Task {
  constructor(data){
    this.name = data.name;
    this.isCompleted = false;
  };
  complete() {
    console.log('completing task...' + this.name)
    this.complete = true;
  }
  save() {
    console.log('saving task::: ' + this.name);
    Repo.save(this);
  }

};

module.exports = Task;
