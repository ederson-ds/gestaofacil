import dbConnect from "../../../utils/dbConnect";
import Produto from "../../../models/Produto";

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case "GET":
            try {
                const produto = await Produto.findById(id);

                if (!produto) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: produto });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case "PUT":
            try {
                const produto = await Produto.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                });

                if (!produto) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: produto });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case "DELETE":
            try {
                const produtoExcluido = await Produto.deleteOne({ _id: id });

                if (!produtoExcluido) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
};
