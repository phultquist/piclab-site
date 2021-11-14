import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class PiclabSite extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://cloud.typography.com/6929016/7418832/css/fonts.css" />
                    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
                    <script src="https://kit.fontawesome.com/117bcfe378.js" crossOrigin="anonymous" async />
                    <meta name="theme-color" content="black" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default PiclabSite;