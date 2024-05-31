import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import TodoList from "@/components/TodoList";

describe('TodoList', () => {
    test('add new todo to todolist', () => {
        const { getByTestId, getByText, getByPlaceholderText } = render(<TodoList />);
        fireEvent.changeText(getByPlaceholderText('New Task'), 'Add Milk');
        fireEvent.press(getByText('Add Task'));

        expect(getByTestId('todoList').props.data).toContain('Add Milk');
    })
});