const connect = "postgres://postgres:1q2w3e4r@localhost/shop";
const pg = require('pg');


function getAll(req, res, next) {
  pg.connect(connect, function(err,client,done){
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM cart', function(err, result) {
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
  pg.connect(connect, function (err, client, done) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM cart WHERE id = $1', [req.params.id] ,function (err, result) {
      if (err) {
        return console.error('error running', err);
      }
      res.status(200)
        .json({
          status: 'success',
          data: result.rows,
          message: 'sucsses!!!!!!!!!'
        });
      done();
    });
  });
}
function createItem(req, res, next) {
  pg.connect(connect, function (err, client, done) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
    [req.body.id, req.body.title, req.body.img, req.body.price, req.body.quan]
    client.query('SELECT id, quan FROM cart WHERE id=$1', [req.body.id],
    function (err, qry) {
      if (qry.rowCount === 0) {
        client.query('INSERT INTO cart (id,title, img, price, quan) VALUES($1, $2, $3, $4, $5)',
        [req.body.id, req.body.title, req.body.img, req.body.price, req.body.quan],function (err, result) {
          if (err) {
            return console.error('error running', err);
          }
          res.status(200)
          .json({
            status: 'success',
            data: result.rows,
            message: 'Retrieved ALL items in shop'
          });
          done();
        });
      } else {
        const oldQ = qry.rows[0].quan;
        const newQ = oldQ + req.body.quan;
        // console.log(newQ)
        client.query('UPDATE cart SET quan = $2 WHERE id=$1', [req.body.id,newQ],
          function (err,result) {
            if (err) {
              return console.error('error running query', err);
            }
            res.status(200)
              .json({
                status: 'success',
                data: result.rows,
                message: 'sucsess'
              });
            done();
          });
      }
    });
  });
}
function updateItem(req, res, next) {
  const id = req.params.id;
}

function removeItem(req, res, next) {
  pg.connect(connect, function (err, client, done) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
    client.query("DELETE FROM cart WHERE id = $1",
      [req.params.id]);
    res.status(200)
      .json({
        status: 'success',
        message: 'Retrieved item in cart'
      });
    done();
  });
}

module.exports = {
  getAll: getAll,
  getItem: getItem,
  createItem: createItem,
  updateItem: updateItem,
  removeItem: removeItem
};
