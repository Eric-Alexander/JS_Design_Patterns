let repo = function() {

  //this simulates the database
  let db = {};

  return {
    get: (id) => {
      console.log('getting task ' + id);
      return {
        name: 'Pulling a new task out of the DataBase'
      }
    },
    save: (task) => {
      console.log("Saving " + task.name + ' to the DB');
    }

  }
}

module.exports = repo();
