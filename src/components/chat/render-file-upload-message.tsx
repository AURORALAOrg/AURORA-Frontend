"use client";

import { FileIcon, HelpCircle, Music } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CustomAudioPlayer from "./custom-audio-player";

interface FileMessage {
  fileType?: string;
  content?: string;
  fileName?: string;
  fileSize?: number;
}

interface RenderFileUploadMessageProps {
  message: FileMessage;
}

export default function RenderFileUploadMessage({
  message,
}: RenderFileUploadMessageProps) {
  if (!message?.fileType) {
    return null;
  }

  const isImage = message.fileType.startsWith("image");
  const isAudio = message.fileType.startsWith("audio");
  const isPDF = message.fileType === "application";
  const fileExtension = message.fileName?.split(".")?.pop() || "";

  return (
    <Card className="border-0 bg-primary text-primary-foreground">
      <CardContent className="relative flex flex-wrap items-start gap-3 p-3">
        {isImage ? (
          <div className="flex min-w-full">
            <img
              src={message.content || "/placeholder.svg"}
              alt={message.fileName}
              className="flex-1 object-cover w-32 h-32 max-w-full mx-auto rounded-md aspect-square"
            />
          </div>
        ) : isAudio ? (
          <div className="relative flex items-center justify-center w-12 h-12 mb-auto text-2xl rounded-md bg-white/50">
            <Music className="w-6 h-6 text-primary" />
            <CustomAudioPlayer src={message.content || ""} />
          </div>
        ) : isPDF ? (
          <div className="flex items-center justify-center w-12 h-12 rounded-md bg-white/50">
            <FileIcon className="w-5 h-5 text-primary" />
          </div>
        ) : (
          <div className="flex items-center justify-center w-12 h-12 rounded-md bg-white/50">
            <HelpCircle className="w-5 h-5 text-primary" />
          </div>
        )}
        <div className="flex-1">
          <p className="w-full text-xs font-semibold break-all line-clamp-2">
            {message.fileName}
          </p>
          <p className="self-start text-xs text-primary-foreground/70">
            {fileExtension.toUpperCase()} •{" "}
            {((message.fileSize || 0) / 1024).toFixed(1)} KB
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
