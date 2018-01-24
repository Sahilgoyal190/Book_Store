import React from 'react';

export const CartProduct = ({ product }) => {
    return (
        <div className="well">
            <div className="row">
                <div className="col-md-4 col-md-offset-4"><h3>{product.title}</h3></div>
                <div className="col-md-4"><span className="badge">{product.count}</span>  </div>
            </div>

            <div>{product.author}</div>
        </div>
    )
}

export const Cart = ({ cartData }) => {
    return (
        <div className="cart-list">
            Total product : {cartData.length}
            <h3>Products:</h3>
            {
                cartData.map((product, i) => {
                    return <CartProduct product={product} />
                })
            }
        </div>
    )
}



