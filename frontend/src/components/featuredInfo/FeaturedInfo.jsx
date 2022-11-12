import "./featuredInfo.css";
import Header from "../Header";
export default function FeaturedInfo() {
  function handleClickEmployee() {
    window.location = "/orders";
  }

  return (
    <div>
      <Header />
      <div className="featured">
        <div className="featuredItem">
          <div className="featuredMoneyContainer">
            <img src="/download.png" alt="employee" width={200} />
          </div>
          <a href="/orders">
            <span className="featuredTitle">Orders</span>
          </a>
        </div>
        <div className="featuredItem">
          <div className="featuredMoneyContainer">
            <img src="/addorder.png" alt="employee" width={200} />
          </div>
          <a href="/addorder">
            <span className="featuredTitle">Add Order</span>
          </a>
        </div>
      </div>
      <div
        className="featured"
        style={{ marginTop: "50px", marginBottom: "30px" }}
      >
        <div className="featuredItem">
          <div className="featuredMoneyContainer">
            <img src="/supplier.png" alt="employee" width={200} />
          </div>
          <a href="/addsupplier">
            <span className="featuredTitle">Add Supplier</span>
          </a>
        </div>
        <div className="featuredItem">
          <div className="featuredMoneyContainer">
            <img src="/product.png" alt="employee" width={200} />
          </div>
          <a href="/addproduct">
            <span className="featuredTitle">Add Product</span>
          </a>
        </div>
      </div>
    </div>
  );
}
