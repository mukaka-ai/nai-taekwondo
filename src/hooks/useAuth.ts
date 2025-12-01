import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
      setLoading(false);
    };

    loadSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const isAdmin = user?.user_metadata?.role === "admin";

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return { user, isAdmin, loading, logout };
}
