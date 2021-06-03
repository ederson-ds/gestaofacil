import dbConnect from "../../../utils/dbConnect";
import Produto from "../../../models/Produto";

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const produtos = await Produto.find({});

                res.status(200).json({ success: true, data: produtos });
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

    res.json({ test: "test" });
};
