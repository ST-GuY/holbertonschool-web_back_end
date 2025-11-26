#!/usr/bin/env python3
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random

"""
wait_random(max_delay) est une coroutine (fonction async).
asyncio.create_task(...) transforme cette coroutine en Task.

La fonction retourne l’objet Task, PAS le résultat.
"""


def task_wait_random(max_delay: int) -> asyncio.Task:
    return asyncio.create_task(wait_random(max_delay))
