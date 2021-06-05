import Router from 'next/router';

const NewProduto = ({ produtos }) => {
    const novoProduto = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/produtos", {
            body: JSON.stringify({
                descricao: e.target.descricao.value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const result = await res.json();

        if(result) {
            Router.push('/produtos')
        }
    };

    return (
        <div className="container">
            <h1>Cadastro de produto</h1>
            <form onSubmit={novoProduto} method="POST">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="descricao">Descrição</label>
                            <input
                                id="descricao"
                                className="form-control"
                                name="descricao"
                                type="text"
                                required
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default NewProduto;
