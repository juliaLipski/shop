DROP DATABASE IF EXISTS shop;
CREATE DATABASE shop;

\c shop;

CREATE TABLE shopIt (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  img VARCHAR,
  price INTEGER
);

INSERT INTO shopIt (title, img, price)
  VALUES ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, culpa praesentium maiores deleniti eum architecto quae obcaecati, sed autem expedita', 'http://www.rcgoodwin.net/wp-content/uploads/sites/131/2014/12/BOOOK.png', 543 );