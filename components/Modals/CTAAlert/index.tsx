import Image from 'next/image';
import { Button, Modal } from '@/components/UI';

interface CTAAlertProps {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}
const CTAAlert = ({ openModal, setOpenModal }: CTAAlertProps) => {
  return (
    <Modal openModal={openModal} setOpenModal={setOpenModal}>
      <div className="flex items-end h-full relative lg:bottom-[-120px]">
        <Image
          src={'/static/images/modals/cta-alert/ellipse.svg'}
          alt="Ellipse"
          width={893}
          height={546}
          className="max-lg:hidden"
          unoptimized={true}
        />
        <div className="bg-[#111B4D] lg:hidden rounded-[20px] w-[373px] h-[482px]"></div>
        <span
          className="absolute z-50 text-2xl cursor-pointer text-white __className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] -right-2.5 -top-32 max-lg:top-4 max-lg:right-4 bg-[#101013] hover:bg-[#111B4D] hover:text-[#F00] hover:[box-shadow:0px_0px_4px_0px_#F00] rounded-[15px] px-3 py-2 transition-all"
          onClick={() => setOpenModal(false)}
        >
          X
        </span>
        <div className="flex flex-col items-start gap-2 absolute left-28 max-lg:left-4 max-lg:top-16 top-1/2 lg:-translate-y-1/2 z-[1]">
          <div className="text-2xl text-[#0F8] tracking-[0px] __className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off]">
            Ready <br /> to crack the shell?
          </div>
          <div className="text-2xl max-lg:text-sm text-white tracking-[0px] __className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off]">
            Click and witness how <br /> your Linus Egg transforms <br /> into
            something epic! <br />
            Don’t wait any longer; the <br /> universe needs you to be <br />{' '}
            part of this adventure.
          </div>
          <div className="flex items-center gap-6 max-lg:gap-3 group cursor-pointer">
            <div className="rounded-[15px] max-lg:rounded-lg bg-black">
              <div className="flex items-center justify-center rounded-[15px] max-lg:rounded-lg bg-[#0F8] group-hover:bg-picton-blue-400 w-[60px] h-[60px] max-lg:w-[30px] max-lg:h-[30px] group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all">
                <span className="icon-arrow-right-up text-black text-4xl max-lg:text-xl"></span>
              </div>
            </div>
            <div className="text-2xl max-lg:text-sm text-white tracking-[0px] __className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off]">
              view more
            </div>
          </div>
        </div>
        <Image
          src={'/static/images/modals/cta-alert/linus.png'}
          width={965}
          height={1054}
          quality={100}
          alt="Linus with Egg"
          className="absolute bottom-4 -right-16 w-[800px] max-lg:hidden"
        />
        <Image
          src={'/static/images/modals/cta-alert/linus-mobile.png'}
          width={362}
          height={395}
          quality={100}
          alt="Linus with Egg Mobile"
          className="absolute -bottom-16 -right-14 w-[800px] lg:hidden"
        />
      </div>
    </Modal>
  );
};

export default CTAAlert;
