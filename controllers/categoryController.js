const Category = require("../models/Category");

//crear nueva categoria
exports.create = async (req, res) => {
    // cambie de "categoryName" a "name" porque lanzaba error porque en el Category del Schema definiste que "name" no "categoryName"
    const { name } = req.body;
    try {
<<<<<<< Updated upstream
        const existingCategory = await Category.findOne({ name: name })
        if (existingCategory) {
            return res.status(400).json({ errorMessage: 'El nombre de la categoria ya existe' });
        }

        const newCategory = new Category({ name });
=======
        //verificamos si ya existe el nombre de la categoria 
        const existCategory = await Category.findOne({ name: categoryName })
        if (existCategory) {
            return res.status(400).json({ message: 'El nombre de la categoria ya existe' });
        }
        //creamos la nueva categoria
        const newCategory = new Category({ categoryName });
        //guardamos en la base de datos
>>>>>>> Stashed changes
        await newCategory.save();
        return res.status(201).json({ message: 'Categoria registrada', status: 201 });
    } catch (err) {
        return res.status(400).json({ errorMessage: `Error creando categorias, ${err.message}` });
    }
}

//actualizar categoria
exports.update = async (req, res) => {
    const { categoryName, id } = req.body;

    // Validar las entradas
    if (!categoryName || !id) {
        return res.status(400).json({ errorMessage: 'categoryName e id son requeridos' });
    }

    try {
        // Verificar si la categoría existe por ID
        const existingCategory = await Category.findOne({ _id: id })
        if (!existingCategory) {
            return res.status(404).json({ errorMessage: 'Categoría no encontrada' });
        }

        // Verificar si ya existe una categoría con el mismo nombre
        const existingName = await Category.findOne({ name: categoryName })
        if (existingName) {
            return res.status(409).json({ errorMessage: 'Esta categoria ya existe' });
        }

        // Actualizar el nombre de la categoría
        existingCategory.name = categoryName;
        await existingCategory.save();

        return res.status(200).json({ message: 'Categoria actualizada con existo registrada', status: 200 });
    } catch (err) {
        return res.status(400).json({ errorMessage: `Error registrando usuario, ${err.message}` });
    }
}

//eliminar categoria
exports.delete = async (req, res) => {
    const { id } = req.body;

    // Validar la entrada
    if (!id) {
        return res.status(400).json({ errorMessage: 'El ID de la categoría es requerido' });
    }

    try {
        // Verificar si la categoría existe por ID
        const existingCategory = await Category.findById(id);
        if (!existCategory) {
            return res.status(404).json({ errorMessage: 'Categoría no encontrada' });
        }

        // Eliminar la categoría
        await Category.findByIdAndDelete(id);

        return res.status(200).json({ message: 'Categoría eliminada con éxito' });
    } catch (err) {
        return res.status(400).json({ errorMessage: `Error al eliminar la categoria` });
    }
};

//cargar categorias
exports.getAll = async (req, res) => {
    try {
        const categories = await Category.find();
        return res.status(200).json(categories);
    } catch (err) {
        return res.status(500).json({ errorMessage: `Error al obtener todas las categorias` });
    }
};