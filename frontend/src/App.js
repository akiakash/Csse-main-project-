import "./App.css";
import Header from "./components/Header";
import SignIn from "./pages/Auth/SignIn";
import Note from "./pages/Delivery/Note";
import Orders from "./pages/purchase/orders";
import ViewOrder from "./pages/purchase/ViewOrder";
import PurchaseOrder from "./pages/purchase/PurchaseOrder";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SupplyOrders from "./pages/Suppliers/SupplyOrders";
import ViewSuppliers from "./pages/Suppliers/ViewSuppliers";
import FeaturedInfo from "./components/featuredInfo/FeaturedInfo";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/a" element={<SignIn />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/deliverynote" element={<Note />} />
          <Route path="/purchaseorder" element={<PurchaseOrder />} />
          <Route path="/vieworder" element={<ViewOrder />} />
          <Route path="/supply" element={<SupplyOrders />} />
          <Route path="/viewsuppliers" element={<ViewSuppliers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// function App() {
//   return (
// <Routes>
//   <Route path="/" element={<SignIn />} />
//   <Route path="/orders" element={<Orders />} />
//   <Route path="/note" element={<Note />}>
//     <Route path="/purchaseorder" element={<PurchaseOrder />} />
//     <Route path="/vieworder" element={<ViewOrder />} />
//     <Route path="/supplyorder" element={<SupplyOrders />} />
//     <Route path="/viewsuppliers" element={<ViewSuppliers />} />
//   </Route>
// </Routes>
//   );
// }

// export default App;

// function App(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<SignIn />}>
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/note" element={<Note />}>
//           <Route path="/purchaseorder" element={<PurchaseOrder />} />
//           <Route path="/vieworder" element={<ViewOrder />} />
//           <Route path="/supplyorder" element={<SupplyOrders />} />
//           <Route path="/viewsuppliers" element={<ViewSuppliers />} />
//         </Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>,

// );
