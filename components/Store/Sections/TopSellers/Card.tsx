import Image from 'next/image';
import Button from '@/components/UI/Button';
import { Product } from '@/components/Store/Sections/TopSellers/types';

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {
  return (
    <div className="border-[3px] border-black flex flex-col gap-3 items-center py-2 px-2 rounded-[10px] justify-between bg-white">
      <div className="flex flex-col gap-2">
        <div className="bg-[#F0F0F0] rounded-[10px] h-[250px] border-[1.5px] border-[rgba(108,75,180,0.15)] flex items-center justify-center overflow-hidden">
          <Image
            src={product.node.images.edges[0].node.src}
            alt={product.node.images.edges[0].node.altText || ''}
            width={250}
            height={250}
            quality={100}
            className="object-cover object-center"
          />
        </div>
        <div className="text-black text-2xl max-w-[200px] self-start font-medium place-self-start">
          {product.node.title}
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-2">
        <div className="flex flex-col">
          <div className="text-[#858585] text-2xl font-medium leading-none">
            ${product.node.priceRange.minVariantPrice.amount}
          </div>
          <div className="text-black text-2xl font-medium leading-none">
            ${product.node.priceRange.maxVariantPrice.amount}
          </div>
        </div>
        <div className="group bg-black rounded-[11px]">
          <Button
            variant="secondary"
            className="group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
