import { connect } from 'react-redux';
import { IProduct, IProductState } from '../store/products/types';
import * as ProductActions from '../store/products/actions'

interface IListProductProps {
  products: IProduct[],
  toggleProduct(product: IProduct): any
}

const ListProducts = ({products, toggleProduct}: IListProductProps) => {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      {products.map(product => (
        <div key={product.id}> 
          <h4>{product.title}</h4>
          <p>Valor: RS {product.value},00</p>
          <button onClick={() => toggleProduct(product)}>Selecionar Curso</button>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state: IProductState) => ({
  products: state.product.products,
})

const mapDispatchToProps = (dispatch: Function)  => ({
  toggleProduct: (product: IProduct) => dispatch(ProductActions.toggleProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
