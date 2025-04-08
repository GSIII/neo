#!/usr/bin/env python

import prime_func

while True:
    a = int(input("Enter a number (0 to quit): "))
    if a == 0:
        break
    else:
        if prime_func.isPrime(a):
            print(f"{a}은 소수입니다.\n")
        else:
            print(f"{a}은 소수가 아닙니다.\n")



