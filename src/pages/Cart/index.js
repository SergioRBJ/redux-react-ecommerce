import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://http2.mlstatic.com/maquina-de-cortar-cabelo-6-em-1-barba-pelo-corpo-bodygroom-D_NQ_NP_819087-MLB32146670691_092019-F.webp"
                alt="Machine"
              />
            </td>
            <td>
              <strong>Crazy Machine</strong>
              <span>$129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#008b8b" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#008b8b" />
                </button>
              </div>
            </td>
            <td>
              <strong>$258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#008b8b" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">PLACE ORDER</button>

        <Total>
          <span>TOTAL</span>
          <strong>$1920,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
