import React, { useState } from 'react';
import { MessageCircle, X, ChevronDown, ChevronUp, CircleQuestionMark } from 'lucide-react';

const Olliebot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFaqs, setShowFaqs] = useState(true);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const toggleFaqs = () => {
    setShowFaqs(!showFaqs);
  };

  interface Message {
    id: string;
    text: string;
    isUser: boolean;
  }

  interface FaqItem {
    id: string;
    question: string;
    answer: string;
  }

  // All new messages are added here
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Hi! What can I help you with today?", isUser: false }
  ]);

  // Mapping? Similar to how freerooms was done for search
  const FaqItems: FaqItem[] = [
    {
      id: "1",
      question: "What is CSESoc?",
      answer: "We're one of the largest computing societies in the southern hemisphere! Whether you're looking to improve your tech skills, network with like-minded peers, or explore career opportunities, CSESoc offers valuable resources and experiences for computer science and engineering students.",
    },
    {
      id: "2",
      question: "How can I join CSESoc?",
      answer: "Check our discord and website for updates! Spots open up every year :)",
    },
    {
      id: "3",
      question: "What events do CSESoc run?",
      answer: "We run events that range from fun social meetups to hackathons and training workshops. You can check out our full event listing at our facebook page and on discord announcements!",
    },
    {
      id: "4",
      question: "Who's Ollie?",
      answer: "That would be me! Wait, I'm actually a bot. Anyways, Ollie is CSESoc's ottersome little mascot!",
    },
  ];

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
    };
    {/*Update array, append new message atop previous*/}
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  const handleFaqSelect = (faq: FaqItem) => {
    addMessage(faq.question, true);
    setTimeout(() => {
      addMessage(faq.answer, false);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div 
        className={`transition-all duration-300 ease-in-out flex flex-col shadow-2xl ${
          !isOpen 
            ? 'w-16 h-16 rounded-lg cursor-pointer bg-[#3977F8] hover:bg-blue-700'
            : 'w-[420px] h-[520px] bg-white rounded-lg' 
        }`}
        onClick={!isOpen ? toggleChat : undefined}
      >
        {!isOpen ? (
          <div className="flex items-center justify-center w-full h-full text-white">
            <MessageCircle size={24} />
          </div>
        ) : (
          <>
            <div className="bg-[#3977F8] text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle size={20} />
                <span className="font-semibold">Olliebot</span>
              </div>
              <button className="text-white hover:text-gray-200"
                      onClick={toggleChat}
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-[#3977F8] text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQs */}
            <div className="border-t border-gray-200">
              <button 
                className="w-full p-3 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={toggleFaqs}
              >
                <div className="flex items-center gap-2">
                  <CircleQuestionMark size={16} className="text-[#3977F8]" />
                  <span className="font-medium text-gray-700 text-sm">FAQs</span>
                </div>
                {showFaqs ? <ChevronUp size={16} className='text-gray-700'/> : <ChevronDown size={16} className='text-gray-700'/>}
              </button>
              
              {showFaqs && (
                <div className="p-3 space-y-2 max-h-[160px] overflow-y-auto bg-gray-50">
                  {FaqItems.map((faq) => (
                    <button 
                      key={faq.id}
                      className="w-full text-left p-2 bg-white hover:bg-blue-50 hover:border-blue-200 rounded border border-gray-200 transition-colors"
                      onClick={() => handleFaqSelect(faq)}
                    >
                      <span className="text-sm text-gray-800">{faq.question}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Olliebot;