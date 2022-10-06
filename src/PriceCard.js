export const PriceCard = ({plans}) => {
    return ( 
        <section className="pricing-table">
            <div className="price-card-container">
                <div className="price-card-header">
                    <h5>{plans[0].category}</h5>
                    <h1>${plans[0].price} <span className="per-time">/month</span></h1>
                </div>
                <div className="price-card-body">
                    <p>{plans[0].features["noOfUsers"]}</p>
                    <p>{plans[0].features["storage"]}</p>
                    <p>{plans[0].features["noOfPubProj"]}</p>
                    <p>{plans[0].features["access"]}</p>
                    <p className="no">{plans[0].features["noOfPriProj"]}</p>
                    <p className="no">{plans[0].features["phone"]}</p>
                    <p className="no">{plans[0].features["subDomain"]}</p>
                    <p className="no">{plans[0].features["report"]}</p>
                    <button><h3>Button</h3></button>
                </div>
            </div>
            <div className="price-card-container">
                <div className="price-card-header">
                    <h5>{plans[1].category}</h5>
                    <h1>${plans[1].price} <span className="per-time">/month</span></h1>
                </div>
                <div className="price-card-body">
                    <p>{plans[1].features["noOfUsers"]}</p>
                    <p>{plans[1].features["storage"]}</p>
                    <p>{plans[1].features["noOfPubProj"]}</p>
                    <p>{plans[1].features["access"]}</p>
                    <p>{plans[1].features["noOfPriProj"]}</p>
                    <p>{plans[1].features["phone"]}</p>
                    <p>{plans[1].features["subDomain"]}</p>
                    <p className="no">{plans[1].features["report"]}</p>
                    <button><h3>Button</h3></button>
                </div>
            </div>
            <div className="price-card-container">
                <div className="price-card-header">
                    <h5>{plans[2].category}</h5>
                    <h1>${plans[2].price} <span className="per-time">/month</span></h1>
                </div>
                <div className="price-card-body">
                    <p>{plans[2].features["noOfUsers"]}</p>
                    <p>{plans[2].features["storage"]}</p>
                    <p>{plans[2].features["noOfPubProj"]}</p>
                    <p>{plans[2].features["access"]}</p>
                    <p>{plans[2].features["noOfPriProj"]}</p>
                    <p>{plans[2].features["phone"]}</p>
                    <p>{plans[2].features["subDomain"]}</p>
                    <p>{plans[2].features["report"]}</p>
                    <button><h3>Button</h3></button>
                </div>
            </div>
        </section>
     );
}
