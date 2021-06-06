import Link from "next/link";
import Datatable from "../../components/Datatable";
import { server } from "../../config";

const Produtos = ({ produtos }) => {
    return (
        <div className="container">
            <h1>Listagem de produtos</h1>
            <Link href="/produtos/novo">
                <a>Novo produto</a>
            </Link>
            <br />
            <Datatable
                data={produtos.items}
                totalItems={produtos.totalItems}
                pagina={produtos.pagina}
                registros={produtos.registros}
            />
        </div>
    );
};

Produtos.getInitialProps = async (req) => {
    const { query } = req;
    var res = null;
    if (query) {
        res = await fetch(`${server}/api/produtos?pagina=${query.pagina}&registros=${query.registros}`);
    } else {
        res = await fetch(`${server}/api/produtos`);
    }
    const { data } = await res.json();
    return { produtos: data };
};

export default Produtos;
