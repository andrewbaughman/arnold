from rest_framework import routers
from . import views

router = routers.DefaultRouter()

router.register('ratings', views.RatingViewSet)

api_urlpatterns = router.urls