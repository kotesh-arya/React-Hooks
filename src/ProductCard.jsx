import "./product.css";
import { OutOfStockCard } from "./OutOfStockCard";
// { id: 0, title: "AWM", price: 1500, rating: 3, outOfStock: true },
const ProductCard = ({ id, title, price, rating, outOfStock }) => {
  return (
    <>
      {outOfStock ? (
        <OutOfStockCard
          id={id}
          title={title}
          price={price}
          outOfStock={outOfStock}
        />
      ) : (
        <div class="card shopping_card card_shadow vertical">
          <div class="img-container">
            <img
              src="https://stayglam.com/wp-content/uploads/2014/07/Top-14-Girly-Alcoholic-Drinks-2.jpg"
              alt=""
            />
          </div>
          <div class="lower-card">
            <header>
              <h3>{title}</h3>
              <p class="header-description">By Bartendar Shashi</p>
            </header>
            <p class="card-description">
              <span class="product_price">₹{price} </span>
              <strike>₹1000</strike>
              <span class="card_discount">40% off</span>
              <span class="product_rating">{rating}⭐</span>
            </p>
            <div class="btn-container">
              <a href="#" class="btn btn-primary btn-solid">
                Add To Cart
              </a>
              <a href="#" class="btn btn-primary btn-outline">
                Add to WishList
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export { ProductCard };
