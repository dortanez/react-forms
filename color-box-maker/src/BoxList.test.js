import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

const addBox = (boxList, height = "100", width = "100", color = "green") => {
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const backgroundInput = boxList.getByLabelText("Color");
    fireEvent.change(backgroundInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.getByText("Submit");
    fireEvent.click(button);
  }

it('should render without crashing',() => {
    render(<BoxList/>)
})

it('should match snapshot',() => {
    const {asFragment} = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
})

it('can create box',() => {
    const boxList = render(<BoxList/>);
    expect(boxList.queryByText('X')).not.toBeInTheDocument();
    addBox(boxList);
    expect(boxList.queryByText('X')).toBeInTheDocument();
})

it('can delete box',() => { 
    const boxList = render(<BoxList/>);
    addBox(boxList);
    const removeButton = boxList.getByText('X');
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
})