const faker = require("faker");
faker.locale = "ru";
const _ = require("lodash");

module.exports = function() {
  const headers = {
    id: "Идентификатор",
    name: "Название",
    price: "Стоимость",
    quantity: "Количество"
  };
  const data = _.times(350, function(n) {
    return [
      n + 1,
      faker.commerce.productName(),
      faker.commerce.price(),
      faker.random.number(100)
    ];
  });

  return {
    api: [headers, ...data]
  };
};
