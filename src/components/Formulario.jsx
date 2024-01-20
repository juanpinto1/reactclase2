import { useState } from "react";

const Formulario = ({setAlert}) => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

  const validarDatos = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setAlert({
        error: true,
        mensaje: "Las contraseñas no coinciden !",
        color: "danger",
      });
    return
    }
    if (edad <= 17) {
      setAlert({
        error: true,
        mensaje: "Solo deben registrarse mayores de edad",
        color: "danger",
      });
    return
    }
    
    if(nombre === '' || edad === ''|| email === '' || password === '' || confirmPassword === '') {
        setAlert({
            error: true,
            mensaje: "Completa todos los campos !",
            color: "danger",
          });
        return
    }
    
    setAlert({ error: false, mensaje: "Cuenta creada exitosamente !", color: "success" });
    setNombre('')
    setEdad('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }
  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        <div className="form-group mb-3">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="edad"
            name="edad"
            className="form-control"
            placeholder="edad"
            onChange={(e) => setEdad(e.target.value)}
            value={edad}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="tuemail@ejemplo.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Confirma tu contraseña"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>
        
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-success">
            Registrarse
          </button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
