import React, { useState } from "react";
import {
  selectedUserIdState,
  userListState,
} from "../../atoms/users/users.atom";
import styled from "styled-components/native";
import { InputComponent } from "../../components/input/input.component";
import { useNavigation } from "@react-navigation/native";
import { TodoStackEnum } from "../../enums/todo/todoStack.enum";
import { useRecoilState, useRecoilValue } from "recoil";

const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
`;

const ContentView = styled.View`
  display: flex;
`;

const TitleText = styled.Text`
  font-weight: 600;
`;

const InputView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.Pressable`
  display: flex;
  align-items: center;
  background-color: #0095f6;
  border-radius: 5px;
  width: 30%;
  margin-top: 15px;
`;

const ButtonText = styled.Text`
  font-weight: 600;
  color: #ffffff;
  padding: 5px 10px;
`;

const UserText = styled.Text`
  font-weight: 600;
  color: red;
`;

export const LoginPage = (): JSX.Element => {
  const [text, onChangeText] = useState("");
  const [errorBool, setErrorBool] = useState(false);
  const navigation = useNavigation();

  const [userId, setUserId] = useRecoilState(selectedUserIdState);
  const users = useRecoilValue(userListState);

  const handleLogin = () => {
    users.map((user) => {
      if (text === user.username) {
        navigation.navigate(TodoStackEnum.LIST);
        setErrorBool(false);
        setUserId(user.id);
      } else {
        setErrorBool(true);
      }
    });
  };

  return (
    <ContainerView>
      <ContentView>
        <InputView>
          <TitleText>Nom d'utilisateur</TitleText>
          <InputComponent onChangeText={onChangeText} value={text} />
          {errorBool === true && (
            <UserText>Nom d'utilisateur non valide!</UserText>
          )}
          <Button onPress={handleLogin}>
            <ButtonText>Se connecter</ButtonText>
          </Button>
        </InputView>
      </ContentView>
    </ContainerView>
  );
};
