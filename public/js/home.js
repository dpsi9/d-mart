let cr = document.getElementById("images");
cr.innerHTML = carasoul();

function carasoul() {
  return `
        <img class="one" src="./images/img1.jpg" alt="" />
      <img class="two" src="./images/img2.jpg" />
      <img class="three" src="./images/img3.jpg" />
      <img class="four" src="./images/img4.jpg" />
      `;
}

let tb = document.getElementById("topbar");
tb.innerHTML = topbar();
function topbar() {
  return `
         <a href="/categories" id=""><i class="fas fa-bars"></i>All categories</a>
      <div><a href="/categories/grocery">Groceery</a></div>
      <div><a href="/categories/fruits&veg">Fruits & Vegetables</a></div>
      <div><a href="">Cookware & Serveware</a></div>
      <div><a href="">Kitchen Appliances</a></div>
    `;
}

let mE_Img = [
  {
    img: "https://img.dmart.in/images/rwd/banners/vwctb/13cw/15jan22-3cw-oil.jpg",
  },
  {
    img: "https://img.dmart.in/images/rwd/banners/vwctb/13cw/15jan22-3cw-ghee.jpg",
  },
  {
    img: "https://img.dmart.in/images/rwd/banners/vwctb/13cw/15jan22-3cw-spices1.jpg",
  },
  {
    img: "https://img.dmart.in/images/rwd/banners/vwctb/13cw/15jan22-3cw-rice.jpg",
  },
  {
    img: "https://img.dmart.in/images/rwd/banners/vwctb/13cw/15jan22-3cw-atta.jpg",
  },
  {
    img: "https://img.dmart.in/images/rwd/banners/vwctb/13cw/15jan22-3cw-dryfruits.jpg",
  },
  {
    img: "https://img.dmart.in/images/rwd/banners/vwctb/12cw/1jan22-2cw-fv.jpg",
  },
];
let monthly_ess = document.getElementById("mE");
mE_Img.forEach(({ img }) => {
  monthly_ess.innerHTML += flex_img(img);
});

// snaks
let snaks_img = [
  {
    img: "images/sn1.PNG",
  },
  {
    img: "images/sn2.PNG",
  },
  {
    img: "images/sn3.PNG",
  },
  {
    img: "images/sn4.PNG",
  },
  {
    img: "images/sn5.PNG",
  },
  {
    img: "images/sn6.PNG",
  },
];
let snaks = document.getElementById("snaks");
snaks_img.forEach(({ img }) => {
  snaks.innerHTML += flex_img(img);
});

let inFocus = document.getElementById("inFocus");
inFocus.innerHTML = flex_Head(
  "In Focus",
  "https://img.dmart.in/images/rwd/banners/curated/28dec21-curated-beautystore.jpg"
);

let random = document.getElementById("random");
random.innerHTML = flex_img(
  "https://img.dmart.in/images/rwd/banners/curated/18dec21-curated-finestfew.jpg"
);

let random3 = document.getElementById("random3");
random3.innerHTML = flex_img("images/cloths.png");

let random4 = document.getElementById("random4");
random4.innerHTML = flex_img(
  "https://img.dmart.in/images/rwd/banners/curated/15jan22-curated-electronics.jpg"
);

let sp_offers = document.getElementById("offers");

let o1 = flex_Head(
  "special offers",
  "https://img.dmart.in/images/rwd/banners/curated/15jan22-curated-dotm-mum.jpg"
);

let o2 = flex_img(
  "https://img.dmart.in/images/rwd/banners/curated/15jan22-midcurated-bigpack.jpg"
);
sp_offers.innerHTML = o1;
sp_offers.innerHTML += o2;

let home = document.getElementById("home");
home.innerHTML = flex_Head(
  "Transform Your Home",
  "https://img.dmart.in/images/rwd/banners/curated/4nov21-curated-homedecor.jpg"
);

let pets = document.getElementById("pets");
pets.innerHTML = flex_img("images/pets.png");

let floor = document.getElementById("floor");
floor.innerHTML = flex_img("images/floor.png");

let prods = [
  {
    imgUrl:
      "https://img.dmart.in/images/rwd/products/N/O/V/NOV110000403xx20NOV21_5_P.jpg",
    name: "Premia Jeera : 200 gms",
    strikedOffPrice: 68,
    price: 52,
  },
  {
    imgUrl:
      "https://img.dmart.in/images/rwd/products/N/O/V/NOV110000380xx24NOV21_5_P.jpg",
    name: "Premia Sugar : 5 kgs",
    price: 222,
    strikedOffPrice: 266,
  },
  {
    imgUrl:
      "https://img.dmart.in/images/rwd/products/N/O/V/NOV110000300xx20NOV21_5_P.jpg",
    name: "Premia Groundnut : 500 gms",
    price: 90,
    strikedOffPrice: 113,
  },
  {
    imgUrl:
      "https://img.dmart.in/images/rwd/products/N/O/V/NOV110000427xx20NOV21_5_P.jpg",
    name: "Premia Poha Jada : 1 kg",
    price: 50,
    strikedOffPrice: 55,
  },
  {
    imgUrl:
      "https://img.dmart.in/images/rwd/products/N/O/V/NOV110000401xx20NOV21_5_P.jpg",
    name: "Premia American Badam (Almonds) : 500 gms",
    price: 336,
    strikedOffPrice: 436,
  },
];

let prod_cards = document.getElementById("prod_cards");

prods.forEach((elem, index) => {
  let { imgUrl, name, price, strikedOffPrice } = elem;
  prod_cards.innerHTML += prod_card(imgUrl, name, price, strikedOffPrice, elem);
});

function flex_Head(head, src) {
  return `
   <p>${head}</p>
      <img
        src=${src}
        alt=""
      />
  `;
}

function flex_img(img) {
  return `
   <img
        src=${img}
        alt=""
      />
  `;
}

function prod_card(img, nams, mrp, sp, sv, elem) {
  return `
   <div>
      <img src=${img} alt="" />
      <p>${nams}</p>
      <div id="p_div">
        <p>MRP ${mrp}</p>
        <p>DMart ${sp}</p>
        <p>Save 10%</p>
      </div>
      <input type="text" value="475gm" />
      <button id="addCart">ADD TO CART</button>
    </div>
  `;
}
