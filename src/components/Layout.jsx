import Footer from "./Footer";
import Header from "./Header";
import StructuredData from "./StructuredData";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-steel-100 text-steel-900">
      <StructuredData />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
