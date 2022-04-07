from rest_framework import serializers
from django.core.exceptions import ValidationError
from .models import Picture


class PictureSerializer(serializers.ModelSerializer):
    picture = serializers.ImageField()
    owner = serializers.EmailField()

    class Meta:
        model = Picture
        fields = ('id', 'picture', 'caption', 'upload_date', 'owner')

    def validate(self, attrs):
        picture = attrs.get('picture')

        limit = 1024 * 1024
        if picture.size > limit:
            raise ValidationError(
                'File too large. Size should not exceed 1 MB.')
        return attrs
