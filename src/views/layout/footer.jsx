export default function Footer() {
  return (
    <footer className="footer items-center justify-center p-4 bg-base-200 text-neutral-content">
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} BonitERP. All rights reserved.</p>
      </div>
    </footer>
  );
}
