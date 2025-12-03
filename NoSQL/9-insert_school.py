#!/usr/bin/env python3
"""
Function that inserts a new document in a collection based on kwargs
"""


def insert_school(mongo_collection, **kwargs):
    """
    Insère un nouveau document dans la collection MongoDB.

    Args:
        mongo_collection: instance pymongo.collection.Collection
        **kwargs: attributs du document à insérer

    Returns:
        The _id of the inserted document
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
