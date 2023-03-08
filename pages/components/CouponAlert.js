import { Alert } from 'react-bootstrap';

function CouponAlert({ code, percentage }) {
    return (
        <Alert variant="success" className="text-center">
            Use coupon code <strong>{code}</strong> to save {percentage}% off!
        </Alert>
    );
}

export default CouponAlert;
