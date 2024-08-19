<?php

class JquerySelect2Plugin extends MantisPlugin {

	function register() {
		$this->name = 'Jquery Select2';
		$this->description = 'Applies the Select2 jQuery plugin on all html selects';

		$this->version = '0.1';
		$this->requires = array(
			'MantisCore' => '2.0.0'
		);

		$this->author	= 'Youngje Kim';
		$this->contact	= 'chozekun@gmail.com';
		$this->url		= 'https://github.com/chozekun/JquerySelect2';
	}

	function hooks() {
		return array(
			'EVENT_LAYOUT_RESOURCES' => 'resources',
		);
	}

	/**
	 * Create the resource link to load the jQuery library.
	 */
	function resources( $p_event ) {
		$resources = '<link rel="stylesheet" type="text/css" href="' . plugin_file('css/select2.min.css') . '" />' .
					'<script type="text/javascript" src="' . plugin_page('select2_js_params' ) . '"></script> '.
					'<script type="text/javascript" src="' . plugin_file('js/select2.full.min.js' ) . '"></script> '.
					'<script type="text/javascript" src="' . plugin_file('select2.js' ) . '"></script> ';
		return  $resources;
	}
}

