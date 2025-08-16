"use client";

import React from "react";

import { IoChatbubbleSharp } from "react-icons/io5";
import { IoDocumentSharp } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

import { closeOnClick } from "@/app/util";

import RagitButton from "./RagitButton";

import NavbarButton from "./NavButton";

interface NavbarProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  version: string;
  currentPage: string;
  setCurrentPage: (
    page: "CHAT" | "DOCUMENTS" | "STATUS" | "ADD" | "SETTINGS" | "RAG",
  ) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  imageSrc,
  title,
  subtitle,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className="flex justify-between items-center mb-10">
      {/* Logo, Title, Subtitle */}
      <div className="flex flex-row items-center gap-5">
        <img
          src={imageSrc}
          className="flex rounded-lg w-[60px] object-contain [filter:drop-shadow(0_4px_3px_rgb(0_0_0_/0.07))_drop-shadow(0_2px_2px_rgb(0_0_0_/0.06))]"
        />
        <div className="flex flex-col">
          <p className="text-xl font-bold text-text-ragit">{title}</p>
          <p className="text-sm  text-text-alt-ragit font-light">{subtitle}</p>
        </div>
        <div className="flex md:hidden flex-col items-center gap-3 justify-between">
          <div className="dropdown dropdown-hover">
            <RagitButton Icon={TiThMenu} title="Menu" />
            <ul
              tabIndex={0}
              className="dropdown-content dropdown-left z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li key={"Menu Button1"}>
                <a
                  className={currentPage === "CHAT" ? "font-bold" : ""}
                  onClick={() => {
                    setCurrentPage("CHAT");
                    closeOnClick();
                  }}
                >
                  Chat
                </a>
              </li>
              <li key={"Menu Button2"}>
                <a
                  className={currentPage === "DOCUMENTS" ? "font-bold" : ""}
                  onClick={() => {
                    setCurrentPage("DOCUMENTS");
                    closeOnClick();
                  }}
                >
                  Documents
                </a>
              </li>
              <li key={"Menu Button4"}>
                <a
                  className={currentPage === "ADD" ? "font-bold" : ""}
                  onClick={() => {
                    setCurrentPage("ADD");
                    closeOnClick();
                  }}
                >
                  Import Data
                </a>
              </li>
              <li key={"Menu Button5"}>
                <a
                  className={currentPage === "SETTINGS" ? "font-bold" : ""}
                  onClick={() => {
                    setCurrentPage("SETTINGS");
                    closeOnClick();
                  }}
                >
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center">
        {/* Pages */}
        <div className="hidden md:flex flex-row items-center gap-3 justify-between">
          <NavbarButton
            hide={false}
            Icon={IoChatbubbleSharp}
            title="Chat"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setPage="CHAT"
          />
          <NavbarButton
            hide={false}
            Icon={IoMdAddCircle}
            title="Import Data"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setPage="ADD"
          />
          <NavbarButton
            hide={false}
            Icon={IoDocumentSharp}
            title="Documents"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setPage="DOCUMENTS"
          />
          <NavbarButton
            hide={false}
            Icon={IoSettingsSharp}
            title="Settings"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setPage="SETTINGS"
          />
        </div>
      </div>
    </div>
  );
};
