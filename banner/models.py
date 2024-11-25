from django.db import models

# Create your models here.
class Banner(models.Model):
    name = models.CharField(max_length=100)
    handle = models.CharField(max_length=100)
    image = models.ImageField(upload_to='uploads/')
    
    def __str__(self):
        return self.name