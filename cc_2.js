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
console.log("Updated Scores:", scores)
let totalScores=scores.reduce((sum,scores)=>sum+scores,0);//calculating total to divide for average
let averageScore=(totalScores/5);//calculating aaverage score
console.log("Average Score:", averageScore)
let employee={
    name:"Employee of the Month",
    age:25,
    department:"marketing",
    isActive: true
}
console.log("Employee Info:", employee)
employee.department+="consulting";//changing department of employee
console.log("Updated Employee Info:", employee)
employee.property="Tampa Campus"
console.log("Final Updated Employee Info:",employee)

