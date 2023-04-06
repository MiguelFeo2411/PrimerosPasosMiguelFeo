import React, { useState } from "react";


const CourseItem = () => {
  const [cursos, setCursos] = useState([
    {
      id:5100,
      nombre: "Arte y geometria"
    },
    {
      id:5101,
      nombre: 'Calculo Vectorial'
    },
    {
      id:1470,
      nombre: 'Introduccion a React'
    },
    {
      id:3745,
      nombre: 'Pesebres de plastilina'
    }
  ]);

  const [nuevoCurso, setNuevoCurso] = useState("");
  const [nuevoId, setNuevoID] = useState("");
  const agregarCurso = (event) => {
    event.preventDefault();
    if (!nuevoCurso.trim() && !nuevoId.trim() ) {
      return;
    }
  
    const curso = {  
      id: nuevoId,
      nombre: nuevoCurso };
    setCursos([...cursos, curso]);
    setNuevoCurso("");
    setNuevoID("");
  }

  const eliminarCurso = (id) => {
    setCursos(cursos.filter(curso => curso.id !== id));
  };
  return (
    <div>
      <h1>Lista de Cursos</h1>
      <form onSubmit={agregarCurso}>
        <label>  Nombre de la materia      <input type="text" value={nuevoCurso} onChange={(event)=> setNuevoCurso(event.target.value)} placeholder="Ingrese el nombre de la nueva materia"/></label>
        <label>  ID de la materia     <input type="text" value={nuevoId} onChange={(event)=> setNuevoID(event.target.value)} placeholder="Ingrese el nuevo id"/></label>
        <button type="submit">Agregar Curso</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID de la materia</th>
            <th>Nombre de la materia</th>
            <th>Eliminar materia</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.id}>
              <td><p>{curso.id}</p></td>
              <td>{curso.nombre}</td>
              <td>
                <button onClick={() => eliminarCurso(curso.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default CourseItem;