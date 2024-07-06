import React from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';

import MovieList from './components/movie_list/MovieList';
import SerialList from './components/serials_list/SerialList';
import HomePage from './components/home_page/HomePage';
import MusicList from "./components/music_list/MusicList";
import GamesList from "./components/games_list/GamesList";
import About from "./components/about/About";

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/serials" element={<SerialList />} />
          <Route path="/music" element={<MusicList/>} />
          <Route path="/games" element={<GamesList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
