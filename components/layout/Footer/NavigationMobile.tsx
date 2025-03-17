import React, { useEffect, useRef, useState } from "react";
import ChevronDown from "@/components/UI/Icons/ChevronDown";

// import { useIsMobile } from "@/hooks/useIsMobile";
import { AnimatePresence, motion } from "framer-motion";

import Plus from "@/components/UI/Icons/Plus";
import Rest from "@/components/UI/Icons/Rest";
import { Link } from "@/interfaces";

const Wrapper = ({
  className,
  children,
  isVisible,
}: {
  className?: string;
  children?: React.ReactNode;
  isVisible?: boolean;
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          transition={{ duration: 0.3, ease: "linear" }}
          style={{ overflow: "hidden" }}
          initial={{ height: 0, opacity: 1 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TabDropDownWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const TabDropdownButton = ({
  className = "",
  active,
  onClick,
  children,
}: {
  className?: string;
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  //   const buttonRef = useRef<HTMLButtonElement>(null);

  //   const handleClick = () => {
  //     // setActive(!active);
  //     // if (active) return;
  //     // setTimeout(() => {
  //     //   const y = buttonRef.current?.getBoundingClientRect().top;
  //     //   window.scrollTo({
  //     //     top: y ? y + window.scrollY - 74 : 0,
  //     //     behavior: "smooth",
  //     //   });
  //     // }, 100);
  //   };

  return (
    <button
      //   ref={buttonRef}
      type="button"
      className={`flex w-full justify-between px-0.5 py-[5px] items-center ${className}`}
      onClick={onClick}
    >
      <div className="text-sm leading-[14px] font-medium">{children}</div>

      <div className={`text-sm`}>
        {!active && <Plus />}
        {active && <Rest />}
      </div>
    </button>
  );
};

const DropDown = ({ navigation }: { navigation: Link }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={`last:mb-0 transition-[margin] ${active ? 'mb-[9px]' : 'mb-4'}`}>
      <TabDropdownButton active={active} onClick={() => setActive(!active)}>
        {navigation.name}
      </TabDropdownButton>

      <Wrapper className="mt-2.5" isVisible={active}>
        <ul className="mt-[6px] ml-[11px]">
          {navigation?.subLinks?.map((link, i) => (
            <li className="leading-[0] mb-2.5 last:mb-0" key={i}>
              <a
                href={link.href}
                className="mb-2.5 text-navy-gray-500 text-xs leading-[14px] transition-colors hover:text-nevada-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </Wrapper>
    </div>
  );
};

/* const NavigationMobile = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`p-2.5 ${className}`}>
      {footerLinks.navigations.map((navigation: Link, i) => (
        <DropDown key={i} navigation={navigation} />
      ))}
    </div>
  );
}; */

// <div key={i}>
//   <TabDropdownButton>{navigation.name}</TabDropdownButton>

//   <Wrapper className="mt-2.5">
//     <ul className="mt-[5px]">
//       {navigation.subLinks.map((link, i) => (
//         <li className="leading-[0] mb-2.5 last:mb-0" key={i}>
//           <a
//             href={link.href}
//             className="mb-2.5 text-navy-gray-500 text-xs leading-[14px] transition-colors hover:text-nevada-500"
//           >
//             {link.name}
//           </a>
//         </li>
//       ))}
//     </ul>
//   </Wrapper>
// </div>

export default NavigationMobile;
