import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import useRequest from "hooks/useRequest";
import InputText from "components/atoms/InputText";
import ActionButton from "components/atoms/ActionButton";
import SVG from "./Login.svg";
import LogoRipio from "./logo-ripio_negro.png";
import "./styles.scss";

const SignInView = (props) => {
  const history = useHistory();
  const {
    submitted,
    success,
    message,
    errors,
    beforeSubmit,
    afterSubmit,
    showError,
  } = useRequest();

  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const [showPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    beforeSubmit();

    const storedTestUserLocal = JSON.parse(localStorage.getItem("testUser"));
    const storedTestUserSession = JSON.parse(
      sessionStorage.getItem("testUser")
    );
    const storedTestUser = storedTestUserLocal || storedTestUserSession;

    if (
      storedTestUser &&
      email === storedTestUser.email &&
      clave === storedTestUser.password
    ) {
      afterSubmit();
      history.push("/users");
    } else {
      showError("Credenciales incorrectas. Inténtalo de nuevo ⚠️");
      afterSubmit();
    }
  };

  // Usuario de prueba
  const storeTestUserData = () => {
    const testUser = {
      email: "ripionauta@gmail.com",
      password: "prueba123",
    };
    localStorage.setItem("testUser", JSON.stringify(testUser));
    sessionStorage.setItem("testUser", JSON.stringify(testUser));
  };

  storeTestUserData();

  return (
    <div className="container-login-general">
      <div className="container-svg">
        <img src={SVG} alt="SVG"/>
      </div>
      <div className="container-form-login">
        <div className="container-creaCuenta">
          <p>
            ¿No tenés una cuenta? <span>Crear una cuenta</span>
          </p>
        </div>
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="container-logo-login">
            <img src={LogoRipio} alt="SLogoRipio" />
            <h3>Ingresar</h3>
          </div>
              <InputText
                id="email"
                label=""
                type="text"
                placeholder="Email"
                handleChange={(event) => {
                  setEmail(event.target.value);
                }}
                error={errors.email}
              />        
              <InputText
                id="password"
                label=""
                placeholder="Contraseña"
                handleChange={(event) => {
                  setClave(event.target.value);
                }}
                type={showPass ? "text" : "password"}
                error={errors.password}
              />
          {success === false && message && (
            <p className="error-messages">{message}</p>
          )}

          <div className="signin-button">
            <ActionButton
              legend={"Ingresar"}
              disabled={submitted}
              handleClick={handleSubmit}
              type={"submit"}
            />
          </div>
          <div className="olvidaste_contrasena">
            <p>¿Olvidaste tu contraseña?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withTranslation()(SignInView);
