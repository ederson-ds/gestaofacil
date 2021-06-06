import dbConnect from "../../../utils/dbConnect";
import Produto from "../../../models/Produto";

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                var { pagina, registros } = req.query;
                if (pagina == "undefined") pagina = 1;
                if (registros == "undefined") registros = 5;
                registros = parseInt(registros);
                const skip = pagina * registros - registros;
                var produtos = await Produto.find({}).skip(skip).limit(registros);
                var totalItems = await Produto.countDocuments({});
                res.status(200).json({
                    success: true,
                    data: {
                        items: produtos,
                        totalItems: totalItems,
                        pagina: pagina,
                        registros: registros,
                    },
                });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case "POST":
            try {
                const produto = await Produto.create(req.body);

                res.status(201).json({ success: true, data: produto });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
};
