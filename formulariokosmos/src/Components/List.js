import { useEffect, useState } from "react";
import Form from "./Form";

function List() {
  const [books, setBooks] = useState([]);
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("Terror");
  const [editorial, setEditorial] = useState("");
  const [year, setYear] = useState("");
  const [lang, setLang] = useState("English");
  const [newArray, setNewArray] = useState({
    id: "",
    title: "",
    author: "",
    genre: "",
    editorial: "",
    year: "",
    language: "",
  });

  useEffect(() => {
    let listBooks = [
      {
        id: "1",
        title: "Lord of the rings",
        author: "Tolkien",
        genre: "Ficcion",
        editorial: "Mundo",
        year: "1892",
        language: "English",
      },
      {
        id: "2",
        title: "Jaws",
        author: "Peter Benchley",
        genre: "Ficcion",
        editorial: "Mundo",
        year: "1973",
        language: "Spanish",
      },
      {
        id: "3",
        title: "Jurassic Park",
        author: "Michael Crichton",
        genre: "Ficcion",
        editorial: "Mundo",
        year: "1990",
        language: "English",
      },
      {
        id: "4",
        title: "El Lobo Estepario",
        author: "Herman Hesse",
        genre: "Ficcion",
        editorial: "Mundo",
        year: "1927",
        language: "Spanish",
      },
      {
        id: "5",
        title: "El Rey de Amarillo",
        author: "Robert W. Chambers",
        genre: "Terror",
        editorial: "Mundo",
        year: "1917",
        language: "English",
      },
      {
        id: "6",
        title: "El Dilema de los Tres Cuerpos",
        author: "Cixin Liu",
        genre: "Ficcion",
        editorial: "Mundo",
        year: "2015",
        language: "English",
      },
    ];
    setBooks(listBooks);
  }, []);

  const onFormSubmitAdd = (event) => {
    event.preventDefault();
    console.log("target", event.target.value);
    if (
      bookTitle == "" ||
      author == "" ||
      genre == "" ||
      editorial == "" ||
      year == ""
    ) {
      alert("The fields are emptys or the form is not complete");
    } else {
      let newbooks = {
        title: bookTitle,
        author: author,
        genre: genre,
        editorial: editorial,
        year: year,
        language: lang,
      };
      setBooks([...books, newbooks]);
    }
  };

  const handleDelete = (id) => {
    const newList = books.filter((value) => value.id !== id);
    setBooks(newList);
  };

  const handleSelectGenre = (event) => {
    setGenre(event.target.value);
  };

  const handleSelectEditorial = (event) => {
    setEditorial(event.target.value);
  };

  const handleSelectLanguage = (event) => {
    setLang(event.target.value);
  };

  return (
    <div className="ulContainer">
      <div className="ulBooksDiv">
        {books ? (
          books.map((value) => {
            return (
              <ul id={"li" + value.id} key={value.id} className="Ulbooks">
                <li id={value.id} index={value.id} className="liBook">
                  <label className="booksLables">id: {value.id}</label>
                  <label className="booksLables">Title: {value.title}</label>
                  <label className="booksLables">Author: {value.author}</label>
                  <label className="booksLables">Genre: {value.genre}</label>
                  <label className="booksLables">
                    Editorial: {value.editorial}
                  </label>
                  <label className="booksLables">Year: {value.year}</label>
                  <label className="booksLables">Lang: {value.language}</label>
                  <div className="divButtonDelete">
                    <button
                      className="buttonDelete"
                      onClick={() => handleDelete(value.id)}
                    >
                      x
                    </button>
                  </div>
                </li>
              </ul>
            );
          })
        ) : (
          <div>No hay libros en la lista</div>
        )}
        <Form
          newArray={newArray}
          setBookTitle={setBookTitle}
          author={author}
          setAuthor={setAuthor}
          genre={genre}
          setGenre={setGenre}
          editorial={editorial}
          setEditorial={setEditorial}
          year={year}
          setYear={setYear}
          lang={lang}
          setLang={setLang}
          onFormSubmitAdd={onFormSubmitAdd}
          handleSelectGenre={handleSelectGenre}
          handleSelectEditorial={handleSelectEditorial}
          handleSelectLanguage={handleSelectLanguage}
        />
      </div>
    </div>
  );
}

export default List;
