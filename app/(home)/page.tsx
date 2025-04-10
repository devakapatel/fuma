import Link from "next/link";
import {
  ArrowUpRight,
  BookUp,
  MessageSquareMore,
  CircleHelp,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center p-8 mb-auto mt-auto">
      <div className="w-full max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-3xl font-medium">Welcome to T9</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Access resources and tools across semesters—all in one place.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-lg font-medium text-gray-800 dark:text-gray-200">
            Semesters
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Link
              href="/docs/sem-3"
              className="flex h-15 items-center justify-center rounded-md border border-gray-200 px-4 py-6 text-center text-sm font-medium transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
            >
              Semester 3
            </Link>
            <Link
              href="/docs/sem-4"
              className="flex h-15 items-center justify-center rounded-md border border-gray-200 px-4 py-6 text-center text-sm font-medium transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
            >
              Semester 4
            </Link>
            <Link
              href="/docs/sem-5"
              className="flex h-15 items-center justify-center rounded-md border border-gray-200 px-4 py-6 text-center text-sm font-medium transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
            >
              Semester 5
            </Link>
            <Link
              href="/docs/sem-6"
              className="flex h-15 items-center justify-center rounded-md border border-gray-200 px-4 py-6 text-center text-sm font-medium transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
            >
              Semester 6
            </Link>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="mb-4 text-lg font-medium text-gray-800 dark:text-gray-200">
            Useful Links
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            <a
              href="https://chat.whatsapp.com/JuvHVkzVjc41ywITKe23h0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-md border border-gray-200 px-6 py-4 text-sm font-medium transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
            >
              <span>Join WhatsApp Group</span>
              <MessageSquareMore size={20} className="text-gray-400" />
            </a>
            <a
              href="https://tally.so/r/nr6d2N"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-md border border-gray-200 px-6 py-4 text-sm font-medium transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
            >
              <span>Submit Material</span>
              <BookUp size={20} className="text-gray-400" />
            </a>
            <a
              href="https://tally.so/r/w48opO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-md border border-gray-200 px-6 py-4 text-sm font-medium transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
            >
              <span>Feedback and Queries</span>
              <CircleHelp size={20} className="text-gray-400" />
            </a>
            <Link
              href="/sem-5"
              className="flex items-center justify-between rounded-md border border-gray-200 px-6 py-4 text-sm font-medium transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
            >
              <span>About me and T9</span>
              <ArrowUpRight size={20} className="text-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
