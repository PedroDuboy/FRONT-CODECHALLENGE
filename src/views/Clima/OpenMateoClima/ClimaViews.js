import React from "react";
import { withTranslation } from "react-i18next";
import MainLayout from "components/organisms/MainLayout";
import OpenMateo from "components/codechallenge/OpenMateo";
import "./styles.scss";

const ClimaViews = (props) => {
  return (
    <>
    <div className="container-clima-views">
       <MainLayout
       id="clima"
        perfilComponent={[
        <OpenMateo />
        ]}
      ></MainLayout>
      </div>
    </>
  );
};

export default withTranslation()(ClimaViews);
