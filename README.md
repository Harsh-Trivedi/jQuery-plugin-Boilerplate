# jQuery Plugin Template

This is a basic jQuery plugin template that can be used to define and initialize jQuery plugins.

## Usage

To use the plugin, simply include the jQuery library and the plugin script in your HTML file, and then call the plugin on the element(s) you wish to modify.

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="jquery-plugin-template.js"></script>
```

```javascript
// Initialize the plugin with default settings
$("#myElement").defaultPluginName();

// Initialize the plugin with custom settings
$("#myElement").defaultPluginName({
    text: "Hello World"
});

// Access the plugin instance after initialization
var pluginInstance = $("#myElement").data("defaultPluginName");
```

## Options

The plugin supports the following options:

- `text` (string): The text to display in the element. Default is "jQuery Boilerplate".

## Methods

The plugin includes the following methods:

- `setText(text)`: Sets the text of the element to the specified value.

## License

This plugin is licensed under the [MIT License](https://opensource.org/licenses/MIT).
