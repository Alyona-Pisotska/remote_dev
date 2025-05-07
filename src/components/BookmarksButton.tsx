import { useRef, useState } from 'react';
import { TriangleDownIcon } from "@radix-ui/react-icons";
import BookmarksPopover from './BookmarksPopover.tsx';
import { useOnClickOutside } from '../hooks/hooks.ts';

function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  useOnClickOutside([buttonRef, popoverRef], () => {setIsOpen(false)});

  return (
    <section>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prevState) => !prevState)}
        className='bookmarks-btn'
      >
        Bookmarks <TriangleDownIcon />
      </button>

      {isOpen && <BookmarksPopover ref={popoverRef} />}
    </section>
  );
}

export default BookmarksButton;
