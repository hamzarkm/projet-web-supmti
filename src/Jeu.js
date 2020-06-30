import React from "react";

const pays = [
  "afghanistan",
  "albania",
  "algeria",
  "andorra",
  "angola",
  "argentina",
  "armenia",
  "australia",
  "austria",
  "azerbaijan",
  "bahamas",
  "bahrain",
  "bangladesh",
  "belarus",
  "belgium",
  "bolivia",
  "botswana",
  "brazil",
  "bulgaria",
  "cameroon",
  "canada",
  "chile",
  "china",
  "colombia",
  "congo",
  "croatia",
  "cuba",
  "cyprus",
  "denmark",
  "egypt",
  "estonia",
  "ethiopia",
  "finland",
  "france",
  "gabon",
  "gambia",
  "georgia",
  "germany",
  "ghana",
  "gibraltar",
  "greece",
  "haiti",
  "honduras",
  "hungary",
  "iceland",
  "india",
  "indonesia",
  "iran",
  "iraq",
  "ireland",
  "israel",
  "italy",
  "jamaica",
  "japan",
  "jordan",
  "kazakhstan",
  "kenya",
  "korea",
  "kosovo",
  "kuwait",
  "latvia",
  "lebanon",
  "libya",
  "lithuania",
  "luxembourg",
  "macedonia",
  "malawi",
  "malaysia",
  "mali",
  "malta",
  "mauritania",
  "mexico",
  "monaco",
  "mongolia",
  "montenegro",
  "morocco",
  "mozambique",
  "nepal",
  "netherlands",
  "nigeria",
  "norway",
  "oman",
  "pakistan",
  "palestine",
  "panama",
  "paraguay",
  "peru",
  "philippines",
  "poland",
  "portugal",
  "qatar",
  "romania",
  "russia",
  "rwanda",
  "senegal",
  "serbia",
  "singapore",
  "slovakia",
  "somalia",
  "spain",
  "sudan",
  "sweden",
  "syria",
  "taiwan",
  "tanzania",
  "thailand",
  "togo",
  "tunisia",
  "turkey",
  "uganda",
  "ukraine",
  "uruguay",
  "venezuela",
  "yemen",
  "zambia",
  "zimbabwe",
];

const lettres = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const nombre_pays = pays.length;

function getPaysAleatoire() {
  const index = Math.floor(Math.random() * Math.floor(nombre_pays));

  return pays[index];
}

