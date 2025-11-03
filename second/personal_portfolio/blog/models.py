from django.db import models
from django.utils import timezone

class Skills(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=250)
    image = models.ImageField(upload_to='skills/images/')
    url = models.URLField(blank=True)

    def __str__(self):
        return self.title

class Blog(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateTimeField(default=timezone.now)
    image = models.ImageField(upload_to='blog/images/', blank=True)

    def __str__(self):
        return self.title