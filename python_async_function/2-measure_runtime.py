#!/usr/bin/env python3
import time
import asyncio

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n, max_delay):
    """
    Mesure le temps moyen d'exécution de la coroutine wait_n.

    Cette fonction :
    - démarre un chronomètre,
    - exécute wait_n(n, max_delay) de manière synchrone grâce à asyncio.run(),
    - calcule le temps total écoulé,
    - renvoie le temps moyen par coroutine (temps_total / n).

    Args:
        n (int): Nombre de tâches asynchrones à exécuter.
        max_delay (int): Temps maximal (en secondes) pour chaque délai généré.

    Returns:
        float: Temps moyen d'exécution par coroutine.
    """
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    temps_total = end - start
    return temps_total / n
