export default function AdminHomeView({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-700 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600 transition duration-300">
      {children}
    </button>
  );
}