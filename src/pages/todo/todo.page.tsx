import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components/native";
import { todoListByUserIdState } from "../../atoms/todos/todos.atom";
import { selectedUserIdState } from "../../atoms/users/users.atom";

const ContainerView = styled.ScrollView`
  flex: 1;
`;

const ContentView = styled.View`
  display: flex;
  margin-top: 12%;
  padding: 0 15px;
`;

const TitleText = styled.Text`
  font-weight: 600;
  font-size: 22px;
`;

const TodoListView = styled.View`
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: #ffffff;
  border-radius: 5px;
`;

const TodoListText = styled.Text`
  font-weight: 600;
  font-size: 14px;
  padding: 15px;
`;

export const TodoPage = (): JSX.Element => {
  const userId = useRecoilValue(selectedUserIdState);
  const todos = useRecoilValue(todoListByUserIdState(userId));

  return (
    <ContainerView>
      <ContentView>
        <TitleText>Todo List</TitleText>
        {todos.map((data) => (
          <TodoListView key={data.id}>
            <TodoListText>{data.title}</TodoListText>
          </TodoListView>
        ))}
      </ContentView>
    </ContainerView>
  );
};
