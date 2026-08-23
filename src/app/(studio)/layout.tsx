import '../globals.css';

/**
 * The Studio is its own application: a second root layout keeps the site
 * header, footer, fonts and consent banner out of the editing interface.
 */
export default function StudioRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
