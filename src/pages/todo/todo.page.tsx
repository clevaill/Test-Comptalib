import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components/native";
import { todoListByUserIdState } from "../../atoms/todos/todos.atom";
import { selectedUserIdState } from "../../atoms/users/users.atom";
import { InputComponent } from "../../components/input/input.component";

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

const TopView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FilterView = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`;

const FilterColor = styled.View<{ color?: Boolean }>`
  ${(props) =>
    props.color
      ? "background-color: lightgreen;"
      : "background-color: lightblue;"}
  margin-left: 10px;
  border-radius: 5px;
`;

const FilterText = styled.Text`
  display: flex;
  font-weight: 500;
  font-size: 14px;
  padding: 5px;
`;

const TodoListView = styled.View`
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: #ffffff;
  border-radius: 5px;
`;

const ColorView = styled.View<{ completed?: Boolean }>`
  ${(props) =>
    props.completed
      ? "background-color: lightgreen;"
      : "background-color: lightblue;"}
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
  const [text, onChangeText] = useState("");
  const listTodo = todos
    .filter((todo) => todo.title.includes(text))
    .map((filter) => filter);

  return (
    <ContainerView>
      <ContentView>
        <TitleText>Todo List</TitleText>
        <TopView>
          <InputComponent onChangeText={onChangeText} value={text} />
          <FilterView>
            <FilterColor color={true}>
              <FilterText>Faits</FilterText>
            </FilterColor>
            <FilterColor color={false}>
              <FilterText>À faire</FilterText>
            </FilterColor>
          </FilterView>
        </TopView>
        {listTodo.map((data) => (
          <TodoListView key={data.id}>
            <ColorView completed={data.completed}>
              <TodoListText>{data.title}</TodoListText>
            </ColorView>
          </TodoListView>
        ))}
      </ContentView>
    </ContainerView>
  );
};
