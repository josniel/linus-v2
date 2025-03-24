import { useRef } from 'react';
interface SwipeableContainerProps {
  children: React.ReactNode;
  handleSwipeLeft: () => void;
  handleSwipeRight: () => void;
}
const SwipeableContainer = ({
  children,
  handleSwipeLeft,
  handleSwipeRight,
}: SwipeableContainerProps) => {
  const startX = useRef(0);
  const endX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = startX.current - endX.current;
    if (diff > 50) {
      // Swipe hacia la izquierda
      handleSwipeLeft();
    } else if (diff < -50) {
      // Swipe hacia la derecha
      handleSwipeRight();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    endX.current = e.clientX;
    const diff = startX.current - endX.current;
    if (diff > 50) {
      handleSwipeLeft();
    } else if (diff < -50) {
      handleSwipeRight();
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="w-full h-full"
    >
      {children}
    </div>
  );
};

export default SwipeableContainer;
