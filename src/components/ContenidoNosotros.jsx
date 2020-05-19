import React, { Fragment } from 'react';
import {graphql,useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import {css} from '@emotion/core';

const Contenido=styled.main`
    padding-top:4rem;
    max-width:1200px;
    width:90%;
    margin:0 auto;

    @media(min-width:768px){
        display:grid;
        grid-template-columns:repeat(2,1fr);
        column-gap:5rem;
    }
    img{
        max-height:90%;
    }
    p{
        line-height:1.8;
        margin-top:auto;
        text-align:justify;
        font-size:1.1rem;
    }
`;

const ContenidoNosotros = () => {
 const resultado=useStaticQuery(graphql`
 
 query{
    allDatoCmsPagina(filter:{slug:{eq:"nosotros"}}){
      nodes{
        titulo
        contenido
        imagen{
          fluid(maxWidth:1200){
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
 
 `)
 const{titulo,contenido,imagen}=resultado.allDatoCmsPagina.nodes[0];

    return ( 
        <Fragment>
            <h2
            css={css`
                margin-top:4rem;
                text-align:center;
                font-size:4rem;
            
            `}
            >{titulo}</h2>
            <Contenido>
                <p>{contenido}</p>
                <Image
                fluid={imagen.fluid}
                alt="Imagen de Nosotros"
                />
            </Contenido>
        </Fragment>
     );
}
 
export default ContenidoNosotros;