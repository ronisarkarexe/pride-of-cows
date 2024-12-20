import { useContext, useState } from "react";
import { CartContext } from "../cart_context";
import DeliveryDetails from "./delivery-details";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const cartContext = useContext(CartContext);
  const [couponCode, setCouponCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  if (!cartContext) {
    return <div>Loading...</div>;
  }
  const { cart, removeFromCart } = cartContext;

  const applyCoupon = () => {
    if (couponCode === "20APPLY") {
      setDiscount(20);
    } else if (couponCode === "10APPLY") {
      setDiscount(10);
    } else if (couponCode === "30APPLY") {
      setDiscount(30);
    } else {
      alert("Invalid coupon code");
    }
  };

  const handleQuantityChange = (
    productId: number,
    operation: "increment" | "decrement"
  ) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[productId] || 1;
      if (operation === "increment") {
        return { ...prevQuantities, [productId]: currentQuantity + 1 };
      } else if (operation === "decrement" && currentQuantity > 1) {
        return { ...prevQuantities, [productId]: currentQuantity - 1 };
      }
      return prevQuantities;
    });
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => {
      const quantity = quantities[item.id] || 1;
      return acc + item.price * quantity;
    }, 0);
  };

  const calculateTotal = () => {
    const baseTotal = calculateSubtotal() + 2.5;
    if (selectedPlan === "Weekly") {
      return baseTotal + 45;
    } else if (selectedPlan === "Monthly") {
      return baseTotal + 160;
    }
    return baseTotal;
  };

  const discountTotal = () => {
    const total = calculateTotal();
    return total - total * (discount / 100);
  };

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
  };

  const handelRemove = (id: number) => {
    if (cart.length > 1) {
      removeFromCart(id);
    } else {
      alert("Minimum one item is required!");
    }
  };

  return (
    <div>
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/">
              <button
                type="button"
                className="text-custom hover:text-custom-dark font-medium !rounded-button"
              >
                <i className="fas fa-arrow-left mr-2"></i>Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 border-b pb-4 mb-4"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-grow">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <div className="mt-2 flex items-center space-x-4">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, "decrement")
                        }
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span>{quantities[item.id] || 1}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, "increment")
                        }
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                      >
                        +
                      </button>
                      <span className="ml-auto font-medium">
                        ${(item.price * (quantities[item.id] || 1)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handelRemove(item.id)}
                    className="w-8 h-8 bg-red-500 text-white rounded-full flex justify-center items-center ml-4 hover:bg-red-600"
                  >
                    <i className="fas fa-trash-alt text-xs"></i>
                  </button>
                </div>
              ))}

              <div className="border-t border-gray-200 mt-6 pt-6">
                <h3 className="font-medium mb-4">Subscription Plans</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className={`border rounded-lg p-4 text-center cursor-pointer ${
                      selectedPlan === "Weekly"
                        ? "border-blue-500"
                        : "hover:border-custom"
                    }`}
                    onClick={() => handlePlanSelect("Weekly")}
                  >
                    <h4 className="font-medium">Weekly Plan</h4>
                    <p className="text-sm text-gray-500 mt-1">Save 10%</p>
                    <p className="text-lg font-bold mt-2">$45/week</p>
                  </div>
                  <div
                    className={`border rounded-lg p-4 text-center cursor-pointer ${
                      selectedPlan === "Monthly"
                        ? "border-blue-500"
                        : "hover:border-custom"
                    }`}
                    onClick={() => handlePlanSelect("Monthly")}
                  >
                    <h4 className="font-medium">Monthly Plan</h4>
                    <p className="text-sm text-gray-500 mt-1">Save 15%</p>
                    <p className="text-lg font-bold mt-2">$160/month</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex items-center space-x-2 mb-4">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-grow rounded-lg border-gray-300 shadow-sm focus:border-custom focus:ring focus:ring-custom focus:ring-opacity-50 py-2 px-3"
                  />
                  <button
                    onClick={applyCoupon}
                    className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-black-dark transition-colors"
                  >
                    Apply Coupon
                  </button>
                </div>
                <div className="space-y-1">
                  <span className="text-xs italic text-gray-500">
                    Coupon - <strong>10APPLY</strong> (10%),{" "}
                    <strong>20APPLY</strong> (20%), <strong>30APPLY</strong>
                    (30%)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">
                    ${calculateSubtotal().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">$2.50</span>
                </div>

                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>

                {discount > 0 && (
                  <div className="border-t">
                    <span className="text-gray-600 italic text-xs">
                      After Discount
                    </span>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Discount</span>
                      <span className="font-medium">{discount}%</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>${discountTotal().toFixed(2)}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <DeliveryDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
