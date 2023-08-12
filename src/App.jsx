import { Route, Routes } from 'react-router-dom';
import Feed from './components/Feed';
import Header from './components/Header';
import SearchResults from './components/searchResults';
import VideoDetails from './components/VideoDetails';
import { AppContext } from './context'
import Error from './components/Error';

function App() {

  return (
    <>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/searchResult/:searchQuery" element={<SearchResults />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AppContext>
    </>
  )
}

export default App ;