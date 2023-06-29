import '@styles/globals.css';
import TestButton from "@components/TestButton";
export const metadata = {
  title: "Jingwen Shi's Portfolio",
  description: "Discover Jingwen Shi's projects."
};

const RootLayout = ({ children }) => {
  return (
    <html lang={"en"}>
      <body>
        <main className={"app"}>
          <TestButton/>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;