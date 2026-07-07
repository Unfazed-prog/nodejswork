const About = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow p-4" style={{ maxWidth: '1000px', border: '3px solid transparent', backgroundClip: 'padding-box', borderRadius: '15px' }}>
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">About Us</h2>
                    <p className="card-text">
                        At Refill & Co., we are not just offering products, we are challenging a system built on waste. That's why we're here: to disrupt, to change, and to rebuild better habits through refillable, lasting solutions.
                    </p>
                    <p className="card-text">
                        Every refill, every bottle, every jar you reuse is a stand against throwaway culture. It's a fight to protect the planet, reduce waste, and demand a future where quality and responsibility are the norm, not the exception.
                    </p>
                    <p className="card-text">
                        Our work directly supports the UN's Sustainable Development Goal 12. We are here for action. To make change. To demand that responsible consumption isn't just an option, it's the only option.
                    </p>
                    <p className="card-text text-center fw-bold text-success mt-4">
                        Refill. Resist. Rebuild. This is more than a product. It's a movement.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
