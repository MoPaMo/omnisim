import Link from "next/link";
export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-2">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="text-white mt-4">
        Go back to home
      </Link>
    </div>
  );
}
