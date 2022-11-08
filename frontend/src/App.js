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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/a" element={<SignIn />} />
          <Route path="/a" element={<Orders />} />
          <Route path="/a" element={<Note />} />
          <Route path="/s" element={<PurchaseOrder />} />
          <Route path="/A" element={<ViewOrder />} />
          <Route path="/a" element={<SupplyOrders />} />
          <Route path="/" element={<ViewSuppliers />} />
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
