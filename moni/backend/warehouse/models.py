from django.db import models

class Warehouse(models.Model):
    name = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()
    stock_status = models.CharField(max_length=50)

    def __str__(self):
        return self.name
