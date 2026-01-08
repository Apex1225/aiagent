import { MessageSquare } from 'lucide-react';

interface ChatButtonProps {
  onClick: () => void;
}

export default function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
    >
      <MessageSquare className="w-7 h-7 group-hover:scale-110 transition-transform" />
      <div className="absolute inset-0 rounded-full bg-blue-400 blur-xl opacity-50 group-hover:opacity-70 transition-opacity animate-pulse"></div>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
    </button>
  );
}
