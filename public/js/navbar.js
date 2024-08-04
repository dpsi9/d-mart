let data = [
  {
    name: "GROCERY",
    img: "https://img.dmart.in/images/rwd/categories/aesc-grocerycore.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
  {
    name: "APPLIANCES",
    img: "https://img.dmart.in/images/rwd/categories/aesc-appliancescore.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
  {
    name: "BABY & KIDS",
    img: "https://img.dmart.in/images/rwd/categories/aesc-babyandkidscore.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
  {
    name: "HOME & KITCHEN",
    img: "https://img.dmart.in/images/rwd/categories/homkitchen15421.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
  {
    name: "PERSONAL CARE",
    img: "https://img.dmart.in/images/rwd/categories/aesc-personalcare211221.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
  {
    name: "DAIRY & BEVERAGES",
    img: "	https://img.dmart.in/images/rwd-mobile/categories/aesc-grocerycore.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
  {
    name: "PACKAGED FOOD",
    img: "https://img.dmart.in/images/rwd-mobile/categories/aesc-packagedfoodcore.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
  {
    name: "FOOTWEAR",
    img: "https://img.dmart.in/images/rwd-mobile/categories/aesc-footwearcore.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
  {
    name: "CLOTHING",
    img: "	https://img.dmart.in/images/rwd-mobile/categories/935201.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
  {
    name: "SCHOOL SUPPLIES",
    img: "https://img.dmart.in/images/rwd-mobile/categories/aesc-schoolsuppliescore.svg",
    subcat: "Dals,Pulses,Dry Fruits,Cooking oil etc...",
  },
];

let menu = document.getElementById("openmenu");

menu.addEventListener("click", () => {
  document.getElementById("mySidepanel").style.width = "100%";

  let cate = document.getElementById("categories");
  cate.innerHTML = "";
  data.forEach(({ img, name, subcat }) => {
    let image = document.createElement("img");
    image.src = img;
    image.setAttribute("class", "catImg");

    let nm = document.createElement("p");
    nm.innerText = name;

    let li = document.createElement("li");
    li.addEventListener("click", () => {
      name = name.toLowerCase();
      console.log(name);
      if (name == "grocery" || name == "baby & kids") {
        location.href = "grocery.html";
      } else if (name == "appliances" || name == "footwear") {
        location.href = "cook&serve.html";
      } else if (
        name == "packaged food" ||
        name == "dairy & beverages" ||
        name == "personal care"
      ) {
        location.href = "cook&serve.html";
      }
    });
    li.append(image, nm);

    cate.append(li);
  });
});

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
