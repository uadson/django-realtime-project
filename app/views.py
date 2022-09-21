from django.shortcuts import render


def index(request):
    return render(request, 'app/index.html')


def room(request, room_name):
    username = request.GET.get('username', 'Anonymous')

    context = {
        'room_name': room_name,
        'username': username,
    }
    
    return render(request, 'app/room.html', context)
