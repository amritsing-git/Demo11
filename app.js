const app = document.getElementById("app");


// =====================================================
// IMAGE SETUP
// =====================================================
//
// IMPORTANT:
// IMAGE_2 = second uploaded photo / logo
// IMAGE_1 = first uploaded Instagram screenshot
//
// Agar tum Base64 images paste karoge to yahin se
// poori website images control hongi.
//

const IMAGES = {

  logo: "IMAGE_2",

  products: [
    "IMAGE_1",
    "IMAGE_1",
    "IMAGE_1",
    "IMAGE_1",
    "IMAGE_1",
    "IMAGE_1"
  ]

};


// =====================================================
// PRODUCTS
// =====================================================

const products = [

  {
    name: "Sunshine Bouquet",
    price: "₹699",
    tag: "BEST SELLER",
    image: IMAGES.products[0],
    description:
      "A cheerful handmade flower bouquet for someone special."
  },

  {
    name: "Classic Handmade Bouquet",
    price: "₹799",
    tag: "POPULAR",
    image: IMAGES.products[1],
    description:
      "Beautifully wrapped flowers made specially for your occasion."
  },

  {
    name: "Festive Flower Diyas",
    price: "₹499",
    tag: "FESTIVE",
    image: IMAGES.products[2],
    description:
      "Cute handmade floral décor for festive celebrations."
  },

  {
    name: "Personalised Flower Gift",
    price: "₹599",
    tag: "CUSTOM",
    image: IMAGES.products[3],
    description:
      "Add your own colours, message and little personal touches."
  },

  {
    name: "Mini Flower Bouquet",
    price: "₹549",
    tag: "NEW",
    image: IMAGES.products[4],
    description:
      "A sweet little bouquet for birthdays, surprises and smiles."
  },

  {
    name: "Special Occasion Bouquet",
    price: "₹899",
    tag: "PREMIUM",
    image: IMAGES.products[5],
    description:
      "A premium handmade arrangement created for memorable moments."
  }

];


// =====================================================
// PRODUCT CARD
// =====================================================

function productCard(product){

  return `

    <article class="product">

      <img
        class="product-image"
        src="${product.image}"
        alt="${product.name}"
      >

      <div class="product-info">

        <span class="tag">
          ${product.tag}
        </span>

        <h3>
          ${product.name}
        </h3>

        <p>
          ${product.description}
        </p>

        <div class="price">
          ${product.price}
        </div>

      </div>

    </article>

  `;
}


// =====================================================
// HOME PAGE
// =====================================================

function homePage(){

  return `

    <section class="hero">

      <div>

        <span class="kicker">
          ♡ Handmade with love
        </span>

        <h1>
          Little gifts.<br>
          <span>Big feelings.</span>
        </h1>

        <p>
          Handmade bouquets and thoughtful gifts
          for birthdays, celebrations, surprises
          and all the little moments worth remembering.
        </p>

        <div class="buttons">

          <a
            href="#shop"
            class="btn btn-dark"
          >
            Explore Collection →
          </a>

          <a
            href="#order"
            class="btn btn-light"
          >
            How to Order
          </a>

        </div>

      </div>


      <div class="hero-image">

        <img
          src="${IMAGES.logo}"
          alt="Petals by Sneha"
        >

        <div class="image-card">

          <strong>
            Made by hand ♡
          </strong>

          Pre-order 6 days prior

        </div>

      </div>

    </section>


    <div class="features">

      <span>🌼 Handmade Flowers</span>

      <span>🎁 Personalised Gifts</span>

      <span>💌 Made to Order</span>

      <span>📍 Baloda Bazar, Chhattisgarh</span>

    </div>


    <section class="section">

      <div>

        <span class="kicker">
          Our favourites
        </span>

        <h2 class="section-title">
          Made to make<br>
          them smile.
        </h2>

        <p class="section-text">
          Beautiful handmade gifts inspired by
          the floral creations and bouquets from
          the profile.
        </p>

      </div>


      <div class="product-grid">

        ${products
          .slice(0,3)
          .map(productCard)
          .join("")}

      </div>

    </section>


    <section class="story">

      <div class="section story-grid">

        <div class="story-box">

          <span class="kicker">
            A little story
          </span>

          <h2>
            Not just a bouquet.
          </h2>

          <p>
            Every piece is handmade slowly,
            packed carefully and created to
            feel personal.

            Pick your design, choose your
            colours and make it yours.
          </p>

        </div>


        <div>

          <span class="kicker">
            For every occasion
          </span>

          <h2 class="section-title">
            Birthdays,
            surprises &
            celebrations.
          </h2>

          <p class="section-text">
            From a tiny flower gift to a full
            bouquet, choose something that
            feels like them.
          </p>

        </div>

      </div>

    </section>

  `;

}


