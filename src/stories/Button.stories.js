const Button = ({ label, color, height, width, backgroundColor, onClick }) => (
  <button style={{ color, height, width, backgroundColor }} onClick={onClick}>
    {label}
  </button>
);

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  label: "ClickMe",
  height: 100,
  width: 100,
  color: "white",
  backgroundColor: "red",
};

export const Blue = Template.bind({});
Blue.args = {
  label: "Blue Button",
  height: 100,
  width: 100,
  color: "white",
  backgroundColor: "blue",
};
