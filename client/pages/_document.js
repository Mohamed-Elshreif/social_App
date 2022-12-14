import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>{CssBaseline.flush()}</Head>
      <title> Social</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
