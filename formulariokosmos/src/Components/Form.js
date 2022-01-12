import React from "react";

function Form({
  bookTitle,
  setBookTitle,
  author,
  setAuthor,
  genre,
  setGenre,
  editorial,
  setEditorial,
  year,
  setYear,
  lang,
  setLang,
  onFormSubmitAdd,
  handleSelectGenre,
  handleSelectEditorial,
  handleSelectLanguage
}) 

{
  return (
    <div className="addDiv">
      <div className="formAddBook">
        <h2 className="AddBooks">Add Book</h2>
        <form className="addForm" onSubmit={(event) => onFormSubmitAdd(event)}>
          <div>
            <h4 className="bookNewTag">Title of the book: </h4>
            <input
              id="bookTitle"
              name="bookTitle"
              type="text"
              value={bookTitle}
              onChange={(Event) => setBookTitle(Event.target.value)}
              className="addBookInput"
            />
          </div>
          <div>
            <h4 className="bookNewTag">Author of the book: </h4>
            <input
              id="author"
              name="author"
              type="text"
              value={author}
              onChange={(Event) => setAuthor(Event.target.value)}
              className="addBookInput"
            />
          </div>
          <div>
            <h4 className="bookNewTag">Year of release: </h4>
            <input
              id="year"
              name="year"
              type="text"
              value={year}
              onChange={(Event) => setYear(Event.target.value)}
              className="addBookInput"
            />
          </div>
          <div>
            <h4 className="bookNewTag">Genre of the book: </h4>
            <select
              value={genre}
              onChange={(event) => handleSelectGenre(event)}
            >
              <option value="Terror">Terror</option>
              <option value="Romance">Romance</option>
              <option value="Science fiction">Science fiction</option>
              <option value="Thriller">Thriller</option>
            </select>
          </div>
          <div>
            <h4 className="bookNewTag">Editorial of the book: </h4>
            <select
              value={editorial}
              onChange={(event) => handleSelectEditorial(event)}
            >
              <option value="Mundo">Mundo</option>
              <option value="Mirahadas">Mirahadas</option>
              <option value="Errata Naturae">Errata Naturae</option>
              <option value="Sexto Piso">Sexto Piso</option>
            </select>
          </div>
          <div onChange={(event)=>handleSelectLanguage(event)}>
            <h4 className="bookNewTag">language of the book: </h4>
            <input
              type="radio"
              id="language1"
              name="lang"
              value="English"
            />
            <label for="language1">English</label>
            <input
              type="radio"
              id="language2"
              name="lang"
              value="Spanish"
            />
            <label for="language2">Spanish</label>
          </div>
          <div className="buttonSignUpDiv">
            <button className="buttonSingIn" type="submit">
              Add book
            </button>
          </div> 
        </form>
      </div>
    </div>
  );
}

export default Form;
