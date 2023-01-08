<?php
/**
 * @global  \CMain $APPLICATION
 */
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');

use \Bitrix\Main\UI\Extension;

Extension::load('my_module.message_show');


\CPullStack::AddByUser(
    \CUser::GetID(), [
        'module_id' => 'my_module',
        'command' => 'error',
        'params' => [
            'message' => "Test message",
        ],
    ]
);


?>
<?php
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/footer.php');
