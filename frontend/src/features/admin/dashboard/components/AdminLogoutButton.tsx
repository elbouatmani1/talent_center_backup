import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';

interface AdminLogoutButtonProps {
  onLogout: () => void;
}

const AdminLogoutButton: FunctionComponent<AdminLogoutButtonProps> = ({ onLogout }) => {
  return (
    <div className="flex justify-center">
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onLogout}
        className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors font-semibold shadow-lg"
      >
        <LogOut className="w-5 h-5" />
        <span>Se déconnecter</span>
      </motion.button>
    </div>
  );
};

export default AdminLogoutButton;
