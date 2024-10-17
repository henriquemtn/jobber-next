export type ModalStore = {
    isOpen: boolean;
    taskId: number | null; 
    onOpen: (id: number) => void;
    onClose: () => void;
  }
  