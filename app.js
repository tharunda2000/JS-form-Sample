customerList = [
  {
    name: "",
  },
  
];

function loadList() {
  let ol = document.getElementById("ol");

  let body = "";

  customerList.forEach((customer) => {
    body += `<li>${customer.name}</li>`;
  });

  ol.innerHTML = body;
}

loadList();

function addCustomer() {

  let name = document.getElementById("customerName");
  customerN = name.value;

  let age = document.getElementById("customerAge");
  customerAge = age.value;

  if(customerAge < 18){

    alert("You must be 18 years old to enter this site");

  }

  else{
  customerList.push({ name: customerN });
  loadList();

  console.log(customerN);
  }

}
