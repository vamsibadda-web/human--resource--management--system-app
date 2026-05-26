function Dashboard() {

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold"> Welcome {user.name}</h1>

      <div className="mt-5"><h4>Role : {user.role}</h4>
        <h4>Designation : {user.designation}</h4>
      </div>
    </div>
  );
}
export default Dashboard;