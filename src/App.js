import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context, ContextPersist } from "./store/context";
import SignInView from "views/Auth/Login/SignInView";
import UserListView from "./views/User/UserList/UserListView";
import ClimaViews from "views/Clima/OpenMateoClima/ClimaViews";
import LesionesViews from "views/Lecciones/LeccionesViews";
import "./App.css";


function App() {

  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUserAndRedirect = async () => {
      try {
        const storedUserLocal = JSON.parse(localStorage.getItem("currentUser"));
        const storedUserSession = JSON.parse(sessionStorage.getItem("currentUser"));
        const storedUser = storedUserLocal || storedUserSession;
        if (storedUser) {
          setUser(storedUser);
          history.push("/users");
        } else {
          history.push("/login");
        }
      } catch (error) {
        console.error("Error al cargar el usuario:", error);
      }
    };

    loadUserAndRedirect();
  }, [history]);

  return (
    <ContextPersist>
      <Context>
        <main>
          <Switch>
            <React.Fragment>
              <div>
                <Route path="/login" component={SignInView} />
                <Route path="/users" component={UserListView} />
                <Route path="/clima" component={ClimaViews} />
                <Route path="/lecciones" component={LesionesViews} />
                <Route exact path="/">
                  {" "}
                  {user ? (
                    <Redirect to="/users" />
                  ) : (
                    <Redirect to="/login" />
                  )}{" "}
                </Route>
              </div>
            </React.Fragment>
          </Switch>
        </main>
      </Context>
    </ContextPersist>
  );
}

export default App;
