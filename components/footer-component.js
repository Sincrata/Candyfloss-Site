class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
	<center>
		Tenshilove Studios LLC<br>&#128712; 
		<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10511.what-is-candyfloss">ABOUT</a> 
		| &#128464; <a href="https://toyhou.se/~world/53663.the-candyfloss/page/10514.species-and-group-rules">TOS</a> 
		| &#128401; <a href="staffinformation.html">STAFF</a> 
		| &#128490; <a href="https://toyhou.se/~world/53663.the-candyfloss/page/88594.candyfloss-discord">DISCORD</a> 
		| &#8962;<a href="https://toyhou.se/~world/53663.the-candyfloss">TOYHOU.SE
	</center>
`;
  }
}
customElements.define('main-footer', Footer);