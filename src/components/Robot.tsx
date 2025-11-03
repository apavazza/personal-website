"use client";

import Image from "next/image";

export default function Robot({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <Image
        src="/images/robot-3256109_640.png"
        alt="Confused robot"
        width={300}
        height={300}
        className="mx-auto mb-8"
      />

      <p className="text-right text-xs text-gray-500 dark:text-gray-400 mb-4">
        Image by{' '}
        <a
          href="https://pixabay.com/users/creozavr-2567670/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3256109"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Dmitry Abramov
        </a>{' '}
        from{' '}
        <a
          href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3256109"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Pixabay
        </a>
      </p>
    </div>
  );
}
