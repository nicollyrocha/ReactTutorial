import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//setup variables
const firstBook = {
  title: 'A revolução dos bichos: Um conto de fadas',
  author: 'George Orwell, Heitor Aquino Ferreira',
  img: 'https://images-na.ssl-images-amazon.com/images/I/61owA5ey3iL._AC_SX368_.jpg',
};
const secondBook = {
  title: 'Leitura de verão',
  author: 'Emily Henry',
  img: 'https://images-na.ssl-images-amazon.com/images/I/71KnjPmQnkL.jpg',
};

function BookList() {
  return (
    <section>
      <Book
        img={firstBook.img}
        author={firstBook.author}
        title={firstBook.title}
      />
      <Book
        img={secondBook.img}
        author={secondBook.author}
        title={secondBook.title}
      />
    </section>
  );
}

const Book = ({ img, title, author }) => {
  //const { img, title, author } = props;
  return (
    <div className="div-article">
      <article className="article">
        <img src={img} alt="" className="imagem" />
        <h1 className="title">{title}</h1>
        <h4 className="author">{author}</h4>
      </article>
    </div>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
