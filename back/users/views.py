from .models import User
from .serializers import UserSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from .permissions import IsAccountOwner
from drf_spectacular.utils import extend_schema

class UserView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @extend_schema(
        operation_id="user_list",
        summary="Listagem de usuário",
        description="Rota para listar todos os usuários da aplicação",
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)
    
    @extend_schema(
        operation_id="user_create",
        summary="Criação de usuário",
        description="Rota para criar um usuário na aplicação",
    )
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class UserDetailView(RetrieveUpdateDestroyAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAccountOwner]
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @extend_schema(operation_id="user_put", exclude=True)
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    
    @extend_schema(
        operation_id="user_retrieve",
        summary="Busca de usuário",
        description="Rota para buscar um usuário na aplicação",
    )
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
    
    @extend_schema(
        operation_id="user_update",
        summary="Atualização de usuário",
        description="Rota para atualizar um usuário na aplicação",
    )
    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)
    
    @extend_schema(
        operation_id="user_delete",
        summary="Deleção de usuário",
        description="Rota para deletar um usuário na aplicação",
    )
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
