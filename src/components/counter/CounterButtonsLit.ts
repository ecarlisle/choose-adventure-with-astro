import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js"
import { countAtom, incrementAtomCount, decrementAtomCount } from "../../lib/CounterStore.js";

export class LitCounterButtons extends LitElement {
  @property({type: Number})
  count:number = countAtom.get();

  static styles = css`
    div {
      background: #dcfce7;
      border: solid 0.25rem #86efac;
      padding: 1rem;
      text-align: center;
    }

    h3 {
      font-size: 1.25rem;
      margin: 0 0 1rem;
      text-align: center;
    }

    button {
      font-size: 2rem;
      height: 4rem;
      width: 4rem;
    }
  `;

  increment() {
    this.count = incrementAtomCount();
  }

  decrement() {
    this.count = decrementAtomCount();
  }

  render() {
    return html`
      <div>
        <h3>Update Count (Lit)</h3>
        <button @click=${this.increment}>+</button>
        <button @click=${this.decrement}>-</button>
      </div>
    `;
  }
};

customElements.define('counter-buttons', LitCounterButtons);
