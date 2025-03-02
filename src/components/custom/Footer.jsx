export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 mt-8">
      <div className="max-w-7xl mx-auto text-center text-gray-600">
        &copy; {new Date().getFullYear()} Globetrotter. All rights reserved.
      </div>
    </footer>
  );
}
