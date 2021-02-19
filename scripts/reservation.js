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

const clickShowItem = (clickedItem, Items, event_type) => {
  clickedItem.addEventListener(event_type, () => {
    Items.forEach((element) => {
      let reservation_box = document.querySelector(".reservation-box");

      // delete all items in reservation_box
      reservation_box.innerHTML = "";
      let Div_Motor = document.createElement("div");
      Div_Motor.className = "motor";
      let create_img_div = document.createElement("div");
      create_img_div.className = "motor_img";
      let create_img = document.createElement("img");
      create_img.src = element.img_src;
      create_img_div.appendChild(create_img);
      Div_Motor.appendChild(create_img_div);
      reservation_box.appendChild(Div_Motor);
      let create_motor_info_booking = document.createElement("div");
      create_motor_info_booking.className = "motor_info_booking";
      let create_ul = document.createElement("ul");
      create_ul.className = "motor_infos";
      let create_li_motor = document.createElement("li");
      create_li_motor.className = "motor_name";
      let create_li_price = document.createElement("li");
      create_li_price.className = "motor_rent__price";
      let li_motor_company = document.createElement("li");
      li_motor_company.className = "motor_company";
      let li_motor_power = document.createElement("li");
      li_motor_power.className = "motor_power";
      let li_motor_type = document.createElement("li");
      li_motor_type.className = "motor_type";
      let icon_price = document.createElement("svg");
      let price_use = document.createElement("use");
      price_use.setAttribute("xlink:href", "../images/SVG/icons.svg#icon-map2");
      icon_price.className = "icon-gallery";
      let icon_com = document.createElement("svg");
      let com_use = document.createElement("use");
      com_use.setAttribute("xlink:href", "../images/SVG/icons.svg#icon-map2");
      icon_com.appendChild(com_use);
      icon_com.className = "icon-gallery";
      let icon_power = document.createElement("svg");
      icon_power.className = "icon-gallery";
      let icon_info = document.createElement("svg");
      icon_info.className = "icon-gallery";
      let create_use = document.createElement("use");
      let create_a_btn = document.createElement("a");
      create_a_btn.className = "btn btn--reserve btn--reserve-section";
      icon_price.appendChild(price_use);
      // let create_map = icon_gallery.appendChild(
      //   create_use.setAttribute(
      //     "xlink:href",
      //     "../images/SVG/icons.svg#icon-map2"
      //   )
      // );
      // let create_power = icon_gallery.appendChild(
      //   create_use.setAttribute(
      //     "xlink:href",
      //     "../images/SVG/icons.svg#icon-power"
      //   )
      // );
      // let create_info = icon_gallery.appendChild(
      //   create_use.setAttribute(
      //     "xlink:href",
      //     "../images/SVG/icons.svg#icon-info"
      //   )
      // );
      // let create_arrow = icon_gallery.appendChild(
      //   create_use.setAttribute(
      //     "xlink:href",
      //     "../images/SVG/icons.svg#icon-arrow-right2"
      //   )
      // );

      // fill empty elements :
      li_name.innerHTML = element.name;
      li_motor_price.appendChild(create_card);
      li_motor_price.appendChild(document.createTextNode(element.price));
      li_motor_power.appendChild(create_power);
      li_motor_power.appendChild(document.createTextNode(element.power));
      li_motor_type.appendChild(create_info);
      li_motor_type.appendChild(document.createTextNode(element.type));
      li_motor_company.appendChild(create_map);
      li_motor_company.appendChild(document.createTextNode(element.company));
      create_btn_anchor.appendChild(document.createTextNode("Reserve Now"));
      create_btn_anchor.appendChild(create_arrow);
      parent_div.appendChild(Create_img_div);
      parent_div.appendChild(motor_info_booking);
      reservation_box.appendChild(parent_div);
    });
  });
};
clickShowItem(
  document.querySelector(
    "body > section.section-reservation > ul > li.type.motorcycle"
  ),
  all,
  "click"
);

console.log(total_bill(10, all[7]));
console.log(all[7]);
const random_all = all.sort(() => Math.random() - 0.1);
