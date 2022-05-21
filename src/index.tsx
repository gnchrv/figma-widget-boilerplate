// Import Figma Components
const { widget } = figma
const { Text } = widget

// Specify text proprties
const textProps = {
    fontSize: 80,
    fontFamily: 'Roboto Mono'
}

// Create a simple widget consisting just one Text component
function SimpleWidget() {
  return <Text {...textProps}>Hello Widget</Text>
}

// Mount the widget
widget.register(SimpleWidget)