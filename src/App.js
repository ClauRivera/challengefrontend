import React, { useState } from 'react';
import ProjectForm from './Componentes/ProjectForm';
import ProjectList from './Componentes/ProjectList';
import ProjectModal from './Componentes/ProjectModal';
import './App.css';

const App = () => {
  const [proyectos, setProyectos] = useState([]);
  const [proyectoEnEdicion, setProyectoEnEdicion] = useState(null);
  const [proyectoAEliminar, setProyectoAEliminar] = useState(null);

  const agregarProyecto = (nuevoProyecto) => {
    // cada proyecto genera un ID 
    nuevoProyecto.id = Date.now().toString();
    setProyectos([...proyectos, nuevoProyecto]);
  };

  const editarProyecto = (proyectoEditado) => {
    const proyectosActualizados = proyectos.map((proyecto) =>
      proyecto.id === proyectoEditado.id ? proyectoEditado : proyecto
    );
    setProyectos(proyectosActualizados);
    setProyectoEnEdicion(null);
  };

  const eliminarProyecto = () => {
    const proyectosActualizados = proyectos.filter((proyecto) => proyecto.id !== proyectoAEliminar.id);
    setProyectos(proyectosActualizados);
    setProyectoAEliminar(null);
  };

  const abrirModalEliminar = (proyecto) => {
    setProyectoAEliminar(proyecto);
  };

  const cerrarModalEliminar = () => {
    setProyectoAEliminar(null);
  };

return (
  <div>
    <h1 className='titulo'>Gestión de Proyectos</h1>
    <ProjectForm onSubmit={proyectoEnEdicion ? editarProyecto : agregarProyecto} initialValues={proyectoEnEdicion} />
    <ProjectList proyectos={proyectos} abrirModalEliminar={abrirModalEliminar} />
    {proyectoAEliminar && (
      <ProjectModal
        proyecto={proyectoAEliminar}
        onConfirm={eliminarProyecto}
        onCancel={cerrarModalEliminar}
      />
    )}
  </div>
);
};

export default App;

