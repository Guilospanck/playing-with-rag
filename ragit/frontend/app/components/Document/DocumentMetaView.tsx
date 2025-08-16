"use client";

import React, { useState, useEffect } from "react";
import { RagitDocument, Credentials } from "@/app/types";
import { fetchSelectedDocument } from "@/app/api";

interface DocumentMetaViewProps {
  selectedDocument: string;
  credentials: Credentials;
}

const DocumentMetaView: React.FC<DocumentMetaViewProps> = ({
  selectedDocument,
  credentials,
}) => {
  const [isFetching, setIsFetching] = useState(true);
  const [document, setDocument] = useState<RagitDocument | null>(null);

  useEffect(() => {
    handleFetchDocument();
  }, [selectedDocument]);

  const handleFetchDocument = async () => {
    try {
      setIsFetching(true);

      const data = await fetchSelectedDocument(selectedDocument, credentials);

      if (data) {
        if (data.error !== "") {
          setDocument(null);
          setIsFetching(false);
        } else {
          setDocument(data.document);
          setIsFetching(false);
        }
      }
    } catch (error) {
      console.error("Failed to fetch document:", error);
      setIsFetching(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {isFetching ? (
        <div className="flex items-center justify-center h-full">
          <span className="loading loading-spinner loading-md text-text-ragit bg-text-alt-ragit"></span>
        </div>
      ) : (
        document && (
          <div className="bg-bg-alt-ragit flex flex-col rounded-lg overflow-hidden h-full">
            <div className="p-4 flex flex-col gap-2 items-start justify-start">
              <p className="font-bold flex text-xs text-start text-text-alt-ragit">
                Title
              </p>
              <p
                className="text-text-ragit truncate max-w-full"
                title={document.title}
              >
                {document.title}
              </p>
            </div>
            <div className="p-4 flex flex-col gap-2 items-start justify-start">
              <p className="font-bold flex text-xs text-start text-text-alt-ragit">
                Metadata
              </p>
              <p className="text-text-ragit max-w-full">{document.metadata}</p>
            </div>
            <div className="p-4 flex flex-col gap-2 items-start justify-start">
              <p className="font-bold flex text-xs text-start text-text-alt-ragit">
                Extension
              </p>
              <p className="text-text-ragit max-w-full">{document.extension}</p>
            </div>
            <div className="p-4 flex flex-col gap-2 items-start justify-start">
              <p className="font-bold flex text-xs text-start text-text-alt-ragit">
                File Size
              </p>
              <p className="text-text-ragit max-w-full">{document.fileSize}</p>
            </div>
            <div className="p-4 flex flex-col gap-2 items-start justify-start">
              <p className="font-bold flex text-xs text-start text-text-alt-ragit">
                Source
              </p>
              <button
                className="text-text-ragit truncate max-w-full"
                onClick={() => window.open(document.source, "_blank")}
                title={document.source}
              >
                {document.source}
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default DocumentMetaView;
