import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ contacts, deleteContact }) => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="d-grid gap-2 col-6 mx-auto">
          <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
            Nuevo Registro
          </Link>
        </div>
        <div className="container">
          <div className="table-responsive-md">
            <table className="table table-sm">
              <caption>Lista de registros vacunacion</caption>
              <thead className="table-header bg-dark text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Edad</th>
                  <th scope="col">Email</th>
                  <th scope="col">Telefono</th>
                  <th scope="col">Fecha vacunacion</th>
                  <th scope="col">Operaciones</th>
                </tr>
              </thead>
              <tbody>
                {contacts.length > 0 ? (
                  contacts.map((contact, id) => (
                    <tr key={id}>
                      <td>{id + 1}</td>
                      <td>{contact.nombre}</td>
                      <td>{contact.apellido}</td>
                      <td>{contact.edad}</td>
                      <td>{contact.email}</td>
                      <td>{contact.telefono}</td>
                      <td>{contact.fecha_vacunacion}</td>

                      <td>
                        <Link
                          to={`/edit/${contact.id}`}
                          className="btn btn-sm btn-primary mr-1 buton1"
                        >
                          Editar
                        </Link>
                        <button
                          type="button"
                          onClick={() => deleteContact(contact.id)}
                          className="btn btn-sm btn-danger"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <th>No se encontramos contactos</th>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
