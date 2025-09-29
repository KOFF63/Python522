import React from 'react';
import './App.css';
import MusicAlbum from './components/MusicAlbum';

const albumData = {
  title: "Гранатовый альбом",
  artist: "Сплин",
  year: "1998",
  publisher: "ОРТ-Рекордс",
  genre: "Русский рок, альтернативный рок",
  cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/29/8e/d5/298ed5aa-1cc7-1303-8157-50adb3e77643/cover.jpg/600x600bb.jpg",
  tracks: [
    { title: "Выхода нет", duration: "4:14" },
    { title: "Весь этот бред", duration: "3:56" },
    { title: "Моё сердце", duration: "4:02" },
    { title: "Орбит без сахара", duration: "3:41" },
    { title: "Линия жизни", duration: "4:28" },
    { title: "Романс", duration: "3:15" },
    { title: "Новенький", duration: "3:52" },
    { title: "Моё имя", duration: "3:44" },
    { title: "Феллини", duration: "4:36" },
    { title: "Дочь самурая", duration: "3:27" },
    { title: "Новые люди", duration: "3:38" },
    { title: "Ковёр-вертолёт", duration: "4:51" }
  ]
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Мой любимый музыкальный альбом</h1>
      </header>
      <main>
        <MusicAlbum albumData={albumData} />
      </main>
    </div>
  );
}

export default App;