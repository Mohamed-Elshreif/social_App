import { NextUIProvider } from "@nextui-org/react";
import Navbar from "../components/navbar/Navbar";
import { Container } from "@nextui-org/react";
function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Navbar />
      <Container>
        <Component />
      </Container>
    </NextUIProvider>
  );
}

export default MyApp;
