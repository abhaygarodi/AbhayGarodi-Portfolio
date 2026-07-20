import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import TopNavBar from "@/components/TopNavBar";
import SideNavBar from "@/components/SideNavBar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Abhay Garodi — Software Developer | Java | Spring Boot | Python | FastAPI | React Native | Full Stack Developer",
  description:
    "Software Developer with experience in Java, Spring Boot, Python, FastAPI, React Native, Next.js, REST APIs, PostgreSQL, Git, Docker, and Kubernetes. Skilled in backend development, API integration, debugging, performance optimization, authentication, and enterprise application development.",
  keywords: [
    "Abhay Garodi",
    "Software Developer",
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "Python",
    "FastAPI",
    "React Native",
    "Next.js",
    "React",
    "ImpactSuite.AI",
    "Ravulapati TecHub",
    "Portfolio",
  ],
  authors: [{ name: "Abhay Garodi" }],
  openGraph: {
    title: "Abhay Garodi — Software Developer | Full Stack Engineer",
    description:
      "Software Developer with experience in Java, Spring Boot, Python, FastAPI, React Native, Next.js, REST APIs, PostgreSQL, Git, Docker, and Kubernetes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <div className="flex overflow-x-hidden">
            <SideNavBar />
            <main className="w-full lg:ml-64 min-h-screen flex flex-col relative">
              <TopNavBar />
              <div className="flex-1">{children}</div>
              <Footer />
            </main>
          </div>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}