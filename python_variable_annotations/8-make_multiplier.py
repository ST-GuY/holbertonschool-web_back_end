#!/usr/bin/env python3
"""Module that provides a type-annotated make_multiplier function.
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by multiplier.

    Args:
        multiplier (float): The multiplier to use.

    Returns:
        Callable[[float], float]: A function that takes a float and returns
                                  it multiplied by multiplier.
    """
    def multiplier_func(x: float) -> float:
        return x * multiplier
    return multiplier_func
