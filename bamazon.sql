DROP DATABASE IF EXISTS bamazon_db

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
      item_id INT NOT NULL AUTO_INCREMENT
    , product_name VARCHAR (50) NULL
    , department_name VARCHAR (50) NULL
    , price DECIMAL (7, 2) NULL
    , stock_quantity
    PRIMARY KEY (item_id)
);

-- Insert rows into table 'products'
INSERT INTO products

VALUES
( "socks", "Men's Apparel", 6.50, 50
),
( "underwear", "Men's Apparel", 8.35, 50
),
("apples", "Produce", 0.65, 150
),
("carrots", "Produce", 1.29, 150
),
("HDTV", "Electronics", 650.00, 10 
),
("PS4", "Electronics", 300, 35
),
("toothpaste", "Personal Hygiene", 3.20, 75
),
("body wash", "Personal Hygiene", 5.00, 70
),
(
),
(
),