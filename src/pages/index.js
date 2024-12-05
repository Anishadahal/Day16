import { useEffect } from "react";

const newUser = {
  name: "John",
  job: "Painter",
};

const updatedUser = {
  name: "Jane",
  job: "Carpenter",
};

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://reqres.in/api/users");
      const data = await res.json();
      console.log(data);
    };

    getData();
  }, []);

  const submitUser = async () => {
    const res = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await res.json();
    console.log(data);
  };

  const updateUser = async (id) => {
    const res = await fetch(`https://reqres.in/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-3">
      <button className="button-class" onClick={submitUser}>
        Submit User
      </button>
      <button className="button-class" onClick={() => updateUser(1)}>
        Update User
      </button>
    </main>
  );
}
