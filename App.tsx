import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";
import { TodoNavigation } from "./src/navigation/todo.navigation";

export default function App() {
  return (
    <RecoilRoot>
      <TodoNavigation />
    </RecoilRoot>
  );
}
