const all = [
  {
    name: "NINJA H2™ CARBON",
    company: "kawasaki",
    img_src: "../images/All/1.png",
    power: "essence",
    price: 100,
    type: "motorcycle",
  },
  {
    name: "Electric Mission R",
    company: "mission R",
    img_src: "../images/All/2.png",
    power: "Electric",
    price: 175,
    type: "motorcycle",
  },
  {
    name: "Toyota Yaris",
    company: "Toyota",
    img_src: "../images/All/3.png",
    power: "Hybrid",
    price: 50,
    type: "City Car",
  },
  //Volkswagen Beetle

  {
    name: "Volkswagen Beetle",
    company: "Volkswagen",
    img_src: "../images/All/16.png",
    power: "essence",
    price: 50,
    type: "City Car",
  },
  {
    name: "Smart ForTwo",
    company: "Smart",
    img_src: "../images/All/14.png",
    power: "Electric",
    price: 50,
    type: "City Car",
  },
  {
    name: "Mini cooper name",
    company: "Mini cooper",
    img_src: "../images/All/15.png",
    power: "Diesel",
    price: 120,
    type: "City Car",
  },
  {
    name: "cadillac Lyriq",
    company: "cadillac",
    img_src: "../images/All/4.png",
    power: "Electric",
    price: 250,
    type: "SUV",
  },
  {
    name: "Lamborghini URUS",
    company: "Lamborghini",
    img_src: "../images/All/5.png",
    power: "Diesel",
    price: 250,
    type: "SUV",
  },
  {
    name: "Volkswagen Golf GTE",
    company: "Volkswagen",
    img_src: "../images/All/6.png",
    power: "Hybrid",
    price: 125,
    type: "compact",
  },
  {
    name: "BMW 1 Series M",
    company: "BMW",
    img_src: "../images/All/7.png",
    power: "Diesel",
    price: 105,
    type: "compact",
  },
  {
    name: "Peugeot 308 2019",
    company: "Peugeot",
    img_src: "../images/All/8.png",
    power: "essence",
    price: 105,
    type: "compact",
  },
  //Mercedes S-Class
  {
    name: "Mercedes S-Class",
    company: "Mercedes",
    img_src: "../images/All/9.png",
    power: "Diesel",
    price: 275,
    type: "sedan",
  },
  {
    name: "Dacia Logan 2021",
    company: "Dacia",
    img_src: "../images/All/10.png",
    power: "essence",
    price: 110,
    type: "sedan",
  },
  {
    name: "BMW i8 coupé 2020‏",
    company: "BMW",
    img_src: "../images/All/11.png",
    power: "Hybrid",
    price: 110,
    type: "sedan",
  },
  {
    name: "volvo Toupie X",
    company: "volvo",
    img_src: "../images/All/12.png",
    power: "Diesel",
    price: 165,
    type: "construction machine",
  },
  {
    name: "BTP conductor Y",
    company: "BTP",
    img_src: "../images/All/13.png",
    power: "essence",
    price: 165,
    type: "construction machine",
  },
  {
    name: "volvo VNL Truck",
    company: "volvo",
    img_src: "../images/All/14.png",
    power: "Diesel",
    price: 165,
    type: "truck",
  },
];
const sedan = [];
const constructMachine = [];
const motorcycle = [];
const city_car = [];
const SUV = [];
const truck = [];
const compact = [];
all.forEach((element) => {
  if (element.type === "sedan") {
    sedan.push(element);
  } else if (element.type === "compact") {
    compact.push(element);
  } else if (element.type === "construction machine") {
    constructMachine.push(element);
  } else if (element.type === "motorcycle") {
    motorcycle.push(element);
  } else if (element.type === "City Car") {
    city_car.push(element);
  } else if (element.type === "SUV") {
    SUV.push(element);
  } else if (element.type == "truck") {
    truck.push(element);
  }
});
const automatic_gear = [sedan, truck];

all.forEach((element) => {
  if (element.power === "Diesel") {
    element.taxPower = 0.21;
  } else if (element.power === "Electric") {
    element.taxPower = 0.05;
  } else if (element.power === "Hybrid") {
    element.taxPower = 0.09;
  } else if (element.power === "essence") {
    element.taxPower = 0.14;
  }
});
automatic_gear.forEach((element) => {
  element.forEach((elm) => {
    elm.taxGear = 0.19;
  });
});
const total_bill = (days, Element) => {
  Element.total__bill = Element.taxGear
    ? Element.price * ((Element.taxGear + Element.taxPower) * days)
    : Element.price * (Element.taxPower * days);
  return Element.total__bill;
};
