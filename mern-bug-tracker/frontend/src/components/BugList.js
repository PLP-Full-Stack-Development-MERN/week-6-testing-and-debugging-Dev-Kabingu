import React, { useEffect, useState } from "react";
import axios from "axios";
import BugCard from "./BugCard";

const BugList = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const fetchBugs = async () => {
      const response = await axios.get("http://localhost:5000/api/bugs");
      setBugs(response.data);
    };
    fetchBugs();
  }, []);

  return (
    <div>
      {bugs.map((bug) => (
        <BugCard key={bug._id} bug={bug} />
      ))}
    </div>
  );
};

export default BugList;
