#!/bin/bash 

echo "Enter module namespace(Mymodule)"
read moduleNameSpace

echo "Enter module & directory name(my_module)"
read moduleName

find ./local/js/my_module/ -type f \( -name "*.js" -o -name "*.js.map" \)|while read fname; do
  sed -i -e "s/Mymodule/$moduleNameSpace/g;" -e "s/my_module/$moduleName/g;" $fname
done

mv local/js/my_module local/js/$moduleName
