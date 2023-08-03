import { CartWidget } from "../CartWidget/CartWidget";
import logo from "../../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import "./NavBar.css";
import { BurguerButton } from "../BurguerButton/BurguerButton";

export const NavBar = () => {
  const { handleSearch } = useContext(SearchContext);
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    const searchInput = e.target.value;
    setSearch(searchInput);
    handleSearch(searchInput);
  };
  const [click, setClick] = useState(false);

  const handleClick=()=>{
    setClick(!click)
  }

  return (
    <header>
      <div className="navbarContainer">
        <div className="navbar">
          <Link className="navbarImg" to={"/"}>
            <img src={logo} alt="" />
          </Link>

          <input className="input"
            type="text"
            value={search}
            onChange={handleInputChange}
            placeholder="¿Que estas buscando?"
          />
          <CartWidget/>
        </div>
        <hr />
        <div className="navbarUnder">
          <div className="burguer">
          <BurguerButton click={click} handleClick={handleClick}/>
          </div>
          <div className={`inicial ${click ? 'active' : ''}`}>
          </div>

          <ul className={`navbarUnderCategorias ${click ? 'active' : ""}`} >

            <li>
              <NavLink  to={`/categoria/gabinetes`}>Gabinete</NavLink>
            </li>
            <li>
              <NavLink  to={`/categoria/discos`}>Discos hdd/ssd</NavLink>
            </li>
            <li>
              <NavLink  to={`/categoria/motherboard`}>motherboards</NavLink>
            </li>
            <li>
              <NavLink  to={`/categoria/memoria ram`}>Memoria ram</NavLink>
            </li>
            <li>
              <NavLink  to={`/categoria/fuente`}>Fuentes</NavLink>
            </li>

            <li>
              <NavLink  to={`/categoria/procesadores`}>procesadores</NavLink>
            </li>
            <li>
              <NavLink  to={`/categoria/placas de video`}>
                Placas de video
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
