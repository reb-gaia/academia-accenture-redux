import { connect } from 'react-redux';
import { IProduct } from '../store/products/types';
import { RootStore } from '../store/index'

interface IProductProps {
  product?: IProduct
}


const Product = ({product = undefined }: IProductProps) => {
  return (
    <>
      { product && (
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
      )}
    </>
  )
}

const mapStateToProps = (state: RootStore) => ({
  product: state.product.product,
})

export default connect(mapStateToProps)(Product);