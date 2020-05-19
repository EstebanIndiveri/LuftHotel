import React, { Fragment } from 'react';
import { Helmet } from "react-helmet"
import Header from './Header';
import Footer from './Footer';
import {Global,css} from '@emotion/core';
import useSeo from '../hookxs/useSeo';

const Layout = (props) => {
    const seo=useSeo();
    const{siteName,fallbackSeo:{description,title}}=seo;
    return ( 
        <Fragment>
            <Global
                styles={css`
                html{
                    font-size:62,5%;
                    box-sizing:border-box;
                }
                *,*:before,*:after{
                    box-sizing:inherit;
                }
                    body{
                        font-size:18px;
                        font-size:1.8rem;
                        line-height:1.5;
                        font-family: 'Libre Baskerville', serif;  
                    }
                    h1,h2,h3{
                        margin:0;
                        line-height:1.5;
                    }
                    h1,h2{
                    font-family: 'Libre Baskerville', serif;

                    }
                    h3{
                    font-family: 'Montserrat', sans-serif;
                    }
                    ul{
                        list-style:none;
                        text-decoration:none;
                        margin:0;
                        padding:0;
                    }
                    p{
                    font-family: 'Montserrat', sans-serif;
                    }
                `}
            />
            <Helmet>
                <title>{title}</title>
            <meta name="description" content={description}/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Montserrat:ital,wght@0,400;0,600;1,900&display=swap" rel="stylesheet"/>
                    
            </Helmet>
        <Header/>
            {props.children}
        <Footer
        title={title}
        />
        </Fragment> 
    );
}
 
export default Layout;