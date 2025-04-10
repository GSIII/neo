#!/usr/bin/env python

a = int(input("Enter a number : "))
b = int(input("Enter another number : "))

class GCD(object):
    def __init__(self, a, b):
        self.a = a
        self.b = b
    def gcd(self):
        while self.b != 0:
            r = self.a % self.b
            self.a = self.b
            self.b = r
        return self.a
gcd1 = GCD(a,b)
print(f'gcd({a},{b}) = {gcd1.gcd()}')