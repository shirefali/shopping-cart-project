import { Col, Row } from 'react-bootstrap';
import { data } from '../data/data';
import StoreProducts from './StoreProducts';

const Store = () => {
    return (
        <>
            <h1 className="text-center mb-4">Store</h1>
            <Row md={2} xs={1} lg={3} className="row-gap-4">
                {data.map((product) => {
                    return (
                        <Col key={product.id}>
                            <StoreProducts {...product} />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default Store;
