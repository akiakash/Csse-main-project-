import "./featuredInfo.css";

export default function FeaturedInfo() {
  function handleClickEmployee() {
    window.location = "/orders";
  }

  return (
    <div>
      <div className="featured">
        <div className="featuredItem">
          <div className="featuredMoneyContainer">
            <img alt="employee" width={200} />
          </div>
          <a href="/orders">
            <span className="featuredTitle">Orders</span>
          </a>
        </div>
        <div className="featuredItem">
          <div className="featuredMoneyContainer">
            <img alt="employee" width={200} />
          </div>
          <span className="featuredTitle">Customer</span>
        </div>
      </div>
      <div
        className="featured"
        style={{ marginTop: "50px", marginBottom: "30px" }}
      >
        <div className="featuredItem">
          <div className="featuredMoneyContainer">
            <img alt="employee" width={200} />
          </div>
          <span className="featuredTitle">Re-Order Material</span>
        </div>
        <div className="featuredItem">
          <div className="featuredMoneyContainer">
            <img alt="employee" width={200} />
          </div>
          <span className="featuredTitle">Employee</span>
        </div>
      </div>
    </div>
  );
}
