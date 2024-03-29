import React from "react";
import Sidebar from "components/molecules/Sidebar";
import BaseHeader from "components/atoms/BaseHeader";
import "./styles.scss";

const MainLayout = ({ showHeader = true, perfilComponent}) => {
    return (
      <div className="desktop-main-layout-container">
    
        <Sidebar></Sidebar>
        <div className="right-layout-container">
          {showHeader && <BaseHeader></BaseHeader>}
          <div className="right-layout-content" id="right-layout-content">
            {perfilComponent}
          </div>
        </div>
      </div>
    );
  };
  
  export default MainLayout;





