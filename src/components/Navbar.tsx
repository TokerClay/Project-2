
import { Link } from 'react-router-dom';
import { Newspaper } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <Newspaper className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">实时新闻</h1>
            <p className="text-xs text-gray-500">汇集主流媒体资讯</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
