import { useContext } from "react";
import products from "../../products.json";
import { CartContext } from "../cart_context";

const ProductsComponent = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    return;
  }
  const { addToCart, removeFromCart } = cartContext;

  return (
    <div className="flex-grow container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4">
            <img
              src={product.image}
              alt={product.alt}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-medium text-lg">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="text-custom font-medium mt-2">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex mt-4">
              <button
                onClick={() => addToCart(product)}
                className="w-4/5 bg-custom text-white bg-black px-4 py-2 rounded-lg hover:bg-black-dark"
              >
                Add to Cart
              </button>
              <button
                onClick={() => removeFromCart(product.id)}
                className="w-1/5 bg-red-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-red-600 flex justify-center items-center"
              >
                <i className="fas fa-trash-alt text-white"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;
