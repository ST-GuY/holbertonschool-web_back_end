#!/usr/bin/env python3
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Génère 10 valeurs aléatoires (float entre 0 et 10).
    À chaque itération, attend 1 seconde de façon asynchrone puis yield la valeur.
    """
    for _ in range(10):
        await asyncio.sleep(1)           # pause asynchrone d'1 seconde
        yield random.uniform(0, 10)      # renvoie un float entre 0 et 10
