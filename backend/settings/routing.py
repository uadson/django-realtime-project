from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack

from app.routing import websocket_urlpatterns


application = ProtocolTypeRouter(
    {
        'websocket': AuthMiddlewareStack(
            URLRouter(
                websocket_urlpatterns
            )
        ),
    }
)