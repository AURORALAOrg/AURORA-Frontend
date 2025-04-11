import { useState } from 'react';
import ElizaBot from 'elizabot';
import auroraImage from "@/assets/aurora.jpg";
import {
  ChevronLeft,
  ChevronRight,
  LightbulbIcon,
  FileIcon,
} from "lucide-react";
import styles from "./aurora-chat.module.css";
import RenderFileUploadMessage from "@/components/chat/render-file-upload-message";
import PreviewModal from "@/components/chat/file-preview-modal";
import VoiceInput from "@/components/chat/voice-input";

const AuroraChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [previewMessage, setPreviewMessage] = useState(null);

  const eliza = new ElizaBot();

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = {
      type: "text",
      content: text,
      isEliza: false,
    };

    setMessages([...messages, userMessage]);
    setInputText("");

    setIsTyping(true);

    setTimeout(() => {
      const elizaResponse = {
        type: "text",
        content: eliza.transform(text),
        isEliza: true,
      };

      setMessages((prev) => [...prev, elizaResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage(inputText);
    }
  };

  const handleVoiceTranscript = (transcript) => {
    setInputText(transcript);
    sendMessage(transcript);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileType = file.type.split("/")[0];
    const reader = new FileReader();

    let message = {
      type: "file",
      fileType,
      fileName: file.name,
      fileSize: file.size,
      isEliza: false,
    };

    reader.onload = (event) => {
      const result = event.target.result;

      if (file.type === "application/pdf") {
        const blob = new Blob([result], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        message = {
          ...message,
          content: url,
        };
      } else {
        message = {
          ...message,
          content: result,
        };
      }

      setPreviewMessage(message);
    };

    reader.onerror = () => {
      // Handle errors during file reading
      console.error("FileReader error occurred.");
      // Optionally set some error message to the user
    };

    if (fileType === "image" || fileType === "audio") {
      reader.readAsDataURL(file);
    } else if (file.type === "application/pdf") {
      reader.readAsArrayBuffer(file);
    } else if (fileType === "text") {
      reader.readAsText(file);
    } else {
      setPreviewMessage(message); // For types without content, directly preview fileName
    }
  };

  const handleSendFile = () => {
    if (previewMessage) {
      setMessages((prevMessages) => [...prevMessages, previewMessage]);

      if (
        previewMessage.content &&
        previewMessage.content.startsWith("blob:")
      ) {
        setTimeout(() => URL.revokeObjectURL(previewMessage.content), 10000);
      }

      setPreviewMessage(null);

      setIsTyping(true);

      setTimeout(() => {
        const elizaResponse = {
          type: "text",
          content: eliza.transform(inputText),
          isEliza: true,
        };

        setMessages((prev) => [...prev, elizaResponse]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleCancelPreview = () => {
    if (
      previewMessage &&
      previewMessage.content &&
      previewMessage.content.startsWith("blob:")
    ) {
      URL.revokeObjectURL(previewMessage.content); // Revoke URL if preview cancelled for PDFs
    }
    setPreviewMessage(null);
  };

  const handleChangeFile = () => {
    handleCancelPreview();
    setPreviewMessage(null);
  };

  return (
    <div className="flex w-full bg-gradient-to-br from-white to-blue-50">
      {/* Left Tips Section */}
      <div className="hidden lg:block w-44 p-3 border-r border-gray-100 bg-white/80 backdrop-blur-sm">
        <h2 className="text-base font-semibold mb-3 text-gray-800">Learning Tips</h2>
        <div className="space-y-3">
          <div className="p-2.5 bg-blue-50/80 rounded-xl border border-blue-100 hover:bg-blue-50 transition-colors">
            <h3 className="font-medium text-sm text-blue-800">Practice Speaking</h3>
            <p className="text-xs text-blue-600/80">Try to speak in English as much as possible during our conversations.</p>
          </div>
          <div className="p-2.5 bg-green-50/80 rounded-xl border border-green-100 hover:bg-green-50 transition-colors">
            <h3 className="font-medium text-sm text-green-800">Use Context</h3>
            <p className="text-xs text-green-600/80">Pay attention to how words are used in different situations.</p>
          </div>
          <div className="p-2.5 bg-purple-50/80 rounded-xl border border-purple-100 hover:bg-purple-50 transition-colors">
            <h3 className="font-medium text-sm text-purple-800">Review Regularly</h3>
            <p className="text-xs text-purple-600/80">Go back to previous conversations to reinforce what you've learned.</p>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 mx-auto flex flex-col h-[calc(100vh-7rem)] bg-white/80 backdrop-blur-sm shadow-lg rounded-lg m-2 max-w-3xl">
        {/* Header */}
        <div className="flex items-center w-full px-4 py-3 border-b border-gray-100 rounded-t-lg bg-white">
          {/* Left: Profile Section */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-blue-100 ring-offset-2">
              <img
                src={auroraImage}
                alt="Aurora Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-base font-semibold text-gray-900">AURORA</h1>
              <h2 className="text-xs text-gray-500">Software Architecture lesson - Chapter 1</h2>
            </div>
          </div>

          {/* Right: Unit Navigation */}
          <div className="flex items-center gap-3 ml-auto">
            <span className="text-xs font-medium text-gray-500">Current unit: 1</span>
            <div className="flex gap-1">
              <button
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-all hover:shadow-sm"
                aria-label="Previous unit"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-all hover:shadow-sm"
                aria-label="Next unit"
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages Area with Scroll */}
        <div className="flex-1 overflow-y-auto px-4 py-4 scroll-smooth">
          <div className="flex flex-col gap-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  message.isEliza ? styles.messageEliza : styles.messageUser
                } ${
                  message.type === "file" ? "!bg-transparent" : "shadow-sm p-3"
                } max-w-[75%] animate-fadeIn`}
              >
                {message.type === "file" ? (
                  <div className="flex items-center gap-2">
                    <RenderFileUploadMessage message={message} />
                  </div>
                ) : (
                  <p className="break-words text-sm leading-relaxed">{message.content}</p>
                )}
              </div>
            ))}

            {/* Eliza Typing */}
            {isTyping && (
              <div
                className={`${styles.message} ${styles.messageEliza} shadow-sm p-3 animate-pulse`}
              >
                <div className={styles.dotAnimate}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="sticky bottom-0 w-full px-4 py-3 bg-white border-t border-gray-100 rounded-b-lg">
          <div className="flex items-center w-full gap-3">
            <button className="flex items-center gap-2 px-3 py-1.5 text-white text-sm font-medium transition-all bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 hover:shadow active:transform active:scale-95">
              <LightbulbIcon className="w-4 h-4" />
              <span>Start learning</span>
            </button>

            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Write something related to the topic"
                className="w-full px-4 py-2 pr-20 text-sm transition-all bg-gray-50 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white placeholder-gray-400"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <div className="absolute flex items-center gap-2 transform -translate-y-1/2 right-2 top-1/2">
                <label className="cursor-pointer p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">
                  {!previewMessage && (
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                  )}
                  <FileIcon className="w-4 h-4" />
                </label>
                <VoiceInput onTranscript={handleVoiceTranscript} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Tips Section */}
      <div className="hidden lg:block w-44 p-3 border-l border-gray-100 bg-white/80 backdrop-blur-sm">
        <h2 className="text-base font-semibold mb-3 text-gray-800">Useful Links</h2>
        <div className="space-y-3">
          <a href="#" className="block p-2.5 bg-gray-50/80 rounded-xl border border-gray-100 hover:bg-gray-100 transition-all hover:shadow-sm">
            <h3 className="font-medium text-sm text-gray-800">Grammar Guide</h3>
            <p className="text-xs text-gray-500">Review essential grammar rules</p>
          </a>
          <a href="#" className="block p-2.5 bg-gray-50/80 rounded-xl border border-gray-100 hover:bg-gray-100 transition-all hover:shadow-sm">
            <h3 className="font-medium text-sm text-gray-800">Vocabulary List</h3>
            <p className="text-xs text-gray-500">Expand your word knowledge</p>
          </a>
          <a href="#" className="block p-2.5 bg-gray-50/80 rounded-xl border border-gray-100 hover:bg-gray-100 transition-all hover:shadow-sm">
            <h3 className="font-medium text-sm text-gray-800">Practice Exercises</h3>
            <p className="text-xs text-gray-500">Test your understanding</p>
          </a>
        </div>
      </div>

      {/* File preview modal */}
      {previewMessage && (
        <PreviewModal
          message={previewMessage}
          onClose={handleCancelPreview}
          onSend={handleSendFile}
          onChangeFile={handleChangeFile}
        />
      )}
    </div>
  );
};

export default AuroraChat;
