import { useParams, Link } from 'react-router-dom';
import { books } from '../data/books';
import { useCart } from '../hooks/useCart';
import '../styles/main.css';

const BookDetailPage = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const book = books.find((b) => b.id === parseInt(id));

    if (!book) {
        return (
            <div className="book-detail-page">
                <p>Libro no encontrado.</p>
                <Link to="/home" className="btn btn--primary">Volver al catálogo</Link>
            </div>
        );
    }

    return (
        <div className="book-detail-page">
            <Link to="/home" className="book-detail-page__back">&larr; Volver</Link>
            <div className="book-detail-page__container">
                <div className="book-detail-page__image-container">
                    <img src={book.image} alt={book.title} className="book-detail-page__image" />
                </div>
                <div className="book-detail-page__info">
                    <h1 className="heading-1">{book.title}</h1>
                    <h2 className="heading-2">{book.author}</h2>
                    <p className="book-detail-page__isbn">ISBN: {book.isbn}</p>
                    <p className="book-detail-page__description">{book.description}</p>
                    <p className="book-detail-page__price">${book.price.toFixed(2)}</p>
                    <button
                        className="btn btn--primary btn--block"
                        onClick={() => addToCart(book)}
                    >
                        Añadir al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;
