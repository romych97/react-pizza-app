import React from 'react'
import './styles.css'

const Compare = ({products}) =>
  <div className="row compare">
    <div className="col-12 mt-5 text-center mb-5">
      <div className="rounded rounded-sm border bg-white br-5 table table p-5 text-left">
        {/* <thead className="thead-default">
          <tr>
            <th />
            {products.map(product =>
              <th key={product.id}>
                {product.name}
              </th>
            )}
          </tr>
        </thead> */}
          <div className="price">
            {products.map(product =>
              <div key={product.id}>
              {product.name + ' - ' + product.price}
              </div>
            )}
          </div>
          <div className="sum">
            <div scope="row">Итог - ${ products.reduce((totalCalories, meal) => totalCalories + parseFloat(meal.price.split('$')[1], 2), 0) }</div>
              
          </div>

      </div>
    </div>
  </div>;

export default Compare
