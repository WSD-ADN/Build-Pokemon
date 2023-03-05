const body = document.querySelector('body'),
  sidebar = body.querySelector('.sidebar'),
  toggle = body.querySelector('.toggle'),
  modeSwitch = body.querySelector('.toggle-switch'),
  modeText = document.querySelector('.mode-text'),
  subNav = document.querySelector('.showOpen'),
  subMenuImg = subNav,
  subNav2 = document.querySelectorAll('.showOpen')[1],     
  subMenu2 = subNav2 ? subNav2.parentNode.nextElementSibling : null,
  subMenuImg2 = subNav2;


//----- Abrir y cerrar el toggle

if (sidebar) {
  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
    const toggleImg = document.querySelector('.toggle');
    const menuBar = document.querySelector('.menu-bar')
    
    if (sidebar.classList.contains('close')) {
      menuBar.classList.remove('show');
      subMenu.classList.remove('closeSub');
      if (subMenu2) {
        subMenuImg2.src = "build/img/flechaMaster.png";
        subMenu2.classList.remove('closeSub');
      }
      toggleImg.src = "build/img/flecha.png";
      subMenuImg.src = "build/img/flechaL.png";
      
    } else {
      toggleImg.src = "build/img/flechaOpen.png";
      menuBar.classList.add('show');
    }
  });
}

//---- mostrar el dropdown
if (subNav) {
subNav.addEventListener('click', ()=>{
  subMenu.classList.toggle('closeSub');
  if (subMenu.classList.contains('closeSub')) {
    subMenuImg.src = "build/img/flechaOpenL.png";
  } else {
    subMenuImg.src = "build/img/flechaL.png";
  }
})
}
if (subNav2) {
subNav2.addEventListener('click', ()=>{
  subMenu2.classList.toggle('closeSub');
  if (subMenu2.classList.contains('closeSub')) {
    subMenuImg2.src = "build/img/flechaOpenM.png";
  } else {
    subMenuImg2.src = "build/img/flechaMaster.png";
  }
})
}
//------------------ Dark Menu

modeSwitch.addEventListener('click', ()=>{
  body.classList.toggle('dark');

  if(body.classList.contains('dark')){
      modeText.innerText = 'Fire Mode'
  }else{
      modeText.innerText = 'Dark Mode'
  }
});


//-------- Li SubMenu Dinamico
const menuTemplate = document.querySelector('#menu-template');
const subMenu = document.querySelector('.sub-menu');
const subContenedor = subMenu.querySelector('.sub-contenedor');

const menuData = [
  {
    href: "#fuego",
    src: "build/img/logo_type_fuego.png",
    alt: "icono fuego",
    target: "pokemon-fuego"
  },
  {
    href: "#agua",
    src: "build/img/logo_type_agua.png",
    alt: "icono agua",
    target: "pokemon-agua"
  },
  {
    href: "#planta",
    src: "build/img/logo_type_planta.png",
    alt: "icono planta",
    target: "pokemon-planta"
  },
  {
    href: "#tierra",
    src: "build/img/logo_type_tierra.png",
    alt: "icono tierra",
    target: "pokemon-tierra"
  },
  {
    href: "#roca",
    src: "build/img/logo_type_roca.png",
    alt: "icono roca",
    target: "pokemon-roca"
  },
  {
    href: "#volador",
    src: "build/img/logo_type_volador.png",
    alt: "icono volador",
    target: "pokemon-volador"
  },
  {
    href: "#electrico",
    src: "build/img/logo_type_trueno.png",
    alt: "icono electrico",
    target: "pokemon-electrico"
  },
  {
    href: "#dragon",
    src: "build/img/logo_type_dragon.png",
    alt: "icono dragon",
    target: "pokemon-dragon"
  },
  {
    href: "#bicho",
    src: "build/img/logo_type_bicho.png",
    alt: "icono bicho",
    target: "pokemon-bicho"
  },
  {
    href: "#veneno",
    src: "build/img/logo_type_veneno.png",
    alt: "icono veneno",
    target: "pokemon-veneno"
  },
  {
    href: "#hielo",
    src: "build/img/logo_type_hielo.png",
    alt: "icono hielo",
    target: "pokemon-hielo"
  },
  {
    href: "#hada",
    src: "build/img/logo_type_hada.png",
    alt: "icono hada",
    target: "pokemon-hada"
  },
  {
    href: "#lucha",
    src: "build/img/logo_type_lucha.png",
    alt: "icono lucha",
    target: "pokemon-lucha"
  },
  {
    href: "#fantasma",
    src: "build/img/logo_type_fantasma.png",
    alt: "icono fantasma",
    target: "pokemon-fantasma"
  },
  {
    href: "#normal",
    src: "build/img/logo_type_normal.png",
    alt: "icono normal",
    target: "pokemon-normal"
  },
  {
    href: "#psiquico",
    src: "build/img/logo_type_psiquico.png",
    alt: "icono psiquico",
    target: "pokemon-psiquico"
  },
  {
    href: "#acero",
    src: "build/img/logo_type_acero.png",
    alt: "icono acero",
    target: "pokemon-acero"
  },
  {
    href: "#siniestro",
    src: "build/img/logo_type_oscuridad.png",
    alt: "icono oscuridad",
    target: "pokemon-siniestro"
  },
]
if(menuTemplate) {

  menuData.forEach(menuItem => {
    const clone = menuTemplate.content.cloneNode(true);
    const a = clone.querySelector('a');
    const img = clone.querySelector('img');
    
    a.href = menuItem.href;
    img.src = menuItem.src;
    img.alt = menuItem.alt;
    
    a.addEventListener('click', function() {
      const targetContainer = document.querySelector(`#${menuItem.target}`);
      targetContainer.classList.toggle('template-hidden');
    });
    subContenedor.appendChild(clone);
  });
}
