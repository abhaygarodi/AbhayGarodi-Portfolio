import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-5 text-center">
      <div className="font-display-lg text-[120px] md:text-[180px] font-bold text-primary/10 dark:text-primary-fixed/10 leading-none select-none">
        404
      </div>
      <h1 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed -mt-8 md:-mt-12 mb-4">
        Page Not Found
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-[#9a9d9e] max-w-md mb-8">
        The system could not locate the requested resource. It may have been moved or archived.
      </p>
      <Link href="/" className="btn-primary inline-flex items-center gap-2">
        <span className="material-symbols-outlined text-[18px]">home</span>
        Return Home
      </Link>
    </div>
  );
}
