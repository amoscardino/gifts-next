import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const metadata: Metadata = { title: "Gifts Next" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="container-xl min-vh-100 vstack gap-3 py-3 bg-body-tertiary">
        <header>
          <nav className="navbar navbar-expand-md bg-body border rounded shadow-sm">
            <div className="container-fluid">
              <a href="/" className="navbar-brand ms-sm-3 mb-0 h1">
                <i className="bi bi-gift"></i>
                &nbsp;
                Gifts
              </a>
            </div>
          </nav>
        </header>

        <main className="flex-grow-1">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10 col-xs-12">
                {children}
              </div>
            </div>
          </div>
        </main>

        <footer className="text-center text-muted">
          Gifts Next {process.env.VERSION}
        </footer>
      </body>
    </html>
  );
}
