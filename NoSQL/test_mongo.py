from pymongo import MongoClient

# Connexion à MongoDB
client = MongoClient("mongodb://localhost:27017")

# Tester la connexion
print("Bases de données :", client.list_database_names())

db = client["test_db"]
collection = db["test_collection"]

# Insérer un document
result = collection.insert_one({"nom": "Alice", "age": 30})
print("ID inséré :", result.inserted_id)

# Lire un document
doc = collection.find_one({"nom": "Alice"})
print("Document trouvé :", doc)
