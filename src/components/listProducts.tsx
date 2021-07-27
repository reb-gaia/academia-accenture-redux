const ListProducts = ({products}) => {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      {products.map(product => (
        <div key={product.id}> 
          <h4>{product.title}</h4>
          <p>Valor: RS {product.value},00</p>
          <button>Selecionar Curso</button>
        </div>
      ))}
    </div>
  )
}

export default ListProducts;