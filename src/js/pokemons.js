
const $cardFuego = document.querySelector('.card-Fuego'),
        $cardAgua = document.querySelector('.card-Agua'),
        $cardPlanta = document.querySelector('.card-planta'),
        $cardTierra = document.querySelector('.card-tierra'),
        $cardRoca = document.querySelector('.card-roca'),
        $cardVolador = document.querySelector('.card-volador'),
        $cardElectrico = document.querySelector('.card-electrico'),
        $cardDragon = document.querySelector('.card-dragon'),
        $cardBicho = document.querySelector('.card-bicho'),
        $cardVeneno = document.querySelector('.card-veneno'),
        $cardHielo = document.querySelector('.card-hielo'),
        $cardHada = document.querySelector('.card-hada'),
        $cardLucha = document.querySelector('.card-lucha'),
        $cardFantasma = document.querySelector('.card-fantasma'),
        $cardNormal = document.querySelector('.card-normal'),
        $cardPsiquico = document.querySelector('.card-psiquico'),
        $cardAcero = document.querySelector('.card-acero'),
        $cardSiniestro = document.querySelector('.card-siniestro')
        
//-----------------// Card Pokemon //------------------//

const $templateFuego = document.getElementById('template-fuego').content,
        $templateAgua = document.getElementById('template-agua').content,
        $templatePlanta = document.getElementById('template-planta').content,
        $templateTierra = document.getElementById('template-tierra').content,
        $templateRoca = document.getElementById('template-roca').content,
        $templateVolador = document.getElementById('template-volador').content,
        $templateElectrico = document.getElementById('template-electrico').content,
        $templateDragon = document.getElementById('template-dragon').content,
        $templateBicho = document.getElementById('template-bicho').content,
        $templateVeneno = document.getElementById('template-veneno').content,
        $templateHielo = document.getElementById('template-hielo').content,
        $templateHada = document.getElementById('template-hada').content,
        $templateLucha = document.getElementById('template-lucha').content,
        $templateFantasma = document.getElementById('template-fantasma').content,
        $templateNormal = document.getElementById('template-normal').content,
        $templatePsiquico = document.getElementById('template-psiquico').content,
        $templateAcero = document.getElementById('template-acero').content,
        $templateSiniestro = document.getElementById('template-siniestro').content

