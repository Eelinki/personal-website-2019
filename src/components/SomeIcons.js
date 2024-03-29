import React from 'react';

function SomeIcons() {
  return (
    <ul className="someIcons">
      <li>
        <a href="https://github.com/Eelinki" target="_blank" rel="noopener noreferrer">
          <img src="./github.svg" alt="Github" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/eeli-hakkarainen-9313ab161/" target="_blank" rel="noopener noreferrer">
          <img src="./linkedin.svg" alt="LinkedIn" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/eelinki" target="_blank" rel="noopener noreferrer">
          <img src="./twitter.svg" alt="Twitter" />
        </a>
      </li>
    </ul>
  );
}

export default SomeIcons;