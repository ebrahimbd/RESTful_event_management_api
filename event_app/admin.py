from django.contrib import admin
from . models import *
# Register your models here.

class eventAdmin(admin.ModelAdmin):
    list_display = ('name','location','Date')
admin.site.register(event, eventAdmin)