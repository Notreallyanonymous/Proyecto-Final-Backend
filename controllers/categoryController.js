const Category = require("../models/Category");


//create category
exports.crear = async (req, res) => {
    const { categoryName } = req.body;
    try {
        const existCategory = await Category.findOne({ name: categoryName })
        if (existCategory) {
            return res.status(400).json({ message: 'El nombre de la categoria ya existe' });
        }

        const newCategory = new Category({ categoryName });
        await newCategory.save();
        return res.status(201).json({ message: 'Categoria registrada', status: 201 });
    } catch (err) {
        return res.status(400).json({ message: `Error registrando usuario, ${err.message}` });
    }
}



exports.update = async (req, res) => {
    const { categoryName, id } = req.body;

    // Validar las entradas
    if (!categoryName || !id) {
        return res.status(400).json({ message: 'categoryName e id son requeridos' });
    }

    try {
        // Verificar si la categoría existe por ID
        const existCategory = await Category.findOne({ _id: id })
        if (!existCategory) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        // Verificar si ya existe una categoría con el mismo nombre
        const existName = await Category.findOne({ name: categoryName })
        if (existName) {
            return res.status(409).json({ message: 'Esa categoria ya existe' });
        }

        // Actualizar el nombre de la categoría
        existCategory.name = categoryName;
        await existCategory.save();

        return res.status(200).json({ message: 'Categoria actualizada con existo registrada', status: 200 });
    } catch (err) {
        return res.status(400).json({ message: `Error registrando usuario, ${err.message}` });
    }
}