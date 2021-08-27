import { atomFamily, selectorFamily, useRecoilValue } from "recoil";
import { ITodos } from "../../interfaces/todos/todos.interface";
import { fetchTodosByUserId } from "../../services/todos/todos.service";

const todoUserListRequestIdState = atomFamily<number, number>({
  key: "postCommentListRequestIdState",
  default: 0,
});

export const todoListByUserIdState = selectorFamily<ITodos[], number>({
  key: "todoListByUserId",
  get:
    (userId) =>
    ({ get }) => {
      get(todoUserListRequestIdState(userId));
      return fetchTodosByUserId(userId);
    },
});
