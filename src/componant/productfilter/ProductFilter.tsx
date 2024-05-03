import categories from "../InitialData/categories";
import styles from "./styles.module.scss";
interface Props {
  onSelectCategory: (category: string) => void;
}
const ProductFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className={styles.container}>
      <select onChange={(event) => onSelectCategory(event.target.value)}>
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
