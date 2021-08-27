import React from "react";
import styled from "styled-components/native";

const ContainerView = styled.View`
  display: flex;
  align-items: center;
`;

const InputView = styled.View`
  display: flex;
  justify-content: flex-start;
  margin: 10px 0 0 0;
  width: 100%;
`;

const ContentInput = styled.TextInput`
  height: 30px;
  width: 150px;
  border-width: 1px;
  border-color: lightgray;
  padding-left: 10px;
  border-radius: 5px;
  background-color: #ffffff;
`;

interface InputComponentProps {
  placeholder?: string;
  onChangeText: (text: string) => void;
  value: string;
}

export const InputComponent = (props: InputComponentProps): JSX.Element => {
  const { placeholder, onChangeText, value } = props;

  return (
    <ContainerView>
      <InputView>
        <ContentInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          clearButtonMode="always"
          autoCapitalize="none"
        />
      </InputView>
    </ContainerView>
  );
};
