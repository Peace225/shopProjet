import React, {useState, useEffect} from "react";
import Header from "../../Header";
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Accueil() 
  //  const [data, setData] = useState([]);
  //  const [product, setProduct] = useState ([]);


  //   useEffect(() => {
  //     getCategory();
  //     getProduct();
  //     console.log("data", data);
  //   }, []);

  //   const getCategory = async() => {
  //     await fetch('https://dummyjson.com/products/categories')
  //     .then(res => res.json())
  //     .then((res) => setData(res));
  //   };

  //   const getProduct = async () => {
  //     await fetch ("https://dummyjsone.com/products")
  //     .then((res) => res.json())
  //     .then((res) => setProduct(res));
  //   };
{
      const [data, setData] = useState([]);

      useEffect(() => {
        getAllProduct();
        console.log("data", data);
      }, []);

      const getAllProduct = async () => {
        await fetch("https://dummyjson.com/products")
          .then((res) => res.json())
          .then((res) => setData(res.products));
      };


      return (
        <div>
          <Header />
          <div style={{ margin: 90 }}>
            {data.map((item) => {
              return (
                <nav className="navigation1">
                  <ul key={item.id}>
                    <li>
                      <Link to={`/detail/ ${item.id}`}>{item.category}}</Link>
                    </li>
                  </ul>
                </nav>
              );
            })}
           
          </div>
        </div>
      );

  /*{/* // return (
  //   <div>
  //       <Header/>
  //       <section className="mainSection">
  //         <div className="mainCategory">
  //           {data &&  *}/*
  {/* //             data.map ((item)  =>{
  //               return(
  //                 <nav className="category">
  //                     <ul>
  //                       <li key={item}>
  //                         <Link>{item}</Link>
  //                       </li>
  //                     </ul>
  //                 </nav>
  //               )
  //             })}
  //         </div>
  //       </section>
  //   </div>
  // ); *}/**/ 
}

export default Accueil;