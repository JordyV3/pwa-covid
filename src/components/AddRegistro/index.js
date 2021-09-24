import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const AddPost = ({ contacts, addContact }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha_vacunacion, setFechaVacunacion] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactEmailExists = contacts.filter((contact) =>
      contact.email === email ? contact : null
    );
    const checkContactPhoneExists = contacts.filter((contact) =>
      contact.telefono === telefono ? contact : null
    );

    if (!apellido || !nombre || !edad ||!email || !telefono || !fecha_vacunacion) {
      return toast.warning("¡¡Por favor rellena todos los campos!!");
    }
    if (checkContactEmailExists.length > 0) {
      return toast.error("¡¡Ya existe Este email!!");
    }
    if (checkContactPhoneExists.length > 0) {
      return toast.error("¡Este número de teléfono ya existe!");
    }

    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      nombre,
      apellido,
      edad,
      email,
      telefono,
      fecha_vacunacion
    };

    addContact(data);
    toast.success("Registro agregado exitosamente !!");
    history.push("/");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
        <h1 className="text-center">Agregar Registros</h1>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="number"
                placeholder="Telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Fecha Vacunacion"
                value={fecha_vacunacion}
                onChange={(e) => setFechaVacunacion(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Guardar Datos"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  addContact: (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
