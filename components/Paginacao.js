import Link from "next/link";
import Router from "next/router";

const Paginacao = (props) => {
    const numPaginas = Math.ceil(props.totalItems / props.registros);
    var paginas = [];
    for (let i = 1; i <= numPaginas; i++) {
        paginas.push(
            <a>
                <li className={props.pagina == i ? "paginaAtiva" : ""}>{i}</li>
            </a>
        );
    }
    const disabilitaAnterior = props.pagina == 1;
    const disabilitaProximo = props.pagina == numPaginas;
    const proximaPagina = () => {
        if (props.pagina == numPaginas) return;
        Router.push(
            "/produtos?pagina=" +
                (parseInt(props.pagina) + 1) +
                "&registros=" +
                props.registros
        );
    };
    const paginaAnterior = () => {
        if (props.pagina == 1) return;
        Router.push(
            "/produtos?pagina=" +
                (parseInt(props.pagina) - 1) +
                "&registros=" +
                props.registros
        );
    };
    return (
        <>
            <ul className="paginacao">
                <li
                    onClick={paginaAnterior}
                    className={disabilitaAnterior ? "disabled" : ""}
                >
                    Anterior
                </li>
                {paginas.map((pagina, index) => (
                    <Link
                        key={index}
                        href={
                            "/produtos?pagina=" +
                            (index + 1) +
                            "&registros=" +
                            props.registros
                        }
                    >
                        {pagina}
                    </Link>
                ))}
                <li
                    onClick={proximaPagina}
                    className={disabilitaProximo ? "disabled" : ""}
                >
                    Próximo
                </li>
            </ul>
        </>
    );
};

export default Paginacao;
