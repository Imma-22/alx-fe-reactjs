import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "../components/AddTodoForm";
import "@testing-library/jest-dom";

describe("AddTodoForm Component", () => {
  test("renders the input field and add button", () => {
    render(<AddTodoForm onAddTodo={() => {}} />);

    // Check input field
    const input = screen.getByPlaceholderText("Add a new todo");
    expect(input).toBeInTheDocument();

    // Check Add button
    const button = screen.getByText("Add");
    expect(button).toBeInTheDocument();
  });

  test("calls onAddTodo with the correct value when form is submitted", () => {
    const mockOnAddTodo = jest.fn(); // Mock function
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);

    // Simulate typing into the input
    const input = screen.getByPlaceholderText("Add a new todo");
    fireEvent.change(input, { target: { value: "Test Todo" } });

    // Simulate form submission
    const button = screen.getByText("Add");
    fireEvent.click(button);

    // Ensure the mock function is called with the correct value
    expect(mockOnAddTodo).toHaveBeenCalledWith("Test Todo");

    // Ensure input field is cleared after submission
    expect(input.value).toBe("");
  });

  test("does not call onAddTodo if input is empty", () => {
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);

    // Simulate form submission with empty input
    const button = screen.getByText("Add");
    fireEvent.click(button);

    // Ensure the mock function is not called
    expect(mockOnAddTodo).not.toHaveBeenCalled();
  });
});