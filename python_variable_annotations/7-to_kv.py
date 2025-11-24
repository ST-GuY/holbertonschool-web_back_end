#!/usr/bin/env python3
"""Module that provides a type-annotated to_kv function.
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple with the key and the square of the value.

    Args:
        k (str): The key.
        v (Union[int, float]): The value to square.

    Returns:
        Tuple[str, float]: A tuple where the first element is k and the
                           second is the square of v as a float.
    """
    return (k, float(v ** 2))
