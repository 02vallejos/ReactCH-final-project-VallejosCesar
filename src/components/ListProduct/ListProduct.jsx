import withLoading from "../WithLoading/WithLoading";


const ListProduct = ({ products }) => (
  <ul>
    {[products.map((product) => (
        <li key={product.id}>{product.name}</li>
    ))]}
  </ul>
)

const ProductListWhitLoading = withLoading(ListProduct);

export default ProductListWhitLoading;