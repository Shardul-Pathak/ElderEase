import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.API_KEY,
});

export default async function generateReport(name, logs) {
  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "user",
        content: `
You are a health report generator.

User Name: ${name}

Here are the user logs (JSON array):
${JSON.stringify(logs)}

---

Using the logs, generate a structured JSON report with EXACTLY these fields:

{
  "overallWellness": string,
  "moodTrends": string,
  "sleepQuality": string,
  "activityLevel": string,
  "waterIntake": string,
  "textSummary": string
}

Return ONLY valid JSON. Do not add backticks, explanations, or any extra text.
        `,
      },
    ],
  });

  const content = response.choices[0].message.content;

  try {
    return JSON.parse(content);
  } catch (e) {
    console.error("Failed to parse JSON:", content);
    throw e;
  }
}
