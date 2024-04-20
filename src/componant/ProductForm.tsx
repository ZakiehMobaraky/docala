import categories from "./InitialData/categories";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
      className=" w-full lg:w-1/3 px-12 py-7 lg:px-4"
    >
      <div className="mb-5">
        <label
          htmlFor="title"
          className="block mb-3 text-sm font-medium text-blue-200"
        >
          Title
        </label>

        <input
          type="text"
          id="title"
          className=" bg-purple-700 border border-cream-200 text-white text-sm rounded-lg block w-full p-2.5"
          placeholder="Product Name"
          {...register("title")}
        />
        {errors.title && (
          <p className="text-cream-200 text-xs font-normal mt-2">
            {errors.title.message}
          </p>
        )}
      </div>

      <div className="mb-5">
        <label
          htmlFor="category"
          className="block mb-3 text-sm font-medium text-blue-200"
        >
          Category
        </label>
        <select
          {...register("category")}
          name="category"
          id="category"
          className=" bg-purple-700 border border-cream-200 text-white text-sm rounded-lg block w-full p-2.5"
        >
          <option value=""></option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-cream-200 text-xs font-normal mt-2">
            {errors.category.message}
          </p>
        )}
      </div>

      <div className="mb-5">
        <label
          htmlFor="amount"
          className="block mb-3 text-sm font-medium text-blue-200"
        >
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          id="amount"
          className=" bg-purple-700 border border-cream-200 text-white text-sm rounded-lg block w-full p-2.5"
        />
        {errors.amount && (
          <p className="text-cream-200 text-xs font-normal mt-2">
            {errors.amount.message}
          </p>
        )}
      </div>

      <div className="mb-5">
        <label
          htmlFor="price"
          className="block mb-3 text-sm font-medium text-blue-200"
        >
          Price
        </label>
        <input
          {...register("price", { valueAsNumber: true })}
          type="number"
          id="price"
          className=" bg-purple-700 border border-cream-200 text-white text-sm rounded-lg block w-full p-2.5"
        />
        {errors.price && (
          <p className="text-cream-200 text-xs font-normal mt-2">
            {errors.price.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="text-sm font-medium text-center rounded-md text-purple-700 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100  px-4 py-2 w-full md:w-auto "
      >
        Add to productList
      </button>
    </form>
  );
};

export default ProductForm;
