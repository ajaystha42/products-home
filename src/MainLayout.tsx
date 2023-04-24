import Footer from "./Footer";
import Header from "./Header";
import HomeContent from "./HomeContent";
import { Route, Routes } from "react-router-dom";
import PDPContent from "pdp/PDPContent";

function MainLayout() {
  return (
    <div className="text-3xl mx-auto max-w-8xl">
      <Header />
      <div className="my-10">
        <Routes>
          <Route path="/" Component={HomeContent} />
          <Route path="/product/:id" element={<PDPContent />} />

          {/* <Route path="/product/:id" Component={PDPContent} /> */}
          {/* <Route path="/cart" component={CartContent} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
