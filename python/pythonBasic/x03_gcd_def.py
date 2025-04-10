#!/usr/bin/env python
# 유클리드 호제법
# a, b
# r = a % b
# a = b, b = r

a = int(input("Enter a number : "))
b = int(input("Enter another number : "))

def gcd(a, b):
    while b != 0:
        r = a % b
        a = b
        b = r
    return a

result = gcd(a,b)
print(f'gcd({a},{b}) = {result}')


