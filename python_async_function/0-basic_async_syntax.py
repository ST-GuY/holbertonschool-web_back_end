#!/usr/bin/env python3
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Attend un délai aléatoire entre 0 et max_delay et le retourne."""
    delay = random.uniform(0, max_delay)
    # Génère un float aléatoire entre 0 et max_delay
    await asyncio.sleep(delay)  # Attend de façon asynchrone ce délai
    return delay  # Retourne le délai utilisé
