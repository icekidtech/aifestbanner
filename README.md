# AI Fest Africa Banner Generator

This project is a web platform designed for participants of AI Fest Africa to create personalized event banners. Users can upload their photos, fill out a form with their details, and generate a custom banner featuring their image and event details. The platform also includes the functionality for background removal, enhancing the visual appeal of the generated banners.

---

## Features

- **User Image Upload**: Participants can upload their photos.
- **Background Removal**: Automatically remove the background from uploaded images.
- **Custom Banner Generation**: Users can generate a banner with their photo and event details.
- **Downloadable Banner**: Users can download the generated banner image.
- **Admin Dashboard**: Admins can view uploaded images and banners from users.

---

## Prerequisites

- Python 3.6 or higher
- Django
- Other required libraries (listed in `requirements.txt`)

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/aifest-africa-banner-generator.git
cd aifest-africa-banner-generator

2. Create a virtual environment

It’s recommended to create a virtual environment to manage dependencies.

python -m venv venv

3. Activate the virtual environment

Windows:

venv\Scripts\activate

macOS/Linux:

source venv/bin/activate


4. Install the required dependencies

pip install -r requirements.txt


---

Configuration

1. Set up media files (for image uploads)

Ensure that the MEDIA_URL and MEDIA_ROOT are correctly configured in settings.py:

# settings.py

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

2. Update the urls.py for media files

Ensure that media files are served during development in urls.py:

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # Your other URL patterns
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


---

Running the Project

1. Run migrations to set up the database:



python manage.py migrate

2. Create a superuser to access the admin panel (optional):



python manage.py createsuperuser

3. Start the development server:



python manage.py runserver

4. Open your browser and go to http://127.0.0.1:8000/ to access the platform.




---

Usage

1. Upload Your Image: On the banner creation page, users can upload their photo.


2. Fill in Details: Participants fill in their name, handle, and other details required for the banner.


3. Generate Banner: Once the form is submitted, the image will be processed, and a banner will be generated.


4. Download: The user can download the generated banner for use.




---

Deployment

1. Set Up for Production

In a production environment, you’ll need to configure a web server (e.g., Nginx or Apache) to serve media files.

Here’s an example Nginx configuration to serve media files:

server {
    listen 80;
    server_name example.com;

    location /media/ {
        alias /var/www/aifest-africa-banner-generator/media/;
    }

    location / {
        proxy_pass http://localhost:8000;
    }
}

2. Cloud Storage (Optional)

You can also use cloud storage (e.g., AWS S3) for media storage by configuring django-storages as shown in settings.py:

# settings.py

DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
AWS_ACCESS_KEY_ID = 'your-access-key-id'
AWS_SECRET_ACCESS_KEY = 'your-secret-access-key'
AWS_STORAGE_BUCKET_NAME = 'your-bucket-name'


---

Contributing

We welcome contributions! Please fork the repository, create a new branch, and submit a pull request with your changes.


---

License

This project is licensed under the MIT License - see the LICENSE file for details.


---

Acknowledgments

Django (Web framework)

Pillow (For image processing)

rembg (For background removal)

AI Fest Africa (Event)


---