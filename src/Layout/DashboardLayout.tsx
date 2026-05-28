import Navbar from "../Components/Navbar";

interface Props {

  children: React.ReactNode;
}
function DashboardLayout({
  children}: Props) {
  return (
    <div>
      <Navbar />
      <div className="p-5">
        {children}
      </div>
    </div>
  );
}
export default DashboardLayout;