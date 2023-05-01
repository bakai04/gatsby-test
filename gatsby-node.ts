import { GatsbyNode } from 'gatsby';
import path from "path";

interface IProductNode {
  id: string;
}

interface IGraphQLData {
  products: {
    allProducts: IProductNode[];
  }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { data } = await graphql<IGraphQLData>(`
    query allProductQuery{
      products {
        allProducts {
          id
        }
      }
    }
  `)

  const { createPage } = actions;
  data?.products.allProducts.forEach((product: IProductNode) => {
    createPage({
      path: `/product/${product.id}`,
      component: path.resolve("./src/templates/product-detail/product-detail.tsx"),
      context: { id: product.id },
    })
  })
}