//-----------------// Template Pokemon //------------------//
const cardTypeAll = {

    cardTypeFuego :[
        {   
            title: "Arcanine",
            img:"build/img/arcanine_cuadro.jpg",
            a : "pokemon/arcanine.html"
        }, 
        {   
            title: "Talonflame",
            img:"build/img/talonflame_cuadro.jpg",
            a : "#"
        }, 
        {   
            title: "Torkoal",
            img:"build/img/torkoal_cuadro.jpg",
            a : "#"
        }, 
        {   
            title: "Armarouge",
            img:"build/img/armarouge_cuadro.jpg",
            a : "#"
        }, 
    
            ],
    cardTypeAgua :[
                {   
                    title: "Dondozo",
                    img:"build/img/Dondozo_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Palafin",
                    img:"build/img/palafin_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Pelipper",
                    img:"build/img/pelipper_cuadro.jpg"
                }, 
                {   
                    title: "Gyarados",
                    img:"build/img/gyarados_cuadro.jpg"
                },
            ],
    cardTypePlanta:[
                {   
                    title: "Breloom",
                    img:"build/img/breloom_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Meowscara",
                    img:"build/img/meowscarada_cuadro.jpg"
                }, 
                {   
                    title: "Abomasnow",
                    img:"build/img/abomasnow_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Tsareena",
                    img:"build/img/Tsareena_cuadro.jpg",
                    a : "#"
                },
             ],
    cardTypeTierra :[
                {   
                    title: "Krookodile",
                    img:"build/img/krookodile_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Dugtrio",
                    img:"build/img/dugtrio_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Donphan",
                    img:"build/img/donphan_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Hippowdon",
                    img:"build/img/hippowdon_cuadro.jpg",
                    a : "#"
                },                
            ],
    cardTypeRoca :[
                {   
                    title: "Coalossal",
                    img:"build/img/coalossal_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Garganacl",
                    img:"build/img/garganacl_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Tyranitar",
                    img:"build/img/tyranitar_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Stonjourner",
                    img:"build/img/stonjourner_cuadro.jpg",
                    a : "#"
                },                
            ],
    cardTypeVolador :[
                {   
                    title: "Corviknight",
                    img:"build/img/corviknight_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Flamigo",
                    img:"build/img/flamigo_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Bombirdier",
                    img:"build/img/bombirdier_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Noivern",
                    img:"build/img/noivern_cuadro.jpg",
                    a : "#"
                },                
            ],
    cardTypeElectrico :[
                {   
                    title: "Wash Rotom",
                    img:"build/img/wash_rotom_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Heat Rotom",
                    img:"build/img/heat_rotom_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Mow Rotom",
                    img:"build/img/mow_rotom_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Pawmot",
                    img:"build/img/pawmot_cuadro.jpg",
                    a : "#"
                },                
            ],
    cardTypeDragon :[
                {   
                    title: "Garchomp",
                    img:"build/img/garchomp_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Goodra",
                    img:"build/img/goodra_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Salamence",
                    img:"build/img/salamence_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Dragonite",
                    img:"build/img/dragonite_cuadro.jpg",
                    a : "#"
                },                
            ],
    cardTypeBicho :[
                {   
                    title: "Scizor",
                    img:"build/img/scizor_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Volcarona",
                    img:"build/img/volcarona_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Forretress",
                    img:"build/img/forretress_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Venomoth",
                    img:"build/img/venomoth_cuadro.jpg",
                    a : "#"
                },                
            ],
    cardTypeVeneno :[
                {   
                    title: "Toxicroak",
                    img:"build/img/toxicroak_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Muk",
                    img:"build/img/muk_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Seviper",
                    img:"build/img/seviper_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Toxapex",
                    img:"build/img/toxapex_cuadro.jpg",
                    a : "#"
                },                
            ],
    cardTypeHielo :[
                {   
                    title: "Glaceon",
                    img:"build/img/glaceon_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Eiscue",
                    img:"build/img/eiscue_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Froslass",
                    img:"build/img/froslass_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Cetitan",
                    img:"build/img/cetitan_cuadro.jpg",
                    a : "#"
                },                
            ],
    cardTypeHada :[
                {   
                    title: "Florges",
                    img:"build/img/florges_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Sylveon",
                    img:"build/img/sylveon_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Tinkaton",
                    img:"build/img/tinkaton_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Dachsbun",
                    img:"build/img/dachsbun_cuadro.jpg",
                    a : "#"
                },                
            ],
    cardTypeLucha :[
                {   
                    title: "Annihilape",
                    img:"build/img/annihilape_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Falinks",
                    img:"build/img/falinks_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Hariyama",
                    img:"build/img/hariyama_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Lucario",
                    img:"build/img/lucario_cuadro.jpg",
                    a : "#"
                },                
            ],
    cardTypeFantasma :[
                {   
                    title: "Gengar",
                    img:"build/img/gengar_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Mimikyu",
                    img:"build/img/mimikyu_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Polteageist",
                    img:"build/img/polteageist_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Spiritomb",
                    img:"build/img/spiritomb_cuadro.jpg",
                    a : "#"
                },                
            ],
    cardTypeNormal :[
                {   
                    title: "Chansey",
                    img:"build/img/chansey_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Farigiraf",
                    img:"build/img/farigiraf_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Maushold",
                    img:"build/img/maushold_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Oranguru",
                    img:"build/img/oranguru_cuadro.jpg",
                    a : "#"
                },                
            ],
    cardTypePsiquico :[
                {   
                    title: "Gardevoir",
                    img:"build/img/gardevoir_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Gothitelle",
                    img:"build/img/gothitelle_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Hatterene",
                    img:"build/img/hatterene_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Indeedee",
                    img:"build/img/indeedeeF_cuadro.jpg",
                    a : "#"
                },                
            ],
    cardTypeAcero :[
                {   
                    title: "Bronzong",
                    img:"build/img/bronzong_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Copperajah",
                    img:"build/img/copperajah_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Klefki",
                    img:"build/img/klefki_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Revavroom",
                    img:"build/img/revavroom_cuadro.jpg",
                    a : "#"
                },                
            ],
    cardTypeSiniestro :[
                {   
                    title: "Grimmsnarl",
                    img:"build/img/grimmsnarl_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Hydreigon",
                    img:"build/img/hydreigon_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Kingambit",
                    img:"build/img/kingambit_cuadro.jpg",
                    a : "#"
                }, 
                {   
                    title: "Weavile",
                    img:"build/img/weavile_cuadro.jpg",
                    a : "#"
                },                
            ],
            
}


function createCards(cardData, $cardContainer, templateId) {
    const $template = document.getElementById(templateId).content,
            $fragment = document.createDocumentFragment();

    cardData.forEach((e) =>{
        $template.querySelector('img').setAttribute("src",e.img);
        $template.querySelector('img').setAttribute('alt',e.title);
        $template.querySelector('a').setAttribute('href',e.a);
        $template.querySelector('figcaption').textContent = e.title;

        let $clone = document.importNode($template,true);
        $fragment.appendChild($clone);
    });
    $cardContainer.appendChild($fragment);
}

