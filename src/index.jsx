import { DiaryEntry } from "./components/DiaryEntry.jsx";
import { Header } from "./components/NavBar.jsx";
import diaryData from "./data/diaryData.js";

export default function App() {
  const diaryEntries = diaryData.map((entry) => {
    return <DiaryEntry 
              key={entry.id}
              entry={entry}
            />
  })
  return (
    <>
      <Header />
      {diaryEntries}
    </>
  )
}
