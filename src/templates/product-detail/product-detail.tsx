import { graphql, HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { IProduct, Layout } from "../../module/main";
import React from 'react'
import "./product-detail.scss";

export interface IProductQuery<T> {
  products: {
    Product: T
  }
}

const ProductDetail: React.FC<PageProps<IProductQuery<IProduct>>> = ({ data }) => {
  const product = data.products.Product;
  return (
    <div className="product-detail">
      <div className="product-detail__background"/>
      <Layout>
        <div className="product-detail__inner">
          <div className="product-detail__photo">
            <StaticImage
              placeholder="blurred"
              src="../../shared/images/businessInterier.png"
              formats={["auto"]}
              height={200}
              alt="background"
              quality={100}
            />
          </div>
          <div className="product-detail__inform">
            <span className="product-detail__price">{product.price}$</span>
            <h2 className="product-detail__title">{product.title}</h2>
            <p className="product-detail__category">{product.category}</p>
            <p className="product-detail__description">{product.description}</p>
          </div>
        </div>

      </Layout>
    </div>
  )
}


export const query = graphql`
  query ProductQuery($id: ID!){
    products {
      Product(id: $id) {
        title
        price
        description
        category
        image
      }
    }
  }
`

export default ProductDetail;
export const Head: HeadFC = () => <title>Product Detail</title>
