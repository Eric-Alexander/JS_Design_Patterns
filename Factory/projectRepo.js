let repo = function() {

  //this simulates the database
  let db = {};

  return {
    get: (id) => {
      console.log('getting project ' + id);
      return {
        name: 'Pulling out project of the DataBase'
      }
    }

  }
}

module.exports = repo();
