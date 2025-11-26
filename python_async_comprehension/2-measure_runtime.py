#!/usr/bin/env python3
import time
import asyncio


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Execute async_comprehension 4 times in parallel using asyncio.gather
    and measure the total runtime.
    """
    start = time.perf_counter()

    # Lancer 4 fois async_comprehension en parallèle
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )

    end = time.perf_counter()
    return end - start
