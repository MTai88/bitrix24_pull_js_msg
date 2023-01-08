<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/message_show.bundle.css',
	'js' => 'dist/message_show.bundle.js',
	'rel' => [
		'main.core',
		'ui.dialogs.messagebox',
	],
	'skip_core' => false,
];