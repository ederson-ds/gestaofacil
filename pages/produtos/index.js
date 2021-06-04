import Link from "next/link";
import { server } from "../../config";

const Produtos = ({ produtos }) => {
    return (
        <>
            Listagem de produtos <br />
            <Link href="/produtos/novo">
                <a>Novo produto</a>
            </Link>
            <br />
            {produtos.map((produto) => {
                return produto.descricao;
            })}
        </>
    );
};

Produtos.getInitialProps = async () => {
    const res = await fetch(`${server}/api/produtos`);
    const { data } = await res.json();

    return { produtos: data };
};

export default Produtos;
