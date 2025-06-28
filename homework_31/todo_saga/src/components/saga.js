import { call, put, takeEvery } from "redux-saga/effects";
import { fetchTodos, setTodos } from "./MainPageSlice";

function* fetchTodosWorker() {
  try {
    const res = yield call(() =>
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    );
    const data = yield res.json();
    const formatted = data.map((t) => ({
      id: t.id,
      text: t.title,
      completed: t.completed,
    }));
    yield put(setTodos(formatted));
  } catch (e) {
    yield put(setTodos([]));
  }
}

export default function* rootSaga() {
  yield takeEvery(fetchTodos.type, fetchTodosWorker);
}
