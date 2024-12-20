const FooterComponent = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-8">
      <div className="max-w-8xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-4">
          <i className="fas fa-lock text-green-500"></i>
          <span className="text-sm text-gray-600">
            Secure Checkout powered by Pride of Cows
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
