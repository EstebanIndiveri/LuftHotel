import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import {css} from '@emotion/core';
import Image from 'gatsby-image';

export const query=graphql`
    query($slug:String!){
        allDatoCmsHabitacione(filter:{slug:{eq:$slug}}){
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
`;

const Habitaciones = ({data:{allDatoCmsHabitacione:{ nodes }}}) => {
    const{titulo,contenido,imagen}=nodes[0];
    return ( 
        <Layout>
           <main
           css={css`
           margin:0 auto;
           max-width:1200px;
           width:90%;
           `}
           >
           <h1
           css={css`
            text-align:center;
            margin-top:4rem;
           `}
           >{titulo}</h1>
           <p
            css={css`
            font-size:1rem;
            line-height:1.7;
            text-align:justify;
            
            /* width:90% */
        `}
           >{contenido}</p>
            <Image
            css={css`
            max-height:757px;
            `}
            fluid={imagen.fluid}
            />
           </main>
        </Layout>
     );
}
 
export default Habitaciones;