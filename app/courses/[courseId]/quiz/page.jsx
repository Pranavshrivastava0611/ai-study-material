"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import StepProgress from "../_components/StepProgress";
import QuizCardItem from "./_components/QuizCardItem";

function Quiz() {
  const { courseId } = useParams();
  const [quizData, setQuizData] = useState();
  const [quiz, setQuiz] = useState();
  const [stepCount, setStepCount] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const GetQuiz = async () => {
    const res = await axios.post("/api/study-type", {
      courseId: courseId,
      studyType: 'Quiz',
    });

    setQuizData(res.data);
    setQuiz(res?.data?.content?.questions);
    console.log("this is the quiz result", res.data);
  };

  useEffect(() => {
    GetQuiz();
  }, []);

  useEffect(() => {
    console.log("quiz", quiz);
  }, [quiz]);

  const checkAnswer = (userAnswer, currentQuestion) => {
    setIsCorrectAnswer(currentQuestion.correctAnswer);
    if (userAnswer === currentQuestion?.correctAnswer) {
      setCorrectAnswers(true);
      return;
    }
    setCorrectAnswers(false);
  };

  useEffect(() => {
    setCorrectAnswers(null);
    setIsCorrectAnswer(null);
  }, [stepCount]);

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8">
      <h2 className="font-bold text-2xl text-center mb-6">Quiz</h2>

      <StepProgress
        data={quiz || []}
        stepCount={stepCount}
        setStepCount={(v) => setStepCount(v)}
      />

      <div className="mt-6">
        {Array.isArray(quiz) && quiz.length > 0 && quiz[stepCount] && (
          <QuizCardItem
            quiz={quiz[stepCount]}
            userSelectedOption={(v) => checkAnswer(v, quiz[stepCount])}
          />
        )}
      </div>

      {correctAnswers === false && (
        <div className="mt-6 border p-4 border-red-700 bg-red-100 rounded-lg text-sm sm:text-base">
          <h2 className="font-bold text-red-600">Incorrect</h2>
          <p>Correct answer is: <span className="font-semibold">{isCorrectAnswer}</span></p>
        </div>
      )}

      {correctAnswers === true && (
        <div className="mt-6 border p-4 border-green-700 bg-green-100 rounded-lg text-sm sm:text-base">
          <h2 className="font-bold text-green-600">Correct</h2>
          <p>Your answer is correct!</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
