export default function Sidebar() {
  return (
    <nav className="h-screen w-64 bg-gray-800 text-white">
      <ul className="menu p-4 w-full">
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700">Dashboard</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700">Profile</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700">Settings</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700">Logout</a>
        </li>
      </ul>
    </nav>
  );
}
