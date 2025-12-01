#!/usr/bin/env python3
"""
Simple helper function
"""


def index_range(page, page_size) -> tuple:
    """
    Retourne un tuple (start, end) correspondant
    à la plage d'index pour la pagination.
    """
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
