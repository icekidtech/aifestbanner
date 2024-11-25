from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_banner, name='create_banner'),
]