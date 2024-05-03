import categories from "../InitialData/categories";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./styles.module.scss";

const schema = z.object({
  title: z
    .string()
    .min(2, { message: "Title should be at least 2 character." })
    .max(60),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(1)
    .max(30),
  price: z
    .number({ invalid_type_error: "Price is required." })
    .min(50)
    .max(60000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

type ProductFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ProductFormData) => void;
}
const ProductForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div>
        <label htmlFor="title">Title</label>

        <input
          type="text"
          id="title"
          placeholder="Product Name"
          {...register("title")}
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select {...register("category")} name="category" id="category">
          <option value=""></option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p>{errors.category.message}</p>}
      </div>

      <div>
        <label htmlFor="amount">Amount</label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          id="amount"
        />
        {errors.amount && <p>{errors.amount.message}</p>}
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <input
          {...register("price", { valueAsNumber: true })}
          type="number"
          id="price"
        />
        {errors.price && <p>{errors.price.message}</p>}
      </div>

      <button type="submit">Add to productList</button>
    </form>
  );
};

export default ProductForm;
