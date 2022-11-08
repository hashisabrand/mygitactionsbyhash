import { render, screen } from '@testing-library/react';
import App from './App';
import New from './new';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  
  expect(linkElement).toHaveTextContent("hello");



});

test('renders learn react link', () => {
  render(<New />);
  const linkElement = screen.getByTestId("comp1");
  
  expect(linkElement).toHaveTextContent("2") });


  

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByTestId("comp");
    
    expect(linkElement).toBeInTheDocument();
  
  
  
  });