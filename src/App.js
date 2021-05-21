import Conocimientos from './containers/Conocimientos';
import Portfolio from './containers/Portfolio';

import HeaderDesktop from './components/HeaderDesktop';
import HeaderMobile from './components/HeaderMobile';
import Loader from './components/Loader';
import Avatar from './components/Avatar';
import DevIconImage from './components/DevIconImage';
import DevIconSvg from './components/DevIconSvg';
import Hobby from './containers/Hobby';
import Project from './components/Project';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

import { Helmet } from "react-helmet";

import ReactJS from '../src/assets/static/reactjs.svg';
import JavaScript from '../src/assets/static/js-file-format-symbol.svg';
import WordPress from '../src/assets/static/wordpress.svg';
import CursosDna from '../src/assets/static/web-moodleP.png';
import NewsDna from '../src/assets/static/web-newsP.png';
import Dna from '../src/assets/static/web-dna3P.png';
import Aldea from '../src/assets/static/web-aldeaVikingaP.png';

import logo from './logo.svg';
import './App.css';
import './assets/css/bootstrap.css';
// import './assets/js/bootstrap.js';
// import './assets/js/index.js';

function App() {
  return (
    <div className="App">
      <HeaderDesktop />
      <HeaderMobile />
      {/* <Loader /> */}
      <Avatar />
      
      <main className="mt-4" id="main">
        <Conocimientos>
         
          <DevIconSvg name="Bootstrap 4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fae8ff"
              className="bi bi-bootstrap-fill dev-icons" viewBox="0 0 16 16">
              <path
                d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 
              1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 
              0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
              <path
                d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 
              0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 
              1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 
              2.396-2.888 2.396H5.062z" />
            </svg>
          </DevIconSvg>
          <DevIconImage name="React JS" image={ReactJS} />
          <DevIconImage name="JavaScript" image={JavaScript} />
          <DevIconImage name="WordPress" image={WordPress} />
          <DevIconSvg name="WooCommerce">
            <svg preserveAspectRatio="xMidYMid" className="dev-icons" version="1.1" viewBox="0 0 256 153"
              xmlns="http://www.w3.org/2000/svg" xmlnscc="http://creativecommons.org/ns#"
              xmlnsdc="http://purl.org/dc/elements/1.1/"
              xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
              <title>WooCommerce Logo</title>
              <metadata>
                <rdfRdf>
                  <ccWork rdfabout="">
                    <dcFormat>image/svg+xml</dcFormat>
                    <dcType rdfresource="http://purl.org/dc/dcmitype/StillImage" />
                    <dcTitle />
                  </ccWork>
                </rdfRdf>
              </metadata>
              <path
                d="m23.759 0h208.38c13.187 0 23.863 10.675 23.863 23.863v79.542c0 
              13.187-10.675 23.863-23.863 23.863h-74.727l10.257 25.118-45.109-25.118h-98.695c-13.187 
              0-23.863-10.675-23.863-23.863v-79.542c-0.10466-13.083 10.571-23.863 23.758-23.863z"
                fill="#fae8ff" />
              <path
                d="m14.578 21.75c1.4569-1.9772 3.6423-3.0179 6.5561-3.226 5.3073-0.41626 
              8.3252 2.0813 9.0537 7.4927 3.226 21.75 6.7642 40.169 10.511 55.259l22.79-43.395c2.0813-3.9545 
              4.6829-6.0358 7.8049-6.2439 4.5789-0.3122 7.3886 2.6016 8.5333 8.7415 2.6016 13.841 5.9317 
              25.6 9.8862 35.59 2.7057-26.433 7.2846-45.476 13.737-57.236 1.561-2.9138 3.8504-4.3707 
              6.8683-4.5789 2.3935-0.20813 4.5789 0.52033 6.5561 2.0813 1.9772 1.561 3.0179 3.5382 3.226 
              5.9317 0.10406 1.8732-0.20813 3.4341-1.0407 4.9951-4.0585 7.4927-7.3886 20.085-10.094 
              37.567-2.6016 16.963-3.5382 30.179-2.9138 39.649 0.20813 2.6016-0.20813 4.8911-1.2488 
              6.8683-1.2488 2.2894-3.122 3.5382-5.5154 3.7463-2.7057 
              0.20813-5.5154-1.0406-8.2211-3.8504-9.678-9.8862-17.379-24.663-22.998-44.332-6.7642 
              13.32-11.759 23.311-14.985 29.971-6.1398 11.759-11.343 17.795-15.714 18.107-2.8098 
              0.20813-5.2033-2.1854-7.2846-7.1805-5.3073-13.633-11.031-39.961-17.171-78.985-0.41626-2.7057 
              0.20813-5.0992 1.665-6.9724zm223.64 
              16.338c-3.7463-6.5561-9.2618-10.511-16.65-12.072-1.9772-0.41626-3.8504-0.62439-5.6195-0.62439-9.9902 
              0-18.107 5.2033-24.455 15.61-5.4114 8.8455-8.1171 18.628-8.1171 29.346 0 8.013 1.665 14.881 
              4.9951 20.605 3.7463 6.5561 9.2618 10.511 16.65 12.072 1.9772 0.41626 3.8504 0.62439 5.6195 
              0.62439 10.094 0 18.211-5.2033 24.455-15.61 5.4114-8.9496 8.1171-18.732 8.1171-29.45 
              0.10406-8.1171-1.665-14.881-4.9951-20.501zm-13.112 28.826c-1.4569 6.8683-4.0585 11.967-7.9089 
              15.402-3.0179 2.7057-5.8276 3.8504-8.4293 3.3301-2.4976-0.52033-4.5789-2.7057-6.1398-6.7642-1.2488-3.226-1.8732-6.452-1.8732-9.4699 
              0-2.6016 0.20813-5.2033 0.72846-7.5967 0.93659-4.2667 2.7057-8.4293 5.5154-12.384 3.4341-5.0992 
              7.0764-7.1805 10.823-6.452 2.4976 0.52033 4.5789 2.7057 6.1398 6.7642 1.2488 3.226 1.8732 6.452 
              1.8732 9.4699 0 2.7057-0.20813 5.3073-0.72846 7.7008zm-52.033-28.826c-3.7463-6.5561-9.3659-10.511-16.65-12.072-1.9772-0.41626-3.8504-0.62439-5.6195-0.62439-9.9902 
              0-18.107 5.2033-24.455 15.61-5.4114 8.8455-8.1171 18.628-8.1171 29.346 0 8.013 1.665 14.881 4.9951 20.605 
              3.7463 6.5561 9.2618 10.511 16.65 12.072 1.9772 0.41626 3.8504 0.62439 5.6195 0.62439 10.094 0 
              18.211-5.2033 24.455-15.61 5.4114-8.9496 8.1171-18.732 8.1171-29.45 0-8.1171-1.665-14.881-4.9951-20.501zm-13.216 
              28.826c-1.4569 6.8683-4.0585 11.967-7.9089 15.402-3.0179 2.7057-5.8276 3.8504-8.4293 
              3.3301-2.4976-0.52033-4.5789-2.7057-6.1398-6.7642-1.2488-3.226-1.8732-6.452-1.8732-9.4699 0-2.6016 
              0.20813-5.2033 0.72846-7.5967 0.93658-4.2667 2.7057-8.4293 5.5154-12.384 3.4341-5.0992 7.0764-7.1805 
              10.823-6.452 2.4976 0.52033 4.5789 2.7057 6.1398 6.7642 1.2488 3.226 1.8732 6.452 1.8732 9.4699 0.10406 
              2.7057-0.20813 5.3073-0.72846 7.7008z"
                fill="#3c1e46" />
            </svg>
          </DevIconSvg>
          <DevIconSvg name="Moodle">
            <svg xmlns="http://www.w3.org/2000/svg" className="dev-icons" viewBox="0 0 1230.87 315.18">
              <title>Moodle-Logo-RGB</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    d="M289.61,309.77V201.51q0-33.94-28-33.95t-28.06,33.95V309.77H178.4V201.51q0-33.94-27.57-33.95-28.05,
                  0-28,33.95V309.77H67.67V195.12q0-35.43,24.6-53.63,21.66-16.25,58.56-16.25,37.41,0,55.12,19.19,
                  15.26-19.19,55.62-19.19,36.9,0,58.54,16.25,24.6,18.19,24.61,53.63V309.77Z"
                    style={{ fill: '#fae8ff' }} />
                  <path d="M965.1,309.27V0h55.16V309.27Z" style={{ fill: '#fae8ff' }} />
                  <path
                    d="M894.8,309.27V291.05q-7.39,9.84-25.11,15.76a92.81,92.81,0,0,1-30.05,5.41q-39.4,
                  0-63.28-27.09t-23.89-67c0-26.25,7.76-48.3,23.4-66,13.85-15.65,36.35-26.59,62.29-26.59,29.22,
                  0,46.28,11,56.64,23.63V0h53.68V309.27Zm0-102.92q0-14.78-14-28.33T852,164.47q-21.16,0-33.48,17.24-10.85,
                  15.3-10.84,37.43,0,21.68,10.84,36.94,12.3,17.75,33.48,17.73,12.81,0,27.83-12.07t15-24.86Z"
                    style={{ fill: '#fae8ff' }} />
                  <path
                    d="M648.57,314.19q-41.87,0-69.19-26.59T552,219.14q0-41.83,27.34-68.45t69.19-26.59q41.85,0,69.44,
                  26.59t27.58,68.45q0,41.88-27.58,68.46T648.57,314.19Zm0-145.77q-19.94,0-30.65,15.1T607.21,219.4q0,
                  20.78,10,35.13,11.46,16.34,31.4,16.32T680,254.53q10.46-14.34,10.46-35.13t-10-35.13Q669,168.41,648.57,
                  168.42Z"
                    style={{ fill: '#fae8ff' }} />
                  <path
                    d="M449.13,314.19q-41.86,0-69.2-26.59T352.6,219.14q0-41.83,27.33-68.45t69.2-26.59q41.83,0,69.44,
                  26.59t27.57,68.45q0,41.88-27.57,68.46T449.13,314.19Zm0-145.77q-19.94,0-30.66,15.1T407.76,219.4q0,
                  20.78,10,35.13,11.46,16.34,31.41,16.32t31.39-16.32Q491,240.19,491,219.4t-10-35.13Q469.56,168.41,
                  449.13,168.42Z"
                    style={{ fill: '#fae8ff' }} />
                  <path
                    d="M1085.58,235.89c1.18,13.13,18.25,41.37,46.31,41.37,27.31,0,40.23-15.77,40.87-22.16l58.11-.5c-6.34,
                  19.39-32.1,60.58-100,60.58-28.24,0-54.08-8.79-72.64-26.35s-27.82-40.45-27.82-68.7q0-43.83,
                  27.82-69.68t72.16-25.85q48.25,0,75.34,32,25.13,29.53,25.12,
                  79.28Zm90.13-34c-2.3-11.83-7.23-21.49-14.77-29.06q-12.82-12.3-29.55-12.31-17.25,0-28.82,
                  11.82t-15.5,29.55Z"
                    style={{ fill: '#fae8ff' }} />
                  <path
                    d="M174.74,116.9l54.74-40-.7-2.44C130,86.57,85.08,95.15,0,144.47l.79,2.24,6.76.07c-.62,6.81-1.7,
                  23.64-.32,48.95-9.44,27.32-.24,45.88,8.4,66.07,1.37-21,
                  1.23-44-5.22-66.89-1.35-25.14-.24-41.67.37-48.1l56.4.54a258,258,0,0,0,1.67,33.06c50.4,17.71,
                  101.09-.06,128-43.72C189.38,128.32,174.74,116.9,174.74,116.9Z"
                    style={{ fill: '#886794' }} />
                </g>
              </g>
            </svg>
          </DevIconSvg>
          <DevIconSvg name="Laravel">
            <svg className="dev-icons" viewBox="0 0 50 52" xmlns="http://www.w3.org/2000/svg">
              <title>Logomark</title>
              <path
                d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 
              5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 
              0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 
              39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 
              0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 
              0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 
              0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 
              1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 
              7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-.002-21.481L4.965 
              9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 
              7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 
              2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833 7.993 4.524z"
                fill="#fae8ff" fillRule="evenodd" />
            </svg>
          </DevIconSvg> 
          <DevIconSvg name="Git">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 97 97"
              enableBackground="new 0 0 97 97" xmlSpace="preserve" className="dev-icons">
              <g>
                <path fill="#fae8ff"
                  d="M92.71,44.408L52.591,4.291c-2.31-2.311-6.057-2.311-8.369,0l-8.33,8.332L46.459,23.19
                    c2.456-0.83,5.272-0.273,7.229,1.685c1.969,1.97,2.521,4.81,1.67,7.275l10.186,10.185c2.465-0.85,5.307-0.3,7.275,1.671
                    c2.75,2.75,2.75,7.206,0,9.958c-2.752,2.751-7.208,2.751-9.961,0c-2.068-2.07-2.58-5.11-1.531-7.658l-9.5-9.499v24.997
                    c0.67,0.332,1.303,0.774,1.861,1.332c2.75,2.75,2.75,7.206,0,9.959c-2.75,2.749-7.209,2.749-9.957,0c-2.75-2.754-2.75-7.21,0-9.959
                    c0.68-0.679,1.467-1.193,2.307-1.537V36.369c-0.84-0.344-1.625-0.853-2.307-1.537c-2.083-2.082-2.584-5.14-1.516-7.698
                    L31.798,16.715L4.288,44.222c-2.311,2.313-2.311,6.06,0,8.371l40.121,40.118c2.31,2.311,6.056,2.311,8.369,0L92.71,52.779
                    C95.021,50.468,95.021,46.719,92.71,44.408z" />
              </g>
            </svg>
          </DevIconSvg>  
        </Conocimientos>
        <Hobby />
        <Portfolio>
          <Project credit="true" 
                    name="Platzi Video" 
                    curso="https://platzi.com/escuela-javascript/" 
                    link="https://eduardovr.com/platzivideo"
                    image="https://static.platzi.com/media/landing-projects/Proyecto-frontend-developer.gif"
                    description="Proyecto que se irá desarrollando en la Escuela
                    de JavaScript de Platzi con el Stack MERN."
                    date="Actualmente en desarrollo"
                    />
          <Project credit="true"
                    name="Batatabit"
                    curso="https://platzi.com/cursos/mobile-first/"
                    link="https://eduardovr.com/batatabit"
                    image="https://static.platzi.com/media/landing-projects/mobile-first_proyecto.gif"
                    description="Proyecto desarrollado en el curso Mobile first de Platzi, en el
                    que se destaca la implementación de la metodología BEM para CSS."
                    date="Diciembre 2020"
                    />
          <Project credit="false"
                    name="Cursos DNA3"
                    link="https://cursos.dna3.com.mx"
                    image={CursosDna}
                    description="Plataforma para impartir actualización constante a clientes de
                    la empresa mediante cursos en línea, implementado en el LCMS Moodle"
                    date="Agosto 2020"
                    />
          <Project credit="false"
                    name="News DNA3"
                    link="https://news.dna3.com.mx"
                    image={NewsDna}
                    description="Blog dedicado a publicar notas reelevantes del país,
                    implementado en el CMS WordPress"
                    date="Julio 2020"
                    />
          <Project credit="false"
                    name="DNA3"
                    link="https://dna3.com.mx"
                    image={Dna}
                    description="Página web para consultoría en temas de PLD/FT, desarrollada
                    con ayuda del framework para CSS Materialize"
                    date="Marzo 2020"
                    />
          <Project credit="false"
                    name="Aldea Vikinga"
                    link="http://aldeavikinga.mx"
                    image={Aldea}
                    description="Página web para un restaurante de comida rapida, desarrollada
                    con ayuda del framework de CSS Bootstrap"
                    date="Enero 2020"
                    />
        </Portfolio>
        <Contacto />
      </main>
      <Footer />
      {/* <Helmet>
        <script src="./assets/js/bootstrap.js" type="text/javascript" />
      </Helmet> */}
    </div>
  );
}

export default App;
