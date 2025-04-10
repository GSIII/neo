#!/usr/bin/env python

a = int(input("Enter a number : "))
b = int(input("Enter another number : "))

def gcd(a, b):
    if a < b:
        a, b = b, a     #swap
    while b != 0:
        r = a % b
        a = b
        b = r
    return a

result = gcd(a,b)
print(f'gcd({a},{b}) = {result}')