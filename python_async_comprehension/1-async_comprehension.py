#!/usr/bin/env python3


async_comprehension = __import__('0-async_generator').async_comprehension


async def async_comprehension():
    # On utilise une "async comprehension" pour récupérer les nombres
    numbers = [num async for num in async_generator()]
    # On retourne seulement les 10 premiers nombres
    return numbers[:10]
