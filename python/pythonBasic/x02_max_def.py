#!/usr/bin/env python

import random

data = random.sample(range(1,101),10)
print(data)


def max_def(data):
    max_value = data[0]
    for num in data:
        if num > max_value:
            max_value = num
    print(f'Max value is : {max_value}')


max_def(data)