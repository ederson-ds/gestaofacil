import Link from "next/link";
import Datatable from "../../components/Datatable";
import { server } from "../../config";

const Produtos = ({ produtos }) => {
    return (
        <>
            Listagem de produtos <br />
            <Link href="/produtos/novo">
                <a>Novo produto</a>
            </Link>
            <br />
            <Datatable data={produtos.items} totalItems={produtos.totalItems} />
        </>
    );
};

Produtos.getInitialProps = async () => {
    const res = await fetch(`${server}/api/produtos`);
    const { data } = await res.json();
    return { produtos: data };
};

export default Produtos;
