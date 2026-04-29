class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div class="stripe"></div>

<!----------NAV MENU ----------->
<nav>
	<ul id="button-bar">
		<li id="nav1">
			<div class="dropdown" >
				<a>Information</a>
				<div class="dropdown-content" id="nav1">
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10511.what-is-candyfloss">What is a Candyfloss?</a>
            			      	<a href="https://docs.google.com/document/d/1MLnlv7rogHVP3n2VtQXL5M_xmBK2y3khSGI_oFw5RKU/edit?usp=sharing">Rules and TOS</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss">Toyhou.se World</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/characters">Character Database</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10513.world-map">World Map</a>
            			       	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/158096.color-program">Color Picker Program</a>

            			</div>
            		</div>
            	</li> 
		<li id="nav2">
			<div class="dropdown" >
				<a>Your Floss</a>
				<div class="dropdown-content" id="nav2">
            			      	<a href="https://thecandyflossspecies.com/inventory">Inventory</a>
            			      	<a href="#">My Achievements</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/88594.candyfloss-discord">Discord Community</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10545.myo-center">MYO Center</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10546.redesign-center">Redesign Your Floss</a>
            			</div>
            		</div>
            	</li> 
		<li id="nav3">
			<div class="dropdown" >
				<a>Activities</a>
				<div class="dropdown-content" id="nav3">
            			      	<a href="#">Achievements</a>
            			      	<a href="#">Floss Gachapon</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/12732.july-event">Event</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/12731.july-holiday-opens-on-the-1st">Featured Clans</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10513.world-map">Explore Caramella</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/96567.dollmakers">Dollmakers Randomizers Quizzes</a>		      	
            			       	
            			</div>
            		</div>
            	</li> 
		<li id="nav4">
			<div class="dropdown" >
				<a>Shops</a>
				<div class="dropdown-content" id="nav4">
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/bulletins">Adopt a Floss</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10548.petpet-shop">Petpet Shop</a>
            			      	<a href="https://toyhou.se/~forums/36602.prompt-prizes/286717.prompt-prize-counter">Prize Counter</a>
            			        	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10547.base-shop">Base Shop</a>
            			       	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/86288.bt">Clothing Boutique</a>
            			       	<a href="https://toyhou.se/~forums/20970.community-commissions">Community Commissions</a>
            			</div>
            		</div>
            	</li> 
		<li id="nav5">
			<div class="dropdown" >
				<a>General Traits</a>
				<div class="dropdown-content" id="nav5">
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10533.general-information">General Anatomy</a>
            			       	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10540.add-on-traits">Add Ons</a>
            			       	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/54962.x">Coat Types</a>
				</div>
            		</div>
            	</li> 
		<li id="nav6">
			<div class="dropdown" >
				<a>Flavors</a>
				<div class="dropdown-content" id="nav6">
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10534.popfloss">Popfloss</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10535.sugarfloss">Sugarfloss</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10538.trufflefloss">Trufflefloss</a>
            			       	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10539.peppermintfloss">Peppermintfloss</a>
            			       	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/11450.taffyfloss">Taffyfloss</a>
            			       	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/27139.x">Brittlefloss</a>
            			       	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/47753.sourfloss">Sourfloss</a>
            			       	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/70295.honeyfloss">Honeyfloss</a>
            			       	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/128716.twww">Twizzlefloss</a>
            			       	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/181919.mallowfloss">Mallowfloss</a>
            			</div>
            		</div>
            	</li> 
		<li id="nav7">
			<div class="dropdown" >
				<a>Clans</a>
				<div class="dropdown-content" id="nav7">
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10531.kappa-clan">Kappa Clan</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/27140.omega">Omega Clan</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10528.mu-clan">Mu Clan</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10532.psi-clan">Psi Clan</a>
           			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/120070.eta">Eta Clan</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10520.alpha-clan">Alpha Clan</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10521.gamma-clan">Gamma Clan</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10525.delta-clan">Delta Clan</a>
           			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10529.nu-clan">Nu Clan</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/70294.chi-clan">Chi Clan</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10522.beta-clan">Beta Clan</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10530.phi-clan">Phi Clan</a>
               			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10526.zeta-clan">Zeta Clan</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10523.theta-clan">Thata Clan</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10524.epsilon-clan">Epsilon Clan</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/11451.rho-clan">Rho Clan</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10589.lambda-clan">Lambda Clan</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/47752.sigma-clan">Sigma Clan</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/128717.xxxxxxxxxxxomi">Omicron Clan</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/160622.eataf-clan">Eataf Clan</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/10527.iota-clan">Iota Clan</a>
            			      	<a href="https://toyhou.se/~world/53663.the-candyfloss/page/181918.miden-clan">Miden Clan</a>
            		         </div>
            		</div>
            	</li> 
        </ul>
</nav>

`;
  }
}
customElements.define('nav-bar', Nav);