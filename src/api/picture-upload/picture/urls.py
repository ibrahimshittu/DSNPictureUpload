from django.urls import path
from .views import PictureView

urlpatterns = [
    path('images/', PictureView.as_view(), name='picture'),
]
