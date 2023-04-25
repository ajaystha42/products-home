import PDPContent from "pdp/PDPContent";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./features/Home/Home";
import CartContent from "cart/CartContent";
function MainLayout() {
  return (
    <div className="text-3xl mx-auto max-w-8xl">
      <Header />
      <div className="my-10 px-40">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/product/:id" element={<PDPContent />} />

          {/* <Route path="/product/:id" Component={PDPContent} /> */}
          <Route path="/cart" Component={CartContent} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
