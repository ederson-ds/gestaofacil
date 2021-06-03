import Head from "next/head";

const Index = ({ produtos }) => {
    return <>{produtos}</>;
};

Index.getInitialProps = async () => {
    return { produtos: "test" };
};

export default Index;