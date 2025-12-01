import csv
import math
from typing import List


def index_range(page, page_size) -> tuple:

    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        # Vérification des arguments
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # Charger le dataset si ce n'est pas déjà fait
        if not hasattr(self, 'dataset') or self.__dataset is None:
            with open("Popular_Baby_Names.csv") as f:
                reader = csv.reader(f)
                data = list(reader)
                self.__dataset = data[1:]  # ignore l'en-tête

        # Obtenir les indices de la page
        start, end = index_range(page, page_size)

        # Sélectionner les lignes correspondant à la page
        page_data = self.__dataset[start:end]

        # Retourner la page
        return page_data
