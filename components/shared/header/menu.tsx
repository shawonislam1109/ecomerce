import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        <Link href="/cart" className="header-button">
          {/* <UserIcon className="h-8 w-8" />
          <span className="font-bold">Sign in</span> */}
          Hello, Sign in
        </Link>

        <Link href="/cart" className="header-button">
          <div className="flex items-end">
            <ShoppingCartIcon className="h-6 w-6" />
            Cart
          </div>
        </Link>
      </nav>
    </div>
  );
}
