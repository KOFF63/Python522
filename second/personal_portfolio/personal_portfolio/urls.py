from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('skills.urls')),  # главная страница портфолио
    path('blog/', include('blog.urls')),  # блог
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)