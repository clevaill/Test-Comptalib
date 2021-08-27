import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";

const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ContentText = styled.Text``;

export const TodoPage = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <ContainerView>
      <Pressable onPress={() => navigation.goBack()}>
        <ContentText>Todo</ContentText>
      </Pressable>
    </ContainerView>
  );
};
