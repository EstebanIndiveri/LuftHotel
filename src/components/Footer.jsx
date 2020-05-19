import React, { Fragment } from 'react';
import {css} from '@emotion/core';
import Navegacion from './Navegacion';
import styled from '@emotion/styled';
import {Link} from 'gatsby';

const EnlaceHome=styled(Link)`
    color:#FFF;
    text-align:center;
    text-decoration:none;

    &:hover{
        cursor:pointer;
    }
`;


const Footer = ({title}) => {
    const year=new Date().getFullYear();
    return ( 
        <Fragment>
       <footer
       css={css`
            background-color:rgba(44,62,80);
            padding:1rem;
       `}
       >
           <div
           css={css`
           max-width:1200px;
           margin: 0 auto;
           @media(min-width:768px){
               display:flex;
               align-items:center;
               justify-content:space-between;
            font-size:1rem;
           }
           `}
           >
               <Navegacion/>
               <EnlaceHome
               to='/'
               ><h5
               css={css`
                font-family: 'Libre Baskerville', serif;

               `}
               >Hotel Luft</h5></EnlaceHome>
           </div>
       </footer>
       <p css={css`
            font-size:.8rem;
            font-family: 'Libre Baskerville', serif;
            text-align:center;
            color:#FFF;
            background-color:rgba(33,44,55);
            margin:0;
            padding:.5rem;
       `
       }>{title}. Todos los derechos Reservados {year} &copy;</p>
       </Fragment>
     );
}
 
export default Footer;