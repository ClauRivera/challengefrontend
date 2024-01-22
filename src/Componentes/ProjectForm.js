import React, { useState } from 'react';

const ProjectForm = ({ onSubmit }) => {
  const [project, setProject] = useState({
    name: '',
    description: '',
    asignadoPor: '',
    projectManager: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!project.name.trim() || !project.description.trim()) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    onSubmit(project);
    setProject({
      name: '',
      description: '',
      asignadoPor: '',
      projectManager: '',
      status: '',
    });
  };

  return (
    <div className='form-container'>
      <h2 className='createedit'>Crear Proyecto</h2>
      <form onSubmit={handleSubmit}>
        <label className='form-label'>Nombre del Proyecto:</label>
        <input type="text" name="name" value={project.name} onChange={handleChange} required />
        <label className='form-label'>Descripción:</label>
        <textarea name="description" value={project.description} onChange={handleChange} />
        <label className='form-label'>Asignado por:</label>
        <select name="asignadoPor" value={project.asignadoPor} onChange={handleChange}>
          <option value="">Seleccionar...</option>
          <option value="Claudia">Claudia</option>
          <option value="Aleja">Aleja</option>
          <option value="Julia">Julia</option>
        </select>
        <label className='form-label'>Project Manager:</label>
        <select name="projectManager" value={project.projectManager} onChange={handleChange}>
          <option value="">Seleccionar...</option>
          <option value="Matias">Matías</option>
          <option value="Karla">Karla</option>
          <option value="Alejandro">Alejandro</option>
        </select>
        <label className='form-label'>Status:</label>
        <select name="status" value={project.status} onChange={handleChange}>
          <option value="">Seleccionar...</option>
          <option value="enProceso">En Proceso</option>
          <option value="completado">Completado</option>
          <option value="pendiente">Pendiente</option>
        </select>
        <button type="submit" className='form-button'>Guardar</button>
      </form>
    </div>
  );
};

export default ProjectForm;




