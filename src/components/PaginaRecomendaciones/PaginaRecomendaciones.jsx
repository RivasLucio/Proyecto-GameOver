import pcBasic from "../../assets/img/pcbasic.png";
import pcMedia from "../../assets/img/pcmedia.png";
import pcAlta from "../../assets/img/pcalta.png";
import { Link } from "react-router-dom";
import "./PaginaRecomendaciones.css";

export const PaginaRecomendaciones = () => {
  return (
    <>
      <h2 className="tituloInicio">Bienvenido a Game Over</h2>
      <div className="paginaInicioContainer">
        <Link to={`/categoria/pcBasic`}>
        <img src={pcBasic} alt="" className="paginaPrincipalPc" />
        </Link>
        <Link to={`/categoria/pcMedia`}>
        <img src={pcMedia} alt="" className="paginaPrincipalPc" />
        </Link>
        <Link to={`/categoria/pcAlta`}>
        <img src={pcAlta} alt="" className="paginaPrincipalPc" />
        </Link>
      </div>


    
    </>
  );
};
