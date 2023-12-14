import { useState, useEffect } from "react";
import connexion from "../connexion.js";

function UseGet() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await connexion;
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data]);
}

export default UseGet;
