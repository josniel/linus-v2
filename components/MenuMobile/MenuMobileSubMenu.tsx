import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SubLink } from "@/interfaces";

interface SubMenuProps {
  subLinks: SubLink[];
  isVisible: boolean;
}

const MenuMobileSubMenu = ({ subLinks, isVisible }: SubMenuProps) => {
  const subMenuHeight = useMemo(
    () =>
      subLinks.length * 30 + (subLinks.length ? subLinks.length - 1 : 0) * 8,
    [subLinks]
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          transition={{ duration: 0.3, ease: "linear" }}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: subMenuHeight, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <ul className="flex flex-col gap-2">
            {subLinks.map((link, i) => (
              <a
                href={link.href}
                className="btn w-full px-2.5 h-[30px] gap-[5px] flex hover:bg-navy-blue-900 hover:text-white leading-normal !rounded-10 !justify-start"
                key={i}
              >
                <span className="text-xs leading-normal">{link.icon}</span>
                <span className="text-[11px] leading-normal whitespace-nowrap">
                  {link.name}
                </span>
              </a>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuMobileSubMenu;
