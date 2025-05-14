export default function Sidebar() {
  return (
    <ul
      tabIndex={0}
      className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-64 p-4 shadow">
      <ul className="menu bg-base-200 rounded-box w-56">
        <li><a>Item 1</a></li>
        <li>
          <details open>
            <summary className="">Parent</summary>
            <ul>
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </ul>
  );
}
