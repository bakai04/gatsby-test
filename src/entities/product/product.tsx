import { StaticImage } from "gatsby-plugin-image";
import { IProduct } from "../../module/main";
import React from 'react';
import "./product.scss";
import { Link } from "gatsby";

interface IProductProps {
  data: IProduct
}

export const Product = ({ data }: IProductProps) => {
  return (
    <div className="product">
      <div className="product__image">
        <p className="product__category">{data.category}</p>
        <StaticImage
          placeholder="blurred"
          quality={95}
          alt={"photo"}
          formats={["auto"]} 
          width={500}
          src="../../shared/images/kitchen.png" />
      </div>
      <Link to={`/product/${data.id}`} className="product__title">{data.title}</Link>
      <div className="product__inner">
        <p className="product__date">November 23, 2021</p>
        <span className="product__price">{data.price}$</span>
      </div>
    </div>
  )
}
