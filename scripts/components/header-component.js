class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `


<div class="header-box">
</div>
<div id="head"
style="display: flex;
flex-direction: column;
justify-content: flex-end;
height: 35vh;
width:100%;
background-size:cover;
background-position:${chosenImage2.position};
margin:0px;
background-image:url('/images/banners/${chosenImage2.file}')">
 <a href="/index.html"><img src="/images/logos/logo.gif" style="max-width:90%; height: auto;"></a>
</div>
`;
  }
}
customElements.define('main-header', Header);

//------------------------------------- IMAGE ROTATION-----------------------------------------
const currentMonth2 = new Date().getMonth();
const monthlyContent2 = [
  //JANUARY
  {
    imgPool: [
      { file: "beta1flip.png", position: "100%" },
      { file: "beta2.png", position: "100%" },
      { file: "craft.png", position: "100%" },
      { file: "craft2.jpg", position: "100%" },
      { file: "robots.png", position: "100%" },
      { file: "beta3crop.png", position: "top 100%" },
      { file: "beta4.png", position: "100%" },
      { file: "sigma1.png", position: "100%" },
      { file: "sigma2flip.png", position: "100%" },
      { file: "sigma3.png", position: "100%" },
      { file: "sigma4flip.png", position: "100%" },
    ],
  },
  //FEBRUARY
  {
    imgPool: [
      { file: "mu1.png", position: "100%" },
      { file: "mu2flip.png", position: "100%" },
      { file: "mu3.png", position: "100%" },
      { file: "mu4.png", position: "100%" },
      { file: "nu1crop.png", position: "top 100%" },
      { file: "nu2.jpg", position: "top 100%" },
      { file: "nu3.png", position: "100%" },
      { file: "nu4flip.png", position: "100%" },
      { file: "mu5.png", position: "100%" },
      { file: "mu6flip.png", position: "100%" },
      { file: "mu7.png", position: "100%" },
      { file: "nu5.png", position: "100%" },
      { file: "cupid.png", position: "top 100%" },
    ],
  },
  //MARCH
  {
    imgPool: [
      { file: "party1.png", position: "top left" },
      { file: "party2flip.png", position: "top 100%" },
      { file: "party3flip.png", position: "top 100%" },
      { file: "birthday1.png", position: "100%" },
      { file: "gamma1flip.png", position: "100%" },
      { file: "gamma2crop.png", position: "top 100%" },
      { file: "gamma3.png", position: "bottom right" },
      { file: "omega1flip.png", position: "100%" },
      { file: "omega2flip.png", position: "100%" },
      { file: "omega3.png", position: "center right" },
    ],
  },
  //APRIL
  {
    imgPool: [
      { file: "war2flip.png", position: "100%" },
      { file: "eta1.png", position: "100%" },
      { file: "eta2flip.png", position: "top 100%" },
      { file: "eta3flip.png", position: "100%" },
      { file: "theta1flip.png", position: "100%" },
      { file: "theta2flip.png", position: "100%" },
      { file: "theta3flip.png", position: "100%" },
    ],
  },
  //MAY
  {
    imgPool: [
      { file: "epsilon3.png", position: "top center" },
      { file: "epsilon1flip.png", position: "center" },
      { file: "epsilon2.png", position: "top center" },
      { file: "Epsilon2.png", position: "top center" },
      { file: "Epsilon1flip.png", position: "center" },
      { file: "epsilon6flip.png", position: "top right" },
      { file: "bookclub.png", position: "center" },
      { file: "epsilon5flip.png", position: "top" },
      { file: "miden1.png", position: "100%" },
      { file: "miden2.png", position: "100%" }
    ],
  },
  //JUNE
  {
    imgPool: [
      { file: "rho1flip.png", position: "center right" },
      { file: "zero-gravity-edit.png", position: "top center" },
      { file: "rho2flip.png", position: "top 65%" },
      { file: "lambda1flip.png", position: "top 65%" },
      { file: "rho3.png", position: "left" },
      { file: "rho5flip.png", position: "top" },
      { file: "lambda2flip.png", position: "center right" },
      { file: "lambda3.png", position: "bottom right" },
      { file: "lambda4flip.png", position: "left" },
      { file: "lambda5flip.png", position: "right" },
      { file: "lambda7.png", position: "top" },
      { file: "lastsurvivor.png", position: "right" },
    ],
  },
  //JULY
  {
    imgPool: [
      { file: "lastsurvivor.png", position: "right" },
      { file: "lake-wide.png", position: "bottom 100%" },
      { file: "zero-gravity-edit.png", position: "top center" },
      { file: "lakeside-wide.png", position: "top 100%" },
      { file: "playground.png", position: "top 100%" },
      { file: "Summer1-wide.png", position: "top 100%" },
      { file: "war1.png", position: "top 100%" },
      { file: "paint-wide.png", position: "top 100%" },
      { file: "battlebanner.png", position: "top 100%" },
      { file: "lava.png", position: "top 100%" },
      { file: "eataf1-wide.png", position: "top 100%" },
      { file: "alpha1.png", position: "center 100%" },
      { file: "alpha2.png", position: "top 100%" },
      { file: "alpha3-wide.png", position: "center 100%" },
    ],
  },


  //AUGUST
  {
    imgPool: [
      { file: "kittens1flip.png", position: "100%" },
      { file: "kittens2.png", position: "100%" },
      { file: "kittens3flip.png", position: "100%" },
      { file: "omicron1flip.png", position: "100%" },
      { file: "phi1.png", position: "100%" },
      { file: "phi2flip.png", position: "100%" },
      { file: "phi3flip.png", position: "100%" },
      { file: "phi4 cropped.png", position: "top 100%" },
      { file: "omicron2flip.png", position: "100%" },
      { file: "phi5flipcrop.png", position: "top 100%" }
    ],
  },
  //SEPTEMBER
  {
    imgPool: [
      { file: "chi1flip.png", position: "100%" },
      { file: "chi2.png", position: "top 100%" },
      { file: "chi3flip.png", position: "top 100%" },
      { file: "chi4flip.png", position: "top 100%" },
      { file: "saint patrick.png", position: "top 100%" },
      { file: "iota1.png", position: "100%" },
      { file: "iota2crop.png", position: "top 100%" },
      { file: "iota3.png", position: "100%" },
      { file: "iota4.png", position: "top 100%" },
      { file: "iota5.png", position: "top 100%" },
    ],
  },
  //OCTOBER
  {
    imgPool: [
      { file: "halloween1flip.png", position: "100%" },
      { file: "halloween2flip.png", position: "100%" },
      { file: "halloween3flip.png", position: "100%" },
      { file: "halloween4flip.png", position: "100%" },
      { file: "halloween5flip.png", position: "top 100%" },
      { file: "halloween6flip.png", position: "100%" },
      { file: "halloween7.png", position: "100%" },
      { file: "delta1flip.png", position: "100%" },
      { file: "delta2flip.png", position: "top 100%" },
      { file: "delta3.png", position: "top 100%" },
      { file: "wizardflip.png", position: "100%" },
      { file: "occult1.png", position: "100%" },
    ],
  },
  //NOVEMBER
  {
    imgPool: [
      { file: "gachas.png", position: "100%" },
      { file: "heroes1flip.png", position: "100%" },
      { file: "kappa1.png", position: "100%" },
      { file: "kappa2flip.png", position: "100%" },
      { file: "kappa3.png", position: "top 100%" },
      { file: "kappa4flip.png", position: "100%" },
    ],
  },
  //DECEMBER
  {
    imgPool: [
      { file: "zeta1flip.png", position: "100%" },
      { file: "zeta2.png", position: "100%" }, 
      { file: "zeta3flip.png", position: "100%" },
      { file: "zeta4crop.png", position: "top 100%" },
      { file: "zeta5crop.png", position: "bottom right" },
      { file: "psi1flip.png", position: "100%" },
      { file: "psi2.png", position: "100%" },
      { file: "psi3.png", position: "top 100%" },
      { file: "psi4.png", position: "top 100%" },
      { file: "psi5.png", position: "top 100%" },
      { file: "winter1.png", position: "top 100%" },
      { file: "winter2flip.png", position: "top 100%" },
    ],
  },
];

const currentData2 = monthlyContent2[currentMonth2];
const randomIndex2 = Math.floor(Math.random() * currentData2.imgPool.length);
const chosenImage2 = currentData2.imgPool[randomIndex2];
