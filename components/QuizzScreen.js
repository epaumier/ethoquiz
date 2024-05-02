import React from 'react';
import { View, Pressable, Text, StatusBar } from "react-native";

import { styled } from 'nativewind';
import { getQuizzes } from "../database/query";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

// const test = getQuizzes();

// console.log(test);

export default function QuizzScreen({navigation}) {
    return (
        <StyledView className="flex-1 items-center justify-around bg-white">
                <StyledText className="text-2xl bg-green-800 px-8 py-4 text-white rounded-lg">Quizz Name</StyledText>
                <StyledView className="flex flex-col gap-4">
                    <StyledPressable onPress={console.log("test")}>
                        <StyledText className="text-xl text-white bg-green-800 rounded-lg px-10 py-3">Answer 1</StyledText>
                    </StyledPressable>
                    <StyledPressable>
                        <StyledText className="text-xl text-white bg-green-800 rounded-lg px-10 py-3">Answer 2</StyledText>
                    </StyledPressable>
                </StyledView>
            <StatusBar style="auto" />
        </StyledView>
    );
};