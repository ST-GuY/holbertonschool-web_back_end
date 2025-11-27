#!/usr/bin/env python3


async_generator = __import__('0-async_generator').async_comprehension


async def async_comprehension() -> list[float]:
    """
    Coroutine that collects 10 random numbers from async_generator
    using an async comprehension and returns them as a list
    """
    numbers = [num async for num in async_generator()]
    return numbers[:10]  # retourne les 10 premiers nombres
