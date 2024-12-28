import React, { useState } from "react";
import { TiMinus } from "react-icons/ti";
import { Link } from "react-router-dom";
import { withMask } from "use-mask-input";
import { sendMessageToTelegram } from "../../utils/telegramUtils";
import toast, { Toaster } from "react-hot-toast";

function FormContactPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !userEmail || !phoneNumber) {
      toast.error("Please fill all required fields!");
      return;
    }

    const message = `
Qo'ng'iroq so'rayotgan bemorning:
👤 Ismi: ${userName}
📧 Email: ${userEmail}
📞 Raqami: ${phoneNumber}
💬 Xabari: ${userMessage}
    `;

    if (phoneNumber.length === 9) {
      try {
        await sendMessageToTelegram(
          import.meta.env.VITE_CHAT_IDS.split(","),
          message,
          import.meta.env.VITE_TELEGRAM_URL
        );
        setIsClicked(true);
        toast.success("Form successfully sent!");
 
        setUserName("");
        setUserEmail("");
        setPhoneNumber("");
        setUserMessage("");
        
        setTimeout(() => setIsClicked(false), 2000);
      } catch (error) {
        console.error("Error sending message:", error);
        toast.error("Failed to send message");
        setIsClicked(false);
      }
    } else {
      toast.error("Please enter a valid phone number!");
    }
  };

  return (
    <div className="right p-[32px_50px_30px] rounded-[15px] shadow-[8px_9px_35px_0_rgba(41,41,41,0.08)] slg:w-full slg:justify-center md:p-[22px_15px_30px] md:shadow-none">
      <div className="double-heading flex flex-col my-[20px]">
        <span className="gap-[5px] text-[15px] flex items-center uppercase font-semibold text-orange">
          Write us
          <b>
            <TiMinus />
          </b>
        </span>
        <h1 className="text-[42px] leading-60 font-bold inline text-darkBlue md:text-[30px] md:leading-10">
          Get in Touch
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-start w-full gap-[14px] md:gap-[20px] md:flex-col">
          <div className="flex gap-[36px] md:gap-[10px] w-full items-center md:flex-col md:items-start">
            <input
              id="name"
              required
              className="border outline-none bg-[#F6F7FA] placeholder:font-normal p-[10px_20px] rounded-[7px] text-[17px] font-semibold border-none md:w-full"
              type="text"
              placeholder="Your Name*"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="flex w-full gap-[36px] md:gap-[10px] items-center md:flex-col md:items-start">
            <input
              required
              className="border outline-none bg-[#F6F7FA] placeholder:font-normal p-[10px_20px] rounded-[7px] text-[17px] font-semibold border-none md:w-full"
              type="email"
              value={userEmail}
              placeholder="Your Email*"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full mt-[15px] gap-[36px] md:gap-[10px] items-center md:flex-col md:items-start">
          <input
            ref={withMask("+\\9\\98 (99) 999-99-99")}
            required
            id="phoneLabel"
            onChange={(e) => {
              const strippedValue = e.target.value.replace(/\D/g, "");
              setPhoneNumber(
                strippedValue.startsWith("998")
                  ? strippedValue.substring(3)
                  : strippedValue
              );
            }}
            value={phoneNumber}
            className="border outline-none w-full placeholder:font-normal bg-[#F6F7FA] p-[10px_20px] rounded-[7px] text-[17px] font-semibold border-none"
            inputMode="text"
            placeholder="+998 (__) ___-__-__"
          />
        </div>
        <div className="w-full mt-[15px] h-[20vh] mb-[30px] gap-[36px] md:gap-[10px] items-center md:flex-col md:items-start">
          <textarea
            required
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            className="border resize-none outline-none w-full bg-[#F6F7FA] placeholder:font-normal pt-2 pl-[20px] pb-[90px] rounded-[7px] text-[17px] font-semibold border-none"
            placeholder="Message..."
          />
        </div>
        <button
          type="submit"
          className={`font-semibold text-[16px] p-[15px_35px] rounded-[5px] transform ease-in-out duration-300 border border-blue ${
            isClicked
              ? "bg-white text-blue"
              : "bg-blue text-white hover:bg-white hover:text-blue"
          }`}
        >
          Send Message
        </button>
      </form>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default FormContactPage;