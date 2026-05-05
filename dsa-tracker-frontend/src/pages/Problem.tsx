import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProblems } from "../services/problemService";
import {
  getProgress,
  updateProgress,
} from "../services/progressService";

import type { Problem, Progress } from "../types";

import { BookOpen, PlayCircle, Code } from "lucide-react";

const Problems = () => {
  const { chapterId } = useParams<{ chapterId: string }>();

  const [problems, setProblems] = useState<Problem[]>([]);
  const [completedSet, setCompletedSet] = useState<Set<string>>(
    new Set()
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!chapterId) return;

    const fetchData = async () => {
      try {
        const [problemsData, progressData] = await Promise.all([
          getProblems(chapterId),
          getProgress(),
        ]);

        setProblems(problemsData);

        const completed = new Set(
          progressData
            .filter((p: Progress) => p.completed)
            .map((p: Progress) => p.problemId)
        );

        setCompletedSet(completed);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [chapterId]);

  const handleToggle = async (problemId: string) => {
    const isCompleted = completedSet.has(problemId);

    const newSet = new Set(completedSet);

    if (isCompleted) {
      newSet.delete(problemId);
    } else {
      newSet.add(problemId);
    }

    setCompletedSet(newSet);

    try {
      await updateProgress({
        problemId,
        completed: !isCompleted,
      });
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  if (loading) return <p style={{ padding: "20px" }}>Loading...</p>;

  const getArticleUrl = (url: string) => {
  if (url.startsWith("http")) return url;
  return `https://dsa.apnacollege.in${url}`;
};

  return (
    <div className="page-container problems-container">
      <h2 className="chapter-title">Problems</h2>

      <div className="problem-list">
        {problems.map((problem) => (
          <div
            key={problem._id}
            className={`problem-card ${completedSet.has(problem._id) ? "completed" : ""
              }`}
          >
            <div className="problem-left">
              <input
                type="checkbox"
                checked={completedSet.has(problem._id)}
                onChange={() => handleToggle(problem._id)}
              />

              <div>
                <h4>{problem.title}</h4>

                <span
                  className={`badge ${problem.difficulty.toLowerCase()
                    }`}
                >
                  {problem.difficulty}
                </span>
              </div>
            </div>

            <div className="problem-actions">
              {problem.articleLink && (
                <a
                  // href={problem.articleLink}
                  href={getArticleUrl(problem.articleLink)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn"
                >
                  <BookOpen size={16} />
                  <span>Article</span>
                </a>
              )}

              {problem.youtubeLink && (
                <a
                  href={problem.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn"
                >
                  <PlayCircle size={16} />
                  <span>Video</span>
                </a>
              )}

              {problem.leetcodeLink && (
                <a
                  href={problem.leetcodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn primary"
                >
                  <Code size={16} />
                  <span>Solve</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problems;