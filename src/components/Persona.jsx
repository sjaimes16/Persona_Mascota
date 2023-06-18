import React from 'react'

const Persona = ({ dataPersona }) => {
  return (
    <>
      <h1>Personas</h1>
      <div className="container">
      {dataPersona.map((persona) => (        
          <div className="card" style={{ "--clr": "#249eff" }} key={persona.id}>
          <div className="box">
            <div className="icon">
              <div className="iconBx"><ion-icon name="accessibility-outline"></ion-icon></div>
            </div>
            <div className="content">
                <h3>ID: {persona.id}</h3>
                <p>
                   Nombre: {persona.nombre} <br/>
                   Edad: {persona.edad}<br/>
                   Número de mascotas: {persona.numeroMascotas}
                </p>
                <a href="#">Read More</a>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};


export default Persona