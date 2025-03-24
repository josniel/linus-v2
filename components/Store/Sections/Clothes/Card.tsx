import Image from 'next/image';
import Button from '@/components/UI/Button';
import { useCart } from '@/hooks/useCart';
interface Product {
  id: number;
  image: string;
  sizes: string[];
  colors: string[];
  price: number;
}

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {
  const { addToCart } = useCart();

  const handleCartClick = async () => {
    // await addToCart(product, 1);
  };

  return (
    <div className="flex items-center flex-col gap-3">
      <div className="flex flex-col gap-3 items-center py-2 px-2 rounded-[10px] justify-between bg-white bg-opacity-40 border-[1.5px] border-[rgba(108,75,180,0.15)]">
        <div className="flex flex-col gap-2">
          <Image
            src={product.image}
            alt={'Product'}
            width={250}
            height={250}
            quality={100}
            className="object-cover object-center h-[300px] relative -top-20"
          />
        </div>
        <div className="flex items-strech justify-between w-full gap-2">
          <div className="flex flex-col gap-2 justify-center bg-white bg-opacity-40 rounded-[10px] px-4 py-3 border-[1.5px] border-[rgba(108,75,180,0.15)]">
            <div className="flex items-center gap-2">
              <div className="__className_02ffdd text-[#4281E4] text-base">
                Colors:
              </div>
              <div className="flex items-center gap-1.5">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`border border-white rounded-full w-5 h-5 ${color}`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="__className_02ffdd text-[#4281E4] text-base">
                Size:
              </div>
              <div className="flex items-center gap-1">
                {product.sizes.map((size) => (
                  <div className="text-black font-medium leading-none text-base">
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="__className_02ffdd text-[#4281E4] text-base">
                Classic:
              </div>
              <div className="text-black font-medium leading-none text-base">
                ${product.price}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-white bg-opacity-40 rounded-[10px] border-[1.5px] border-[rgba(108,75,180,0.15)] px-0.5 py-3 w-full">
            <div className="bg-white bg-opacity-40 border-[1.5px] border-[rgba(108,75,180,0.15)] py-1 px-8 flex items-center justify-center __className_02ffdd text-[#4281E4] text-4xl rounded-[10px]">
              1
            </div>
            <div className="flex items-center justify-around px-1">
              <div className="__className_02ffdd text-[#4281E4] text-4xl cursor-pointer">
                -
              </div>
              <div className="__className_02ffdd text-[#4281E4] text-4xl cursor-pointer">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group bg-black rounded-[10px]">
        <Button
          className="group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all"
          variant="primary"
          onClick={handleCartClick}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Card;
