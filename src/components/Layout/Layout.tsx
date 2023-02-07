import React, { ReactNode } from "react";
import "../../styles/App.css";
import Navbar from "../Navbar/Navbar";
import {Container} from "react-bootstrap";
import Button from "../Navbar/Button";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ( {children} ) => {
  return (
    <section
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />
        <div className="flex flex-col justify-center text-center items-center h-3/4">
            <h2 className="text-white text-2xl font-medium ">Fashion Tips</h2>
            <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
            Items every woman should have
            </h1>
            <div className="text-xl">
                <Button />
            </div>
        </div>
    </section>
  );
};

export default Layout;
