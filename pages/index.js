import Head from "next/head";

const Index = ({ produtos }) => {
    return <>Página principal</>;
};

Index.getInitialProps = async () => {
    return { produtos: "test" };
};

export default Index;