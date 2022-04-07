import imp
from rest_framework import status
from django.urls import reverse
from .test_setup import TestSetup
from picture.models import Picture


class PictureViewTest(TestSetup):

    def test_user_get_image(self):
        resp = self.client.post(self.url_signup, self.user_data)
        res = self.client.post(self.url_login, self.user_data)

        self.client.credentials(
            HTTP_AUTHORIZATION='Bearer ' + res.data['tokens']['access'])

        response = self.client.get(self.url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.count(response.data),
                         Picture.objects.all().count())
