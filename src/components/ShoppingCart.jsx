import { Offcanvas, Stack } from 'react-bootstrap';
import CartItem from './CartItem';
import { data } from '../data/data';
import { useShoppingCart } from './context/ShoppingCartContext';
import formatCurrency from './formatCurrency';

const ShoppingCart = ({ isOpen }) => {
    const { cartItems, closeCart } = useShoppingCart();
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map((item) => {
                        return <CartItem key={item.id} {...item} />;
                    })}
                    <div className="ms-auto fw-bold">
                        Total {'   '}
                        {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                                const item = data.find(
                                    (i) => i.id === cartItem.id
                                );
                                return (
                                    total +
                                    (item.price || 0) * cartItem.quantity
                                );
                            }, 0)
                        )}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default ShoppingCart;
