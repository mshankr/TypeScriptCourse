import {
  Button,
  Icon,
  InputGroup,
  Intent,
  NonIdealState,
  ProgressBar,
} from "@blueprintjs/core";
import React from "react";
import { connect } from "react-redux";
import { createTodo, deleteTodo, fetchTodos, Todo } from "../actions";
import { StoreState } from "../reducers";
import { IconNames } from "@blueprintjs/icons";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
  deleteTodo(id: number): any;
  createTodo(title: string): any;
}

interface AppState {
  fetching: boolean;
  newTodo: string;
  fetched: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      fetching: false,
      newTodo: "",
      fetched: false,
    };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (prevProps.todos.length !== this.props.todos.length) {
      this.setState({
        fetching: false,
      });
    }
  }

  onCreateClick = (): void => {
    if (this.state.newTodo) {
      this.props.createTodo(this.state.newTodo);
      this.clearInput();
    }
  };

  onKbCreateClick = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    // event.preventDefault();

    if (event.key === "Enter") {
      this.onCreateClick();
    }
  };

  addButton = (
    <Button
      icon={IconNames.KEY_ENTER}
      intent={Intent.PRIMARY}
      minimal={true}
      onClick={this.onCreateClick}
    />
  );

  onFetchClick = (): void => {
    this.props.fetchTodos();
    this.setState({
      fetching: true,
      fetched: true,
    });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  handleTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // event.preventDefault();
    if (event.target) {
      this.setState({
        newTodo: event.target.value,
      });
    }
  };

  clearInput = (): void => {
    this.setState({
      newTodo: "",
    });
  };

  handleFocus = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.target.select();
  };

  renderList(): JSX.Element[] {
    if (!this.props.todos.length) {
      return [<NonIdealState icon={IconNames.INBOX} title="No todos" />];
    }
    return this.props.todos.map((todo: Todo) => (
      <div key={todo.id} className="pointer">
        <div onClick={() => this.onTodoClick(todo.id)}>
          {todo.completed ? (
            <i className="check square outline icon"></i>
          ) : (
            <i className="square outline icon"></i>
          )}
          &nbsp;
          {todo.title}
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <h2 className="ui header">
          <img
            src={process.env.PUBLIC_URL + "/molly.png"}
            className="ui circular image"
          />
          Molly's To-do List
        </h2>
        <button
          className={"ui button " + (this.state.fetched && "disabled")}
          onClick={this.onFetchClick}
        >
          Fetch
        </button>
        <br />
        <br />

        {/*
        <InputGroup
          placeholder="What to do next?"
          rightElement={this.addButton}
          type="text"
          onKeyDown={this.onKbCreateClick}
          onChange={this.handleTextChange}
        />
        */}
        {/* HTML elements are affected by Materialize CSS*/}
        <div className="ui action input" id="text-input">
          <input
            type="text"
            placeholder="Add new to-do..."
            value={this.state.newTodo}
            onChange={this.handleTextChange}
            onKeyDown={this.onKbCreateClick}
            onFocus={this.handleFocus}
          />
          <button
            className="ui icon positive button"
            onClick={this.onCreateClick}
          >
            <Icon icon={IconNames.SEND_MESSAGE} />
          </button>
        </div>
        {this.state.fetching && <ProgressBar intent={Intent.NONE} />}
        <br />
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, {
  fetchTodos,
  deleteTodo,
  createTodo,
})(_App);
