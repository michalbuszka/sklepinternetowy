import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) return;

    fetch("https://dummyjson.com/auth/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(setUser)
      .catch(console.error);
  }, []);

  if (!user) return <p>Ładowanie danych...</p>;

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-green-100">
      <h1 className="text-3xl font-bold mb-4">Witaj {user.firstName}!</h1>
      <p className="text-gray-700 mb-6">To jest chroniona strona.</p>
    </div>
  );
}