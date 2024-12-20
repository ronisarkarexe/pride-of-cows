import React, { useContext } from "react";
import { CartContext } from "./cart_context";
import { useNavigate } from "react-router-dom";

const HeaderComponent: React.FC = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  if (!cartContext) {
    return null;
  }

  const { cart } = cartContext;

  const handleCheckoutClick = () => {
    if (cart.length > 0) {
      navigate("/checkout");
    } else {
      alert("Please select an item before proceeding to checkout.");
    }
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img
              className="h-8"
              src="https://images.unsplash.com/photo-1530268782463-418534b0affa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y293fGVufDB8fDB8fHww"
              alt="Pride of Cows"
            />
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <i className="fas fa-shopping-cart text-custom mr-2 text-green-500"></i>
                <span>
                  Cart {cart.length > 0 && <span>({cart.length})</span>}{" "}
                </span>
              </div>
              <button
                onClick={handleCheckoutClick}
                className="btn bg-custom hover:text-custom-dark bg-green-500 px-4 py-2 rounded-lg"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
