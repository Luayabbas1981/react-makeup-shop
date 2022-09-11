import "./ProductDetails.css";
import React, { useState, useEffect } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProductData = async () => {
      const res = await fetch(
        ` https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
      );
      const data = await res.json();
      setProduct(data);
      setLoading(true);
    };
    getProductData();
  }, [id]);

  return (
    <main>
      {product.description ? (
        <article className="product-description">{product.description.slice(0,200)}</article>
      ) : (
        <article className="product-description">
          No description avalible
        </article>
      )}
      {loading ? (
        <div className="product">
          <Card
            className="product-card"
            style={{ width: "16rem", height: "30rem" }}
          >
            <Card.Img
              className="card-photo"
              variant="top"
              src={product.image_link}
            />
            <Card.Body className="card-body">
              <Card.Title className="card-title">{product.name}</Card.Title>
              <Card.Title className="card-brand">{product.brand}</Card.Title>
              <Card.Text className="card-text">
                {`${product.price} €`}
              </Card.Text>
            </Card.Body>
          </Card>
          <Button
            className="button"
            target="_blanck"
            href={product.product_link}
            variant="secondary"
          >
            {" "}
            Products Link
          </Button>

          <Button className="button" onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>
      ) : (
        <div className="spinner">
          <Spinner animation="grow" />
        </div>
      )}
    </main>
  );
}

export default ProductDetails;
