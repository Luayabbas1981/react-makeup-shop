import "./Products.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [brandName, setBrand] = useState("nyx");

  function brandNameHandler(e) {
    setBrand(e.target.innerText);
  }
  console.log(data);

  useEffect(() => {
    getData();
  }, [brandName]);

  const getData = async () => {
    const res = await fetch(
      `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}`
    );
    const apiData = await res.json();

    setData(apiData);
    setLoading(true);
  };

  return (
    <>
      {loading ? (
        <>
          <ul className="brands-list">
            <li
              className={brandName === "nyx" ? "li-active" : ""}
              onClick={brandNameHandler}
            >
              nyx
            </li>
            <li
              className={brandName === "maybelline" ? "li-active" : ""}
              onClick={brandNameHandler}
            >
              maybelline
            </li>
            <li
              className={brandName === "covergirl" ? "li-active" : ""}
              onClick={brandNameHandler}
            >
              covergirl
            </li>
            <li
              className={brandName === "l'oreal" ? "li-active" : ""}
              onClick={brandNameHandler}
            >
              l'oreal
            </li>
          </ul>

          <article className="brand-des">
            {brandName === "nyx" &&
              loading &&
              "NYX Professional Makeup is an American cosmetics company that is a subsidiary of L'Oréal. The company was founded in Los Angeles by Toni Ko in 1999. It was named after Nyx, the Greek goddess of the night. NYX Professional Makeup is certified and acknowledged by PETA as a cruelty-free brand,"}
          </article>
          <article className="brand-des">
            {brandName === "maybelline" &&
              loading &&
              "Maybelline New York (formerly The Maybelline Company and Mabelline and Co.[1]), trading as Maybelline, is an American multinational cosmetics, skin care, fragrance, and personal care company, based in New York City. It was founded in Chicago in 1914, and has been a subsidiary of French cosmetics company L'Oréal since 1996."}
          </article>
          <article className="brand-des">
            {brandName === "covergirl" &&
              loading &&
              "CoverGirl is an American cosmetics brand founded in Maryland, United States, by the Noxzema Chemical Company."}
          </article>
          <article className="brand-des">
            {brandName === "l'oreal" &&
              loading &&
              "L'Oréal S.A. is a French personal care company headquartered in Clichy, Hauts-de-Seine with a registered office in Paris."}
          </article>

          <div className="Products">
            {data
              .map((item, index) => {
                return (
                  index > 0 &&
                  index <= 54 && (
                    <div key={item.id}>
                      <Link className="link" to={`/products/${item.id}`}>
                        <Card
                          className="card-style"
                        
                        >
                          <Card.Img className="img-style"
                          style={{width:"100%"}}
                            src={item.image_link}
                            alt="No photo available"
                          />
                          <Card.Body className="card-body ">
                            <Card.Title className="card-title">
                              {item.name}
                            </Card.Title>
                            <Card.Title className="card-brand">
                              {item.brand}
                            </Card.Title>
                            <Card.Text className="card-text">
                              {`${item.price} €`}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                  )
                );
              })
              .reverse()}
          </div>
          <div className="goup">
            <a href="#">
              <i class="fa-solid fa-arrow-up"></i>
            </a>
          </div>
        </>
      ) : (
        <div className="spinner">
          <Spinner animation="border" />
        </div>
      )}
    </>
  );
}

export default Products;
