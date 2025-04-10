#!/usr/bin/env python

class Factorial(object):
    def __init__(self, n):
        self.n = n
    def factorial(self):
        n = 1
        for i in range(1, self.n+1):
            n *= i
        return n

a = int(input("Enter a number : "))
factorial1 = Factorial(a)
print(f'{a}! = {factorial1.factorial()}')
