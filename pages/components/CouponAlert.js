import { Alert } from 'react-bootstrap';
import {useState} from "react";

function CouponAlert({ code, percentage, firstTime }) {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <Alert variant="success" className="text-center" show={show} onClose={handleClose} dismissible>
            Use coupon code <strong>{code}</strong> to save {percentage}% off!
            {firstTime && <div>This code can be used for your first purchase.</div>}
        </Alert>
    );
}

export default CouponAlert;
