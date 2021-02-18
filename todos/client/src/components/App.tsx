import React from "react";
import { connect } from "react-redux";
import { fetchTodos, Todo, deleteTodo } from "../actions";
import { StoreState } from "../reducers";
import { Button, Card, Intent, ProgressBar } from "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
  deleteTodo(id: number): any;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      fetching: false,
    };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({
        fetching: false,
      });
    }
  }

  onFetchClick = (): void => {
    this.props.fetchTodos();
    this.setState({
      fetching: true,
    });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => (
      <div key={todo.id}>
        <div onClick={() => this.onTodoClick(todo.id)}>
          {todo.completed
            ? String.fromCharCode(9745)
            : String.fromCharCode(9744)}
          &nbsp;
          {todo.title}
        </div>
      </div>
    ));
  }

  render() {
    return (
      <Card>
        <Button
          icon="refresh"
          large={true}
          intent={Intent.SUCCESS}
          onClick={this.onFetchClick}
        />
        <br />
        {this.state.fetching && <ProgressBar intent={Intent.NONE} />}
        <Card>{this.renderList()}</Card>
      </Card>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
