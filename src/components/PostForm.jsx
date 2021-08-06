import React from "react";
import { connect } from "react-redux";
import { createPost } from "./../redux/actions";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  changeInputHandler = (e) => {
    e.persist();
    this.setState((prevState) => ({
      ...prevState,
      ...{
        [e.target.name]: e.target.value,
      },
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title.trim()) {
      return;
    }

    const newPost = {
      title: this.state.title,
      id: Date.now().toString(),
    };
    this.props.createPost(newPost);
    console.log(newPost);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Post form</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Заголовок роста
          </label>
          <input
            className="form-control"
            id="exampleInputEmail1"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHandler}
          />
          <button type="submit" className="btn btn-success mt-2">
            Создать
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
