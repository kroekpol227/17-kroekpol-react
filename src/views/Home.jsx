
import { useState } from "react";
import UserHomeView from "../components/UserHomeView";
import AdminHomeView from "../components/AdminHomeView";

export default function Home() {
  const [view, setView] = useState("");

  return (
    <div className="pt-8">
      <header className="text-center mb-20">
        <h1 className="text-5xl font-bold text-gray-800">
          Generation Thailand
          <br />
          React - Assessment
        </h1>
      </header>

      <div className="flex justify-center gap-8"> 
        <UserHomeView
          onClick={() => {
            setView("userhomeview");
          }}
        >
          User Home View
        </UserHomeView>

        <AdminHomeView
          onClick={() => {
            setView("adminhomeview");
          }}
        >
          Admin Home View
        </AdminHomeView>
      </div>

      <div className="mt-8 text-center text-2xl font-semibold">
        {view === "userhomeview" && <p>เข้าสู่ User Home View</p>}
        {view === "adminhomeview" && <p>เข้าสู่ Admin Home View</p>}
      </div>

    </div>
  );
}