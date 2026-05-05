import { useEffect, useState } from "react";
import { getTopics } from "../services/topicService";
import { useNavigate } from "react-router-dom";
import type { Topic } from "../types";

const Topics = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const data = await getTopics();
        setTopics(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  if (loading) return <p className="center">Loading...</p>;

  return (
    <div className="page-container">
      <h2 className="page-title">Topics</h2>

      <div className="grid">
        {topics.map((topic) => (
          <div
            key={topic._id}
            className="card"
            onClick={() => navigate(`/chapters/${topic._id}`)}
          >
            <h3>{topic.title}</h3>
            <p>Explore problems →</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;