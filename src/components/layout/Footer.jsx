import { GlowingStarsDescription } from "../ui/glowing-stars";

export default function Footer() {
  return (
    <footer className="relative z-10 backdrop-blur-sm bg-[hsla(0,0%,100%,.1)] border-t border-[hsla(0,0%,100%,.1)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-center items-center">
          <GlowingStarsDescription className="text-neutral-700 dark:text-neutral-300 text-center">
            © 2025 Task Manager. All rights reserved.
          </GlowingStarsDescription>
        </div>
      </div>
    </footer>
  );
}
