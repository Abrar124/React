import "./App.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Todo = () => {
  return (
    <div className="main_div container">
      <div className="center_div">
        <br />
        <h1>Todo List</h1>
        <br />
        <input type="text" placeholder="Your text here" />
        <button>+</button>

        <ol>
          <li> Buy mango</li>
        </ol>
      </div>
    </div>
  );
};

export default Todo;
