export default function UserHomeView({ onClick, children }) {
  return (
    <button
      onClick={onClick}
     className="bg-gray-700 text-white font-semibold py-5 px-12 rounded hover:bg-gray-600 transition duration-300">
      {children}
    </button>
  );
}