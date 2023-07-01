import '@styles/globals.css';
import NavBar from '@components/NavBar';

export const metadata = {
  title: "Jingwen Shi's Portfolio",
  description: "Discover Jingwen Shi's projects."
};

const RootLayout = ({ children }) => {
  return (
    <html lang={"en"}>
      <body>
        <main className={"app"}>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;