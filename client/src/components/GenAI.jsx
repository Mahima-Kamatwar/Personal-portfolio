import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaTimes } from "react-icons/fa"
const GenAIChat = () => {
  const navigate = useNavigate();

  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const askAI = async () => {
    if (question === "") return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/chat?q=${question}`
      );
      const data = await res.json();
      setAnswer(data.answer);
    } catch {
      setAnswer("AI is not responding right now");
    }
  };

  return (
    <div className="relative bg-white p-6 rounded-xl shadow-lg">
{/* close button */}
<button
  onClick={() => navigate("/")}
  className="absolute top-3 right-3 text-xl text-gray-600 hover:text-red-500"
>
  <FaTimes />
</button>

      <h3 className="text-xl font-bold mb-4">
        GenAI – MERN Assistant
      </h3>

      <input
        type="text"
        placeholder="Ask something about MERN..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />

      <button
        onClick={askAI}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        Ask AI
      </button>

      {answer && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          {answer}
        </div>
      )}
    </div>
  )
}

export default GenAIChat
