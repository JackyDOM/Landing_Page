// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        {/* Load Noto Serif Khmer and Noto Serif */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Khmer:wght@400;600&family=Noto+Serif:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&family=Noto+Serif+Khmer:wght@100..900&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}