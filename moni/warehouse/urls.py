from django.urls import path
from .views import WarehouseListAPIView

urlpatterns = [
    path('api/warehouses/', WarehouseListAPIView.as_view(), name='warehouse-list'),
]
