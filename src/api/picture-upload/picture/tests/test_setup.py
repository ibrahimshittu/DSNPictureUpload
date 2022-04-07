from rest_framework.test import APITestCase
from django.core.files.uploadedfile import SimpleUploadedFile
from django.urls import reverse
from faker import Faker


class TestSetup(APITestCase):
    def setUp(self):
        fake = Faker()

        self.fake = Faker()
        self.url_login = reverse('signin')
        self.url_signup = reverse('signup')
        self.url = reverse('picture')

        self.user_data = {
            'email': fake.email(),
            'password': fake.email()}

        return super().setUp()

    def tearDown(self):
        return super().tearDown()
