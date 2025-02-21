import Button from "../button/Button";
const MainComponent = ({ selectedStyle }) => {
  console.log(selectedStyle);

  return (
    <main className="flex-1 p-6 overflow-auto">
      <h1 className="text-3xl font-semibold mb-4">Welcome to the Dashboard</h1>
      <p className="text-gray-600">
        This is the main content area. Select an option from the sidebar.
      </p>

      <Button selectedStyle = {selectedStyle} />

      {/* Placeholder Routes (You can customize these later)
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects/web" element={<WebDevelopment />} />
            <Route path="/projects/mobile" element={<MobileApps />} />
            <Route path="/settings" element={<Settings />} />
          </Routes> */}
    </main>
  );
};

export default MainComponent;
