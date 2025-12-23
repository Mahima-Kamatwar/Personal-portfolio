import GenAIChat from "../components/GenAI";

const GenAI = () => {
  return (
    <section className="min-h-screen bg-highlight flex items-center py-20">
      <div className="max-w-4xl mx-auto px-6 w-full">
{/* title */}
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Generative AI Assistant
        </h2>
{/* card centered */}
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <GenAIChat />
          </div>
        </div>

      </div>
    </section>
  )
}

export default GenAI
