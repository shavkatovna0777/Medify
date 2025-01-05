export const sendMessageToTelegram = async (chatIds, message, telegramUrl) => {
  try {
    await Promise.all(
      chatIds.map(async (chatId) => {
        await fetch(telegramUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text: message }),
        });
      })
    );
  } catch (error) {
    console.error("Telegramga xabar yuborishda xatolik:", error);
  }
};
