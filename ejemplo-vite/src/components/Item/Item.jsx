import './Item.css'


export const Item = ({id, nombre, descripcion, precio, stock, imagen}) => {
  return (
    <div className="item">
        <div className="item__image">
          <img src={imagen} alt={nombre}/>
        </div>
        <div className="item__info">
          <h2 className="item__info__title">{nombre}</h2>
          <p className="item__info__price">{precio}</p>
          <a href='#'>Ver Detalles</a>
        </div>
    </div>
  )
}