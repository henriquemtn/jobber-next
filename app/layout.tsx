import type { Metadata } from "next";
import "@/public/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/contexts/auth";
import QueryProviders from "@/contexts/query";

export const metadata: Metadata = {
  title: "Jobber by Avanti",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased dark:bg-[#191919]">
        <AuthProvider>
          <QueryProviders>
            <Toaster />
            {children}
          </QueryProviders>
        </AuthProvider>
      </body>
    </html>
  );
}
