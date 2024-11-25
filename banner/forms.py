from django import  forms 
from .models import Banner

class BannerForm(forms.ModelForm):
    class meta:
        model = Banner
        fields = ['name', 'handle', 'image']