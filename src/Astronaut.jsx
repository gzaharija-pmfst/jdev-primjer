function Astronaut(props) {
  return (
    <div className="astronaut">
      <p className="okvir-ime">Osoba: <span className="ime">{props.name}</span></p>
      <p className="okvir-brod">Lokacija: {props.craft}</p>
    </div>
  );
}
export default Astronaut;
