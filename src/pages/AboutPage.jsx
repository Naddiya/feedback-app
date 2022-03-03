import Card from "../components/shared/Card";

const AboutPage = () => {
    return (
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>This is a React App to leave feedback for a product or service</p>
                <p>Version: 1.0.0</p>

                <p>
                    <a href="/">Back to Home</a>
                </p>
            </div>
        </Card>
    );
};

export default AboutPage;