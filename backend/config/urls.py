from config.views import health

urlpatterns = [
    path("", health),

    path("admin/", admin.site.urls),
    path("api/home/", include("apps.home.urls")),
    path("api/intelligence/", include("apps.intelligence.urls")),
    path("api/operations/", include("apps.operations.urls")),
    path("api/archives/", include("apps.archives.urls")),
    path("api/contact/", include("apps.contact.urls")),
    path("api/about/", include("apps.about.urls")),
]