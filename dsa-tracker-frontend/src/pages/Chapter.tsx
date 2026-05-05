import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getChapters } from "../services/chapterService";
import type { Chapter } from "../types";


const Chapters = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();

  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!topicId) return;

    const fetchChapters = async () => {
      try {
        const data = await getChapters(topicId);
        setChapters(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchChapters();
  }, [topicId]);

  if (loading) return <p className="center">Loading...</p>;

  return (
    <div className="page-container">
      <h2 className="page-title">Chapters</h2>

      <div className="chapter-list">
        {chapters.map((chapter, index) => (
          <div
            key={chapter._id}
            className="chapter-card"
            onClick={() => navigate(`/problems/${chapter._id}`)}
          >
            <span className="chapter-index">Day {index + 1}</span>

            <h3>{chapter.title}</h3>

            <span className="arrow">→</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapters;