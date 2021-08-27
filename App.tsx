import React, { Suspense } from "react";
import { Text } from "react-native";
import { RecoilRoot } from "recoil";
import { TodoNavigation } from "./src/navigation/todo.navigation";

export default function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Text>Chargement ...</Text>}>
        <TodoNavigation />
      </Suspense>
    </RecoilRoot>
  );
}
