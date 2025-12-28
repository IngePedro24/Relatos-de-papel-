import { useState, useMemo } from "react";
import { books } from "../data/books";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import "../styles/main.css";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = useMemo(() => {
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="home-page">
      <h1 className="heading-1">Catálogo de Libros</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {filteredBooks.length === 0 ? (
        <p className="home-page__no-results">No se encontraron libros.</p>
      ) : (
        <div className="grid">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
