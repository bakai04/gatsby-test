import React from 'react';
import { Product } from "../../../entities/product";
import { graphql, useStaticQuery } from "gatsby";
import "./product-list.scss";

export interface IProduct {
  id: number,
  price: number,
  title: string,
  description: string,
  image: string,
  category: string,
}

interface IPropductListProps {
  productList: IProduct[]
}

export const ProductList = ({ productList }: IPropductListProps) => {
  return (
    <div className="product-list">
      {
        productList.map((item)=> (
          <Product key={item.id} data={item}/>
        ))
      }
    </div>
  )
}
