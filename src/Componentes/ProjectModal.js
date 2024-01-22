// ProjectModal.js
import React from 'react';

const ProjectModal = ({ proyecto, onConfirm, onCancel }) => {
  return (
    <div>
      <h2>Confirmar Eliminación</h2>
      <p>¿Estás seguro de que deseas eliminar el proyecto {proyecto.name}?</p>
      <button onClick={onConfirm}>Sí, eliminar</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
};

export default ProjectModal;

