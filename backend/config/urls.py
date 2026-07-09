from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/home/', include('apps.home.urls')),
    path('api/intelligence/', include('apps.intelligence.urls')),
    path('api/operations/', include('apps.operations.urls')),
    path('api/archives/', include('apps.archives.urls')),
    path('api/contact/', include('apps.contact.urls')),
    path('api/about/', include('apps.about.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
