interface Products {
  id: number;
  amount: number;
  price: number;
  title: string;
  category: string;
}
interface Props {
  products: Products[];
  onDelete: (id: number) => void;
}

const ProductList = ({ products, onDelete }: Props) => {
  if (products.length === 0) return null;
  return (
    <div className=" px-14 lg:px-7 ">
      <div className="relative shadow-lg rounded-lg  overflow-auto grid-cols-12 sm:grid-cols-8">
        <table className="w-full text-sm text-center object-cover">
          <thead className="text-xs text-blue-200 uppercase bg-purple-300">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody className="text-white bg-purple-700">
            {products.map((product) => (
              <tr className="border-b border-cream-200" key={product.id}>
                <th className="px-4 py-2 font-medium whitespace-nowrap">
                  {product.id}
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap">
                  {product.title}
                </th>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">{product.amount}</td>
                <td className="px-4 py-2">${product.price}</td>
                <td className="px-6 py-3">
                  <button
                    className="px-2 py-1 text-xs font-medium text-center rounded-md text-purple-700 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100"
                    onClick={() => onDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot className="bg-purple-700 text-white">
            <tr className=" border-b-0 border-cream-200 ">
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2 font-medium whitespace-nowrap ">
                Total
              </td>
              <td className="px-4 py-2 font-medium whitespace-nowrap ">
                {products
                  .reduce((acc, product) => acc + product.amount, 0)
                  .toFixed(0)}
              </td>
              <td className="px-4 py-2 font-medium whitespace-nowrap ">
                $
                {products
                  .reduce(
                    (acc, product) => acc + product.price * product.amount,
                    0
                  )
                  .toFixed(2)}
              </td>
              <td className="px-4 py-2"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
