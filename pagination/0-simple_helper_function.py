#!/usr/bin/env python3
"""
Simple helper function
"""


def index_range(page, page_size) -> tuple:
    """
    Retourne un tuple (start, end) correspondant
    à la plage d'index pour la pagination.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
