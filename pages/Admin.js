import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_TESTING === 'true'
        ? process.env.NEXT_PUBLIC_STRIPE_TEST_PUBLIC_KEY
        : process.env.NEXT_PUBLIC_STRIPE_LIVE_PUBLIC_KEY,
    {
        stripeAccount:
            process.env.NEXT_PUBLIC_TESTING === 'true'
                ? process.env.STRIPE_SECRET_TEST_KEY
                : process.env.STRIPE_SECRET_LIVE_KEY,
    }
);


function Admin() {
    const [payments, setPayments] = useState([]);
    const [orders, setOrders] = useState([]);
    const [revenue, setRevenue] = useState(0);

    useEffect(() => {
        async function fetchPayments() {
            const stripe = await stripePromise;
            const paymentIntents = await stripe.paymentIntents.list({ limit: 10 });
            setPayments(paymentIntents.data);
        }

        async function fetchOrders() {
            // code to fetch orders from your backend server
            const orders = await fetch('/api/orders');
            setOrders(orders);
        }

        async function fetchRevenue() {
            const stripe = await stripePromise;
            const balance = await stripe.balance.retrieve();
            setRevenue(balance.available[0].amount / 100);
        }

        fetchPayments();
        fetchOrders();
        fetchRevenue();
    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>Recent Payments</h2>
            <ul>
                {payments.map((payment) => (
                    <li key={payment.id}>
                        {payment.amount} {payment.currency} - {payment.status}
                    </li>
                ))}
            </ul>
            <h2>Recent Orders</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        {order.total} {order.currency} - {order.status}
                    </li>
                ))}
            </ul>
            <h2>Revenue</h2>
            <p>{revenue} USD</p>
        </div>
    );
}

export default Admin;
