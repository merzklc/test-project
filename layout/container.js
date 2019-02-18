import styled from "styled-components";
import Head from "../components/head";
import Normalize from "../style/normalize";

const Container = ({ children }) => (
  <React.Fragment>
    <Normalize />
    <Head />
    {children}
  </React.Fragment>
);

export default Container;
