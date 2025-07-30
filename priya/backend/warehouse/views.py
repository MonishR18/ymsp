from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Warehouse
from .serializers import WarehouseSerializer

class WarehouseListAPIView(APIView):
    def get(self, request):
        warehouses = Warehouse.objects.all()
        serializer = WarehouseSerializer(warehouses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
