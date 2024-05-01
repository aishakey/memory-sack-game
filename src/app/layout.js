import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: {
    default: "Memory Sack",
    template: "%s | Memory Sack",
  },
  description: "Memory Sack - A Fun Memorization Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
