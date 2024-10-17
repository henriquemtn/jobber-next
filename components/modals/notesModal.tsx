"use client";

import useNotesModal from "@/hooks/modal/useNotesModal";
import { Edit, Trash } from "lucide-react";
import Modal from "./modal";

export default function NotesModal() {
  const notesModal = useNotesModal();

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-base font-bold">teste</p>
        </div>
      </div>
  );

  let footerContent = (
    <div className="flex justify-between">
      <p className="text-sm text-[#5F33E2] font-medium mt-1">
        Prazo de entrega: 10/10/2021
      </p>
      <div className="flex flex-row justify-between w-14">
        <Edit size={18} />
        <Trash size={18} />
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={notesModal.isOpen}
      title='teste'
      actionLabel=""
      onClose={notesModal.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  );
}