#!/usr/bin/env python

import random

class BinaryDigits(object):
    def __init__(self, num, lists):
        self.num = num
        self.lists = lists

    def convert(self):
        q = num // 2
        r = num % 2
        lists.append(r)

        while q > 0:
            r = q % 2
            q = q // 2
            lists.append(r)

        lists.reverse()
        return lists

lists = []
num = random.randrange(4,20)
convert1 = BinaryDigits(num, lists)
print(f'{num} binary number is {convert1.convert()}')