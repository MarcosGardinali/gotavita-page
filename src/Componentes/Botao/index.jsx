import React from 'react';
import style from './botao.module.css';

export default function Botao({ children, link, targetId, width }) {
  const scrollToSection = (e) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    if (link) {
      window.location.href = link;
    }

  };

  return (
    <a href={link} rel="nofollow" style={{width: `${width}%`}} onClick={scrollToSection} className={style.botao}>
      {children}
    </a>
  );
}