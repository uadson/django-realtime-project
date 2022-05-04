from django.views.generic import TemplateView


class IndexView(TemplateView):
    """
        Display template index.html
    """
    template_name = 'index.html'
