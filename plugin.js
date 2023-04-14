(function($, window, document, undefined) {
	"use strict";

	var pluginName = "defaultPluginName",
		defaults = {
			text: "jQuery Boilerplate"
		};

	function Plugin(element, options) {
		this.element = element;
		this.settings = $.extend({}, defaults, options);        
		this.init();
	}

	$.extend(Plugin.prototype, {
		init: function() {
			this.setText(this.settings.text);
			$(this.element).data(pluginName, this);
		},
		setText: function(text) {
			$(this.element).text(text);
            		this.settings.text = text;
		}
	});

	$.fn[pluginName] = function(options) {
		return this.each(function() {
            //prevent to reinitialize the plugin
			var pluginInstance = $.data(this, pluginName);
			if (!pluginInstance) {
				pluginInstance = new Plugin(this, options);
			}
			$(this).data(pluginName, pluginInstance);
		});
	};
})(jQuery, window, document);
