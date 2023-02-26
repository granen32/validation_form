import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

const CustomDocument = () => {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <div id="x-portal" className="x-portal" />
        <NextScript />
      </body>
    </Html>
  );
};

export default CustomDocument;
