import  {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

class bardApi {
  constructor() {
    this.safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
    ];
    this.generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };
    this.chat;
  }

   initializeChat(apiKeyy) {
    const genAI = new GoogleGenerativeAI(apiKeyy);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    this.chat = model.startChat({
      generationConfig: this.generationConfig,
      safetySettings: this.safetySettings,
    });
  }

  async getBardResponse(input) {
    let bard_answer = { response: {}, text: "" };
    try {
      const result = await this.chat.sendMessage(input);
      const response = result.response;
      bard_answer.response = response;
      bard_answer.text = response.text();
    } catch (error) {
      bard_answer.response = error.response || {};
      bard_answer.text = error.message;
    }
    return bard_answer;
  }
}
export = {
  bardApi
  }
