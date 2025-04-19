"use client";

import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/providers/AuthProvider";
import { DeleteChatProvider } from "@/components/modals/DeleteChatModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>
        <DeleteChatProvider>
          {children}
        </DeleteChatProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
