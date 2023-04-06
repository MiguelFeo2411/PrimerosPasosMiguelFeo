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
}