import { connect } from 'react-redux';

function toggleProduct(product) {
  return {
    type: "TOGGLE_PRODUCT",
    product
  }
}

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
  products: state.products,
})

const mapDispatchToProps = dispatch  => ({
  toggleProduct: (product) => dispatch(toggleProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);