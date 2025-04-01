import ComponentVisible from '@/hooks/useVisible';
import { Link } from '@/interfaces';

const MenuMobileLink = ({ link }: { link: Link }) => {
  const { ref, isVisible, setIsVisible } = ComponentVisible(false);

  return (
    <div ref={ref} className="relative flex flex-col items-end gap-2">
      <a
        href={link.href}
        className={`btn active:text-white text-white font-medium hover:border-b-2 border-yellow-doge-500 px-4 py-1 text-2xl !justify-between ${
          isVisible ? 'bg-navy-blue-900 text-white' : ''
        }`}
        onClick={(e) => {
          if (link.subLinks) setIsVisible(!isVisible);
          e.preventDefault();
        }}
      >
        <span>{link.name}</span>
      </a>
    </div>
  );
};

export default MenuMobileLink;
