//create simple task constuctor

let Task = function(name){
  this.name = name;
  this.isCompleted = false;

  // this.complete = function(){
  //   console.log('completing task...' + this.name)
  //   this.complete = true;
  // }
  //
  // this.save = function(){
  //   console.log('saving Task: ' + this.name);
  // }
}
//all the copies of Task have ACCESS to this prototype function
//but do not make their own complete copy of the function
Task.prototype.complete = function(){
  console.log('completing task...' + this.name)
  this.complete = true;
}
Task.prototype.save = function(){
  console.log('saving task: ' + this.name)
}


module.exports = Task;
