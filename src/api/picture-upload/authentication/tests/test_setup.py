from rest_framework.test import APITestCase
from django.urls import reverse
from faker import Faker


class TestSetup(APITestCase):
    def setUp(self):
        fake = Faker()

        self.fake = Faker()
        self.url = reverse('signup')
        self.url_login = reverse('signin')

        self.user_data = {
            'email': fake.email(),
            'username': fake.email().split('@')[0],
            'password': fake.email()
        }

        return super().setUp()

    def tearDown(self):
        return super().tearDown()
