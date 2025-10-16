import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";

/**
 * Ensures the user is logged in and registered.
 * Redirects to login if no session, or /register if not registered.
 */
export function useRequireRegistration() {
    console.log("hook called")
  const router = useRouter();
  const { user, isLoading } = useUser();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log("HOOK CALLED. ROUTE ", router.pathname, " USER: ", user?.sub)
  
    const skipRoutes = ["/auth/logout"];
    if (skipRoutes.includes(router.pathname)) {
      console.log("LOGOUT REQUESTED")
      if (!checked) setChecked(true);
      return;
    }

    const checkUser = async () => {
      if (!user) {
        // No session → redirect to login
        router.replace(`/auth/login?returnTo=${encodeURIComponent(router.asPath)}`);
        return;
      }

      try {
        console.log("CHECKING IF EXISTS")
        // Session exists → check registration
        const res = await fetch("/api/exists", {
          method: "GET",
          credentials: "include", // send cookies for Auth0 session
        });

        if (!res.ok) {
          // User not registered → redirect to register
          router.replace("/register");
          return;
        }

        // User exists → allow access
        setChecked(true);
      } catch (err) {
        console.error("Error checking user registration:", err);
        router.replace(`/auth/login?returnTo=${encodeURIComponent(router.asPath)}`);
      }
    };

    if (!isLoading && !checked) {
      checkUser();
    }
  }, [isLoading, user, router.pathname, checked]); // Also add router.pathname to dependencies

  return { user, isLoading, checked };
}
