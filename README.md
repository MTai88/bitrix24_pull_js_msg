### If you need to show alert messages in bitrix24 pages on some ajax events, you can use bitrix push & pull module and this script

### Usage
- Run ./install.sh or you can change namespace & module name manualy in all .js files
- Copy `/local/js/my_module` (change `my_module` to name that you wrote in prev step) directory to your `/local/js/`
- Add the following code to `/local/php_interface/init.php` (change `my_module` to your module name)
```
use \Bitrix\Main\UI\Extension;

Extension::load('my_module.message_show');
```
- then you can call js alerts in your ajax scripts (change `my_module` to your module name)
```
\CPullStack::AddByUser(
    \CUser::GetID(), [
        'module_id' => 'my_module',
        'command' => 'error',
        'params' => [
            'message' => "Test message",
        ],
    ]
);
```

### Notes
If you need to add your changes to code, then you need to install [bitrix cli](https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=43&LESSON_ID=12435) and rebuild extension using `bitrix build` 