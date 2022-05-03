from django.urls import path 

from app.views.index import IndexView
from app.views.room import RoomView


app_name = 'app'

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('chat/<str:room_name>/', RoomView.as_view(), name='room'),
]
