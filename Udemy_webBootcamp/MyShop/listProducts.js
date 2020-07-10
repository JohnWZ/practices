console.log("================================");
console.log("Welcome to my shop!");
console.log("================================");

var faker = require('faker');
var randomProduct = faker.commerce.productName();
var randomPrice = faker.commerce.price();

// 这样写只会输出10个同样的商品和价格，因为faker.commerce.productName()只执行了一次并将结果存储到了randomProduct值中，而不是把函数保存到了值中
// for (var i=0;i<10;i++) {
//     console.log(randomProduct() + ' - $' + randomPrice());
// }

// 每次都执行随机函数才能生成不同的值
// for (var i=0;i<10;i++) {
//     console.log(faker.commerce.productName() + ' - $' + faker.commerce.price();
// }

// 这样写是可以的，因为把函数本身保存到了randomProduct值中
var randomProduct = faker.commerce.productName;
var randomPrice = faker.commerce.price;
for (var i=0;i<10;i++) {
    console.log(randomProduct() + ' - $' + randomPrice());
}
