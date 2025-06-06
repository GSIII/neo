#!/bin/bash
#
set -- $(getopt -q ab:c:de "$@")
#
echo
while [ -n "$1" ]
do
    case "$1" in 
        -a) echo "Found the -a option";;
        -b) param="$2" 
            echo "Found the -b option, with parameter value $param"
            shift;;
        -c) param="$2" 
            echo "Found the -c option, with parameter value $param"
            shift;;
        --) shift
            break;;
        *) echo "$1 is not an option";;
    esac
    shift
done
count=1
for param in "$@"
do
    echo "Parameter #$count: $param"
    count=$[ $count + 1 ]
done
#
