import FooterComponent from "./footer-component";
import HeaderComponent from "./header-component";
import ProductsComponent from "./products/products-component";

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <ProductsComponent />
      <FooterComponent />
    </>
  );
};

export default HomePage;
