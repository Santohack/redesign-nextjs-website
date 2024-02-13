import Link from "next/link";
import { usePathname } from "next/navigation";


export const NavLink = ({ href, children }) => {
   
  const path = usePathname();
    // Determine if the current route matches the href
    const isActive = path === href;
  
    return (
      <Link href={href}>
        <span
        className={`transition-transform duration-300 transform hover:scale-110 text-md font-bold ${
          isActive ? "text-[#8A9A58]" : "text-[#014421]"
        } hover:text-[#8A9A58] ${
          // Check if it's a mobile view and apply the class for vertical layout
          typeof window !== "undefined" && window.innerWidth < 768
            ? "block mb-2" // Apply this class for mobile view
            : "inline-block mr-4" // Apply this class for other views
        }`}
      >  {children}
        </span>
      </Link>
    );
  };