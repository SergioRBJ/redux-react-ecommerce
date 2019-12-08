import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://http2.mlstatic.com/maquina-de-cortar-cabelo-6-em-1-barba-pelo-corpo-bodygroom-D_NQ_NP_819087-MLB32146670691_092019-F.webp"
          alt="Machine"
        />
        <strong>Crazy Machine</strong>
        <span>$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>

      <li>
        <img
          src="https://http2.mlstatic.com/maquina-de-cortar-cabelo-6-em-1-barba-pelo-corpo-bodygroom-D_NQ_NP_819087-MLB32146670691_092019-F.webp"
          alt="Machine"
        />
        <strong>Crazy Machine</strong>
        <span>$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>

      <li>
        <img
          src="https://http2.mlstatic.com/maquina-de-cortar-cabelo-6-em-1-barba-pelo-corpo-bodygroom-D_NQ_NP_819087-MLB32146670691_092019-F.webp"
          alt="Machine"
        />
        <strong>Crazy Machine</strong>
        <span>$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>

      <li>
        <img
          src="https://http2.mlstatic.com/maquina-de-cortar-cabelo-6-em-1-barba-pelo-corpo-bodygroom-D_NQ_NP_819087-MLB32146670691_092019-F.webp"
          alt="Machine"
        />
        <strong>Crazy Machine</strong>
        <span>$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>

      <li>
        <img
          src="https://http2.mlstatic.com/maquina-de-cortar-cabelo-6-em-1-barba-pelo-corpo-bodygroom-D_NQ_NP_819087-MLB32146670691_092019-F.webp"
          alt="Machine"
        />
        <strong>Crazy Machine</strong>
        <span>$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>

      <li>
        <img
          src="https://http2.mlstatic.com/maquina-de-cortar-cabelo-6-em-1-barba-pelo-corpo-bodygroom-D_NQ_NP_819087-MLB32146670691_092019-F.webp"
          alt="Machine"
        />
        <strong>Crazy Machine</strong>
        <span>$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
    </ProductList>
  );
}
