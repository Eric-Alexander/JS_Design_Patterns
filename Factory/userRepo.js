let repo = function() {

  //this simulates the database
  let db = {};

  return {
    get: (id) => {
      console.log('getting user ' + id);
      return {
        name: 'Pulling out user out of the DataBase'
      }
    }

  }
}

module.exports = repo();
