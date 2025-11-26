#!/usr/bin/env python3
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Lance task_wait_random n fois avec max_delay.
    Retourne la liste des délais (floats) dans l'ordre d'achèvement,
    donc implicitement triée sans utiliser sort().
    """

    # 1) Créer toutes les tâches (task_wait_random crée déjà une Task)
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    # 2) Récupérer les résultats au fur et à mesure des tâches terminées
    results: List[float] = []
    for finished_task in asyncio.as_completed(tasks):
        delay = await finished_task
        results.append(delay)

    # 3) La liste est déjà triée selon l'ordre d'exécution
    return results
