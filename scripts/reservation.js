// import important functions into contact us:
import { smoothScroll } from "./functions.js";
import { all } from "./data.js";

let from = document.querySelector(
  "body > header > div.header-content > div > a.btn.btn--reserve.btn--reserve-header"
);
let to = document.querySelector("body > section.section-reservation");
from.addEventListener("click", function () {
  smoothScroll(to, 1000);
});

// for get elements by random order :
const sedan = [];
const constructMachine = [];
const motorcycle = [];
const city_car = [];
const SUV = [];
const truck = [];
const compact = [];

// filtering by type car :
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

// calculation tax by power:
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

//for add taxes automatic gear :
automatic_gear.forEach((element) => {
  element.forEach((elm) => {
    elm.taxGear = 0.19;
  });
});

// function for calculation total bill :
const total_bill = (days, Element) => {
  Element.total__bill = Element.taxGear
    ? days *
      (Element.price + Element.price * (Element.taxGear + Element.taxPower))
    : days * (Element.price + Element.price * Element.taxPower);
  return Element.total__bill;
};

// function for fill categories :
const clickShowItem = (clickedItem, Items, event_type) => {
  clickedItem.addEventListener(event_type, () => {
    // delete all items in reservation_box
    let reservation_box = document.querySelector(".reservation-box");
    reservation_box.innerHTML = "";
    Items.forEach((element) => {
      //create node motor div :
      let Div_Motor = document.createElement("div");
      Div_Motor.className = "motor";

      // fill div_img node :
      let create_img_div = document.createElement("div");
      create_img_div.className = "motor_img";
      let create_img = document.createElement("img");
      create_img.src = element.img_src;
      create_img_div.appendChild(create_img);

      // create book_info_booking node :
      let motor_info_booking = document.createElement("div");
      motor_info_booking.className = "motor_info_booking";

      // fill name node :
      let li_motor_name = document.createElement("li");
      li_motor_name.className = "motor_name";
      li_motor_name.appendChild(document.createTextNode(element.name));

      // fill price node :
      let li_motor_price = document.createElement("li");
      li_motor_price.className = "motor_rent__price";
      let icon_price = document.createElement("svg");
      icon_price.className = "icon-gallery";
      let price_use = document.createElement("use");
      price_use.setAttribute(
        "xlink:href",
        "../images/SVG/icons.svg#icon-credit-card"
      );
      icon_price.appendChild(price_use);
      li_motor_price.appendChild(icon_price);
      li_motor_price.appendChild(document.createTextNode(element.price));

      // fill company name node :
      let li_motor_company = document.createElement("li");
      li_motor_company.className = "motor_company";
      let icon_com = document.createElement("svg");
      icon_com.className = "icon-gallery";
      let com_use = document.createElement("use");
      com_use.setAttribute("xlink:href", "../images/SVG/icons.svg#icon-map2");
      icon_com.appendChild(com_use);
      li_motor_company.appendChild(icon_com);
      li_motor_company.appendChild(document.createTextNode(element.company));

      // fill power node :
      let li_motor_power = document.createElement("li");
      li_motor_power.className = "motor_power";
      let icon_power = document.createElement("svg");
      icon_power.className = "icon-gallery";
      let power_use = document.createElement("use");
      power_use.setAttribute("xlink:href", "../images/SVG/icons.svg#icon-map2");
      icon_power.appendChild(power_use);
      li_motor_power.appendChild(icon_power);
      li_motor_power.appendChild(document.createTextNode(element.power));

      // fill type node :
      let li_motor_type = document.createElement("li");
      li_motor_type.className = "motor_type";
      let icon_info = document.createElement("svg");
      icon_info.className = "icon-gallery";
      let info_use = document.createElement("use");
      info_use.setAttribute("xlink:href", "../images/SVG/icons.svg#icon-info");
      icon_info.appendChild(info_use);
      li_motor_type.appendChild(icon_info);
      li_motor_type.appendChild(document.createTextNode(element.type));

      // fill btn reservation :
      let btn_reservation = document.createElement("a");
      btn_reservation.className = "btn btn--reserve btn--reserve-section";
      let icon_btn = document.createElement("svg");
      icon_btn.className = "icon--reserve";
      let use_btn = document.createElement("use");
      use_btn.setAttribute(
        "xlink:href",
        "../images/SVG/icons.svg#icon-arrow-right2"
      );
      btn_reservation.appendChild(document.createTextNode("Reserve now"));
      icon_btn.appendChild(use_btn);
      btn_reservation.appendChild(icon_btn);

      // fill ul from li :
      let ul = document.createElement("ul");
      ul.className = "motor_infos";
      ul.appendChild(li_motor_name);
      ul.appendChild(li_motor_price);
      ul.appendChild(li_motor_company);
      ul.appendChild(li_motor_power);
      ul.appendChild(li_motor_type);

      //fill motor_info_booking :
      motor_info_booking.appendChild(ul);
      motor_info_booking.appendChild(btn_reservation);
      Div_Motor.appendChild(create_img_div);
      Div_Motor.appendChild(motor_info_booking);
      reservation_box.appendChild(Div_Motor);
      console.log(Div_Motor);
    });
  });
};

console.log(all[7]);
console.log(total_bill(10, all[7]));
console.log(all[7]);

// random object in data file :
const random_all = all.sort(() => Math.random() - 0.1);

// events in reservation section :
clickShowItem(window, random_all, "load");
clickShowItem(document.querySelector(".motorcycle"), motorcycle, "click");
clickShowItem(document.querySelector(".cityCar"), city_car, "click");
clickShowItem(document.querySelector(".sedan"), sedan, "click");
clickShowItem(document.querySelector(".SUVcar"), SUV, "click");
clickShowItem(
  document.querySelector(".construction_machine"),
  constructMachine,
  "click"
);
clickShowItem(document.querySelector(".truck"), truck, "click");
