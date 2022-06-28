import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <div className="div-article">
      <article className="article">
        <Image />
        <Title className="title" />
        <Author />
        <Capa />
      </article>
    </div>
  );
};
const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/61owA5ey3iL._AC_SX368_.jpg"
      alt=""
      className="imagem"
    />
  );
};

const Title = () => {
  return <h1>A revolução dos bichos: Um conto de fadas</h1>;
};

const Author = () => {
  return <h4 className="author">George Orwell, Heitor Aquino Ferreira</h4>;
};

const Capa = () => {
  return <div className="capa">Capa comum</div>;
};

ReactDOM.render(<BookList />, document.getElementById('root'));
