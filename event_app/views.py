from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from rest_framework import pagination
from django.core.paginator import Paginator

from json import dumps as jdumps
import json


class events(APIView):
    def post(self, request):
        event.objects.create(name=request.data['Name'],location=request.data['Location'], Date=request.data['Date'])
        return Response(request.data)

    def get(self, request,pk=None,):
        if pk:
            Event=event.objects.get(id=pk)
            return Response({
                "id":Event.id,
                "Name":Event.name,
                "Location":Event.location,
                "Date":Event.Date
                })
        elif self.request.query_params.get('page[number]') and self.request.query_params.get('page[size]'):
            obj = event.objects.all().order_by('-id')
            get_page = Paginator(obj, self.request.query_params.get('page[size]'))
            page_no =get_page.num_pages
            quary = get_page.page(self.request.query_params.get('page[number]')).object_list
            print(quary)
            print(self.request.query_params.get('page[number]'), self.request.query_params.get('page[size]'))
            data=[]
            data.append({"show": self.request.query_params.get('page[size]'), "totall":obj.count()})
            data.append({"totall_page": page_no})
            for Event in quary:
                data.append({
                "id":Event.id,
                "Name":Event.name,
                "Location":Event.location,
                "Date":Event.Date
                })
            return Response(data)
       
        return Response({
            "Name":"",
            "Location":"",
            "Date":"" 
            })
    
    def put(self, request, pk):
        try:
            obj=event.objects.get(id=pk)
            obj.name=request.data['Name'],
            obj.location=request.data['Location'], 
            obj.Date=request.data['Date']
            obj.save()
            return Response({
                "id":obj.id,
                "Name":obj.name,
                "Location":obj.location,
                "Date":obj.Date
                })
        except:
            return Response({
                "Name":"",
                "Location":"",
                "Date":""
                })
    
    def delete(self, request, pk):
        try:
            obj=event.objects.get(id=pk)
            obj.delete()
            return Response({
            "id":obj.id,
            "Name":obj.name,
            "Location":obj.location,
            "Date":obj.Date
            })
        except:
            return Response({
                    "Name":"",
                    "Location":"",
                    "Date":""
                    })
    