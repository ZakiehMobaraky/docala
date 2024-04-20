import categories from "./InitialData/categories";
interface Props {
  onSelectCategory: (category: string) => void;
}
const ProductFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="p-2 px-8 pb-4 items-center ">
      <select
       className=" bg-purple-700 border border-cream-200 text-white text-sm rounded-lg block w-full p-2.5"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
