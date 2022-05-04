from django.views.generic import TemplateView
from django.utils.safestring import mark_safe

import json


class RoomView(TemplateView):
    """
        Display template room.html
    """
    template_name = 'app/room.html'

    def get_context_data(self, **kwargs):
        """
            Change data in dictionary object and return them
            
            # mark_safe() method, provide security of strings typed
        """
        context = super(RoomView, self).get_context_data(**kwargs)
        context['room_name_json'] = mark_safe(
            json.dumps(self.kwargs['room_name'])
        )
        return context
