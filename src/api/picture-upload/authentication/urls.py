from django.urls import path
from .views import registerView, loginView, current_user

urlpatterns = [
    path('signup/', registerView.as_view(), name='signup'),
    path('signin/', loginView.as_view(), name='signin'),
    path('currentuser/', current_user.as_view(), name='currentuser'),
]
