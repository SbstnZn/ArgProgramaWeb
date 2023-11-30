import React, { useEffect, useState } from 'react';
import '../styles/footer.css';

const Footer = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      
      document.querySelector('.footer').classList.add('show');
      document.querySelector('.footer').classList.remove('hide');
    } else {
      
      document.querySelector('.footer').classList.add('hide');
      document.querySelector('.footer').classList.remove('show');
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className="footer show">
      <p>© 2023 Libreria El Aleph. Todos los derechos reservados.</p>
    </div>
  );
};

export default Footer;
