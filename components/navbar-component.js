class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
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

`;
  }
}
customElements.define('nav-bar', Nav);