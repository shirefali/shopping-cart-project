import { Button, Stack } from 'react-bootstrap';
import { data } from '../data/data';
import { useShoppingCart } from './context/ShoppingCartContext';
import formatCurrency from './formatCurrency';

const CartItem = ({ id, quantity }) => {
    const item = data.find((item) => item.id === id);
    const { removeItemFromCart } = useShoppingCart();
    if (item == null) return;
    return (
        <Stack
            direction="horizontal"
            className="d-fle align-items-center gap-3"
        >
            <img
                src={item.imgUrl}
                alt="sidebar-img"
                style={{
                    width: '125px',
                    height: '75px',
                    objectFit: 'cover',
                }}
            />
            <div className="me-auto">
                <div>
                    {item.name}{' '}
                    {quantity > 1 && (
                        <span
                            className="text-muted"
                            style={{ fontSize: '.65rem' }}
                        >
                            x{quantity}
                        </span>
                    )}
                    <div className="text-muted" style={{ fontSize: '.75rem' }}>
                        {formatCurrency(item.price)}
                    </div>
                </div>
            </div>
            <div>{formatCurrency(item.price * quantity)}</div>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeItemFromCart(id)}
            >
                &times;
            </Button>
        </Stack>
    );
};

export default CartItem;
