export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">
      <h1 className="text-2xl font-bold text-primary mb-4">Page Not Found</h1>
      <p className="mb-6 text-gray-700">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="px-6 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-green-700 transition">Go Home</a>
    </div>
  );
}
