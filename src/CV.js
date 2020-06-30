import React from "react";

const projets = [
  "Projet en C (jeu).",
  "Projet en C# (calculatrice).",
  "Projet en html/css (site web).",
  "Projet en C++ (mini-projet). ",
];

const competences = [
  { nom: "C", pourcentage: "90%" },
  { nom: "HTML", pourcentage: "90%" },
  { nom: "CSS", pourcentage: "70%" },
  { nom: "Javascript", pourcentage: "80%" },
  { nom: "Python", pourcentage: "65%" },
  { nom: "PHP", pourcentage: "50%" },
];

function CV() {
  return (
    <div className="container">
      <div className="cv">
        <aside>
          <div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="user"
              />
              <div className="card-body">
                <h5 className="card-title">Hamza CHAOUAI</h5>
                <p className="card-text">
                  Etudiant à SupMTI
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="fas fa-envelope"></i> hamza.chaouai@gmail.com
                </li>
                <li className="list-group-item">
                  <i className="fas fa-phone"></i> 06 66 66 66 66
                </li>
                <li className="list-group-item">
                  <i className="fas fa-home"></i> Agdal, MEKNES
                </li>
              </ul>
              <div className="card-body">
                <span className="card-link">LinkedIn</span>
                <a href="https://github.com/hamzarkm" target="_blank" className="card-link">Github</a>
              </div>
            </div>
          </div>
        </aside>
        <main>
          <div className="section">
            <h2 className="text-info">
              <i className="fas fa-user"></i>
              Profile
            </h2>
            <p>
              Etudiant en informatique passioné par la programmation et les technologies web et les systèmes complexes.
            </p>
          </div>
          <div className="section">
            <h2 className="text-info">
              <i className="fas fa-archive"></i> Projets
            </h2>
            <div>
              {projets.map((projet, index) => {
                return <p key={index}>{projet}</p>;
              })}
            </div>
          </div>
          <div className="section">
            <h2 className="text-info">
              <i className="fas fa-graduation-cap"></i> Education
            </h2>
            <div>
              <div>2018 - Present: SupMTI</div>
              <div>2016 - 2017: Ecole Marocaine des sciences de l'ingénieur RABAT.</div>
              <div>2015 - 2016: Baccalauréat en sciences mathématique.</div>
            </div>
          </div>
          <div className="section">
            <h2 className="text-info">
              <i className="fas fa-rocket"></i> Skills
            </h2>
            <div className="competence">
              {competences.map((competence, index) => {
                return (
                  <div key={index} className="skill">
                    <div>{competence.nom}</div>
                    <div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: competence.pourcentage }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="section">
            <h2 className="text-info">
              <i className="fas fa-language"></i> Langues
            </h2>
            <ul>
              <li>Arabe</li>
              <li>Francais</li>
              <li>Anglais</li>
              <li>Espagnol</li>
            </ul>
          </div>
          <div className="section">
            <h2 className="text-info">
              <i className="fas fa-futbol"></i> Loisirs
            </h2>
            <ul>
              <li>Football</li>
              <li>Voyage</li>
              <li>Camping</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CV;
