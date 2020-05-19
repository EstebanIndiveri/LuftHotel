import React from "react"
import Layout from '../components/Layout';
import ImagenHotel from '../components/ImagenHotel';
import ContenidoInicio from '../components/ContenidoInicio';
import useHabitaciones from '../hookxs/useHabitaciones';
import {css} from '@emotion/core';
import HabitacionPreview from '../components/HabitacionPreview';
import styled from '@emotion/styled';

const ListadoHabitaciones=styled.ul`
  max-width:1200px;
  width:90%;
  margin:3rem auto 0 auto;

  @media(min-width:768px){
    display:grid;
    grid-template-columns: repeat(3,1fr);
    column-gap:2rem;
  }
`;


const IndexPage = () => {
  const habitaciones=useHabitaciones();
  
 console.log(habitaciones);

  return (
    <Layout>
      <ImagenHotel/>
  
      <ContenidoInicio/>
      
      <h2
      css={css`
      text-align:center;
      margin-top:5rem;
      font-size:2rem;
      `}
      >Nuestras habitaciones</h2>

      <ListadoHabitaciones>
        {habitaciones.map(habitacion=>(
        <HabitacionPreview
          key={habitacion.id}
          habitacion={habitacion}
        />
        ))}
      </ListadoHabitaciones>
  
    </Layout>
  )
  
}
export default IndexPage
