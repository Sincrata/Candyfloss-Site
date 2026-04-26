class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `


<div class="header-box">
<a href="index.html"><img src="logos/logo.gif"></a>
</div>
`;
  }
}
customElements.define('main-header', Header);