"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import RagitButton from "./RagitButton";

interface NavbarButtonProps {
  Icon: typeof FaStar;
  title: string;
  currentPage: string;
  setCurrentPage: (
    page: "CHAT" | "DOCUMENTS" | "STATUS" | "ADD" | "SETTINGS" | "RAG"
  ) => void;
  setPage: "CHAT" | "DOCUMENTS" | "STATUS" | "ADD" | "SETTINGS" | "RAG";
  hide: boolean;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({
  Icon,
  title,
  currentPage,
  setPage,
  setCurrentPage,
  hide,
}) => {
  return (
    <RagitButton
      title={title}
      Icon={Icon}
      selected_color="bg-primary-ragit"
      selected={currentPage === setPage}
      onClick={() => {
        setCurrentPage(setPage);
      }}
      disabled={hide}
    />
  );
};

export default NavbarButton;
