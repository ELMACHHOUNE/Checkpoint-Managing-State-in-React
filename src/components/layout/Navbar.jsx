import { FloatingDock } from "../ui/floating-dock";
import { Home, ListTodo } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      to: "/",
    },
    {
      title: "Tasks",
      icon: (
        <ListTodo className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      to: "/tasks",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex justify-center items-center w-full">
        <div className="w-fit">
          <FloatingDock
            items={links}
            desktopClassName="translate-y-[2rem]"
            mobileClassName="translate-y-[1rem]"
            LinkComponent={Link}
          />
        </div>
      </div>
    </nav>
  );
}
