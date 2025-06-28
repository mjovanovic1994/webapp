export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4 space-y-4">
      <h2 className="text-xl font-bold">Community</h2>
      <nav className="space-y-2">
        <a href="#" className="block hover:text-blue-400"># algemeen</a>
        <a href="#" className="block hover:text-blue-400"># coaching</a>
        <a href="#" className="block hover:text-blue-400"># doelen</a>
        <a href="#" className="block hover:text-blue-400"># vragen</a>
      </nav>
    </aside>
  );
}