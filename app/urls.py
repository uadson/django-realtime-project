from django.urls import path 
from app.views import index
from app.views import room


app_name = 'app'

urlpatterns = [
    path('', index, name='index'),
    path('<str:room_name>/', room, name='room'),
]
