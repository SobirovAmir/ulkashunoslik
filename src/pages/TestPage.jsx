import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TestPage.css';

// Funksiya massivni aralashtirish uchun
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

// Test matnini parse qilish funksiyasi
const parseTestFile = (text) => {
  return text
    .trim()
    .split('\n?') // Savollarni bo'lish
    .filter(Boolean)
    .map((block) => {
      const lines = block.split('\n');
      const question = lines[0].replace('?', '').trim();
      const options = lines.slice(1).map((line) => ({
        text: line.replace(/^[-+]/, '').trim(),
        isCorrect: line.startsWith('+'),
      }));

      return {
        question,
        options: shuffleArray(options),
        selected: null,
      };
    });
};

const TestsPage = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({ correct: 0, total: 0 });
  const [finished, setFinished] = useState(false);

  // Dars raqamini olish
  const number = lessonId.match(/\d+/)[0];

  // Testlarni yuklash
  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await fetch(`/tests/${lessonId}.txt`);
        const text = await response.text();
        setTests(shuffleArray(parseTestFile(text)));
      } catch (error) {
        console.error('Testlarni yuklashda xatolik:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, [lessonId]);

  // Javobni tanlash funksiyasi
  const handleAnswer = (index, selectedOption) => {
    setTests((prevTests) =>
      prevTests.map((test, i) =>
        i === index ? { ...test, selected: selectedOption } : test
      )
    );
  };

  // Testni yakunlash funksiyasi
  const finishTest = () => {
    const correctAnswers = tests.filter((test) => {
      const correctOption = test.options.find((option) => option.isCorrect);
      return correctOption?.text === test.selected;
    }).length;

    setResults({ correct: correctAnswers, total: tests.length });
    setFinished(true);
  };

  if (loading) {
    return (
      <div className="testspage-loader">
        <p>Testlar yuklanmoqda...</p>
      </div>
    );
  }

  if (finished) {
    const accuracy = Math.round((results.correct / results.total) * 100);
    return (
      <div className="testspage-results">
        <h2>Test tugadi</h2>
        <p>
          Siz <strong>{results.correct}</strong> ta savolga to&apos;g&apos;ri javob berdingiz 
          (<strong>{results.total}</strong> ta savoldan).
        </p>
        <p>Aniq javoblar foizi: <strong>{accuracy}%</strong></p>
        <button onClick={() => navigate(-1)} className="testspage-back-button">
          Ortga qaytish
        </button>
      </div>
    );
  }

  return (
    <div className="testspage">
      <h1>{number}-Ma&apos;ruza uchun test</h1>
      <button onClick={() => navigate(-1)} className="testspage-back-button">
        Orqaga
      </button>
      <div className="testspage-questions">
        {tests.map((test, index) => (
          <div key={index} className="testspage-question">
            <h3>{index + 1}. {test.question}</h3>
            <ul>
              {test.options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option.text}
                      checked={test.selected === option.text}
                      onChange={() => handleAnswer(index, option.text)}
                    />
                    {option.text}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button onClick={finishTest} className="testspage-finish-button">
        Testni yakunlash
      </button>
    </div>
  );
};

export default TestsPage;
