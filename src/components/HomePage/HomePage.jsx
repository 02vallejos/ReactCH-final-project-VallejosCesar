import ProductListWhitLoading from "../ListProduct/ListProduct"

const HomePage = () => {
    const products= [
        { id: 1, name: "Producto 1"},
        { id: 2, name: "Producto 2"},
    ]

    return <ProductListWhitLoading products={products} />;
};

export default HomePage;