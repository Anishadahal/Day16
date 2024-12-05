import React, { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  //get
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch("https://reqres.in/api/users");
      const data = await res.json();
      console.log(data?.total);
      setCount(data?.total);
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return <p>Loading..</p>;
  }
  return (
    <div>
      <p>{count}</p>
      <button
        className="button-class"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
