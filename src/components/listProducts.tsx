import { connect } from 'react-redux';

import * as ProductActions from '../store/actions/product'

const ListProducts = ({products, toggleProduct}) => {
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

const mapStateToProps = state => ({
  product: state.product.product,
})

const mapDispatchToProps = dispatch  => ({
  toggleProduct: (product) => dispatch(ProductActions.toggleProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
