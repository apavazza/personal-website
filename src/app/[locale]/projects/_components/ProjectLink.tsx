import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

interface ProjectLinkProps {
  href: string;
  text: string;
  linkClassName?: string;
}

export default function ProjectLink({ href, text, linkClassName }: ProjectLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex-1 flex items-center justify-between py-3 lg:py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:underline group/link ${linkClassName || ''}`}
    >
      <span className="whitespace-nowrap">{text}</span>
      <ArrowRight className="w-5 h-5 shrink-0 text-neutral-400 dark:text-neutral-500 transform group-hover/link:translate-x-1 transition-transform" />
    </Link>
  );
}
