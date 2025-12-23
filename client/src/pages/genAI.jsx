import GenAIChat from "../components/GenAI";

const GenAI = () => {
  return (
    <section className="min-h-screen bg-highlight py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Generative AI
        </h2>

        <GenAIChat />
      </div>
    </section>
  );
};

export default GenAI;
