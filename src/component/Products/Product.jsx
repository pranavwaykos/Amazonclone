import React from 'react'
import css from './Product.module.css'
import Plane from "../../assets/plane.png"
import { ProductsData } from '../../data/products'
import { useState } from 'react'
import {useAutoAnimate} from '@formkit/auto-animate/react'



const Product = () => {

    const  [parent] = useAutoAnimate();
    const [menuProduct,setmenuProduct] = useState(ProductsData)

    const filter = (type) =>{
        setmenuProduct(ProductsData.filter((product)=>product.type === type))
    }
  return (
    <div className={css.container}>
        <img src={Plane} alt=""/>
        <h1>Our Feature Products</h1>

        <div className={css.products}>
            <ul className={css.menu}>
                <li onClick={()=>setmenuProduct(ProductsData)}>All</li>
                <li onClick={()=>filter("skin care")}>Skin Care</li>
                <li onClick={()=>filter("conditioner")}>Conditioner</li>
                <li onClick={()=>filter("foundation")}>Foundation</li>
            </ul>
            <div className={css.list} ref={parent}>
                 {
                    menuProduct.map((product,i)=>(
                        <div className={css.product}>
                            <div className='left-s'>
                                <div className='name'>
                                    <span>{product.name}
                                    </span>
                                    <span>
                                        {product.detail}
                                    </span>
                                </div>
                                <span>{product.price}$</span>
                                <div>Show Now</div>
                                <img src={product.img} alt=""></img>
                            </div>
                        </div>
                    ))
                 }
            </div>
        </div>
    </div>
  )
}

export default Product