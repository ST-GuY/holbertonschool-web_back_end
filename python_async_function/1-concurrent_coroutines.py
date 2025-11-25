#!/usr/bin/env python3
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn wait_random n times with the specified max_delay.
    Return a list of delays (floats) in ascending order without using sort().
    """
    # 1) Créer toutes les tâches (démarrage concurrent)
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]

    # 2) Récupérer les résultats au fur et à mesure de leur achèvement
    results: List[float] = []
    for finished_task in asyncio.as_completed(tasks):
        delay = await finished_task
        results.append(delay)

    # 3) Retourner la liste (déjà triée par ordre d'achèvement)
    return results
