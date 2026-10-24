function Products() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 3999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 2999,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    },
    {
      id: 4,
      name: "Backpack",
      price: 1499,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    },
    {
      id: 5,
      name: "Camera",
      price: 25999,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    },
    {
      id: 6,
      name: "Sunglasses",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    },
    {
      id: 7,
      name: "Laptop",
      price: 54999,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    },
    {
      id: 8,
      name: "Coffee Mug",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400",
    },
  ];
  let card_html = "";
  for (prod of products) {
    card_html += "<div class='card' style='width: 12rem; height:320px; float:left; margin:10px;'>";
    card_html += "<img src='"+prod.image+"' height='120px' class='card-img-top'>";
    card_html += "<div class='card-body'>";
    card_html += "<div class='fs-4 fw-bold' style='height:60px;margin-bottom:10px;'>"+prod.name+"</div>";
    card_html +=
      "<p class='card-text' style='height:30px;'>&#8377;"+prod.price+"</p>";
    card_html += "<a href='#' class='btn btn-primary'>Add To cart</a>";
    card_html += "</div>";
    card_html += "</div>";
  }//loop ends
  document.getElementById("card_container").innerHTML += card_html
}
