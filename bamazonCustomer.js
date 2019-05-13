const mysql = require("mysql");
const inquirer = require("inquirer");


const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Bearcats1!",
  database: "bamazon_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  readProducts();
});

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++){
      console.log("Item ID " + res[i].item_id);
      console.log("Item Name " + res[i].product_name);
      console.log("Price " + res[i].price +"\n");      
    }
    userOrder();
  });
}

function userOrder() {

  //need to place count to limit results
  inquirer.prompt([
    {
      name: "itemSelect",
      message: "Please select the ID of the item you wish to purchse."
    },
    {
      name: "quantity",
      message: "Please select the number of items you would like."
    }
  ]).then(function (answer) {
    let query = "SELECT * FROM products WHERE ?";
    connection.query(query, { item_id: answer.itemSelect }, function (err, res) {
      let quantity = res[0].stock_quantity

      if (answer.quantity > quantity) {
        console.log("Insufficient quantity!")
      }
      else (
        function updateProduct(){
          let query = connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                quantity: quantity - answer.quantity        
              },
              {
                item_id: answer.itemSelect
              }
            ]
          )
          updateProduct();
        });
        // readProducts();
        connection.end();
    })
    })
};