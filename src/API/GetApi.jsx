import { useEffect, useState } from "react";
import axios from "axios";

function GetApi() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setMyData([res.data]);
      console.log(myData);
    });
  }, []);
  
  return (
    <>
    <div className="container ">
      <h1 className="text-center mt-2 mb-2">GET METHOD</h1>
      {myData[0]?.slice(0,4).map((post) => {
        const { brand, category, description, discountPercentage, id } = post;
        return (
          <div key={id}>
            <h1>{brand}</h1>
            <p>{category}</p>
            <p>{description}</p>
            <p>{discountPercentage}</p>
          </div>
        );
      })}
      </div>
    </>
  );
}

export default GetApi;
