import React, { useState, useEffect } from 'react';


function Sticky() {
  const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 100;
          setIsSticky(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
            return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    isSticky
  );
}

export default Sticky
