interface NodeImage {
  __typename: string;
  src: string;
  altText: null | string;
}
interface Edge {
  __typename: string;
  node: NodeImage;
}
interface Image {
  __typename: string;
  edges: Edge[];
}
interface NodePriceRange {
  __typename: string;
  maxVariantPrice: {
    __typename: string;
    amount: string;
    currencyCode: string;
  };
  minVariantPrice: {
    __typename: string;
    amount: string;
    currencyCode: string;
  };
}

interface NodeProduct {
  __typename: string;
  id: string;
  title: string;
  description: string;
  handle: string;
  images: Image;
  priceRange: NodePriceRange;
}
export interface Product {
  __typename: string;
  node: NodeProduct;
}
