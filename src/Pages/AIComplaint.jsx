import ComplaintBot from '../components/ComplaintChatBox';

const AIComplaints = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        AI Customer Support 🤖
      </h1>

      <p className="text-center text-gray-600 mb-6">
        Describe your issue and our assistant will guide you.
      </p>

      <ComplaintBot />
    </div>
  );
};

export default AIComplaints;
