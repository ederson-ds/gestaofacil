import Paginacao from "../components/Paginacao";
import Router from "next/router";

const Datatable = (props) => {
    const mudarRegistros = (e) => {
        let { value } = e.target;
        Router.push({
            pathname: "/produtos",
            query: { pagina: 1, registros: value },
        });
    };
    return (
        <>
            <div className="row">
                <div className="col-12 co-sm-4 col-md-8 col-lg-6 col-xl-4">
                    <div style={{ display: "flex" }}>
                        <span style={{ margin: "7px 6px", display: "block" }}>
                            Exibir
                        </span>
                        <select
                            onChange={mudarRegistros}
                            className="form-select"
                            value={props.registros}
                            style={{ width: "38%" }}
                        >
                            <option defaultValue>5</option>
                            <option value="2">2</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        <span style={{ margin: "7px 6px", display: "block" }}>
                            registros por página
                        </span>
                    </div>
                </div>
                <div className="col-12 co-sm-8 col-md-4 col-lg-6 col-xl-8">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar"
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-dark"
                                type="button"
                                style={{ borderRadius: "0px 10px 10px 0px" }}
                            >
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
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
            <Paginacao
                pagina={props.pagina}
                totalItems={props.totalItems}
                registros={props.registros}
            />
            Mostrando {props.pagina * props.registros - (props.registros - 1)} a{" "}
            {props.pagina == Math.ceil(props.totalItems / props.registros)
                ? props.totalItems
                : props.pagina * props.registros}{" "}
            de um total de {props.totalItems}
        </>
    );
};

export default Datatable;
