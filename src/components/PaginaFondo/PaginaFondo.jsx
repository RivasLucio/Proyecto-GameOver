import "./PaginaFondo.css";

export const PaginaFondo = (props) => {
  return (
    <div className="fondoPrincipalContainer">
      <h2 className="text1" data-text="Upgrade">
        {props.textoInterfaz1}
      </h2>
      <h2 className="text2" data-text="your">
        {props.textoInterfaz2}
      </h2>
      <h2 className="text3" data-text="setup">
        {props.textoInterfaz3}
      </h2>
    </div>
  );
};
