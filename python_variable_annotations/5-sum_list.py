#!/usr/bin/env python3
"""Module that provides a type-annotated sum_list function.
"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """Return the sum of a list of floats.

    Args:
        input_list (List[float]): List of floats to sum.

    Returns:
        float: The sum of the values in the list.
    """
    return sum(input_list)
