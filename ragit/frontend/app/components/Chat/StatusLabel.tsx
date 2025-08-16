"use client";

import React from "react";

interface StatusLabelProps {
  status: boolean;
  true_text: string;
  false_text: string;
}

const StatusLabel: React.FC<StatusLabelProps> = ({
  status,
  true_text,
  false_text,
}) => {
  return (
    <div
      className={`p-2 rounded-lg text-text-ragit text-sm ${status ? "bg-secondary-ragit" : "bg-bg-alt-ragit text-text-alt-ragit"}`}
    >
      <p
        className={`text-xs ${status ? "text-text-ragit" : "text-text-alt-ragit"}`}
      >
        {status ? true_text : false_text}
      </p>
    </div>
  );
};

export default StatusLabel;
