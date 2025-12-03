#!/usr/bin/env python3
"""
Function that changes all topics of a school document based on the name:
"""


def update_topics(mongo_collection, name, topics):
    """
    Modifie la liste des topics d'une école dans la collection.

    Args:
        mongo_collection: pymongo.collection.Collection
        name (str): nom de l'école à mettre à jour
        topics (list): liste de topics à assigner

    Returns:
        dict: résultat de l'opération update_one
    """
    return mongo_collection.update_one(
        {"name": name},          # filtre le document à mettre à jour
        {"$set": {"topics": topics}}  # remplace ou crée le champ 'topics'
    )
