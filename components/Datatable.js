import Link from "next/link";
import Router from 'next/router'

const Datatable = (props) => {
    const teste = async (e) => {
        Router.push({
            pathname: '/produtos',
            query: { page: 3 },
        })
    };

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((produto, key) => {
                        return (
                            <tr key={key}>
                                <td>{produto.descricao}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <ul className="paginacao">
                <li className="paginacao-anterior">Anterior</li>
                <li className="paginacao-numero">1</li>

                <li onClick={teste} className="paginacao-numero">
                    2
                </li>

                <li className="paginacao-proximo">Próximo</li>
            </ul>
            Mostrando 1 a 5 de um total de {props.totalItems}
        </>
    );
};

export default Datatable;
