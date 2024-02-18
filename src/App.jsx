import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Clima from "./components/Clima.jsx";
import "./css/app.css";

import { useEffect, useState } from "react";

function App() {
  const [precarga, SetPreCarga] = useState("");
  const [lugar, setLugar] = useState("florida");
  const [datoClima, setDatoClima] = useState("[]");

  useEffect(() => {
    consultarApi();
  }, [lugar]);

  const consultarApi = async () => {
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${lugar}&lang=es&appid=223cd5ecc6ca779932f9cb1a1fb1ed43`;
    const resultado = await fetch(link);

    const dato = await resultado.json();
    setDatoClima(dato);
  };

  const handleChange = (e) => {
    SetPreCarga(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLugar(precarga);
    SetPreCarga("");
  };

  return (
    <div>
      <h1 className="text-center text-white p-3">App Temperatura</h1>

      <Container className=" my-3">
        <Form
          className="p-4 border-white text-center form"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Ingrese una Ciudad"
              className="p-3"
              onChange={handleChange}
              value={precarga}
            />
             <Button variant="primary" type="submit" className="my-3">
             Buscar <i class="bi bi-0-circle-fill"></i>
      </Button>
          </Form.Group>
        </Form>

        <Clima
          temperatura={
            datoClima.main ? Math.floor(datoClima.main.feels_like - 273.15) : ""
          }
          nombre={datoClima.name}
          descripcion={
            datoClima.weather ?  datoClima.weather[0].description : ""
          }

          imagenUrl={
            datoClima.weather ? `https://openweathermap.org/img/wn/${datoClima.weather[0].icon}.png` : ""
          }
        />
      </Container>
    </div>
  );
}

export default App;
