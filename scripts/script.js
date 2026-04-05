const products = [
  { id: 1, name: "Solar Panel X" },
  { id: 2, name: "Inverter Pro" },
  { id: 3, name: "Battery Max" },
  { id: 4, name: "Eco Generator" }
];

const select = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name;
  option.textContent = product.name;
  select.appendChild(option);
});