import { Alert } from 'react-bootstrap';
import {useState} from "react";


function RecurringAlert() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <Alert variant="success" className="text-center" show={show} onClose={handleClose} dismissible>
            Please note that this product is flagged as a <strong>recurring payment</strong>.
            <div>If this is not supposed be a subscription product then please contact us immediately.</div>
        </Alert>
    );
}



export default RecurringAlert;
