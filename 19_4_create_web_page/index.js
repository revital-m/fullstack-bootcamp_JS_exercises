const myBody = document.body;
myBody.style.display = 'flex';
myBody.style.flexDirection = 'column';
myBody.style.justifyContent = 'center';
myBody.style.alignItems = 'center';
myBody.style.backgroundColor = 'rgb(54, 0, 68)';

const newH1 = document.createElement('h1');
newH1.innerText = 'My New Website';
newH1.style.color = 'rgb(203, 163, 212)';
newH1.style.paddingTop = '15px';
myBody.appendChild(newH1);

const newH3 = document.createElement('h3');
newH3.innerText = 'Useing Only JS!';
newH3.style.color = 'rgb(185, 185, 185)';
myBody.appendChild(newH3);


const newGalery = document.createElement('main');
newGalery.style.display = 'grid';
newGalery.style.gridTemplateColumns = 'repeat(8,1fr)';
newGalery.style.gridGap = '15px';

// for (let i = 0; i < 24; i++) {
//     const newdiv = document.createElement('div');
//     newdiv.style.height = '134px';
//     newdiv.style.width = '139px';
//     newdiv.style.backgroundColor= 'rgb(216, 175, 255)';
//     newdiv.style.cursor= 'pointer';
//     newGalery.appendChild(newdiv);
// }

//!  --------------------imgs-----------------------------
const newImg18= document.createElement('img');
newImg18.setAttribute('src','./img/nyc-4.jpg');
newImg18.setAttribute('alt','nyc');
// newImg18.style.display = 'none';
newGalery.appendChild(newImg18);

const newImg1= document.createElement('img');
newImg1.setAttribute('src','./img/boston-4.jpg');
newImg1.setAttribute('alt','boston');
// newImg1.style.display = 'none';
newGalery.appendChild(newImg1);

const newImg2= document.createElement('img');
newImg2.setAttribute('src','./img/canada-4.jpg');
newImg2.setAttribute('alt','canada');
// newImg2.style.display = 'none';
newGalery.appendChild(newImg2);

const newImg22= document.createElement('img');
newImg22.setAttribute('src','./img/san-francisco-2.jpg');
newImg22.setAttribute('alt','san-francisco');
// newImg22.style.display = 'none';
newGalery.appendChild(newImg22);

const newImg3= document.createElement('img');
newImg3.setAttribute('src','./img/chicago-3.jpg');
newImg3.setAttribute('alt','chicago');
// newImg3.style.display = 'none';
newGalery.appendChild(newImg3);

const newImg4= document.createElement('img');
newImg4.setAttribute('src','./img/hawaii-2.jpg');
newImg4.setAttribute('alt','hawaii');
// newImg4.style.display = 'none';
newGalery.appendChild(newImg4);

const newImg17= document.createElement('img');
newImg17.setAttribute('src','./img/london-4.jpg');
newImg17.setAttribute('alt','london');
// newImg17.style.display = 'none';
newGalery.appendChild(newImg17);

const newImg5= document.createElement('img');
newImg5.setAttribute('src','./img/london-4.jpg');
newImg5.setAttribute('alt','london');
// newImg5.style.display = 'none';
newGalery.appendChild(newImg5);

const newImg6= document.createElement('img');
newImg6.setAttribute('src','./img/nyc-4.jpg');
newImg6.setAttribute('alt','nyc');
// newImg6.style.display = 'none';
newGalery.appendChild(newImg6);

const newImg21= document.createElement('img');
newImg21.setAttribute('src','./img/philadelphia-4.jpg');
newImg21.setAttribute('alt','philadelphia');
// newImg21.style.display = 'none';
newGalery.appendChild(newImg21);

const newImg7= document.createElement('img');
newImg7.setAttribute('src','./img/nyc-8.jpg');
newImg7.setAttribute('alt','nyc');
// newImg7.style.display = 'none';
newGalery.appendChild(newImg7);

const newImg14= document.createElement('img');
newImg14.setAttribute('src','./img/canada-4.jpg');
newImg14.setAttribute('alt','canada');
// newImg14.style.display = 'none';
newGalery.appendChild(newImg14);

const newImg16= document.createElement('img');
newImg16.setAttribute('src','./img/hawaii-2.jpg');
newImg16.setAttribute('alt','hawaii');
// newImg16.style.display = 'none';
newGalery.appendChild(newImg16);

const newImg8= document.createElement('img');
newImg8.setAttribute('src','./img/paris-3.jpg');
newImg8.setAttribute('alt','paris');
// newImg8.style.display = 'none';
newGalery.appendChild(newImg8);

const newImg9= document.createElement('img');
newImg9.setAttribute('src','./img/philadelphia-4.jpg');
newImg9.setAttribute('alt','philadelphia');
// newImg9.style.display = 'none';
newGalery.appendChild(newImg9);

const newImg19= document.createElement('img');
newImg19.setAttribute('src','./img/nyc-8.jpg');
newImg19.setAttribute('alt','nyc');
// newImg19.style.display = 'none';
newGalery.appendChild(newImg19);

const newImg23= document.createElement('img');
newImg23.setAttribute('src','./img/uruguay-2.jpg');
newImg23.setAttribute('alt','uruguay');
// newImg23.style.display = 'none';
newGalery.appendChild(newImg23);

const newImg20= document.createElement('img');
newImg20.setAttribute('src','./img/paris-3.jpg');
newImg20.setAttribute('alt','paris');
// newImg20.style.display = 'none';
newGalery.appendChild(newImg20);

const newImg15= document.createElement('img');
newImg15.setAttribute('src','./img/chicago-3.jpg');
newImg15.setAttribute('alt','chicago');
// newImg15.style.display = 'none';
newGalery.appendChild(newImg15);

const newImg10= document.createElement('img');
newImg10.setAttribute('src','./img/san-francisco-2.jpg');
newImg10.setAttribute('alt','san-francisco');
// newImg10.style.display = 'none';
newGalery.appendChild(newImg10);

const newImg24= document.createElement('img');
newImg24.setAttribute('src','./img/paris-4.jpg');
newImg24.setAttribute('alt','paris');
// newImg24.style.display = 'none';
newGalery.appendChild(newImg24);

const newImg11= document.createElement('img');
newImg11.setAttribute('src','./img/uruguay-2.jpg');
newImg11.setAttribute('alt','uruguay');
// newImg11.style.display = 'none';
newGalery.appendChild(newImg11);

const newImg13= document.createElement('img');
newImg13.setAttribute('src','./img/boston-4.jpg');
newImg13.setAttribute('alt','boston');
// newImg13.style.display = 'none';
newGalery.appendChild(newImg13);

const newImg12= document.createElement('img');
newImg12.setAttribute('src','./img/paris-4.jpg');
newImg12.setAttribute('alt','paris');
// newImg12.style.display = 'none';
newGalery.appendChild(newImg12);

myBody.appendChild(newGalery);
