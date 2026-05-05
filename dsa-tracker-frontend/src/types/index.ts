export type User = {
  _id: string;
  email: string;
};

export type Topic = {
  _id: string;
  title: string;
};

export type Chapter = {
  _id: string;
  title: string;
  topicId: string;
};

export type Problem = {
  _id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  chapterId: string;

  youtubeLink?: string;
  leetcodeLink?: string;
  articleLink?: string;

  companies?: string[];
};

export type Progress = {
  _id: string;
  userId: string;
  problemId: string;
  completed: boolean;
};