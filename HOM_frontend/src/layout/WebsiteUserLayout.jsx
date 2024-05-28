import React from "react";
import WebsiteUserNavLink from "../Component/websiteUserPanel/WebsiteUserNavLink";

const WebsiteUserLayout = ({ children }) => {
  return (
    <div>
      <WebsiteUserNavLink></WebsiteUserNavLink>
      {children}
    </div>
  );
};

export default WebsiteUserLayout;
