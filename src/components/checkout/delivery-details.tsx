const DeliveryDetails = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-6">Delivery Details</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-custom focus:ring focus:ring-custom focus:ring-opacity-50"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-custom focus:ring focus:ring-custom focus:ring-opacity-50"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-custom focus:ring focus:ring-custom focus:ring-opacity-50"
            placeholder="Enter your mobile number"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              PIN Code
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-custom focus:ring focus:ring-custom focus:ring-opacity-50"
              placeholder="Enter PIN code"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              House/Flat No.
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-custom focus:ring focus:ring-custom focus:ring-opacity-50"
              placeholder="Enter house/flat number"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Street/Road
          </label>
          <input
            type="text"
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-custom focus:ring focus:ring-custom focus:ring-opacity-50"
            placeholder="Enter street/road name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Landmark
          </label>
          <input
            type="text"
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-custom focus:ring focus:ring-custom focus:ring-opacity-50"
            placeholder="Enter nearby landmark"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm"
              placeholder="City"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm"
              placeholder="State"
            />
          </div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-black-dark transition-colors !rounded-button"
          >
            Proceed to Payment
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </form>
    </>
  );
};

export default DeliveryDetails;
