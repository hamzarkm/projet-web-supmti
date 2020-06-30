import React from "react";

function Home() {
  const [nom, changerNom] = React.useState("");
  const [message, changerMessage] = React.useState("");

  function enregister() {
    const messages = JSON.parse(localStorage.getItem("messages"));

    if (messages === null) {
      localStorage.setItem(
        "messages",
        JSON.stringify([{ nom: nom, message: message }])
      );
    } else {
      messages.push({ nom: nom, message: message });
      localStorage.setItem("messages", JSON.stringify(messages));
    }

    changerNom("");
    changerMessage("");
  }

  return (
    <div className="container">
      <div
        className="jumbotron jumbotron-fluid"
        style={{ marginTop: "30px", marginBottom: "50px" }}
      >
        <div className="container">
          <h1 className="display-4">Projet web</h1>
          <div className="lead">
            <p>
              Bienvenue dans ce site web qui fait partie du projet du
              programmation web de l'ecole SupMTI. Dedans il y mon CV, le jeu
              social du pendu.
            </p>
            <p>
              Veuillez naviguez le site pour l'explorer et me laissez un message
              en utlisant le formulaire ci-dessous.
            </p>
          </div>
        </div>
      </div>
      <form>
        <div className="form-group">
          <label>Votre nom</label>
          <input
            type="text"
            value={nom}
            className="form-control"
            placeholder="Entrez votre nom"
            onChange={(event) => changerNom(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Votre message</label>
          <textarea
            value={message}
            rows="5"
            className="form-control"
            onChange={(event) => changerMessage(event.target.value)}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => enregister()}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Home;
