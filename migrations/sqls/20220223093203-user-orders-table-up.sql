/* Replace with your SQL commands */
CREATE TABLE user_orders (
    id SERIAL PRIMARY KEY,
    quantity integer,
    user_id bigint REFERENCES users(id),
    order_id bigint REFERENCES orders(id)
);