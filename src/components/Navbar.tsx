import Link from 'next/link';

// import { getAuthSession } from "@/lib/session";

import SignInButton from "@/components/SignInButton";
import ThemeToggle from "@/components/ThemeToggle";
import UserAccountNav from "@/components/UserAccountNav";
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

const Navbar = async (context: NextPageContext) => {
  const session = await getSession(context);

  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-2 ">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        <Link href={'/'} className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            Exams
          </p>
        </Link>
        <div className="flex items-center">
          <ThemeToggle className="mr-4" />
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SignInButton text={"Sign In"} />
            )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
