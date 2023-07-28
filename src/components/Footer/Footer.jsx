import "./Footer.css"

export const Footer = () => {
  return (
    <>
       <footer>
  <div className="footer-section">
    <h3>CONTACTANOS</h3>
    <ul>
      <li>Teléfono: xxx-xxxx</li>
      <li>Correo: ejemplo@correo.com</li>
      <li>Dirección: Calle Principal, Ciudad</li>
    </ul>
  </div>

  <div className="footer-section">
    <h3>SOBRE NOSOTROS</h3>
    <ul>
      <li>Historia de la empresa</li>
      <li>Nuestro equipo de trabajo</li>
      <li>Nuestra misión y visión</li>
    </ul>
  </div>

  <div className="footer-section footer-redes">
    <h3>NUESTRAS REDES</h3>
    <ul className="redes">
      <li><a className="fb" href="https://www.facebook.com/ejemplo"><i className="fa-brands fa-facebook"></i></a></li>
      <li><a className="ig" href="https://www.instagram.com/ejemplo"><i className="fa-brands fa-instagram"></i></a></li>
      <li><a className="tw" href="https://www.twitter.com/ejemplo"><i className="fa-brands fa-twitter"></i></a></li>
    </ul>
  </div>

  <div className="footer-section">
    <h3>DEFENSA DEL CONSUMIDOR</h3>
    <ul>
      <li>Leyes y regulaciones</li>
      <li>Políticas de devolución</li>
      <li>Formulario de reclamaciones</li>
    </ul>
  </div>
</footer>

    </>
  )
}
