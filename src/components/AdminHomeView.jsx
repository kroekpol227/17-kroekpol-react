export default function AdminHomeView({ onClick, children }) {
  return (
    <button
      onClick={onClick}
    className="bg-gray-700">
      {children}
    </button>
  );
}