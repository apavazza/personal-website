"use client"

import { useLocale } from "next-intl";
import { routing, usePathname, useRouter } from '@/i18n/routing';
import { useTransition, useState, useEffect, useRef } from 'react';
import { useParams } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function LocaleSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = useLocale();
  const locales = routing.locales;

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLocaleChange = (nextLocale: string) => {
    startTransition(() => {
      router.push(
        // @ts-expect-error -- No need to check at runtime
        { pathname, params },
        { locale: nextLocale }
      );
      router.refresh();
    });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex items-center px-1 py-2 rounded-md text-gray-100 hover:bg-blue-800 dark:hover:bg-gray-800 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-950 dark:focus:ring-offset-black focus:ring-white transition-colors"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          disabled={isPending}
        >
          {currentLocale.toUpperCase()}
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-blue-900 dark:bg-gray-600 ring-1 ring-black/5 focus:outline-hidden z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                disabled={isPending || loc === currentLocale}
                className={`block w-full text-center py-2 text-sm text-gray-100 hover:bg-blue-700 dark:hover:bg-blue-700 disabled:opacity-50`}
                role="menuitem"
              >
                {loc.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}