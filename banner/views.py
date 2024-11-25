from django.shortcuts import render
from .forms import BannerForm

# Create your views here.
def create_banner(request):
    if request.method == 'POST':
        form = BannerForm(request.POST, request.FILES)
        if form.is_valid():
            #Process form data (e.g create banner)
            pass
    else:
        form = BannerForm()
        
    return render(request, 'banner/create_banner.html', {'form': form})