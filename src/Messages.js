import React from "react";

function Mesasges() {
  const messages = JSON.parse(localStorage.getItem("messages"));

  if (messages === null) {
    return (
      <div className="container messages_container">
        <div class="alert alert-warning" role="alert">
          Il n'y a aucun message enregistré.
        </div>
      </div>
    );
  }

  return (
    <div className="container messages_container">
      <h1>Mes messages</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg, index) => {
            return (
              <tr key={index}>
                <td>#{index + 1}</td>
                <td>{msg.nom}</td>
                <td>{msg.message}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Mesasges;
