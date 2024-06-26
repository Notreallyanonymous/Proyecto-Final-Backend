const axios = require('axios');
const BINANCE_API_URL = "https://api.binance.com/api/v3/ticker/price";

exports.getAll = async (req, res) => {
    try {

        const response = await axios.get(BINANCE_API_URL);

        if (response.status !== 200) {
            return res.status(response.status).json({ error: "No se pudo obtener el precio" });
        }

        res.json(response.data);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};