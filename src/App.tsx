import { useState } from "react";
import ProductForm from "./componant/ProductForm";
import ProductList from "./componant/ProductList";
import Navbar from "./componant/Navbar";
import ProductFilter from "./componant/ProductFilter";

const App = () => {
  const [selectCategory, setSelectCategory] = useState("");
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Dishwashing Liquid",
      category: "Detergents",
      amount: 3,
      price: 1200,
    },
    { id: 2, title: "Alcohol", category: "Detergents", amount: 4, price: 100 },
    { id: 3, title: "Pasta", category: "Foodstuffs", amount: 2, price: 2300 },
    { id: 4, title: "Coffee", category: "Foodstuffs", amount: 1, price: 700 },
    { id: 5, title: "Shirt", category: "Clothing", amount: 1, price: 88000 },
    { id: 6, title: "Hat", category: "Clothing", amount: 1, price: 51000 },
  ]);

  const visibleProduct = selectCategory
    ? products.filter((product) => product.category === selectCategory)
    : products;

  return (
    <div>
      <Navbar />
      <div className="flex-wrap sm:flex items-center justify-center gap-x-6 gap-y-3 bg-purple-400 pt-4 pb-7 ">
        <ProductForm
          onSubmit={(product) =>
            setProducts([...products, { ...product, id: products.length + 1 }])
          }
        />
        <div className="flex-col items-center justify-center gap-3 p-1">
          <ProductFilter
            onSelectCategory={(category) => setSelectCategory(category)}
          />
          <ProductList
            products={visibleProduct}
            onDelete={(id) =>
              setProducts(products.filter((product) => product.id !== id))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default App;
