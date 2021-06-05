import dbConnect from "../../../utils/dbConnect";
import Produto from "../../../models/Produto";
import { useRouter } from 'next/router';

dbConnect();

export default async (req, res) => {
    const { method } = req;
    console.log(req.method);
    //const router = useRouter();
    //console.log(router.query);

    switch (method) {
        case "GET":
            try {
                //const router = useRouter();
                var produtos = await Produto.find({}).limit(5);
                var totalItems = await Produto.countDocuments({});
                res.status(200).json({ success: true, data: {items: produtos, totalItems: totalItems} });
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
