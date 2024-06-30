import { authGuard } from "@/utils/supabase/authGuard";

export default async function ProfileLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    await authGuard();

    return (
        <html>
          <body className="bg-background text-foreground">
              {children}
          </body>
        </html>
      );
}