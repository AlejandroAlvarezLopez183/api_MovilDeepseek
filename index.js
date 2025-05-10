import dotenv from "dotenv"
import OpenAI from "openai"

dotenv.config();

const openai = new OpenAI({
apiKey: process.env.OPENAI_API_KEY,
baseURL:process.env.OPENAI_BASE_URL,
});

async function obtenerRespuesta() {
    try{
        const chat = await openai.chat.completions.create({
            model: "deepseek/deepseek-prover-v2:free",
            messages:[{role: "user", content:"¿que es el mar muerto"}],
        });

        console.log(chat.choices[0].message.content);

    }catch(error)
    {
        console.log("error en la solicitud",error);
    }
}
obtenerRespuesta();
