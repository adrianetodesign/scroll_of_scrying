import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div>
      <h1><img src="/images/scry-icon.svg" alt="logo" id="logo_img"/> Scroll <br/> of Scrying</h1>
      <nav>
        <ul>
          <li><button>Party</button></li>
          <li><button>Combat</button></li>
          <li><button>Notes</button></li>
          <li><button>Tables</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;