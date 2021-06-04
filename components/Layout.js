import Head from "next/head";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Layout = ({ children }) => (
    <>
        <Head>
            <title>GestãoFacil</title>
            <meta
                name="description"
                content="Software para a gestão da sua empresa"
            />
            <link rel="icon" href="/favicon.ico" />
            <script
                src="https://code.jquery.com/jquery-3.6.0.min.js"
                integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                crossOrigin="anonymous"
            ></script>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
                integrity="undefined"
                crossOrigin="anonymous"
            ></link>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
            <script type="text/javascript" src="/main.js"></script>
        </Head>
        <Navbar />
        <Sidebar />
        <Content>{children}</Content>
    </>
);

export default Layout;