createCards(cardTypeAll.cardTypeFuego, $cardFuego,'template-fuego');
createCards(cardTypeAll.cardTypeAgua, $cardAgua, 'template-agua');
createCards(cardTypeAll.cardTypePlanta, $cardPlanta,'template-planta');
createCards(cardTypeAll.cardTypeTierra, $cardTierra,'template-tierra');
createCards(cardTypeAll.cardTypeRoca, $cardRoca,'template-roca');
createCards(cardTypeAll.cardTypeVolador, $cardVolador,'template-volador');
createCards(cardTypeAll.cardTypeElectrico, $cardElectrico,'template-electrico');
createCards(cardTypeAll.cardTypeDragon, $cardDragon,'template-dragon');
createCards(cardTypeAll.cardTypeBicho, $cardBicho,'template-bicho');
createCards(cardTypeAll.cardTypeVeneno, $cardVeneno,'template-veneno');
createCards(cardTypeAll.cardTypeHielo, $cardHielo,'template-hielo');
createCards(cardTypeAll.cardTypeHada, $cardHada,'template-hada');
createCards(cardTypeAll.cardTypeLucha, $cardLucha,'template-lucha');
createCards(cardTypeAll.cardTypeFantasma, $cardFantasma,'template-fantasma');
createCards(cardTypeAll.cardTypeNormal, $cardNormal,'template-normal');
createCards(cardTypeAll.cardTypePsiquico, $cardPsiquico,'template-psiquico');
createCards(cardTypeAll.cardTypeAcero, $cardAcero,'template-acero');
createCards(cardTypeAll.cardTypeSiniestro, $cardSiniestro,'template-siniestro');



// ----- Type fuego
// const $cardFuego = document.querySelector('.card-Fuego'),
//     $templateFuego = document.getElementById('template-fuego').content,
//     $fragmentFuego = document.createDocumentFragment(),
//      cardTypeFuego =[
// //         {   
// //             title: "Arcanine",
// //             img:"build/img/arcanine_cuadro.jpg",
// //             a : "#"
// //         }, 
// //         {   
// //             title: "Talonflame",
// //             img:"build/img/talonflame_cuadro.jpg",
// //             a : "#"
// //         }, 
// //         {   
// //             title: "Torkoal",
// //             img:"build/img/torkoal_cuadro.jpg",
// //             a : "#"
// //         }, 
// //         {   
// //             title: "Armarouge",
// //             img:"build/img/armarouge_cuadro.jpg",
// //             a : "#"
// //         }, 
 
//      ];

//     cardTypeFuego.forEach((e) =>{
//         $templateFuego.querySelector('img').setAttribute("src",e.img);
//         $templateFuego.querySelector('img').setAttribute('alt',e.title);
//         $templateFuego.querySelector('a').setAttribute('href',e.a);
//         $templateFuego.querySelector('figcaption').textContent = e.title;

//        let $clone = document.importNode($templateFuego,true);
//        $fragmentFuego.appendChild($clone);
//     });
//     $cardFuego.appendChild($fragmentFuego);

// // ----- Type Agua

// const $cardAgua = document.querySelector('.card-Agua'),
//       $templateAgua = document.getElementById('template-agua').content,
//       $fragmentAgua = document.createDocumentFragment(),

//     cardTypeAgua =[
//     {   
//         title: "Dondozo",
//         img:"build/img/Dondozo_cuadro.jpg",
//         a : "#"
//     }, 
//     {   
//         title: "Palafin",
//         img:"build/img/palafin_cuadro.jpg",
//         a : "#"
//     }, 
//     {   
//         title: "Pelipper",
//         img:"build/img/pelipper_cuadro.jpg"
//     }, 
//     {   
//         title: "Gyarados",
//         img:"build/img/gyarados_cuadro.jpg"
//     }, 

//     ];

//     cardTypeAgua.forEach((e) =>{
//         $templateAgua.querySelector('img').setAttribute("src",e.img);
//         $templateAgua.querySelector('img').setAttribute('alt',e.title);
//         $templateAgua.querySelector('a').setAttribute('href',e.a);
//         $templateAgua.querySelector('figcaption').textContent = e.title;


//     let $clone = document.importNode($templateAgua,true);
//     $fragmentAgua.appendChild($clone);
//     });

//     $cardAgua.appendChild($fragmentAgua);

// // --------- Type planta


//     $fragmentPlanta = document.createDocumentFragment(),

     

//     cardTypePlanta.forEach((e) =>{
//         $templatePlanta.querySelector('img').setAttribute("src",e.img);
//         $templatePlanta.querySelector('img').setAttribute('alt',e.title);
//         $templatePlanta.querySelector('a').setAttribute('href',e.a);
//         $templatePlanta.querySelector('figcaption').textContent = e.title;

//         let $clone = document.importNode($templatePlanta,true);
//         $fragmentPlanta.appendChild($clone);
//     });

//     $cardPlanta.appendChild($fragmentPlanta);

// // --------- Type planta


//     $fragmentTierra = document.createDocumentFragment(),

//     

//     cardTypeTierra.forEach((e) =>{
//         $templateTierra.querySelector('img').setAttribute("src",e.img);
//         $templateTierra.querySelector('img').setAttribute('alt',e.title);
//         $templateTierra.querySelector('a').setAttribute('href',e.a);
//         $templateTierra.querySelector('figcaption').textContent = e.title;

//         let $clone = document.importNode($templateTierra,true);
//         $fragmentTierra.appendChild($clone);
//     });

//     $cardTierra.appendChild($fragmentTierra);
//---------------------------------------------------------

