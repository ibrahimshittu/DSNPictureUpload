from django.db import models
from authentication.models import User


class Picture(models.Model):
    picture = models.ImageField(upload_to='pictures/', blank=False)
    caption = models.CharField(max_length=200, blank=False)
    upload_date = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User,
                              related_name="owner", on_delete=models.CASCADE)

    def __str__(self):
        return self.owner
