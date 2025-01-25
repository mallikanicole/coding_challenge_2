let products=["bowl","plate","fork","spoon","knife"];//original product list
console.log("Products:", products)
products.unshift("mug");//adding new product
console.log("New Product List:",products)
let removed=products.pop();//removing knife from product list
console.log("Product being removed:", removed)
console.log("Updated Product List:", products)
let scores=[85,98,67,77,52];//original test scores
console.log("Student Scores:", scores)
scores.splice(1,1,79);//changing 98 to 79
console.log("New Scores:", scores)