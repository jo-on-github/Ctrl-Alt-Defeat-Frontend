import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {test, expect} from "@jest/globals";
import ChooseACity from "./index.js";
import { BrowserRouter as Router } from "react-router-dom";

// test if the ChooseACity page title renders
test("renders ChooseACity page title",  () => {
    render(
        <Router>
          <ChooseACity />
        </Router>
      );
    const title = screen.getByText("Neighbourhood Nomad");
    expect(title).toBeInTheDocument();

});

// test if the ChooseACity page logo renders
test("renders ChooseACity page logo",  () => {
    render(
        <Router>
          <ChooseACity />
        </Router>
      );
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();

})

// test if the ChooseACity page input renders
test("renders ChooseACity page input",  () => {
    render(
        <Router>
          <ChooseACity />
        </Router>
      );
    const input = screen.getByTestId("city-input");
    expect(input).toBeInTheDocument();


});



// test if the ChooseACity page submit button renders
test("renders ChooseACity page submit button",  () => {
    render(
        <Router>
          <ChooseACity />
        </Router>
      );
    const button = screen.getByTestId("city-submit");
    expect(button).toBeInTheDocument();
});

// test if the ChooseACity page input accepts text input
test("ChooseACity page input accepts text input", () => {
  
  // Mock the updateCity function
  const updateCity = jest.fn(); 

  // Render the ChooseACity component with the updateCity function passed as a prop

  render(
    <Router>
      <ChooseACity updateCity={updateCity} />
    </Router>
  );
  const input = screen.getByTestId("city-input");
  userEvent.type(input, "London");
  expect(input).toHaveValue("London");
});





