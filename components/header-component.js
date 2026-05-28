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
background-position:${chosenImage.position};
margin:0px;
background-image:url('Banners/${chosenImage.file}')">
 <a href="index.html"><img src="logos/logo.gif"></a>
</div>
`;
  }
}
customElements.define('main-header', Header);

//------------------------------------- IMAGE ROTATION-----------------------------------------
	  const currentMonth = new Date().getMonth();
	  const monthlyContent = [
    //JANUARY
    {
      imgPool: [
        { file: "EXAMPLE", position: "100%" },
      ],
    },
     //FEBRUARY
    {
      imgPool: [
        { file: "EXAMPLE", position: "100%" },
      ],
    },
    //MARCH
    {
      imgPool: [
        { file: "EXAMPLE", position: "100%" },
      ],
    },
    //APRIL
    {
      imgPool: [
        { file: "EXAMPLE", position: "100%" },
      ],
    },
        //MAY
    {
            imgPool: [
        { file: "epsilon3.png", position: "top center" },
        { file: "epsilon1flip.png", position: "center" },
        { file: "epsilon2.png", position: "top center" },
        { file: "epsilon6flip.png", position: "top right" },
        { file: "bookclub.png", position: "center" },
        { file: "epsilon5flip.png", position: "top" }
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
        { file: "EXAMPLE", position: "100%" },
      ],
    },
        //AUGUST
    {
      imgPool: [
        { file: "EXAMPLE", position: "100%" },
      ],
    },
    //SEPTEMBER
    {
      imgPool: [
        { file: "EXAMPLE", position: "100%" },
      ],
    },
    //OCTOBER
    {
      imgPool: [
        { file: "EXAMPLE", position: "100%" },
      ],
    },
    //NOVEMBER
    {
      imgPool: [
        { file: "EXAMPLE", position: "100%" },
      ],
    },
    //DECEMBER
    {
      imgPool: [
        { file: "EXAMPLE", position: "100%" },
      ],
    },
  ];

  const currentData = monthlyContent[currentMonth];
  const randomIndex = Math.floor(Math.random() * currentData.imgPool.length);
  const chosenImage = currentData.imgPool[randomIndex];

   document.getElementById('banner-img').innerHTML = `
   
    <div class="card" style="background-image: url('Banners/${chosenImage.file}'); background-position: ${chosenImage.position};">
    </div>
    </div>
    </div>
    </div>
  `;