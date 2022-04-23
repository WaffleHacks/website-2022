import * as React from "react";
import "./mdx-layout.css";

import Layout from "./Layout";
import Navbar from "./Navbar";

const MdxLayout = ({ children }) => (
  <Layout>
    <Navbar items={[
      { href: "/", name: "home" },
      { href: "https://apply.wafflehacks.org", name: "apply", external: true }
    ]} />

    <div className="content">
      {children}
    </div>
  </Layout>
);

export default MdxLayout;
