import React from 'react';
import Image from 'gatsby-image';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {Link} from 'gatsby';

const Boton=styled(Link)`
    margin-top:2rem;
    padding:1rem;
    background-color:rgba(44,62,80.85);
    width:100%;
    color:#FFF;
    display:block;
    text-decoration:none;
    text-transform:uppercase;
    font-weight:700;
    text-align:center;
    transition:opacity 300ms;

    &:hover{
        opacity:0.8;
        transition:300ms;
    }
`;

const HabitacionPreview = ({habitacion}) => {
    const {titulo,slug,imagen,contenido}=habitacion;
    return ( 
        <div
        css={css`
            border:1px solid #e1e1e1;
            margin-bottom:2rem;
        `}
        >
            <Image
            css={css`
            max-height: 200px;
            `}
                fluid={imagen.fluid}
            />
            <div
            css={css`
                padding:.5rem;
            `}
            >
                <h3
                css={css`
                text-align:center;
                `}
                >{titulo}</h3>
                <p
                css={css`
                    font-size:1rem;
                    line-height:1.7;
                    text-align:justify;
                    margin-left:1rem;
                    width:90%
                `}
                >{contenido}</p>

                <Boton to={slug}>Ver habitación </Boton>
            </div>
        </div>
     );
}
 
export default HabitacionPreview;