#!/usr/bin/env python3
"""
Script that provides statistics about Nginx logs stored in MongoDB
"""

from pymongo import MongoClient

if __name__ == "__main__":
    # Connexion à la base MongoDB
    client = MongoClient()
    db = client.logs
    collection = db.nginx

    # Nombre total de logs
    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    # Nombre de documents par méthode HTTP
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # Nombre de "status checks" (method=GET et path=/status)
    status_count = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_count} status check")
