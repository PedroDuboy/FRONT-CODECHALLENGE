import React from "react";
import { withTranslation } from "react-i18next";
import MainLayout from "components/organisms/MainLayout";
import Profile from "components/codechallenge/Profile";
import Language from "components/codechallenge/Languagee";
import Options from "components/codechallenge/Options";
import Setting from "components/codechallenge/Settingss";
import "./styles.scss";

const UserListView = (props) => {
  
  return (
    <>
      <MainLayout
        perfilComponent={[
          <Profile />,
          <div className="cuadros_users">
            <Language /> <Setting /> {" "}
          </div>,
          <div className="cuadros_users">
            <Options />
       
          </div>,
        ]}
      ></MainLayout>
    </>
  );
};

export default withTranslation()(UserListView);
