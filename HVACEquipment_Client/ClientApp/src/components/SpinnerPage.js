import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function SpinnerPage() {
    return (
        <div className="LoadingSpinner">
            <Spinner animation="grow" role="status">
                <span className="LoadingSpinnerText">Loading...</span>
            </Spinner>
        </div>
    );
}

export default SpinnerPage;