// =====================================================
// SHOP PAGE
// =====================================================

function shopPage(){

  return `

    <section class="section">

      <span class="kicker">
        The collection
      </span>

      <h1 class="section-title">
        Shop handmade.
      </h1>

      <p class="section-text">
        Demo products and prices shown for
        presentation. Final price can change
        according to design, size and
        personalisation.
      </p>


      <div class="product-grid">

        ${products
          .map(productCard)
          .join("")}

      </div>

    </section>

  `;

}


// =====================================================
// ABOUT PAGE
// =====================================================

function aboutPage(){

  return `

    <section class="simple-page">

      <span class="kicker">
        About Petals by Sneha
      </span>

      <h1>
        Handmade,
        personal &
        full of little details.
      </h1>

      <p>
        Petals by Sneha creates handmade gifts
        for every occasion.

        Each bouquet is designed with care —
        from the flowers and colours to the
        final wrapping.
      </p>

      <a
        href="#shop"
        class="btn btn-dark"
      >
        Explore Gifts →
      </a>

    </section>

  `;

}


// =====================================================
// ORDER PAGE
// =====================================================

function orderPage(){

  return `

    <section class="section">

      <span class="kicker">
        Simple ordering
      </span>

      <h1 class="section-title">
        How to order.
      </h1>

      <p class="section-text">
        Please pre-order at least 6 days before
        your required date so your handmade
        gift can be prepared beautifully.
      </p>


      <div class="steps">

        <div class="step">

          <div class="step-number">
            01
          </div>

          <h3>
            Choose
          </h3>

          <p>
            Pick a bouquet or gift from
            the collection.
          </p>

        </div>


        <div class="step">

          <div class="step-number">
            02
          </div>

          <h3>
            Customise
          </h3>

          <p>
            Tell us your preferred colours,
            message and design.
          </p>

        </div>


        <div class="step">

          <div class="step-number">
            03
          </div>

          <h3>
            Confirm
          </h3>

          <p>
            DM to confirm your order and
            delivery details.
          </p>

        </div>

      </div>


      <br>

      <a
        href="https://instagram.com/"
        target="_blank"
        class="btn btn-dark"
      >
        DM to Order ↗
      </a>

    </section>

  `;

}


// =====================================================
// REVIEWS PAGE
// =====================================================

function reviewsPage(){

  const reviews = [

    "The bouquet looked even prettier in real life. Such a cute handmade gift!",

    "Loved the colours and finishing. It felt really personal.",

    "Beautiful work and packed so nicely. Would definitely order again."

  ];


  return `

    <section class="section">

      <span class="kicker">
        Kind words ♡
      </span>

      <h1 class="section-title">
        Made with care.<br>
        Loved even more.
      </h1>

      <p class="section-text">
        Demo reviews section. Replace these
        with the customer's real reviews
        before publishing.
      </p>


      <div class="review-grid">

        ${reviews.map((review,index)=>`

          <div class="review">

            <div class="stars">
              ★★★★★
            </div>

            <p>
              "${review}"
            </p>

            <small>
              — Happy customer ${index + 1}
            </small>

          </div>

        `).join("")}

      </div>

    </section>

  `;

}


// =====================================================
// CONTACT SECTION
// =====================================================

function contactPage(){

  return `

    <section class="section">

      <div class="contact">

        <div>

          <span class="kicker">
            Let's make something cute
          </span>

          <h2>
            Have a gift in mind?
          </h2>

          <p>
            Send the occasion, preferred
            colours and your budget.
            We'll take it from there.
          </p>

        </div>


        <a
          href="https://instagram.com/"
          target="_blank"
          class="btn"
        >
          Message on Instagram ↗
        </a>

      </div>

    </section>

  `;

}


// =====================================================
// ROUTING
// =====================================================

function renderPage(){

  const page =
    location.hash
      .replace("#","")
      .split("?")[0]
      || "home";


  if(page === "shop"){
    app.innerHTML = shopPage();
  }

  else if(page === "about"){
    app.innerHTML = aboutPage();
  }

  else if(page === "order"){
    app.innerHTML = orderPage();
  }

  else if(page === "reviews"){
    app.innerHTML = reviewsPage();
  }

  else if(page === "contact"){
    app.innerHTML = contactPage();
  }

  else{
    app.innerHTML = homePage();
  }


  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}


// =====================================================
// MOBILE MENU
// =====================================================

function toggleMenu(){

  document
    .getElementById("nav")
    .classList.toggle("active");

}


// Close mobile menu after navigation

document.addEventListener("click",(e)=>{

  if(e.target.closest("nav a")){

    document
      .getElementById("nav")
      .classList.remove("active");

  }

});


window.addEventListener(
  "hashchange",
  renderPage
);


renderPage();