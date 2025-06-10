/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "../../lib/utils";
import { Menu } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  LinkComponent,
}) => {
  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        LinkComponent={LinkComponent}
      />
      <FloatingDockMobile
        items={items}
        className={mobileClassName}
        LinkComponent={LinkComponent}
      />
    </>
  );
};

const FloatingDockMobile = ({ items, className, LinkComponent }) => {
  const [open, setOpen] = useState(false);
  const Link = LinkComponent || "a";
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  to={item.to}
                  key={item.title}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsla(0,0%,100%,.1)] hover:bg-[hsla(0,0%,100%,.2)] transition-colors"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsla(0,0%,100%,.1)] hover:bg-[hsla(0,0%,100%,.2)] transition-colors"
      >
        <Menu className="h-5 w-5 text-white" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className, LinkComponent }) => {
  let mouseX = useMotionValue(Infinity);
  const Link = LinkComponent || "a";
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-[hsla(0,0%,100%,.1)] px-4 pb-3 md:flex backdrop-blur-sm",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          {...item}
          LinkComponent={Link}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, to, LinkComponent }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [32, 48, 32]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [32, 48, 32]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [16, 24, 16]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [16, 24, 16]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <LinkComponent to={to}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-[hsla(0,0%,100%,.1)] hover:bg-[hsla(0,0%,100%,.2)] transition-colors"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md bg-[hsla(0,0%,100%,.1)] px-2 py-0.5 text-xs text-white backdrop-blur-sm"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </LinkComponent>
  );
}
