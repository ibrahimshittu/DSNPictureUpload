from rest_framework import generics, permissions
from .models import Picture
from .serializers import PictureSerializer


class PictureView(generics.ListCreateAPIView):
    queryset = Picture.objects.all().order_by('-upload_date')
    serializer_class = PictureSerializer
    permission_classes = (permissions.IsAuthenticated, )

    def perform_create(self, serializer):
        return serializer.save(owner=self.request.user)
