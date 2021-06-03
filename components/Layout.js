import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
    <>
        <Head>
            <title>GestãoFacil</title>
            <meta
                name="description"
                content="Software para a gestão da sua empresa"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        {children}
    </>
);

export default Layout;