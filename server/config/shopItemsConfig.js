const connect = "postgres://postgres:1q2w3e4r@localhost/shop";
const pg = require('pg');

function getAll(req, res) {
  pg.connect(connect, function(err,client,done){
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM shopIt', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      res.status(200)
            .json({
              status: 'success',
              data: result.rows,
              message: 'Retrieved ALL items in shop'
            });
      done();
    });
  })
 
  }
  function getItem(req, res, next) {
  }
  function createItem(req, res, next) {
  }
  function updateItem(req, res, next) {
   
  }
  function removeItem(req, res, next) {
  }
  module.exports = {
    getAll: getAll,
    getItem: getItem,
    createItem: createItem,
    updateItem: updateItem,
    removeItem: removeItem
  };