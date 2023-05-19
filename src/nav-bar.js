import { LitElement, html, css } from 'lit';

class NavBar extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #f0f0f0;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
    }

    li {
      margin-right: 10px;
    }

    a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
    }
  `;

  render() {
    return html`
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="data.html">Details</a></li>
        
      </ul>
    `;
  }
}

customElements.define('nav-bar', NavBar);
