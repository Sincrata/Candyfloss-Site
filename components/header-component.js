class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `


<div class="header-box">
<a href="index.html"><img src="logos/logo.gif"></a>
</div>
<div id="nav-bar">
<div class="stripe"></div>

<!----------NAV MENU ----------->
<nav>
	<ul id="button-bar">
		<li id="nav1">
			<div class="dropdown" >
				<a>World</a>
				<div class="dropdown-content" id="nav1">
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			       	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			</div>
            		</div>
            	</li> 
		<li id="nav2">
			<div class="dropdown" >
				<a>World</a>
				<div class="dropdown-content" id="nav2">
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			       	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			</div>
            		</div>
            	</li> 
		<li id="nav3">
			<div class="dropdown" >
				<a>World</a>
				<div class="dropdown-content" id="nav3">
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			       	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			</div>
            		</div>
            	</li> 
		<li id="nav4">
			<div class="dropdown" >
				<a>World</a>
				<div class="dropdown-content" id="nav4">
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			       	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			</div>
            		</div>
            	</li> 
		<li id="nav5">
			<div class="dropdown" >
				<a>World</a>
				<div class="dropdown-content" id="nav5">
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			       	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			</div>
            		</div>
            	</li> 
		<li id="nav6">
			<div class="dropdown" >
				<a>World</a>
				<div class="dropdown-content" id="nav6">
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			       	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			</div>
            		</div>
            	</li> 
		<li id="nav7">
			<div class="dropdown" >
				<a>World</a>
				<div class="dropdown-content" id="nav7">
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			       	<a href="https://toyhou.se/~world/53663.the-candyfloss">World</a>
            			</div>
            		</div>
            	</li> 
        </ul>
</nav>
</div>

`;
  }
}
customElements.define('main-header', Header);



class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    // 1. Create a shadow root immediately
    this.attachShadow({ mode: 'open' });
    
    // 2. Render styles and HTML straight into the shadow DOM
    this.shadowRoot.innerHTML = `

    `;
  }
}