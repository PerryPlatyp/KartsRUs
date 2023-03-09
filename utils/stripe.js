import { Stripe } from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_TEST_KEY, {
    apiVersion: '2020-08-27',
});

export async function getProducts(id) {
    if (id) {
        const product = await stripe.products.retrieve(id);
        return [product];
    } else {
        const products = await stripe.products.list({ active: true });
        return products.data;
    }
}

export async function getPrice(id) {
    const price = await stripe.prices.retrieve(id);
    return price;
}
