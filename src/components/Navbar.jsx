import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-500 text-white p-10 shadow-md  ">
      <ul className="flex gap-8 justify-end text-3xl ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/owner">Owner</Link>
        </li>

      </ul>
    </nav>
  );
}