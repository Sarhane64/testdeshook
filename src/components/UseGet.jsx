import { useState, useEffect } from "react";
import connexion from "../connexion.js";

function UseGet() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await connexion.get();
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return { data };
}

export default UseGet;
