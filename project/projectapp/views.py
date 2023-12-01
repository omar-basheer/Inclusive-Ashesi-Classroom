from django.shortcuts import render, redirect
from rest_framework import generics, status
# from rest_framework.views import APIView
from rest_framework.response import Response
from projectapp.serializers import *
from projectapp.models import *
from rest_framework.permissions import AllowAny


# Create your views here.
