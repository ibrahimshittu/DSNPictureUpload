from rest_framework import status
from django.urls import reverse
from .test_setup import TestSetup
from authentication.models import User


class AuthenticationViewTest(TestSetup):
    def test_user_can_create_account(self):
        response = self.client.post(self.url, self.user_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().email, self.user_data['email'])

    def test_user_can_login(self):
        self.client.post(self.url, self.user_data)
        response = self.client.post(self.url_login, self.user_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['email'], self.user_data['email'])