function Jeu() {
  const [paysATrouver, changerPays] = React.useState(getPaysAleatoire());
  const [mauvaisesTentatives, ajoutermauvaiseTentative] = React.useState([]);
  const [bonneTentatives, ajouterBonneTentative] = React.useState([]);
  const [nombreJocker, changeJoker] = React.useState(3);
  const [resultatJeu, resetJeu] = React.useState(1);
  // 1 = entrain de jouer
  // 0 = perdu
  // 2 = gagné

  function choisirLettre(char) {
    if (paysATrouver.includes(char)) {
      ajouterBonneTentative([...bonneTentatives, char]);
    } else {
      ajoutermauvaiseTentative([...mauvaisesTentatives, char]);
    }
  }

  function recommancer() {
    const nouveaPays = getPaysAleatoire();
    changerPays(nouveaPays);
    resetJeu(1);
    ajoutermauvaiseTentative([]);
    ajouterBonneTentative([]);
    changeJoker(3);
  }

  function utiliserJoker() {
    if (nombreJocker >= 1) {
      changeJoker(nombreJocker - 1);
      const nouvelleLettre = Array.from(paysATrouver).find((char) => {
        return (
          !bonneTentatives.includes(char) && !mauvaisesTentatives.includes(char)
        );
      });

      ajouterBonneTentative([...bonneTentatives, nouvelleLettre]);
    }
    // afficher une letter
  }

  React.useEffect(() => {
    if (mauvaisesTentatives.length === 6) {
      resetJeu(0);
    }
  }, [mauvaisesTentatives.length]);

  React.useEffect(() => {
    const reponse = Array.from(paysATrouver).filter((char) =>
      bonneTentatives.includes(char)
    );

    if (reponse.join("") === paysATrouver) {
      resetJeu(2);
    }
  }, [bonneTentatives, paysATrouver]);

  return (
    <div className="container jeu_container">
      <div className="section">
        <h1>Le Pendu</h1>
      </div>
      {resultatJeu === 0 ? (
        <div className="section alert alert-danger">
          Ouuuula!!!!! Vous avez perdu avec 6 mauvaises tenatives :(   
      </div>
      ) : null}
      {resultatJeu === 2 ? (
        <div className="section alert alert-success">
          Wohooooo! Felicitations! Vous avez gagné :D
        </div>
      ) : null}
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            recommancer();
          }}
        >
          Reset
        </button>
        {resultatJeu === 1 ? (
          <button
            type="button"
            className="btn btn-warning btn_joker"
            disabled={nombreJocker === 0}
            onClick={() => {
              utiliserJoker();
            }}
          >
            Joker ({nombreJocker})
          </button>
        ) : null}
      </div>

      <div>
        <div className="section pendu_dessin">
          <svg viewBox="0 0 380.609 404.952">
            <defs>
              <style>
                {
                  "@font-face{font-family:&quot;Virgil&quot;;src:url(https://excalidraw.com/FG_Virgil.woff2)}@font-face{font-family:&quot;Cascadia&quot;;src:url(https://excalidraw.com/Cascadia.woff2)}"
                }
              </style>
            </defs>
            <path fill="#F0F2F5" d="M0 0H380.609V404.952H0z"></path>
            <path
              fill="none"
              stroke="#000"
              d="M.272.825c34.734.445 173.186 2.012 208.016 2.418M-1.044.213c35.133.01 176.727.285 211.67 1.035"
              transform="translate(56.31 10.146)"
            ></path>
            <path
              fill="none"
              stroke="#000"
              d="M-.332-.013C.018 62.305.926 311.399 1.221 373.382M1.695-1.066C1.982 60.926.52 309.18.389 371.46"
              transform="translate(263.31 20.146)"
            ></path>
            <path
              fill="none"
              stroke="#000"
              d="M1.169-.194c35.896-.82 179.173-3.26 215.13-3.897M.323-1.34c35.683-.696 179.134-1.033 215.183-1.26"
              transform="translate(154.31 395.146)"
            ></path>
            <path
              fill="none"
              stroke="#000"
              d="M-.623-1.146c.42 10.888 1.765 55.243 2.128 66.252M1.25.866C1.644 11.987.851 55.815.822 66.7"
              transform="translate(56.31 11.146)"
            ></path>
            {/* Tete*/}
            {mauvaisesTentatives.length >= 1 ? (
              <path
                fill="none"
                stroke="#000"
                d="M19.066-.07c4.295-.672 10.559 1.798 14.78 4.393 4.221 2.595 9.102 7.076 10.546 11.175 1.444 4.1.163 9.468-1.88 13.42-2.044 3.952-6.3 8.295-10.38 10.294-4.081 2-9.655 2.678-14.103 1.701-4.449-.977-9.52-4.181-12.589-7.562-3.068-3.38-6.067-8.247-5.819-12.721.248-4.474 3.29-10.822 7.306-14.122 4.016-3.3 13.684-4.802 16.791-5.68 3.107-.878 1.937.079 1.848.413M23.922.256c4.637-.02 10.68 2.17 14.27 5.27 3.59 3.1 6.604 8.957 7.269 13.329.665 4.37-.46 9.403-3.278 12.9-2.818 3.495-9.038 6.5-13.631 8.077-4.593 1.576-9.505 3.139-13.928 1.38-4.423-1.758-10.076-7.54-12.61-11.93-2.533-4.387-3.516-10.02-2.59-14.4.924-4.378 4.269-9.4 8.141-11.87C11.437.543 20.005.596 22.657.07c2.652-.527.907-.665.818-.216"
                transform="translate(34.31 87.146)"
              ></path>
            ) : null}
            {/* Corps*/}
            {mauvaisesTentatives.length >= 2 ? (
              <path
                fill="none"
                stroke="#000"
                d="M1.199.794c.3 17.307.112 85.11.292 102.19M.37.165C.494 17.663.06 86.646.276 103.986"
                transform="translate(54.31 134.146)"
              ></path>
            ) : null}
            {/* Bras droite */}
            {mauvaisesTentatives.length >= 3 ? (
              <path
                fill="none"
                stroke="#000"
                d="M-.013-1.188c6.783 5.14 34.408 27.47 41.18 32.849M-1.48.803C5.207 6.045 33.889 27.834 40.83 33.02"
                transform="translate(61.31 162.146)"
              ></path>
            ) : null}
            {/* Bras gauche */}
            {mauvaisesTentatives.length >= 4 ? (
              <path
                fill="none"
                stroke="#000"
                d="M.048.891C-6.77 6.081-33.774 25.717-40.926 30.69M-1.386.313C-8.265 5.721-34.805 26.8-41.312 32.063"
                transform="translate(51.31 158.146)"
              ></path>
            ) : null}
            {/* Pied droit */}
            {mauvaisesTentatives.length >= 5 ? (
              <path
                fill="none"
                stroke="#000"
                d="M.391.372c9.12 5.375 45.846 27.204 55.204 32.53M-.863-.479c8.851 5.513 45.81 29.237 55.297 34.865"
                transform="translate(56.31 232.146)"
              ></path>
            ) : null}
            {/* Pied gauche */}
            {mauvaisesTentatives.length >= 6 ? (
              <path
                fill="none"
                stroke="#000"
                d="M.456.673c-6.282 7.061-30.828 34.19-37.019 41.017M-.764-.02c-6.588 6.776-30.867 33.343-37.042 39.95"
                transform="translate(52.31 233.146)"
              ></path>
            ) : null}
          </svg>
        </div>
      </div>
      <div className="section">
        <h3>Devinez le pays (pays en anglais)</h3>
      </div>
      <div className="section">
        <p>
          Tentatives:{" "}
          <span className="text-danger">{mauvaisesTentatives.length}</span>
        </p>
      </div>
      <div className="section">
        {Array.from(paysATrouver).map((char, index) => {
          return (
            <span key={index} className="reponse">
              {bonneTentatives.includes(char) ? char : "_"}
            </span>
          );
        })}
      </div>
      {resultatJeu === 1 ? (
        <div className="clavier section">
          {lettres.map((char, index) => {
            return (
              <button
                key={index}
                type="button"
                className="btn btn-info btn_lettre"
                onClick={() => {
                  choisirLettre(char);
                }}
                disabled={
                  mauvaisesTentatives.includes(char) ||
                  bonneTentatives.includes(char)
                }
              >
                {char}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default Jeu;
