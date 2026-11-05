import "./login.css";
import logoMuni from "../../assets/logoMuniNuevo.png";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Alert, Snackbar } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import useStore from "../../Zustand/Zustand";
import { LOGIN_VALUES } from "../../helpers/constantes";
import { useNavigate } from "react-router-dom";
import { RestablecerClave } from "./RestablecerClave";
import { ReenviarValidacion } from "./ReenviarValidacion";

const Login = () => {
  const { authenticated, botonState, login, errors, setErrors } = useStore();
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState(LOGIN_VALUES);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modalAbierto2, setModalAbierto2] = useState(false);
  const [modalAbierto3, setModalAbierto3] = useState(false);
  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);
  const abrirModal2 = () => setModalAbierto2(true);
  const abrirModal3 = () => setModalAbierto3(true);
  const cerrarModal2 = () => setModalAbierto2(false);
  const cerrarModal3 = () => setModalAbierto3(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleErrors = (campos) => {
    setErrors("");
    let errores = {};
    if (!campos.dni) {
      errores.dni = "El CUIL es obligatorio";
    } else if (campos.dni.length > 11) {
      errores.dni = "El CUIL no debe poseer más de 11 digitos";
    } else if (campos.dni.length < 11) {
      errores.dni = "El CUIL debe tener 11 digitos";
    }

    if (!campos.password) {
      errores.password = "La contraseña es obligatoria";
    } else if (campos.password.length < 6) {
      errores.password = "La contraseña debe tener como mínimo 6 caracteres";
    } else if (campos.password.length > 30) {
      errores.password = "La contraseña no debe poseer más de 30 caracteres";
    }
    if (Object.keys(errores).length > 0) {
      setErrors(errores);
      return true;
    } else return false;
  };

  const handleLogin = (e) => {
    // Realizar el login con el estado y funciones proporcionadas por el store
    e.preventDefault();

    const flag = handleErrors(values);

    if (!flag) {
      login(values);
    }
  };

  // useEffect(() => {
  //   if (authenticated) {
  //       const token = localStorage.getItem("token");

  //       const url = new URL(`https://cidituc.smt.gob.ar/`);

  //       url.searchParams.append("auth", token);
  //       url.searchParams.append("destino", "derivador");

  //       window.location.href = url.toString();
  //   }
  // }, [authenticated]);

  useEffect(() => {
    if (errors !== "") {
      setOpenSnackbar(true);
    }
  }, [errors]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="cdt-page cdt-auth">
      <button
        type="button"
        className="cdt-backlink cdt-auth__back"
        onClick={() => navigate("/")}
      >
        <ChevronLeftIcon />
        Volver
      </button>
      <main className="cdt-auth__card">
        <img src={logoMuni} alt="logo Municipalidad" className="cdt-auth__logo" />
        <h1 className="cdt-auth__title">Ingresar a CiDiTuc</h1>
        <p className="cdt-auth__subtitle">
          Ciudadano Digital de San Miguel de Tucumán
        </p>

        <form onSubmit={handleLogin} className="cdt-auth__form">
          <div className="cdt-field-group">
            <div className="cdt-field">
              <input
                id="login-dni"
                name="dni"
                type="text"
                inputMode="numeric"
                autoComplete="username"
                placeholder=" "
                required
                maxLength={11}
                value={values.dni}
                onChange={(e) => {
                  // Filtra solo los caracteres numéricos
                  const numericValue = e.target.value.replace(/\D/g, "");

                  // Actualiza el estado solo si la entrada es numérica
                  handleChange({
                    target: {
                      name: "dni",
                      value: numericValue,
                    },
                  });
                }}
              />
              <label htmlFor="login-dni">Nº CUIL</label>
            </div>
            <div className="cdt-field">
              <input
                id="login-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder=" "
                required
                maxLength={30}
                value={values.password}
                onChange={handleChange}
              />
              <label htmlFor="login-password">Contraseña</label>
              <button
                type="button"
                className="cdt-field__eye"
                onClick={handleShowPassword}
                aria-label={
                  showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                }
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="cdt-btn cdt-btn--lg cdt-btn--block"
            disabled={botonState}
          >
            Ingresar
          </button>
          <button
            type="button"
            className="cdt-btn cdt-btn--lg cdt-btn--block cdt-btn--secondary"
            onClick={() => navigate("/registro")}
          >
            Registrarse
          </button>

          <p className="cdt-auth__help">
            ¿Olvidó su clave? Haga click{" "}
            <a onClick={abrirModal}>
              <strong>aquí</strong>
            </a>
          </p>
          <div className="cdt-auth__links">
            <a onClick={abrirModal2}>Reenviar email de validación</a>
            <a onClick={abrirModal3}>¿Desea reactivar su cuenta?</a>
          </div>

          <p className="cdt-auth__copy">
            Dir. de Innovación Tecnologica © 2026
          </p>
        </form>
      </main>

      <p className="cdt-auth__contact">
        <i className="bi bi-envelope me-1"></i>usuarios-cidituc@smt.gob.ar
      </p>

      {typeof errors == "string" ? (
        <Snackbar
          open={openSnackbar}
          autoHideDuration={5000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }} // Ajusta la posición del Snackbar
        >
          <Alert severity="warning">{errors}</Alert>
        </Snackbar>
      ) : (
        Object.values(errors).map((error, index) => (
          <Snackbar
            key={index}
            open={openSnackbar}
            autoHideDuration={5000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "top", horizontal: "center" }} // Ajusta la posición del Snackbar
            style={{ marginTop: index * 75 }} // Ajusta el espacio entre Snackbars
          >
            <Alert severity="warning">{error}</Alert>
          </Snackbar>
        ))
      )}

      {modalAbierto && (
        <RestablecerClave
          cerrarModal={cerrarModal}
          setModalAbierto={setModalAbierto}
        />
      )}

      {modalAbierto2 && (
        <ReenviarValidacion
          cerrarModal={cerrarModal2}
          titulo={"Reenviar email de validación"}
        />
      )}
      {modalAbierto3 && (
        <ReenviarValidacion
          cerrarModal={cerrarModal3}
          titulo={"Enviar email de reactivación de cuenta"}
        />
      )}
    </div>
  );
};

export default Login;
