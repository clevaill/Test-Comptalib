import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import { TodoStackEnum } from "../../enums/todo/todoStack.enum";

const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ContentText = styled.Text``;

export const LoginPage = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <ContainerView>
      <Pressable onPress={() => navigation.navigate(TodoStackEnum.LIST)}>
        <ContentText>Login</ContentText>
      </Pressable>
    </ContainerView>
  );
};
