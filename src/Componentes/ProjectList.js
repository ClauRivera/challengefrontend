// ProjectList.js
import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const ProjectList = ({ proyectos, abrirModalEliminar }) => {
  const [proyectoAEliminar, setProyectoAEliminar] = useState(null);

  const handleAbrirModalEliminar = (proyecto) => {
    setProyectoAEliminar(proyecto);
  };

  const handleCerrarModalEliminar = () => {
    setProyectoAEliminar(null);
  };

  return (
    <div>
      <h2 className='listado'>Listado de Proyectos</h2>
      {proyectos.map((proyecto) => (
        <div key={proyecto.id}>
          <h3>{proyecto.name}</h3>
          <p>{proyecto.description}</p>
          <button onClick={() => handleAbrirModalEliminar(proyecto)}>Eliminar</button>
        </div>
      ))}
      {proyectoAEliminar && (
        <ProjectModal
          proyecto={proyectoAEliminar}
          onConfirm={() => {
            abrirModalEliminar(proyectoAEliminar);
            handleCerrarModalEliminar();
          }}
          onCancel={handleCerrarModalEliminar}
        />
      )}
    </div>
  );
};

export default ProjectList;


