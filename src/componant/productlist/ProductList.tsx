import styles from "./styles.module.scss";
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
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <th>{product.id}</th>
                <th>{product.title}</th>
                <td>{product.category}</td>
                <td>{product.amount}</td>
                <td>${product.price}</td>
                <td className={styles.td}>
                  <button onClick={() => onDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td className={styles.td}>Total</td>
              <td className={styles.td}>
                {products
                  .reduce((acc, product) => acc + product.amount, 0)
                  .toFixed(0)}
              </td>
              <td className={styles.td}>
                $
                {products
                  .reduce(
                    (acc, product) => acc + product.price * product.amount,
                    0
                  )
                  .toFixed(2)}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
