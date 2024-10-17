import { create } from "zustand";
import { ModalStore } from "@/models/ModalStore";

const useNotesModal = create<ModalStore>((set) => ({
  isOpen: false,
  taskId: null,
  onOpen: (id: number) => set({ isOpen: true, taskId: id }),
  onClose: () => set({ isOpen: false, taskId: null }),
}));

export default useNotesModal;