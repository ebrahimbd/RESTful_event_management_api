from django.db.models import fields
from django.db import models

from datetime import datetime
from django.utils import timezone

class event(models.Model):
    name =models.CharField(max_length=900, blank=True)
    location=models.CharField(max_length=200, blank=True)
    Date=models.DateTimeField()
    def __str__(self):
        return self.name