import { useProductContext } from "../../context/productcontext";
import Product from '../Product'

function FeatureProduct() {
    const { isLoading, featureProducts } = useProductContext();
    // console.log(featureProducts)

    if (isLoading) {
        return <div>.....Loading </div>;
    }
    return (
        <div className='section'>
            <div className='container'>
                <div className='intro-data'>Check Now!</div>
                <h2 className='comman-heading'>Our Feature Services</h2>
                <div className='product-section'>
                    {
                        featureProducts.map((curElem) => {
                            return <Product key={curElem.id} {...curElem} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FeatureProduct
