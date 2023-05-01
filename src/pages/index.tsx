import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { IProduct, Layout, ProductList } from "../module/main"
import { IAllQueryData } from "shared/types/common"



const IndexPage: React.FC<PageProps<IAllQueryData<IProduct>>> = ({ data }) => {
  return (
    <Layout>
      <ProductList productList={data.products.allProducts} />
    </Layout>
  )
}

export const query = graphql`
  query MainPage {
    products {
      allProducts {
        id
        title
        price
        description
        category
        image
      }
    }
  }
`

export default IndexPage
export const Head: HeadFC = () => <title>Home Page</title>
