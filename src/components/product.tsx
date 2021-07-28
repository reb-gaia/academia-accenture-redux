import { connect } from 'react-redux';

const Product = ({product}) => {
  return (
    <div>
      {
        product.id && (
          <>
            <h2>Página do Produto</h2>
            <h3>{product.title}</h3>
            <p><strong>Valor: RS {product.value}</strong></p>
            <h4>Modulos</h4>
            <ul>
              {product.modules.map(module => (
                <li key={module.id}>{module.title}</li>  
              ))}
            </ul>
          </>
        )
      }
    </div>
        
  )
}  

const mapStateToProps = state => ({
  product: state.product
})

export default connect(mapStateToProps)(Product);