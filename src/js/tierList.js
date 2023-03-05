
const tdImagenesS = document.getElementById('tier-S'),
  tdImagenesA = document.getElementById('tier-A'),
  tdImagenesB = document.getElementById('tier-B'),
  tdImagenesC = document.getElementById('tier-C'),
  tdImagenesD = document.getElementById('tier-D'),
  tdImagenesF = document.getElementById('tier-F');

fetch('src/json/tier.json')
  .then(response => response.json())
  .then(data => {
    function insertarImagenes(rango, tdImagenes) {
      const fragment = new DocumentFragment();
      const imagenesRango = data[rango].map(({ title, img, a }) => {
        const figureElement = document.createElement('figure');
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.alt = title;
        imgElement.title = title;
        figureElement.append(imgElement);
        const figcaptionElement = document.createElement('figcaption');
        figcaptionElement.textContent = title;
        figureElement.append(figcaptionElement);
        return figureElement;
      });
      fragment.append(...imagenesRango);
      tdImagenes.append(fragment);
    }

    insertarImagenes('RangoS', tdImagenesS);
    insertarImagenes('RangoA', tdImagenesA);
    insertarImagenes('RangoB', tdImagenesB);
    insertarImagenes('RangoC', tdImagenesC);
    insertarImagenes('RangoD', tdImagenesD);
    insertarImagenes('RangoF', tdImagenesF);
  });

