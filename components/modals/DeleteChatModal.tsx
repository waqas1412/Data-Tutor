import React from "react";
import { useMainModal } from "@/stores/modal";
import { useChatHandler } from "@/stores/chatList";
import { useRouter } from "next/navigation";
import { PiTrash } from "react-icons/pi";

// Create a context to store the current chat ID to delete
export const DeleteChatContext = React.createContext<{
  chatId: string | null;
  setChatId: (id: string | null) => void;
}>({
  chatId: null,
  setChatId: () => {},
});

// Provider component to be used at a high level in the component tree
export const DeleteChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [chatId, setChatId] = React.useState<string | null>(null);
  
  return (
    <DeleteChatContext.Provider value={{ chatId, setChatId }}>
      {children}
    </DeleteChatContext.Provider>
  );
};

// Custom hook to use the delete chat context
export const useDeleteChat = () => React.useContext(DeleteChatContext);

function DeleteChatModal() {
  const { modalClose } = useMainModal();
  const { deleteChat } = useChatHandler();
  const router = useRouter();
  const { chatId, setChatId } = useDeleteChat();

  const handleCancel = () => {
    modalClose();
    setChatId(null);
  };

  const handleDelete = async () => {
    if (!chatId) {
      modalClose();
      return;
    }

    const success = await deleteChat(chatId);
    modalClose();
    
    if (success) {
      // Check if we're currently on the deleted chat's page
      if (window.location.pathname === `/chat/${chatId}`) {
        // Navigate to new chat page
        router.push('/new-chat');
      }
    } else {
      // Show error in a user-friendly way (could be improved with a toast notification)
      console.error("Failed to delete chat");
    }
    
    // Reset chat ID
    setChatId(null);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex flex-col items-center">
        <div className="w-12 h-12 bg-errorColor/10 rounded-full flex items-center justify-center mb-3">
          <PiTrash className="text-2xl text-errorColor" />
        </div>
        <h3 className="text-base font-medium text-n700 dark:text-n30">Delete Chat</h3>
        <p className="text-xs text-n500 dark:text-n300 text-center mt-1 mb-2">
          Are you sure you want to delete this chat?<br />
          This action cannot be undone.
        </p>
      </div>
      
      <div className="flex gap-3 w-full">
        <button
          onClick={handleCancel}
          className="flex-1 py-2 px-4 border border-primaryColor/30 rounded-lg text-n700 dark:text-n30 hover:bg-primaryColor/5 transition duration-300 text-sm"
        >
          Cancel
        </button>
        <button
          onClick={handleDelete}
          className="flex-1 py-2 px-4 bg-errorColor text-white rounded-lg hover:bg-errorColor/90 transition duration-300 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteChatModal; 