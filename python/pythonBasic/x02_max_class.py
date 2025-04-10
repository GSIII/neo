#!/usr/bin/env python

import random

data = random.sample(range(1,101),10)
print(data)

class FindMax(object):
    def __init__(self,data):
        self.data = data

    def max(self):
        max = self.data[0]
        for i in range(len(self.data)):
            if self.data[i] > max:
                max = self.data[i]
        return max

data1 = FindMax(data)
print(f'Max Value is : {data1.max()}')

