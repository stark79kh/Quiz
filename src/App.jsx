import './App.css';
import { useEffect, useMemo, useState } from "react";
import Quiz from './components/Quiz';
import Timer from './components/Timer'
import Start from "./components/Start";



function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("Chưa trả lời câu nào!");

  const data = [
    {
      id: 1,
      question: "Từ HTML là từ viết tắt của từ nào?",
      answers: [
        {
          select: "A",
          text: "Hyperlinks and Text Markup Language",
          correct: false,
        },
        {
          select: "B",
          text: "Hyper Text Markup Language",
          correct: true,
        },
        {
          select: "C",
          text: "Home Tool Markup Language",
          correct: false,
        },
        {
          select: "D",
          text: "Tất cả đều sai",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Đâu là tag tạo ra tiêu đề web kích cỡ lớn nhất?",
      answers: [
        {
          select: "A",
          text: "<heading>",
          correct: false,
        },
        {
          select: "B",
          text: "<head>",
          correct: false,
        },
        {
          select: "C",
          text: "<h1>",
          correct: true,
        },
        {
          select: "D",
          text: "<h6>",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Có bao nhiêu cách thêm CSS vào HTML?",
      answers: [
        {
          select: "A",
          text: "1",
          correct: false,
        },
        {
          select: "B",
          text: "2",
          correct: false,
        },
        {
          select: "C",
          text: "3",
          correct: true,
        },
        {
          select: "D",
          text: "4",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Làm sao để tạo chữ đậm trong CSS?",
      answers: [
        {
          select: "A",
          text: "font-weight: bold",
          correct: true,
        },
        {
          select: "B",
          text: "style: bold",
          correct: false,
        },
        {
          select: "C",
          text: "font: b",
          correct: false,
        },
        {
          select: "D",
          text: "text: bold",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: " Làm sao để thay đổi font của mỗi phần tử?",
      answers: [
        {
          select: "A",
          text: "f:",
          correct: false,
        },
        {
          select: "B",
          text: "family:",
          correct: false,
        },
        {
          select: "C",
          text: "font-family:",
          correct: true,
        },
        {
          select: "D",
          text: "font:",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Đâu là những tag dành cho việc tạo bảng?",
      answers: [
        {
          select: "A",
          text: "<table> <tr> <td>",
          correct: true,
        },
        {
          select: "B",
          text: "<thead> <body> <tr>",
          correct: false,
        },
        {
          select: "C",
          text: "<table> <head> <tfoot>",
          correct: false,
        },
        {
          select: "D",
          text: "<table> <tr> <tt>",
          correct: false,
        },
      ],
    },
  ];

  const mapPyramid = useMemo(
    () =>
    [
      { id: 1, name: "Câu 1" }, { id: 2, name: "Câu 2" }, { id: 3, name: "Câu 3" }, { id: 4, name: "Câu 4" },
      { id: 5, name: "Câu 5" }, { id: 6, name: "Câu 6" }, { id: 7, name: "Câu 7" }, { id: 8, name: "Câu 8" },
      { id: 9, name: "Câu 9" }, { id: 10, name: "Câu 10" }, { id: 11, name: "Câu 11" }, { id: 12, name: "Câu 12" },
      { id: 13, name: "Câu 13" }, { id: 14, name: "Câu 14" }, { id: 15, name: "Câu 15" }, { id: 16, name: "Câu 16" },
      { id: 17, name: "Câu 17" }, { id: 18, name: "Câu 18" }, { id: 19, name: "Câu 19" }, { id: 20, name: "Câu 20" },
      { id: 21, name: "Câu 21" }, { id: 22, name: "Câu 22" }, { id: 23, name: "Câu 23" }, { id: 24, name: "Câu 24" },
      { id: 25, name: "Câu 25" }, { id: 26, name: "Câu 26" }, { id: 27, name: "Câu 27" }, { id: 28, name: "Câu 28" },
      { id: 29, name: "Câu 29" }, { id: 30, name: "Câu 30" }, { id: 31, name: "Câu 31" }, { id: 32, name: "Câu 32" },
      { id: 33, name: "Câu 33" }, { id: 34, name: "Câu 34" }, { id: 35, name: "Câu 35" }, { id: 36, name: "Câu 36" },
      { id: 37, name: "Câu 37" }, { id: 38, name: "Câu 38" }, { id: 39, name: "Câu 39" }, { id: 40, name: "Câu 40" },
    ], []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(mapPyramid.find((m) => m.id === questionNumber - 1).name);
  }, [questionNumber, mapPyramid]);

  return (
    <div className="App">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
      <>
        <div className='main'>
          {timeOut ? (
            <h1 className='endText'>Bạn trả lời đúng đến: {earned}</h1>
          ) :(
          <>
            <div className='top'>
              <h3>TRẮC NGIỆM HTML-CSS-JS</h3>
            </div>
            <div className='center'>
              <div className='timer'>
                <Timer
                  setTimeOut={setTimeOut}
                  questionNumber={questionNumber}
                />
              </div>
            </div>
            <div className='bottom'>
              <Quiz
                data={data}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setTimeOut={setTimeOut}
              />
            </div>
          </>
          )}
        </div>
        <div className='pyramid'>
          {mapPyramid.map((m)=>(
            <div key={m.id} className={questionNumber === m.id ? "itemList active" : "itemList"}>
              {m.name}
            </div>
          ))}
        </div>
      </>
      )}
    </div>
  );
}

export default App;