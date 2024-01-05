import React from "react";
import { withTranslation } from "react-i18next";
import MainLayout from "components/organisms/MainLayout";
import Lecciones from "components/codechallenge/Lecciones";
import "./styles.scss";

const LeccionesViews = (props) => {
  return (
    <>
       <MainLayout
        perfilComponent={[
        <Lecciones  />
        ]}
      ></MainLayout>
    </>
  );
};

export default withTranslation()(LeccionesViews );
