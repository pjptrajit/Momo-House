import GoToMenuPage from "../components/GoToMenuPage";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft, FaIndianRupeeSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function FliterProducts() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  const navigation = useNavigate();
  const scrollRef = useRef(null);

  const filterProduct = async () => {
    let res = await fetch("https://dummyjson.com/recipes");
    res = await res.json();
    setProducts(res.recipes);
    setFilterProducts(res.recipes.filter(item => item.cuisine === "Italian"));
  };

  const showFilterProduct = (type) => {
    setFilterProducts(products.filter(item => item.cuisine === type));
  };

  useEffect(() => {
    filterProduct();
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-10">
      
      {/* Heading */}
      <div className="text-center space-y-3 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          Our <span className="text-[#D95103]">Most Popular</span> Recipes
        </h1>
        <p className="text-sm text-[#6B788E] max-w-xl mx-auto">
          Browse through varieties of recipes made with fresh ingredients
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {["Italian", "Pakistani", "Mexican"].map(type => (
          <button
            key={type}
            onClick={() => showFilterProduct(type)}
            className="px-5 py-1.5 border rounded-full hover:bg-[#0C6967] hover:text-white transition"
          >
            {type}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="w-full max-w-6xl flex items-center gap-2">

        {/* Left Arrow (hidden on mobile) */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex w-10 h-10 rounded-full shadow items-center justify-center"
        >
          <FaArrowLeft />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth w-full"
        >
          {filterProducts.length > 0 ? (
            filterProducts.map(item => (
              <div
                key={item.id}
                onClick={() => navigation("/productsdescription", { state: item })}
                className="min-w-[240px] sm:min-w-[260px] md:min-w-[288px] cursor-pointer"
              >
                <div className="h-[220px] flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full object-contain"
                  />
                </div>
                <div className="text-center font-bold space-y-1">
                  <h1 className="text-base">{item.name}</h1>
                  <p className="flex justify-center items-center gap-1 text-[#D95103]">
                    <FaIndianRupeeSign />
                    {item.caloriesPerServing}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>

        {/* Right Arrow (hidden on mobile) */}
        <button
          onClick={scrollRight}
          className="hidden md:flex w-10 h-10 rounded-full shadow items-center justify-center"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* CTA */}
      <div className="mt-8">
        <GoToMenuPage />
      </div>
    </div>
  );
}

export default FliterProducts;
