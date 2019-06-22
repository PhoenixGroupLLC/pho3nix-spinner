import { LitElement, html, css, customElement } from 'lit-element';

@customElement('pho3nix-spinner')
export class Pho3nixSpinner extends LitElement {

  static get styles() {
    return [
      css`
        .lds-ripple {
          display: inline-block;
          position: relative;
          width: var(--ripple-size, 64px); /*(16/16)*/
          height: var(--ripple-size, 64px); /*(16/16)*/
        }
        .lds-ripple div {
          position: absolute;
          border-width: calc(var(--ripple-size, 64px) / 16); /*(1/16)*/
          border-style: var(--ripple-style, solid);
          border-color: var(--ripple-color, #fff);
          opacity: 1;
          border-radius: 50%;
          animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        .lds-ripple div:nth-child(2) {
          animation-delay: -0.5s;
        }
        @keyframes lds-ripple {
          0% {
            top: calc(var(--ripple-size, 64px) * 0.4375); /*(7/16)*/
            left: calc(var(--ripple-size, 64px) * 0.4375); /*(7/16)*/
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            top: -1px;
            left: -1px;
            width: calc(var(--ripple-size, 64px) * 0.8750); /*(14/16)*/
            height: calc(var(--ripple-size, 64px) * 0.8750); /*(14/16)*/
            opacity: 0;
          }
        }
      `
    ];
  }

  protected render() {
   return html`<div class="lds-ripple"><div></div><div></div></div>`;
  }
}
