import React from 'react';
import { render,fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import App from './App';
import services from './services';

beforeEach(() => {
  render(<App/>);
});

test('renders input field', () => {
  const inputElement = screen.getByPlaceholderText("Enter your todo");
  expect(inputElement).toBeInTheDocument();
});

test('Add, remove, toggle new item in todolist', () => {
  const inputElement = screen.getByPlaceholderText("Enter your todo");

  userEvent.type(inputElement, "dummy");
  fireEvent.click(screen.getByText("Add"));
  expect(screen.queryByText("dummy")).toBeInTheDocument();

  fireEvent.click(screen.getByText("dummy"));
  expect(screen.queryByTestId("strikethrough")).toBeInTheDocument();
  
  fireEvent.click(screen.getByText("Delete"));
  expect(screen.queryByText("dummy")).not.toBeInTheDocument();
});

test('Filters todos correctly', () => {
  const inputElement = screen.getByPlaceholderText("Enter your todo");
  userEvent.type(inputElement, "first item");
  fireEvent.click(screen.getByText("Add"));
  
  userEvent.type(inputElement, "second item");
  fireEvent.click(screen.getByText("Add"));
  fireEvent.click(screen.getByText("second item"));

  fireEvent.click(screen.getByText("Done"));
  expect(screen.queryByText("first item")).not.toBeInTheDocument();

  fireEvent.click(screen.getByText("Todo"));
  expect(screen.queryByText("second item")).not.toBeInTheDocument();
});

test('Clear all button works', () => {
  const inputElement = screen.getByPlaceholderText("Enter your todo");

  userEvent.type(inputElement, "dummy");
  fireEvent.click(screen.getByText("Add"));

  fireEvent.click(screen.getByText("Clear All"));
  expect(screen.queryByText("dummy")).not.toBeInTheDocument();
});

test('Makes API calls', () => {
  const inputElement = screen.getByPlaceholderText("Enter your todo");
  userEvent.type(inputElement, "database item");
  fireEvent.click(screen.getByText("Add"));

  const postFunction = jest.spyOn(services, "postToEndpoint");
  const getFunction = jest.spyOn(services, "getFromEndpoint");

  fireEvent.click(screen.getByText("Save to DB"));
  fireEvent.click(screen.getByText("Get from DB"));
  expect(postFunction).toBeCalled();
  expect(getFunction).toBeCalled();
});