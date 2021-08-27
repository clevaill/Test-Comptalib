import { atom } from "recoil";
import { IUsers } from "../../interfaces/users/users.interface";
import { fetchUsers } from "../../services/users/users.service";

export const userListState = atom<IUsers[]>({
  key: "userList",
  default: fetchUsers(),
});

export const selectedUserIdState = atom<number | undefined>({
  key: "selectedUserIdInternalState",
  default: undefined,
});
