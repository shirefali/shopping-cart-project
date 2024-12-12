import { Button, Card } from 'react-bootstrap';
import { useShoppingCart } from './context/ShoppingCartContext';
import formatCurrency from './formatCurrency';

const StoreProducts = ({ id, price, name, imgUrl }) => {
    const {
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemFromCart,
    } = useShoppingCart();

    const quantity = getItemsQuantity(id);
    return (
        <Card>
            <Card.Img
                variant="top"
                src={imgUrl}
                alt="store-img"
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-baseline">
                    <span className="fs-3">{name}</span>
                    <span className="text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="text-center mt-4">
                    {quantity === 0 ? (
                        <Button onClick={() => increaseCartQuantity(id)}>
                            Add To Cart
                        </Button>
                    ) : (
                        <div>
                            <div>
                                <Button
                                    onClick={() => decreaseCartQuantity(id)}
                                >
                                    -
                                </Button>
                                <span className="mx-2">{quantity} In Cart</span>
                                <Button
                                    onClick={() => increaseCartQuantity(id)}
                                >
                                    +
                                </Button>
                            </div>
                            <div className="mt-2">
                                <Button
                                    variant="danger"
                                    onClick={() => removeItemFromCart(id)}
                                >
                                    Remove
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};

export default StoreProducts;
