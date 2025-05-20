from django.core.management.base import BaseCommand
from django.db.utils import OperationalError
from django.db import connections
import time

class Command(BaseCommand):
    def handle(self, *args, **options):
        self.stdout.write("Esperando a la base de datos...")
        db_up = False
        while db_up is False:
            try:
                conn = connections['default']
                conn.cursor()
                db_up = True
            except OperationalError:
                self.stdout.write("Base de datos no disponible, esperando...")
                time.sleep(1)
        self.stdout.write(self.style.SUCCESS("Base de datos disponible"))
