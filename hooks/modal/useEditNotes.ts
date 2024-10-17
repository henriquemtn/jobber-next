import { create } from "zustand";
import { ModalStore } from "@/models/ModalStore";

const useEditNotesModal = create<ModalStore>((set) => ({
  isOpen: false,
  taskId: null,
  onOpen: (id: number) => set({ isOpen: true, taskId: id }),
  onClose: () => set({ isOpen: false, taskId: null }),
}));

export default useEditNotesModal;